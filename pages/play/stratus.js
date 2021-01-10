import CaseStudy from "../../components/CaseStudy";
import NavBar from "../../components/NavBar";
import { igenSummary } from "../../content/featureProjects";
import TextContainer from "../../components/TextContainer";
import { BodyContainer } from "../../components/Containers";
import MainContainer from "../../components/MainContainer";
import GlobalStyles from "../../components/GlobalStyles";
import Footer from "../../components/Footer";

const Stratus = () => {
  return (
    <BodyContainer>
      <NavBar />
      <MainContainer>
        <h1>Stratus Journal - The Virtual Experience</h1>
        <img
          style={{ marginBottom: "50px" }}
          width="100%"
          src="/stratus-1.png"
        />
        <TextContainer>
          <h2>Reaching the community virtually.</h2>
          <p>
            The paragraph below was taken from{" "}
            <a href="https://www.stratusjournal.com/002-virtual-experience">
              Stratus' website.
            </a>
            <br />
            <br />
            "STRATUS: VIRTUAL EXPERIENCE was an interactive online gallery
            event, created in response to the restrictive nature of the COVID-19
            pandemic. The virtual gallery is a curation of the work submitted by
            ten film photographers located around the world, as part of our
            first collaborative photo journal: "Stratus Mini 01: Summer on
            Pause". This is our way of celebrating the publication's launch in a
            socially distanced way. You are able to walk around, view the
            photos, listen to music, interact with other guests, and hang out in
            our virtual STRATUS world. The event has ended but the gallery can
            still be accessed for free below!"
          </p>
          <video
            style={{ marginTop: "20px" }}
            width="800px"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/stratus-video.mp4" type="video/mp4" />
          </video>
        </TextContainer>
        <TextContainer>
          <h2>Take a tour of our gallery!</h2>
          <iframe
            src="https://hubs.mozilla.com/5EccJCN/stratus-virtual-experience-room-one/?embed_token=94db369a7d9fa9bce2036f2488ec1955"
            style={{ width: "100%", height: "600px" }}
            allow="microphone; camera; vr; speaker;"
          ></iframe>
        </TextContainer>

        <Contact />
      </MainContainer>
      <GlobalStyles />
    </BodyContainer>
  );
};

export default Stratus;
