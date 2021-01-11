import React from "react";
import CaseStudy from "../../components/CaseStudy";
import NavBar from "../../components/NavBar";
import { BodyContainer, ImageContainer } from "../../components/Containers";
import styled from "styled-components";
import TextContainer from "../../components/TextContainer";
import MainContainer from "../../components/MainContainer";

const summary = {
  imgUrl: "/case-img-notule.png",
  videoUrl: "/Notule.mp4",
  problemTitle: ["I want a new way to record and archive my thoughts."],
  problemParagraph: [
    "Existing apps and platforms are clunky, slow, or too opinionated.",
  ],
  externalUrl: "http://hellohellohello.world/",
  solution: [
    "I built Notule, a note-taking app which aims to make it easier to transcribe all of your thoughts as they happen. All wrapped in colourful yet subtle UI.",
  ],
  outcome: [
    "I learned to build a Full Stack application using MongoDB, Express, NodeJS, and ReactJS",
    "The app is a Progressive Web App and is responsive on mobile",
    "I implemented authentication via Google Oauth",
    "I designed and implemented my ideal user interface",
    "... and more! It's a work in progress.",
  ],
  context: [
    "Timeline: Dec 2020 - Present",
    "Tech: MongoDB, Express, NodeJS, ReactJS",
  ],
};

const Notule = () => {
  return (
    <BodyContainer>
      <NavBar />
      <CaseStudy dividerText="MORE" summary={summary}>
        <TextContainer>
          <h2>Subtly Colorful.</h2>
          <video autoPlay loop muted playsInline width="100%">
            <source src="/notule-desktop.mp4" type="video/mp4" />
          </video>
          <p>
            At a glance, the interface is almost monochromatic, but it hides its
            true colours behind its interactions. I felt that this mirrors our
            stream of consciousness in that we can bring color to our thoughts
            with the right words.
          </p>
          <ImageContainer src="/thumbnail-notule.png" />
        </TextContainer>
        <TextContainer>
          <h2>Platform independent.</h2>
          <p>
            Thanks to PWA's (Progressive Web App) and the ability to add any
            webpage to your phone's home screen, I was able to easily build a
            platform independent interface. All it took was some media queries
            and a hamburger menu, of course, to have a responsive web and mobile
            app deployed!
          </p>
          <ImageContainer src="/notule-1.png" />
        </TextContainer>
        <TextContainer>
          <h2>What's next for Notule?</h2>
          <p>Here's a sneak-peek of my features roadmap:</p>
          <ul>
            <li>Sticky note dashboard</li>
            <li>Custom tag filtering</li>
            <li>Split view between two notes</li>
            <li>Dark mode!</li>
            <li>... and more</li>
          </ul>
        </TextContainer>
      </CaseStudy>
    </BodyContainer>
  );
};

export default Notule;
