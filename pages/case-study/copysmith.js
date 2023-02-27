import React from "react";
import CaseStudy from "../../components/CaseStudy";
import NavBar from "../../components/NavBar";
import { BodyContainer } from "../../components/Containers";

const summary = {
  imgUrl: "/thumbnail-small-copysmith.png",
  problemTitle: ["I Designed and Built a CMS Site in 2 Weeks as an Intern"],
  problemParagraph: [
    "I interned at Copysmith.ai, an extremely early stage startup as a Software Engineer and Design intern where I wore multiple hats, from product design, UX research, marketing, Product Hunt campaign manager, animator, to Front-End engineer, prompt engineer, etc.",
  ],
  externalUrl: "https://copysmith.ai/",
  outcome: [
    "I was one of 2 founding product designers",
    "I learned to design generative AI UX, an entirely new field at the time.",
    "I launched 3 ProductHunt campaigns over my 4 month internship",
    "I integrated MixPanel analytics into the site and designed the analytics dashboard",
    "I designed and implemented a Sanity CMS website in 2 weeks",
  ],
  context: ["Timeline: Fall 2022", "Tools: React, Typescript, Python, CRON Jobs, DynamoDB, Slack API"],
};

const Lyft = () => {
  return (
    <BodyContainer>
      <NavBar />
      <CaseStudy dividerText="MORE" summary={summary} summaryOnly={true} />
    </BodyContainer>
  );
};

export default Lyft;
