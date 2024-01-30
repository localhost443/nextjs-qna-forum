import React from 'react';
import Image from "next/image";
import {Input} from "@/components/ui/input";
const GlobalSearch = () => {
  return (
    <div className={"relative w-full max-w-[600px] max-lg:hidden"}>
      <div className={"background-light800_darkgradient relative flex min-h-[56px] items-center gap-1 rounded-xl px-4"}>
        <Image
          className={"invert-colors cursor-pointer"}
          src={"./assets/icons/search.svg"}
          width={25}
          height={24}
          alt={"searchMe"}
        />
        <Input
          className={"paragraph-regular outline-none no-focus text-dark-400 background-light800_darkgradient border-none shadow-none "}
          type={"text"}
          placeholder={"Search"}
          value={""}
        />
      </div>
    </div>
  );
};

export default GlobalSearch;