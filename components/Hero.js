import styled from "styled-components";
import PrimaryButton from "./atoms/PrimaryButton";
import FloatingArrow from "./atoms/FloatingArrow";

const HeroContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 80px 0;
  max-height: 60vh;
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  margin-bottom: 50px;
`;

const Span = styled.span`
  color: #e91e63;
  background-color: #fde8ef;
  padding: 0 10px;
  border-radius: 5px;
`;

const HeaderBlock = styled.div`
  width: 100%;
  margin: 0.8rem 0;
  display: grid;
  gap: 20px;
  grid-template-columns: 0.2fr 1fr;
  align-items: center;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 5px;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      {/* <NotificationBanner>
        <span>
          New! Let's find a time to chat on my{" "}
          <a
            style={{ textDecoration: "underline" }}
            href="https://calendly.com/cowjuh/30min"
          >
            Calendly.
          </a>
        </span>
      </NotificationBanner> */}
      <HeaderContainer>
        <HeaderBlock>
          <span>ALWAYS</span>
          <h2>Artist and creative developer</h2>
        </HeaderBlock>
        <HeaderBlock>
          <span>INCOMING</span>
          {/* <img width={50} src="/lyft_icon.png" /> */}

          <h2>
            <Span>Lyft</Span> Frontend SWE Intern
          </h2>
        </HeaderBlock>
        <HeaderBlock>
          <span>PREVIOUSLY</span>
          {/* <img width={50} src="/aws_icon.png" /> */}
          <h2>
            <Span>AWS</Span> Frontend SDE Intern
          </h2>
        </HeaderBlock>
      </HeaderContainer>
      <p style={{ fontWeight: "600" }}>MY WORK</p>
      <FloatingArrow />
    </HeroContainer>
  );
};

export default Hero;
