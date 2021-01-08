import CaseStudy from "../components/CaseStudy";
import NavBar from "../components/NavBar";
import { notuleSummary } from "../content/featureProjects";
import { BodyContainer } from "../components/Containers";
import styled from "styled-components";
import TextContainer from "../components/TextContainer";
import MainContainer from "../components/MainContainer";
import GlobalStyles from "../components/GlobalStyles";

const Notule = () => {
  return (
    <BodyContainer>
      <NavBar />
      <div style={{ height: "60px" }}></div>
      <h1>Hey there!</h1>
      <GlobalStyles />
    </BodyContainer>
  );
};

export default Notule;
