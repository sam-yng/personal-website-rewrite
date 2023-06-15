import React from "react";
import { Flex, Spacer } from "@chakra-ui/react";

export const NavBar: React.FC = () => {
  return (
    <nav>
      <Flex>
        <h1 className="daru-text">Sam Edgeworth</h1>
        <Spacer />
        <Flex className="poppins-text">
          <p className="nav">About</p>
          <p className="nav">Portfolio</p>
          <p className="nav">Contact</p>
        </Flex>
      </Flex>
    </nav>
  );
};
