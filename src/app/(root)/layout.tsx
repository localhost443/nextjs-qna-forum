import React from 'react';
import Navbar from "@/components/shared/navbar/Navbar";
import LeftSidebar from "@/components/shared/sidebar/LeftSidebar";

const Layout = ({children}: { children: React.ReactNode }) => {
  return (
    <main className={"background-light850_dark100 relative"}>
      <Navbar/>
      <div className={"text-black dark:bg-dark-100  max-sm:hidden  font-bold"}>
        <LeftSidebar/>
      </div>
      <section
        className={"flex min-h-screen  flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14"}>
        <div className={"max-auto w-full max-w-5xl"}>
          data
          {children}
        </div>
      </section>
      <div className={"text-black"}>RightSideBard</div>


      {/*toaster*/}
    </main>
  );
};

export default Layout;