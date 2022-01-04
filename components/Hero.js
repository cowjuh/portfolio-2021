import styled from "styled-components";
import PrimaryButton from "./atoms/PrimaryButton";
import FloatingArrow from "./atoms/FloatingArrow";
import NotificationBanner from "./atoms/NotificationBanner";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 80px 0;
  max-height: 60vh;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin-bottom: 50px;
`;

const HeaderTitle = styled.h1`
  font-weight: 500;
  font-size: 2rem;
  @media (max-width: 1000px) {
    font-size: 1.5rem;
  }
`;

const Span = styled.span`
  color: #e91e63;
  background-color: #fde8ef;
  padding: 0 10px;
  border-radius: 5px;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <NotificationBanner>
        <span>
          New! Let's find a time to chat on my{" "}
          <a
            style={{ textDecoration: "underline" }}
            href="https://calendly.com/cowjuh/30min"
          >
            Calendly.
          </a>
        </span>
      </NotificationBanner>
      <HeaderContainer>
        <HeaderTitle>
          Hi 👩🏻‍💻‍ I’m Jenny! Previously at <Span>Amazon Web Services</Span> as a
          Front-End Engineer intern. I study Integrated Engineering at{" "}
          <Span>UBC</Span> but am also a product designer and artist.
        </HeaderTitle>
        <PrimaryButton href="/about">More about me</PrimaryButton>
      </HeaderContainer>
      <p style={{ fontWeight: "600" }}>MY WORK</p>
      <FloatingArrow />
    </HeroContainer>
  );
};

export default Hero;
