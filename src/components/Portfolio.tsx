import React from "react";
import { ProjectBox } from "../components/ProjectBox";
import chess from "../assets/projects/chess.png";
import reminders from "../assets/projects/reminders.png";
import stuvise from "../assets/projects/stuvise.png";
import javascript from "../assets/logos/javascript.png";
import typescript from "../assets/logos/typescript.png";
import react from "../assets/logos/react.png";
import tailwind from "../assets/logos/tailwind.png";
import height from "../assets/projects/height.png";
import advice from "../assets/projects/advice.png";
import next from "../assets/logos/nextjs.png";
import flask from "../assets/logos/flask.png";
import css from "../assets/logos/css.png";
import mkdown from "../assets/projects/mkdown.png";
import valuers from "../assets/projects/valuers.png";
import usersearch from "../assets/projects/usersearch.png";
import { Flex } from "@chakra-ui/react";

export const Portfolio: React.FC = () => {
  return (
    <main>
      <h1>Portfolio</h1>
      <Flex>
        <ProjectBox
          image={stuvise.src}
          title="Stuvise.com"
          description="The marketing website for Stuvise"
          firstTool={typescript.src}
          secondTool={tailwind.src}
          thirdTool={react.src}
          viewSrc="https://stuvise.com/"
          codeSrc="https://github.com/stuvise/stuvise-dot-com"
        />
        <ProjectBox
          image={valuers.src}
          title="Sydney Property Valuers"
          description="The website for a local property valuer"
          firstTool={typescript.src}
          secondTool={tailwind.src}
          thirdTool={next.src}
          viewSrc="https://www.sydneypropertyvaluers.com/"
          codeSrc={undefined}
        />
        <ProjectBox
          image={usersearch.src}
          title="GitHub User Search"
          description="A search app for GitHub users"
          firstTool={typescript.src}
          secondTool={tailwind.src}
          thirdTool={next.src}
          viewSrc={undefined}
          codeSrc="https://github.com/sam-yng/github_user_search"
        />
      </Flex>
      <Flex>
        <ProjectBox
          image={advice.src}
          title="Advice Generator"
          description="A simple frontend mentor project"
          firstTool={typescript.src}
          secondTool={tailwind.src}
          thirdTool={react.src}
          viewSrc={undefined}
          codeSrc="https://github.com/sam-yng/advice-generator"
        />
        <ProjectBox
          image={reminders.src}
          title="Reminders App"
          description="A clone of the Apple reminders app"
          firstTool={typescript.src}
          secondTool={tailwind.src}
          thirdTool={react.src}
          viewSrc={undefined}
          codeSrc="https://github.com/sam-yng/reminders-clone"
        />
        <ProjectBox
          image={height.src}
          title="Height Calculator"
          description="A joke of a next.js project"
          firstTool={javascript.src}
          secondTool={tailwind.src}
          thirdTool={next.src}
          viewSrc={undefined}
          codeSrc="https://github.com/sam-yng/height-calculator"
        />
      </Flex>
      <Flex></Flex>
    </main>
  );
};
