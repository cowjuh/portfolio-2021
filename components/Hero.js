import styled from "styled-components";
import FloatingArrow from "./atoms/FloatingArrow";
import NotificationBanner from "./atoms/NotificationBanner";

const HeroContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 80px 0;
  max-height: 60vh;
  @media (max-width: 1000px) {
    max-height: 70vh;
  }
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

const HeaderTitle = styled.h1`
  font-size: 32px;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeaderContainer>
        <HeaderTitle>
          Hi 👩🏻‍💻‍ I’m Jenny! Previously at <Span>Lyft</Span> and <Span>AWS</Span> for Front-End Engineer internships. I
          studied Integrated Engineering at <Span>UBC</Span> but am also a product designer and artist.
        </HeaderTitle>
      </HeaderContainer>
      <p style={{ fontWeight: "600" }}>MY WORK</p>
      <FloatingArrow />
    </HeroContainer>
  );
};

export default Hero;
