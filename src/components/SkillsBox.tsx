import { Card, Flex } from "@chakra-ui/react";
import React, { ReactElement } from "react";

type SkillsBoxProps = {
  title: string;
  one: ReactElement;
  two: ReactElement;
  three: ReactElement;
  four?: ReactElement;
};

export const SkillsBox: React.FC<SkillsBoxProps> = ({
  title,
  one,
  two,
  three,
  four,
}: SkillsBoxProps) => {
  return (
    <Flex direction={"column"}>
      <h1>{title}</h1>
      <Card direction="column">
        {one}
        {two}
        {three}
        {four}
      </Card>
    </Flex>
  );
};
