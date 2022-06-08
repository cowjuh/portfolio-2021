import NavBar from "../components/NavBar";
import MainContainer from "../components/MainContainer";
import GlobalStyles from "../components/GlobalStyles";
import Contact from "../components/Contact";
import { BodyContainer, ImageContainer } from "../components/Containers";
import TextContainer from "../components/TextContainer";

const imageUrls = [
  "/mob-cover.png",
  "/mob-page-1.png",
  "/mob-page-2.png",
  "/mob-page-3.png",
  "/mob-page-4.png",
  "/mob-page-5.png",
  "/mob-page-6.png",
];

const Gallery = () => {
  return (
    <BodyContainer>
      <NavBar />
      <MainContainer>
        <h1>Gallery</h1>
        <p>A gallery of works that I'm proud of.</p>
        <TextContainer>
          {imageUrls.map((imageUrl) => {
            return (
              <TextContainer>
                <ImageContainer src={imageUrl} />
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

export default Gallery;
