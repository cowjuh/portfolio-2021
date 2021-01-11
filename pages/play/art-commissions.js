import CaseStudy from "../../components/CaseStudy";
import NavBar from "../../components/NavBar";
import TextContainer from "../../components/TextContainer";
import { BodyContainer, ImageContainer } from "../../components/Containers";
import MainContainer from "../../components/MainContainer";
import GlobalStyles from "../../components/GlobalStyles";
import Contact from "../../components/Contact";

const imageUrls = [
  "/art-commissions/img1.png",
  "/art-commissions/img2.png",
  "/art-commissions/img3.png",
  "/art-commissions/img4.png",
  "/art-commissions/img5.png",
];

const Photography = () => {
  return (
    <BodyContainer>
      <NavBar />
      <MainContainer>
        <h1>Art Commissions</h1>
        <p>
          A donation commission for #BLM. I took payment in the form of people's
          receipts of their donations to Black led organizations.
        </p>
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

export default Photography;
