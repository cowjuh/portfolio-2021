import React from "react";
import CaseStudy from "../../components/CaseStudy";
import NavBar from "../../components/NavBar";
import { BodyContainer, ImageContainer } from "../../components/Containers";
import styled from "styled-components";
import TextContainer from "../../components/TextContainer";
import MainContainer from "../../components/MainContainer";

export const summary = {
  imgUrl:
    "https://cms-assets.tutsplus.com/uploads/users/158/posts/34500/final_image/FitnessApp0.jpg",
  problemTitle: [
    "An outdated brand poorly represented its tech-forward community.",
  ],
  problemParagraph: [
    "UBC Launch Pad, a university software engineering design team, hadn't been rebranded for over 3 years and featured members who had already graduated on its landing page.",
  ],
  solution: [
    "An updated brand, website, illustrations, and marketing materials.",
  ],
  outcome: [
    "I led, researched, and designed the brand identity.",
    "I applied the brand guidelines to illustrations and marketing materials.",
    "I sketched and vectorized a set of 6 illustrations for a variety of use cases.",
    "I designed and sold custom team merchandise.",
  ],
  context: ["Timeline: Sep 2018 - Apr 2020", "Tools: Figma, Adobe CC"],
};

const RebrandingLP = () => {
  return (
    <BodyContainer>
      <NavBar />
      <CaseStudy dividerText="MORE" summary={summary}>
        <TextContainer>
          <h2>An Outdated Brand.</h2>
          <p>
            Launch Pad’s website hadn’t been updated for 3 years which was
            especially noticeable because the people in the landing page video
            had all graduated by the time I joined. The current website also had
            its share of problems that our design team needed to tackle.
          </p>
          <ImageContainer src="/thumbnail-notule.png" />
        </TextContainer>
        <TextContainer>
          <h2>A Rocky Beginning.</h2>
          <p>
            I was appointed as Design Lead based on previous leadership and
            visual design experiences, but hadn’t actually been through the
            process of designing user interfaces. I was maybe a graphic
            designer, or illustrator, but never received the mentorship needed
            to become a UX/UI Designer. Thrown into the role without a good
            grasp on the fundamentals of the design process, our team of 7 new
            designers went through a big detour trying to deliver a new brand.
            <br />
            <br />
            We tried to jump straight into the brand’s colours and referred to
            Behance and Dribbble for guidance instead of consulting existing
            members for their thoughts on Launch Pad as a community. Our lack of
            understanding towards Launch Pad’s identity was evident in our first
            website iteration below:
          </p>
          <p>
            Since we adopted this style without consideration for its
            applicability to Launch Pad’s identity, the design looked like an
            amalgamation of 2018’s design trends. We weren’t designing with
            intention.
            <br />
            <br />
            At this point, our team had already redesigned most of the marketing
            assets--even if the brand didn’t feel quite right, was it really
            worth restarting?
            <br />
            <br />
            Yes, it absolutely was, because:
            <ul>
              <li>
                The brand didn’t speak towards UBC Launch Pad’s identity and
                core values
              </li>
              <li>
                The website flow’s improvement could be built upon for our new
                design
              </li>
            </ul>
          </p>
        </TextContainer>
        <TextContainer>
          <h2>The Re-Rebranding Process</h2>
          <p>
            At this point, the majority of my team went onto their summer
            internships or travels so I decided to take matters in my own hands
            using the lessons we learned over the school year to tackle our
            branding problem once and for all. Here’s how it went.:
          </p>
          <h3>1 Understanding Our Identity</h3>
          <p>
            At its core, Launch Pad brings students who are passionate about
            technology together. With “Launch Pad” as its name and a spaceship
            for a logo, it made sense to pursue something space related. This
            helped me see Launch Pad members as teams of astronauts exploring
            the limits of technology, at which point I was ready to delve into
            the mood board.
          </p>
          <h3>2 Mood Board</h3>
          <p>
            I looked for images that conveyed how otherworldly, dreamlike, and
            surreal technology can be. Galaxies and bright screens alike could
            be represented by neon colours over dark backgrounds.
          </p>
          <h3>3 Illustrations</h3>
          <p>
            I wanted to create illustrations that complemented the mood board
            while conveying UBC Launch Pad’s community of students passionate
            about technology. I started with a few sketches before vectorizing
            them into illustrations. Highlights of my process and the final
            results are below!
          </p>
          <p>
            Being able to play around with the illustration colours actually
            helped me establish the final branding. This set of illustrations
            provided the coherence and consistency that gave me the confidence
            to establish Launch Pad’s new branding guideline.
          </p>
          <h3>4 Brand Guideline</h3>
          <p>
            Most of our marketing material would be designed in our dark theme,
            but I wanted an alternative “Light” version of the brand for
            text-heavy assets such as sponsorship packages or hiring packages.
          </p>
        </TextContainer>
        <TextContainer>
          <h2>Website Design</h2>
        </TextContainer>
        <TextContainer>
          <h2>Marketing</h2>
          <p>
            Having that distinct illustration style and branding made it really
            simple for us to put together marketing content. Shown below are two
            recruitment posts for Instagram and Facebook!
          </p>
        </TextContainer>
        <TextContainer>
          <h2>Slide Deck</h2>
        </TextContainer>
        <TextContainer>
          <h2>Sponsorship Package</h2>
          <p>
            The sponsorship package was updated 3 times! It was rebranded once
            using our first rebrand attempt, then superficially again to use our
            new colours before being completely redesigned for brand consistency
            and readability.
          </p>
        </TextContainer>
        <TextContainer>
          <h2>Swag Design</h2>
          <p>
            Since 2015, our swag process has been to print our logo and name
            onto some hoodies and shirts and call it a day. We order new swag
            each year, and it felt like a wasted opportunity reprinting the same
            thing time and time again. I wanted to design something that was
            specific to that year and that included a piece of each team.
          </p>
          <p>I sketched out 2 options:</p>
          <p>We went with option 2 because:</p>
          <ul>
            <li>Option 1 associated a person and gender with each role</li>
            <li>
              Option 2 is unique to that school year and represents each team
              equally
            </li>
          </ul>
          <p>
            We got the design embroidered and our team appreciated the
            personalized nature of the swag this year for how it created a sense
            of unity among our members!
          </p>
        </TextContainer>
        <TextContainer>
          <h2>What’s Next?</h2>
          <p>
            After rebranding, I returned as Co-President and focused my energy
            on incorporating the UX design process within each of our project
            teams (Read about my experience here). Ultimately, having this
            established brand to refer to helped me create marketing content
            quickly, allowing me to spend more time on improving the design team
            experience for our members.
          </p>
        </TextContainer>
      </CaseStudy>
    </BodyContainer>
  );
};

export default RebrandingLP;
