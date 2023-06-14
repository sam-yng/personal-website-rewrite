import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

type SkillsItemProps = {
  name: string;
  image: string;
};

export const SkillsItem: React.FC<SkillsItemProps> = ({
  name,
  image,
}: SkillsItemProps) => {
  return (
    <Flex>
      <Image width={56} height={60} src={image} alt="skill item image" />
      <Flex direction={"column"}>
        {" "}
        <h1>{name}</h1>
      </Flex>
    </Flex>
  );
};
