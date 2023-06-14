import React from "react";
import Image from "next/image";
import profile from "../../public/assets/images/sam.jpg";
import { Flex } from "@chakra-ui/react";
import GitHub from "../../public/assets/logos/github.png";
import LinkedIn from "../../public/assets/logos/bigLinkedIn.png";
import { Divider } from "@chakra-ui/react";

export const Intro: React.FC = () => {
  return (
    <article className="PoppinsText">
      <Flex>
        <Image className="Profile" src={profile} alt="Sam" />
        <Flex direction={"column"}>
          <h1 className="DaruText">Hi I&apos;m Sam 🤠</h1>
          <p>
            Web Developer and prospective Junior Software Engineer with a
            working knowledge of the latest front-end languages, frameworks, and
            libraries.
          </p>
          <Divider className="Divider" borderColor={"white"} />
          <Flex>
            <a
              className="Link"
              href="https://github.com/sam-yng"
              target="blank"
            >
              <Image height={40} alt="Github Logo" src={GitHub} />
            </a>
            <a
              className="Link"
              target="blank"
              href="https://www.linkedin.com/in/sam-youngg/"
            >
              <Image height={40} alt="LinkedIn Logo" src={LinkedIn} />
            </a>
          </Flex>
        </Flex>
      </Flex>
    </article>
  );
};
