"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Logo = () => {
  //   const router = useRouter();
  return (
    <>
      <Image
        className="hidden md:block cursor-pointer"
        src="/images/logo.png"
        width={100}
        height={100}
        alt="Logo"
      />
    </>
  );
};

export default Logo;
