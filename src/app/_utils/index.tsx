import { AddCartProps, ToggleWishProps, WishlistTextProps } from "../_types";
import { updateWishlist } from "./serverutils";

export const logoTextGen = (appTheme: string, size: string) => {
  const large = "text-7xl";
  const small = "text-4xl pt-1";
  if (appTheme === "classic" && size === "large") {
    return `font-outline-2 text-${appTheme}-border bg-${appTheme}-bodyBg ${large}`;
  }
  if (appTheme === "classic" && size === "small") {
    return `font-outline-1 text-${appTheme}-text ${small}`;
  }
  if (appTheme === "light" && size === "large") {
    return `font-outline-5 text-${appTheme}-border bg-${appTheme}-bodyBg ${large}`;
  }
  if (appTheme === "light" && size === "small") {
    return `font-outline-6 text-${appTheme}-text ${small}`;
  }
  if (appTheme === "dark" && size === "large") {
    return `font-outline-3 text-black bg-black ${large}`;
  }
  if (appTheme === "dark" && size === "small") {
    return `font-outline-4 text-${appTheme}-text bg-black ${small}`;
  }
};

export const logoLineGen = (appTheme: string, size: string) => {
  const large = "h-[24px] w-full mt-3 border-2";
  const small = "h-[6px] w-full mt-1 border";
  if (appTheme === "classic" && size === "large") {
    return `bg-${appTheme}-border border-${appTheme}-text ${large}`;
  }
  if (appTheme === "classic" && size === "small") {
    return `bg-${appTheme}-text border-${appTheme}-border ${small}`;
  }
  if (appTheme === "light" && size === "large") {
    return `bg-${appTheme}-border border-${appTheme}-text ${large}`;
  }
  if (appTheme === "light" && size === "small") {
    return `bg-${appTheme}-text border-${appTheme}-border ${small}`;
  }

  if (appTheme === "dark" && size === "large") {
    return `bg-black border-${appTheme}-border ${large}`;
  }
  if (appTheme === "dark" && size === "small") {
    return `bg-black border-${appTheme}-text ${small}`;
  }
};

export const currencyGen = (currency: string) => {
  if (currency === "USD") {
    return "$";
  } else return "R";
};

export const getFilter = (appTheme: string) => {
  if (appTheme === "light") {
    return "invert(16%) sepia(98%) saturate(2729%) hue-rotate(195deg) brightness(103%) contrast(100%)";
  }
  if (appTheme === "classic") {
    return "invert(86%) sepia(21%) saturate(3341%) hue-rotate(360deg) brightness(105%) contrast(101%)";
  }
  if (appTheme === "dark") {
    return "invert(72%) sepia(35%) saturate(6167%) hue-rotate(219deg) brightness(101%) contrast(98%)";
  }
};

export const addToCart = (props: AddCartProps) => {
  const {
    setOpacity,
    cart,
    setCart,
    prodId,
    prodName,
    prodPrice,
    prodCurrency,
    prodImageUrl,
    setCartQuantity,
    cartQuantity,
    setOperation,
    setType,
  } = props;
  setOpacity("0");
  if (cart.length > 0) {
    const findItem = cart.find((c) => c.prodId === prodId);
    if (findItem !== undefined) {
      cart.map((c) =>
        c.prodId === prodId ? (c.quantity = c.quantity + 1) : null
      );
    } else {
      setCart([
        ...cart,
        {
          prodId: prodId,
          name: prodName,
          price: prodPrice,
          currency: prodCurrency,
          quantity: 1,
          imageUrl: prodImageUrl || "",
        },
      ]);
    }
    setCartQuantity(cartQuantity + 1);
  } else {
    setCart([
      {
        prodId: prodId,
        name: prodName,
        price: prodPrice,
        currency: prodCurrency,
        quantity: 1,
        imageUrl: "",
      },
    ]);
    setCartQuantity(cartQuantity + 1);
  }
  setOperation("Added to ");
  setOpacity("100");
  setType("Cart");
  setTimeout(() => {
    setOpacity("0");
  }, 1000);
};

export const toggleWishlist = (props: ToggleWishProps) => {
  const {
    setOpacity,
    wishlist,
    prodId,
    prodName,
    prodPrice,
    prodCurrency,
    prodImageUrl,
    setOperation,
    setType,
    setWishlist,
    user,
  } = props;
  setOpacity("0");
  const wishlistValues = wishlist.map((e) => e.prodId);
  const prodAsWishItem = {
    prodId: prodId,
    name: prodName,
    price: prodPrice,
    imageUrl: prodImageUrl || "",
    currency: prodCurrency,
  };
  if (wishlistValues.includes(prodId)) {
    const newWishlist = wishlist.filter((e) => e.prodId !== prodId);
    setWishlist(newWishlist);
    user !== null && updateWishlist(prodAsWishItem, user.id, "remove");
    setOperation("Removed from ");
  } else {
    setWishlist([...wishlist, prodAsWishItem]);
    user !== null && updateWishlist(prodAsWishItem, user.id, "add");
    setOperation("Added to ");
  }
  setOpacity("100");
  setType("Wishlist");
  setTimeout(() => {
    setOpacity("0");
  }, 1000);
};

export const getWishlistText = (props: WishlistTextProps) => {
  const { wishlist, prodId } = props;
  const wishlistValues = wishlist.map((e) => e.prodId);
  if (wishlistValues.includes(prodId)) {
    return "Remove from Wishlist";
  } else return "Add to Wishlist";
};
