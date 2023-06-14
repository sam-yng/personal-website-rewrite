import {
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import code from "../assets/images/code.png";
import eye from "../assets/images/eye.png";

type ProjectBoxProps = {
  image: string;
  title: string;
  description: string;
  firstTool?: string;
  secondTool?: string;
  thirdTool?: string;
  viewSrc: string | undefined;
  codeSrc?: string;
};

export const ProjectBox: React.FC<ProjectBoxProps> = ({
  image,
  title,
  description,
  firstTool,
  secondTool,
  thirdTool,
  viewSrc,
  codeSrc,
}: ProjectBoxProps) => {
  return (
    <Card>
      <CardBody>
        <Image src={image} alt="project image" />
        <Stack>
          <Flex>
            <img src={firstTool} alt="tool" />
            <img src={secondTool} alt="tool" />
            <img src={thirdTool} alt="tool" />
          </Flex>
          <Heading>{title}</Heading>
          <p>{description}</p>
        </Stack>
      </CardBody>
      <CardFooter>
        <Flex>
          <a href={viewSrc} target="blank">
            <Image src={eye} alt="eye" />
          </a>
          <a href={codeSrc} target="blank">
            <Image src={code} alt="code" />
          </a>
        </Flex>
      </CardFooter>
    </Card>
  );
};
