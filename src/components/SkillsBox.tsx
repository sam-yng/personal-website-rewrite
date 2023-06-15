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
    <Flex direction={"column"} className="box">
      <p className="skill-title">{title}</p>
      <Card direction="column" className="skills">
        {one}
        {two}
        {three}
        {four}
      </Card>
    </Flex>
  );
};
