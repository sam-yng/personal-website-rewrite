import React from "react";
import { NavBar } from "./NavBar";
import { Intro } from "./Intro";

export const Main: React.FC = () => {
  return (
    <main className="main">
      <NavBar />
      <Intro />
    </main>
  );
};
