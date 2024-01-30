"use client"
import React from 'react';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import {useTheme} from "@/context/ThemeProvider"
import Image from "next/image";
import {themes} from "@/constant";
const Theme = () => {
  const {mode, setMode} = useTheme();
  return (
    <Menubar className={"relative border-none bg-transparent shadow-none"}>
      <MenubarMenu>
        <MenubarTrigger className={"focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:"}>
          {
            mode === "light" ? (
              <Image className={"active-theme"} src={"/assets/icons/sun.svg"} alt={"Sun"} width={20} height={20} />
            ) : (
              <Image className={"active-theme"} src={"/assets/icons/moon.svg"} alt={"moon"} width={20} height={20} />
            )
          }
        </MenubarTrigger>
        <MenubarContent className={"absolute right-[-3rem] mt-3 min-w-[120]px rounded-xl border py-2 dark:border-dark-400 dark:bg-dark-300 "}>
          {themes.map((theme, index) => (
            <div key={theme.value}>
              <MenubarItem
                onClick={() => {
                  setMode(theme.value)
                  localStorage.setItem("theme", theme.value)
                }}
                className={"flex items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-400"}
              >
                <Image className={`${mode === theme.value && 'theme-active' }`} alt={theme.value} src={theme.icon} width={18} height={18} />
                <p className={`body-semibold text-light-500 pl-2 ${mode === theme.value ? 'text-primary-500': 'text-dark100_light900'}`}>{theme.label}</p>
              </MenubarItem>
              <MenubarSeparator />
            </div>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export default Theme;