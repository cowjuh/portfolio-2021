import React from "react";
import CaseStudy from "../../components/CaseStudy";
import NavBar from "../../components/NavBar";
import { notuleSummary } from "../../content/featureProjects";
import { BodyContainer, ImageContainer } from "../../components/Containers";
import styled from "styled-components";
import TextContainer from "../../components/TextContainer";
import MainContainer from "../../components/MainContainer";

const Notule = () => {
  return (
    <BodyContainer>
      <NavBar />
      <MainContainer>
        <div style={{ height: "60px" }}></div>
        <CaseStudy dividerText='MORE' summary={notuleSummary}>
          <TextContainer>
            <h2>Subtly Colorful.</h2>
            <p>
              At a glance, the interface is almost monochromatic, but it hides its true colours
              behind its interactions. I felt that this mirrors our stream of consciousness in that
              we can bring color to our thoughts with the right words.
            </p>
            <ImageContainer src='/thumbnail-notule.png' />
          </TextContainer>
          <TextContainer>
            <h2>Platform independent.</h2>
            <p>
              Thanks to PWAs and the ability to add any webpage to your phone's home screen, I was
              able to easily build a platform independent interface. All it took was some media
              queries and a hamburger menu, of course, to have a responsive web and mobile app
              deployed!
            </p>
            <ImageContainer src='/notule-1.png' />
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
      </MainContainer>
    </BodyContainer>
  );
};

export default Notule;
