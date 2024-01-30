import Image from "next/image";
import Link from "next/link";
import React from "react";
import {SignedIn, UserButton} from "@clerk/nextjs";
import Theme from "@/components/shared/navbar/Theme";
import MobileNav from "@/components/shared/navbar/MobileNav";
import GlobalSearch from "@/components/shared/Search/GlobalSearch";

const Navbar = () => {

  return (
    <nav className="flex justify-between  background-light900_dark200 fixed z-500 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href={"/"} className="flex items-center gap-1 dark:text-gray-300">
        <Image
          src="/assets/images/site-logo.svg"
          width={23}
          height={23}
          alt="laughing"
        />
        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev <span className="text-primary-500">Overflow</span>
        </p>
      </Link>
        <GlobalSearch />
        <div className="flex-between gap-5">
            <Theme />
            <SignedIn>
                <UserButton
                    afterSignOutUrl={"/login"}
                    appearance={{
                        elements: {
                            avatarBox: "h-10 w-10",
                            variables: {
                              colorPrimary: "#ff7000"
                            }
                        }
                    }}

                />
            </SignedIn>
          <MobileNav />
        </div>
    </nav>
  );
};

export default Navbar;
