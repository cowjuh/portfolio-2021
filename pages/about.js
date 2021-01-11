import CaseStudy from "../components/CaseStudy";
import NavBar from "../components/NavBar";
import { notuleSummary } from "../content/featureProjects";
import { BodyContainer } from "../components/Containers";
import TextContainer from "../components/TextContainer";
import MainContainer from "../components/MainContainer";
import GlobalStyles from "../components/GlobalStyles";
import Contact from "../components/Contact";

const Notule = () => {
  return (
    <BodyContainer>
      <NavBar />
      <MainContainer>
        <div style={{ margin: "3rem 0" }}>
          <img width="300px" src="/me.png" />
          <p>
            I'm Jenny, a designer, artist, and Integrated Engineering student at
            the University of British Columbia in Vancouver, Canada.
            <br />
            <br />I started drawing at 5 years old and haven't been able to put
            my pencil down since. I’ve also picked up a lot of new tools and a
            fascination with technology and engineering along the way.
          </p>
          <p>
            Studying engineering as a designer can feel counterintuitive and
            often isolating, but I’ve come to appreciate both what I can learn
            from and provide to either disciplines. Being able to not only
            imagine, but potentially implement all of my craziest ideas is
            really exciting!
          </p>
          <p></p>
          <p>
            I like to listen to music under a blue sky in my free time and
            recently learned Stand Up Paddle-boarding (and have yet to fall in
            the water)! This is of course, on the rare occasion that I’m not
            working on some new drawing, photoshoot concept, or design project.
          </p>
        </div>
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
