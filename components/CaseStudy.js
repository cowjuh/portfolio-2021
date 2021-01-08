import Head from "next/head";
import styled from "styled-components";
import CaseSummary from "./CaseSummary";
import { BodyContainer } from "./Containers";
import GlobalStyles from "./GlobalStyles";
import FloatingArrow from "./atoms/FloatingArrow";
import TextContainer from "./TextContainer";
import EverythingElse from "./EverythingElse";

const DividerContainer = styled.div`
  margin: 50px 0;
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
    <>
      <GlobalStyles />
      <CaseSummary content={props.summary} />
      <Divider text={props.dividerText} />
      {props.children}
      <EverythingElse />
    </>
  );
};

export default CaseStudy;
