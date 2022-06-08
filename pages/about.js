import CaseStudy from "../components/CaseStudy";
import NavBar from "../components/NavBar";
import { notuleSummary } from "../content/featureProjects";
import { BodyContainer } from "../components/Containers";
import TextContainer from "../components/TextContainer";
import MainContainer from "../components/MainContainer";
import GlobalStyles from "../components/GlobalStyles";
import Contact from "../components/Contact";
import styled from "styled-components";

const ImgFrame = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  margin-bottom: 30px;
`;

const ProfileImg = styled.img`
  display: inline;
  margin: 0 auto;
  height: auto;
  width: 100%;
`;

const ContentSection = styled.div`
  margin: 3rem 0;
  max-width: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Notule = () => {
  return (
    <BodyContainer>
      <NavBar />
      <MainContainer>
        <ContentSection>
          <ImgFrame>
            <ProfileImg width="300px" src="/me2022.jpg" />
          </ImgFrame>
          <h3>Artist, developer, lazy portfolio updater</h3>
          <p>
            <br />
            The general gist? I'd say I'm a naturally creative person who picked
            up a passion for engineering along the way. For me, coding is just
            another medium of art that I can use to bring my ideas to life. I've
            been thinking about interactive art installations and would love to
            design and host one from the ground up. (👀 message me if you're
            down)
          </p>
          <br />
          <p>
            Studying engineering as an artist/designer was... kind of hard!
            Maybe counterintuitive? Having overcome that hurdle, though, I've
            come to appreciate both what I can learn from and provide to either
            disciplines. And the bonus of getting to say I can do both... pretty
            nice.
          </p>
          <br />
          <p>
            Lately I've been trying to cook more, listen to more music, attend
            more concerts, and spend time with friends. I'll be in NYC this
            summer for an internship with Lyft and if the person reading this
            wants to hang out, just say hi!
          </p>
        </ContentSection>
        <Contact />
      </MainContainer>
      <GlobalStyles />
      <style jsx>
        {`
          p {
            font-weight: 500;
          }
        `}
      </style>
    </BodyContainer>
  );
};

export default Notule;
