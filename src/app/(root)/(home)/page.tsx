"use client";
import React, { useContext } from "react";
import { UserButton } from "@clerk/nextjs";
const Page = () => {
  return (
    <div>
      <UserButton /> Home
    </div>
  );
};

export default Page;
