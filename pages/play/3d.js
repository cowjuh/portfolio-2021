import CaseStudy from "../../components/CaseStudy";
import NavBar from "../../components/NavBar";
import { igenSummary } from "../../content/featureProjects";
import TextContainer from "../../components/TextContainer";
import { BodyContainer, ImageContainer } from "../../components/Containers";
import MainContainer from "../../components/MainContainer";
import GlobalStyles from "../../components/GlobalStyles";
import Contact from "../../components/Contact";

const imageUrls = [
  "product-display.png",
  "igen-render.png",
  "product-preview.png",
  "boy.png",
];

const ThreeDimensionalArt = () => {
  return (
    <BodyContainer>
      <NavBar />
      <MainContainer>
        <h1>3D Illustrations</h1>
        <TextContainer>
          {imageUrls.map((imageUrl) => {
            return (
              <TextContainer>
                <ImageContainer src={`/3d/${imageUrl}`} />
              </TextContainer>
            );
          })}
        </TextContainer>
        <Contact />
      </MainContainer>
      <GlobalStyles />
    </BodyContainer>
  );
};

export default ThreeDimensionalArt;
