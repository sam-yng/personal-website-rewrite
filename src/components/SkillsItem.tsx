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
    <Flex className="skill-item">
      <Image width={56} height={60} src={image} alt="logo" />
      <Flex direction={"column"}>
        {" "}
        <p className="tool-name">{name}</p>
      </Flex>
    </Flex>
  );
};
