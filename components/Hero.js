import styled from "styled-components";
import PrimaryButton from "./atoms/PrimaryButton";
import FloatingArrow from "./atoms/FloatingArrow";
import Link from "next/link";

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
      <HeaderContainer>
        <HeaderTitle>
          Hi 👩🏻‍💻‍ I’m Jenny, a designer, developer currently at <Span>Amazon</Span> as a Front-End Engineer intern. I study Integrated Engineering at <Span>UBC</Span> and was previously at Copysmith and FISPAN.
        </HeaderTitle>
        <PrimaryButton href='/about'>More about me</PrimaryButton>
      </HeaderContainer>
      <p style={{ fontWeight: "600" }}>MY WORK</p>
      <FloatingArrow />
    </HeroContainer>
  );
};

export default Hero;
