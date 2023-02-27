import React from "react";
import CaseStudy from "../../components/CaseStudy";
import NavBar from "../../components/NavBar";
import { BodyContainer } from "../../components/Containers";

const summary = {
  imgUrl: "/thumbnail-small-lyft.png",
  problemTitle: ["Owning an Entire Product as an Intern"],
  problemParagraph: [
    "I interned with Lyft in its New York office and owned an entire fullstack feature despite being hired as a Front-End Engineer. The tool was for an internal product and spanned 2 pages, interfaced with Slack and required designing a CRON job.",
  ],
  externalUrl: "https://lyft.com/",
  outcome: [
    "I delivered a 2x scope project despite a shortened internship (11 weeks vs 12)",
    "I learned to work independently despite reduced mentorship and access to a PM",
    "I learned to write production Python code on the job",
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
