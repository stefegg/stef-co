import React from "react";
import {
  Wrapper,
  Header,
  Body,
  RoomImage,
  DetailWrap,
  DetailItem,
  PriceWrap,
  CostAmount,
  CostWrap,
  ImageWrapper,
  ImageLead,
} from "./styles";
import Button from "../Button";
import { useContext } from "react";
import { HotelContext } from "@/app/_providers";
import { StaticImageData } from "next/image";

type OpenPanelProps = {
  title: string;
  body: string[];
  price: number;
  images: StaticImageData[];
  id: number;
};

const OpenPanel = (props: OpenPanelProps) => {
  const { title, body, price, images, id } = props;
  // const [cart, setCart] = useRecoilState(atoms.cart);
  // const [showSiteModal, setShowSiteModal] = useRecoilState(atoms.showSiteModal);
  // const theme = useTheme();
  const { cart, setShowSiteModal } = useContext(HotelContext);

  const clickAdd = () => {
    if (!cart) setShowSiteModal("datesModal");
    else setShowSiteModal("cartModal");
  };

  return (
    <Wrapper>
      <Header>{title}</Header>
      <Body>
        <ImageWrapper>
          <RoomImage
            src={images[id]}
            onClick={() => setShowSiteModal("imageModal")}
          />
          <ImageLead>Click image to see more room photos</ImageLead>
        </ImageWrapper>
        <DetailWrap>
          {body.map((item: string, idx) => (
            <DetailItem key={idx}>{item}</DetailItem>
          ))}
        </DetailWrap>
        <PriceWrap>
          <CostWrap>
            <CostAmount>{`$${price}`}</CostAmount> per night
          </CostWrap>
          <Button text={"Select Dates"} onClick={() => clickAdd()} />
        </PriceWrap>
      </Body>
    </Wrapper>
  );
};

export default OpenPanel;
