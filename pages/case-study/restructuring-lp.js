import React from "react";
import CaseStudy from "../../components/CaseStudy";
import NavBar from "../../components/NavBar";
import { BodyContainer, ImageContainer } from "../../components/Containers";
import styled from "styled-components";
import TextContainer from "../../components/TextContainer";
import MainContainer from "../../components/MainContainer";

const summary = {
  imgUrl: "/case-img-notule.png",
  videoUrl: "/lp-restructure/hero-video.mp4",
  problemTitle: [
    "A project based software engineering team that never finishes its projects.",
  ],
  problemParagraph: [
    "Team members lose motivation and stop prioritizing their project.",
  ],
  solution: [
    "Incorporate UX design principles into both the project teams and the club's operations. We held UX design workshops and integrated designers more seamlessly into their teams.",
  ],
  externalUrl: "https://ubclaunchpad.com/",
  outcome: [
    "6 software projects were completed by the end of the school year as opposed to 2 of the previous year. Each team also had a complete case study, write up, and video to showcase their work.",
  ],
  context: [
    "Timeline: Sep 2018 - Apr 2020",
    "Team: Yichen C and Rene H",
    "Role: Co-President and Design Lead",
  ],
};

const RestructuringLP = () => {
  return (
    <BodyContainer>
      <NavBar />
      <CaseStudy dividerText="MORE" summary={summary}>
        <TextContainer>
          <h2>Step 1: Kickoff Event</h2>
          <p>
            Each year, Launch Pad organizes a “Kickoff Event” in October which
            involves icebreakers, an overview of the club, and a brainstorming
            session before teams are formed. We wanted to take advantage of this
            day to set the tone for the rest of the year, so we organized a
            “Planathon”: a UX Design Sprint condensed into one day like a
            hackathon!
            <br />
            <br />
            Here was our plan:
          </p>
          <ImageContainer src="/lp-restructure/kickoff.png" />
          <p>
            We then placed members into teams based on their project preferences
            and invited our lovely friends at UBC UX Hub to host a UX workshop.
            Historically, designers at Launch Pad have a difficult time
            integrating into their teams and finding the confidence to suggest
            UX as part of the core development process.
            <br />
            As a designer myself, I was happy that the workshop was not only
            educational, but sparked newfound interest in UX/UI design within
            developers. Teams were now ready to set up and begin building with
            their teams.
          </p>
          <ImageContainer src="/lp-restructure/kickoff-photos.png" />
        </TextContainer>
        <TextContainer>
          <h2>Step 2: Flexible Timelines</h2>
          <p>
            How we differ from other UBC Engineering Design teams is that we’re
            not collectively working towards one big annual competition. This is
            a double edged sword in that our members have more freedom to build
            what they want at the risk of losing motivation near the end.
            <br />
            <br />
            Students respond to deadlines, so we set two of them.
          </p>
          <ul>
            <li>
              End of Term 1: A demo day to show your team’s progress thus far to
              the rest of the club.
            </li>
            <li>
              End of Term 2: A Launch Pad Showcase, structured like Hackathon
              presentations, with industry professionals as judges and
              networking opportunities.
            </li>
          </ul>
          <p>
            The demo day was a success! I got a lot of Github notifications the
            days leading up to it, which meant that teams were getting things
            done.
          </p>
        </TextContainer>
        <TextContainer>
          <h2>Step 3: Adapting to COVID-19</h2>
          <p>
            Unfortunately, our Launch Pad Showcase was cancelled due to
            COVID-19, but we wanted to wrap up the projects and help members
            create something they could show off in their portfolios or
            interviews. I responded by creating a new set of deliverables.
          </p>
          <ul>
            <li>
              A 30 second - 1 minute video “ad” explaining and marketing the
              finished project and its corresponding thumbnail
            </li>
            <li>
              A project writeup explaining the team’s process, technology,
              challenges, and achievements as well as the results from user
              interviews and testing.
            </li>
          </ul>
          <h3>
            6 teams brought their projects to completion this year as opposed to
            the 1 team of the previous year! Success!
          </h3>
          <ImageContainer src="/lp-restructure/thumbnails.png" />
        </TextContainer>
        <TextContainer>
          <h2>Reflection</h2>
          <p>
            Leading a software team as a “design person” was daunting and I
            doubted myself non-stop over the year. I thought consistently that
            our club could have held more events, workshops, more tech talks,
            more, more, more... but I wanted to remind myself of the things we
            were able to accomplish. Approaching leadership from the lens of a
            UX/UI designer has its benefits, and helped foster this community of
            new friends who compete in hackathons together and help one another
            with job searches and interviews. Thank you for reading!
          </p>
        </TextContainer>
      </CaseStudy>
    </BodyContainer>
  );
};

export default RestructuringLP;
