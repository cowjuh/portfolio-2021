import CaseStudy from "../../components/CaseStudy";
import NavBar from "../../components/NavBar";
import TextContainer from "../../components/TextContainer";
import { BodyContainer, ImageContainer } from "../../components/Containers";
import MainContainer from "../../components/MainContainer";
import GlobalStyles from "../../components/GlobalStyles";
import Contact from "../../components/Contact";

const imageUrls = [
  "/mob-cover.png",
  "/mob-page-1.png",
  "/mob-page-2.png",
  "/mob-page-3.png",
  "/mob-page-4.png",
  "/mob-page-5.png",
  "/mob-page-6.png",
];

const Photography = () => {
  return (
    <BodyContainer>
      <NavBar />
      <MainContainer>
        <h1>MOB Journal Back Cover Feature</h1>
        <h2>Sunsets and Fruits</h2>
        <TextContainer>
          {imageUrls.map((imageUrl) => {
            return (
              <TextContainer>
                <ImageContainer src={imageUrl} />
              </TextContainer>
            );
          })}
          <p>Featured in Volume 8: Issue 32 of MOB Journal</p>
          <p>
            Team: Will N, Soomin S, Bob E, Noelle C, Jared P, Happy K, and
            myself
          </p>
        </TextContainer>
        <Contact />
      </MainContainer>
      <GlobalStyles />
    </BodyContainer>
  );
};

export default Photography;
