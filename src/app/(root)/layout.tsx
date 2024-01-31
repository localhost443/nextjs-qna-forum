import React from 'react';
import Navbar from "@/components/shared/navbar/Navbar";
import LeftSidebar from "@/components/shared/sidebar/LeftSidebar";

const Layout = ({children}: { children: React.ReactNode }) => {
  return (
    <main className={"background-light850_dark100 relative grid grid-cols-12"}>
      <div className={"col-span-12 h-[100px]"}>
        <Navbar/>
      </div>
      <div className={"text-black dark:bg-dark-100  max-sm:hidden  font-bold col-start-1 col-span-1 sm:col-span-2 "}>
        <LeftSidebar />
      </div>
      <section className={"col-start-3 col-span-7 max-sm:col-start-1 max-sm:col-span-12 flex min-h-screen  flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14"}>
        <div className={"max-auto w-full max-w-5xl"}>
          data
          {children}
        </div>
      </section>
      <div className={"col-start-10 col-span-2"}>RightSideBard</div>


      {/*toaster*/}
    </main>
  );
};

export default Layout;