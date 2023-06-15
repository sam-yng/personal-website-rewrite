import React from "react";
import Image from "next/image";
import profile from "../../public/assets/images/sam.jpg";
import { Flex, LinkBox, LinkOverlay } from "@chakra-ui/react";
import GitHub from "../../public/assets/logos/github.png";
import LinkedIn from "../../public/assets/logos/bigLinkedIn.png";
import { Divider } from "@chakra-ui/react";

export const Intro: React.FC = () => {
  return (
    <article className="poppins-text">
      <Flex className="intro">
        <Image className="profile" src={profile} alt="Sam" />
        <Flex direction={"column"}>
          <h1 className="daru-text heading">Hi I&apos;m Sam 🤠</h1>
          <p>
            Web Developer and prospective Junior Software Engineer with a
            working knowledge of the latest front-end languages, frameworks, and
            libraries.
          </p>
          <Divider className="divider" borderColor={"white"} />
          <Flex>
            <LinkBox className="link">
              <LinkOverlay target="blank" href="https://github.com/sam-yng">
                <Image height={40} alt="Github Logo" src={GitHub} />
              </LinkOverlay>
            </LinkBox>
            <LinkBox className="link">
              <LinkOverlay
                target="blank"
                href="https://www.linkedin.com/in/sam-youngg/"
              >
                <Image height={40} alt="LinkedIn Logo" src={LinkedIn} />
              </LinkOverlay>
            </LinkBox>
          </Flex>
        </Flex>
      </Flex>
    </article>
  );
};
