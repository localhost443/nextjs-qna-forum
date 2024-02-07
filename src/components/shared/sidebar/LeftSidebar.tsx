"use client"
import React from 'react';
import {sidebarLinks} from "@/constant";
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";

const LeftSidebar = () => {
  const pathmane = usePathname()
  return (
    <section className={'background-light900_dark200 light-border sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px] dark:text-gray-300 w-[105px] custom-scrollbar'}>
      {
        sidebarLinks.map(item => {
          const isActive = pathmane.includes(item.route) && item.route.length > 1 || pathmane === item.route
          console.log(isActive)
          return (
            <div key={item.route} className={"flex flex-1 flex-col gap-6"}>
              <Link href={item.route} className={`${isActive ? "primary-gradient rounded-lg text-light-900" : "text-dark300_light900"}  flex  gap-4 bg-transparent p-4`}>
                <Image className={"invert-colors min-w-6"} src={item.imgURL} alt={item.label} height={24} width={24} />
                <p className={`${isActive? "base-bold" : "base-medium"} max-lg:hidden text-nowrap`}>{item.label}</p>
              </Link>
            </div>
          )
        })
      }
    </section>
  );
};

export default LeftSidebar;