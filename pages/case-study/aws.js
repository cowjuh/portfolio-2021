import React from "react";
import CaseStudy from "../../components/CaseStudy";
import NavBar from "../../components/NavBar";
import { BodyContainer, ImageContainer } from "../../components/Containers";
import TextContainer from "../../components/TextContainer";

const summary = {
  imgUrl: "/thumbnail-small-aws.png",
  problemTitle: ["Wearing 3 Hats in 1 Internship"],
  problemParagraph: [
    "I interned with AWS Connect over the summer in 2021 and acted as a product designer, PM, and fullstack engineer despite my official role as a Front-End Engineer",
  ],
  externalUrl: "https://aws.amazon.com/connect/",
  outcome: [
    "I designed the feature I needed to implement.",
    "I learned Typescript, unit testing, Java, DynamoDB, and ElasticSearch on the job.",
    "I delivered all engineering requirements, on top of my PM, and PD responsibilities within the internship timeline.",
  ],
  context: ["Timeline: Summer 2021", "Tools: React, Typescript, Jest, Java, DynamoDB, ElasticSearch"],
};

const AWS = () => {
  return (
    <BodyContainer>
      <NavBar />
      <CaseStudy dividerText="MORE" summary={summary} summaryOnly={true} />
    </BodyContainer>
  );
};

export default AWS;
