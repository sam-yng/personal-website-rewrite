import React from "react";
import { Flex } from "@chakra-ui/react";
import { SkillsBox } from "./SkillsBox";
import { SkillsItem } from "./SkillsItem";
import html from "../../public/assets/logos/html.png";
import css from "../../public/assets/logos/css.png";
import javas from "../../public/assets/logos/javascript.png";
import types from "../../public/assets/logos/typescript.png";
import react from "../../public/assets/logos/react.png";
import tailwind from "../../public/assets/logos/tailwind.png";
import node from "../../public/assets/logos/node.png";
import next from "../../public/assets/logos/nextjs.png";
import git from "../../public/assets/logos/Git.png";
import figma from "../../public/assets/logos/Figma.png";
import ga from "../../public/assets/logos/GA.png";

export const About: React.FC = () => {
  return (
    <main className="poppins-text about">
      <h1 className="daru-text about-info">About Me</h1>
      <p className="about-info">
        {" "}
        In 2022, I decided to drop out of university and pursue a career in
        software development. I have been honing my engineering skills and
        focusing, primarily, on front-end tools and practices with the goal to
        become a junior engineer. My proficiencies are as follows:
      </p>
      <Flex className="all-boxes">
        <SkillsBox
          title="Languages"
          one={<SkillsItem name="HTML" image={html.src} />}
          two={<SkillsItem name="CSS" image={css.src} />}
          three={<SkillsItem name="Javascript" image={javas.src} />}
          four={<SkillsItem name="Typescript" image={types.src} />}
        />
        <SkillsBox
          title="Libraries & Frameworks"
          one={<SkillsItem name="React" image={react.src} />}
          two={<SkillsItem name="Tailwind" image={tailwind.src} />}
          three={<SkillsItem name="Node.js" image={node.src} />}
          four={<SkillsItem name="Next.js" image={next.src} />}
        />
        <SkillsBox
          title="Tools"
          one={<SkillsItem name="Git" image={git.src} />}
          two={<SkillsItem name="Figma" image={figma.src} />}
          three={<SkillsItem name="Google Analytics" image={ga.src} />}
        />
      </Flex>
    </main>
  );
};
