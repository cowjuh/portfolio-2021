import Head from "next/head";
import styled from "styled-components";
import CaseSummary from "./CaseSummary";
import GlobalStyles from "./GlobalStyles";
import FloatingArrow from "./atoms/FloatingArrow";
import TextContainer from "./TextContainer";
import Contact from "./Contact";
import MainContainer from "./MainContainer";

const DividerContainer = styled.div`
  margin: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Divider = (props) => {
  return (
    <DividerContainer>
      <p>{props.text}</p>
      <FloatingArrow />
    </DividerContainer>
  );
};

const CaseStudy = (props) => {
  return (
    <MainContainer>
      <GlobalStyles />
      <CaseSummary content={props.summary} />
      <Divider text={props.dividerText} />
      {props.children}
      <Contact />
    </MainContainer>
  );
};

export default CaseStudy;
