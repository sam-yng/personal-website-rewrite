"use client";

import React from "react";
import { Main } from "@/components/Main";
import localFont from "next/font/local";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";

const daru = localFont({
  src: [{ path: "../../public/assets/fonts/daru.ttf" }],
});

const poppins = localFont({
  src: [{ path: "../../public/assets/fonts/poplight.ttf" }],
});

export default function Home() {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --daru-font: ${daru.style.fontFamily};
            --poppins-font: ${poppins.style.fontFamily};
          }
        `}
      </style>
      <main>
        <Main />
        <About />
        <Portfolio />
      </main>
    </>
  );
}
