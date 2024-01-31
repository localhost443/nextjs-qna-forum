"use client"
import React from 'react';
import {sidebarLinks} from "@/constant";
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";

const LeftSidebar = () => {
  const pathmane = usePathname()
  return (
    <section className={'flex flex-col gap-4 items-start pl-8 py-4 dark:text-gray-300 w-full'}>
      {
        sidebarLinks.map(item => {
          const isActive = pathmane.includes(item.route) && item.route.length > 1 || pathmane === item.route
          console.log(isActive)
          return (
            <div key={item.route} className={"w-full"}>
              <Link href={item.route} className={`${isActive ? "primary-gradient rounded-lg text-light-900" : "text-dark300_light900"} w-full flex  gap-4 bg-transparent p-4`}>
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