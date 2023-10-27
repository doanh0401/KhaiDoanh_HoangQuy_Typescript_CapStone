import { Container } from "@mui/material";
import React from "react";
import Logo from "./components/Logo/Logo";

export default function Header() {
  return (
    <div className="top-0 border-b w-full bg-white z-20">
      <div className="container mx-auto px-2 sm:px-10 py-5 flex flex-wrap justify-between items-center">
        <a
          aria-current="page"
          className="hidden sm:flex flex-wrap items-center text-rose-500 z-20 active"
          href="/"
          style={{ flex: "1 1 25%" }}
        >
          <div className="hidden md:block">
            <img height="32" width="30" src='./img/logo.png'/>
          </div>
        </a>
      </div>
    </div>
  );
}
