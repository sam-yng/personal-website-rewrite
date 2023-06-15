import {
  Card,
  CardBody,
  CardFooter,
  Center,
  Flex,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import {
  InfoOutlineIcon,
  NotAllowedIcon,
  ViewIcon,
  ViewOffIcon,
} from "@chakra-ui/icons";

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
    <Card className="poppins-text card">
      <CardBody>
        <img src={image} alt="project image" />
        <Stack>
          <Flex className="tools">
            <img className="a-tool" src={firstTool} alt="tool" />
            <img className="a-tool" src={secondTool} alt="tool" />
            <img className="a-tool" src={thirdTool} alt="tool" />
          </Flex>
          <h1 className="project-name">{title}</h1>
          <p>{description}</p>
        </Stack>
      </CardBody>
      <CardFooter>
        <Flex className="icon-box">
          <a href={viewSrc} target="blank" className="icon">
            {viewSrc === undefined ? <ViewOffIcon /> : <ViewIcon />}
          </a>
          <a href={codeSrc} target="blank" className="icon">
            {codeSrc === undefined ? <NotAllowedIcon /> : <InfoOutlineIcon />}
          </a>
        </Flex>
      </CardFooter>
    </Card>
  );
};
