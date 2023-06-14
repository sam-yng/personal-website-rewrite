import React from "react";
import { Flex, Spacer } from "@chakra-ui/react";

export const NavBar: React.FC = () => {
  return (
    <nav>
      <Flex>
        <h1 className="DaruText">Sam Edgeworth</h1>
        <Spacer />
        <Flex className="PoppinsText">
          <p>About</p>
          <p>Portfolio</p>
          <p>Contact</p>
        </Flex>
      </Flex>
    </nav>
  );
};
