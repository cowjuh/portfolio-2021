import styled from "styled-components";
import PrimaryButton from "./atoms/PrimaryButton";
import FloatingArrow from "./atoms/FloatingArrow";

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const HeaderContainer = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

const HeaderTitle = styled.h1`
  font-weight: 400;
`;

const Span = styled.span`
  cursor: pointer;
  transition: all 250ms;
  :hover {
    color: blue;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeaderContainer>
        <HeaderTitle>
          Hi 👩🏻‍ I’m Jenny Zhang, a<Span> designer</Span>,<Span> developer</Span>, and Integrated
          Engineering student at UBC. I’ve designed fintech products at <Span>FISPAN</Span> and am
          helping build <Span>Copysmith's</Span> AI Copywriter.
        </HeaderTitle>
        <PrimaryButton>More about me</PrimaryButton>
      </HeaderContainer>
      <p>MY WORK</p>
      <FloatingArrow />
    </HeroContainer>
  );
};

export default Hero;
