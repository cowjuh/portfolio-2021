import CaseStudy from "../../components/CaseStudy";
import NavBar from "../../components/NavBar";
import { igenSummary } from "../../content/featureProjects";
import TextContainer from "../../components/TextContainer";
import { BodyContainer, ImageContainer } from "../../components/Containers";
import MainContainer from "../../components/MainContainer";
import GlobalStyles from "../../components/GlobalStyles";
import Contact from "../../components/Contact";

const ThreeDimensionalArt = () => {
  return (
    <BodyContainer>
      <NavBar />
      <MainContainer>
        <h1>Motion Graphics</h1>
        <TextContainer>
          <iframe
            src="https://player.vimeo.com/video/461058375"
            width="100%"
            height="360"
            frameborder="0"
            allow="autoplay"
            allowfullscreen
          ></iframe>
        </TextContainer>
        <Contact />
      </MainContainer>
      <GlobalStyles />
    </BodyContainer>
  );
};

export default ThreeDimensionalArt;
