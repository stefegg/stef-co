"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import magnifyingGlass from "../../../public/icons/magglass.svg";
import Image from "next/image";
import { useState } from "react";

export default function SearchBar() {
  const [isTyping, setIsTyping] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((searchTerm: string) => {
    const params = new URLSearchParams(searchParams);
    setIsTyping(searchTerm.trim() !== "");
    if (searchTerm) {
      params.set("query", searchTerm);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 100);

  return (
    <div className="flex flex-row items-center justify-end">
      <input
        className={`peer w-full rounded-md py-[9px] pl-10 text-sm text-black border border-black placeholder:text-gray-500 focus:outline-0`}
        placeholder="Search Products"
        defaultValue={searchParams.get("query")?.toString()}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
      <Image
        src={magnifyingGlass}
        alt="Magnifying Glass"
        className="sticky right-16 peer-focus:invert-[27%] peer-focus:sepia-[70%] saturate-[298%] hue-rotate-[177deg] brightness-[99%] contrast-[92%]"
      />
    </div>
  );
}
