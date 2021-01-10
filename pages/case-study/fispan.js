import React from "react";
import CaseStudy from "../../components/CaseStudy";
import NavBar from "../../components/NavBar";
import { BodyContainer, ImageContainer } from "../../components/Containers";
import styled from "styled-components";
import TextContainer from "../../components/TextContainer";
import MainContainer from "../../components/MainContainer";

const summary = {
  imgUrl:
    "https://cms-assets.tutsplus.com/uploads/users/158/posts/34500/final_image/FitnessApp0.jpg",
  problemTitle: [
    "How can I deliver and validate my UX designs when I don't have access to end users?",
  ],
  problemParagraph: [
    "In the fintech industry, where confidentiality and compliance measures are key, UX designers don't always have access to the product's end users.",
    "How, then, should such a designer validate their decisions?",
  ],
  solution: [
    "Get creative with how you want to validate. Emulate user research, validate where you can, and make up for the lack of end-user interaction with thorough research.",
  ],
  outcome: [
    "I led the redesign of two of the company's products",
    "I co-led FISPAN's rebranding efforts",
    "I storyboarded and created a product explainer motion graphics video using After Effects",
  ],
  context: [
    "Timeline: Summer 2019 and Summer 2020",
    "Tools: Adobe XD, Sketch, Adobe After Effects, Adobe Illustrator, Adobe CC",
  ],
};

const Fispan = () => {
  return (
    <BodyContainer>
      <NavBar />
      <CaseStudy dividerText="MORE" summary={summary}>
        <TextContainer>
          <h2>The Problem</h2>
          <p>
            For context, ERP (Enterprise Resource Planning) software essentially
            helps businesses keep track of everything from inventory tracking to
            accounting. They’re huge, complex, and most importantly, they aren’t
            actually connected to your bank account. This means that all your
            bookkeeping is done manually by cross-referencing your ERP data with
            your bank’s.
            <br />
            <br />
            FISPAN automates this process by “enabling customers to connect
            their [ERP] software to their bank in 20 minutes, tops”.
          </p>
        </TextContainer>
        <TextContainer>
          <h2>The Value of Design at FISPAN</h2>
          <p>
            To better understand the crucial role that design plays at FISPAN,
            we can consider this scenario. If I were designing a subscription
            based video app for educational content, someone could say, "Oh, so
            it's like Netflix for education!", and we could continue our
            conversation based on that shared understanding.
          </p>
          <p>
            FISPAN's products, on the other hand, simply don't have these
            reference points for users to tether their base understanding. In
            order to convince a client of our product's value, the company needs
            to be able to provide a demonstration of its features and their
            associated possibilities. Without a tangible representation, clients
            make incorrect comparisons to other products, or get confused by the
            abstraction. It is therefore more practical to use design to
            translate abstract product ideas into detailed prototypes that
            behave like real software.
          </p>
          <h3>
            I knew I reached my goal when my mockup's interaction design,
            animations, logical flow, and visual design convinced clients that
            what they saw was real software.
          </h3>
          <ImageContainer src="/notule-1.png" />
        </TextContainer>
        <TextContainer>
          <h2>Let's Talk About Constraints</h2>
          <p>
            My design experience prior to these internships was through
            university design teams, hackathons, and personal passion projects;
            these projects were short, isolated, and offered a lot of
            flexibility with regards to my design decisions. At FISPAN, however,
            a designer must take these elements into consideration::
          </p>
          <p>
            This meant that I needed to be flexible with the design process
            because we had no support for a dedicated design research practice.
            I couldn’t expect perfection but I could optimize my work to the
            best of my abilities given the available resources.
          </p>
        </TextContainer>
        <TextContainer>
          <h2>Balancing Client Requests With User Needs</h2>
          <p>
            The first bottleneck was the fact that the client isn’t the end
            user. Not only does this mean that I can’t conduct user testing on
            the clients, but their requests are often in direct conflict with
            what benefits the end user experience. FISPAN’s white-label business
            model only added to this complexity. For example, after submitting a
            design to the client, they asked to make their logo bigger, but
            doing so reduces the usable screen real estate and breaks the app’s
            visual balance. I would then try to adapt my existing design to
            their specific request, but found that this was at times done at the
            expense of the end user.
          </p>
          <p>
            I eventually realized that the solution a client requests is usually
            a projection of their root goal. In this case, the issue wasn’t
            necessarily that the logo was too small, but that the client felt
            like their brand wasn’t prevalent enough in the overall UI.
            Understanding the problem afforded greater flexibility in the way I
            met the client’s request without making compromises to the UI’s
            visual balance.
          </p>
        </TextContainer>
        <TextContainer>
          <h2>Designing With Greater Intention</h2>
          <p>
            Another common situation was when I was asked: “Can you mock up this
            concept for our client? It doesn’t need to be fleshed out since it’s
            just an idea.” This type of request was tricky as it neglected
            surrounding factors such as the concept’s feasibility and fit within
            the existing product’s ecosystem. Simply mocking up a proof of
            concept without understanding its complexity is like making a false
            promise to our client.
          </p>
          <p>
            Luckily, as a designer, I wanted to ensure that small details (often
            overlooked by the clients) were taken care of before the design was
            handed off for review, even if it was just a proof of concept. This
            meant diving into an idea more deeply than I was asked to and
            working with engineers, the operations team, and my own manager to
            prototype something that our company was capable of delivering
            should the client become interested. This saved a lot of time in the
            long run and established trust between our company and the client.
          </p>
        </TextContainer>
        <TextContainer>
          <h2>Making Design-Software Compromises</h2>
          <p>
            Some of our products are also built on top of existing software over
            which we have no control. One of my tasks was to overcome the
            associated strict UI rules and design a way to guide users through
            error handling. I experimented with the software to determine some
            of its limitations before showing the developer the simplest
            solution I could come up with, as shown below:
          </p>
          <p>
            The flow used simple visual alerts (dot alert, alert icon, red text,
            highlighted fields) and contextual error text to guide the user to
            the problem spots. Unfortunately, some of the key UI elements
            weren’t feasible, leading me to iterate on this design multiple
            times before landing on our final approach.
          </p>
          <p>
            If the best method of showing our user the error isn’t feasible,
            then how about the next best method? While this isn’t ideal from a
            UX point of view, we were able to achieve the same functionality.
            Despite bulkier interactions, the full width alert both notifies and
            guides the user to their issues (just like the dot alert), while the
            tooltip is as close as we can get to an error message embedded in
            the input form itself. The key to solving this design problem was to
            be flexible with my solution and adapt it to the reality of the
            product’s limitations.
            <br />
            <br />
            In fact, this same feature was requested for 3 different products,
            resulting in 3 different user flows based on the way each software
            was designed. I had to rethink the problem and tailor it to each
            case to ensure that I was delivering the best possible experience
            for the user.
          </p>
        </TextContainer>
        <TextContainer>
          <h2>Finding Ways to Validate</h2>
          <p>
            For confidentiality reasons, we couldn’t conduct user interviews to
            validate our design decisions which often felt like we were doing
            guess work. My manager and I couldn’t treat each other as end users
            either, since we didn’t have the specialized domain knowledge needed
            nor the impartiality of a new user.
            <br />
            <br />
            My last project, however, was conceptualized before I joined FISPAN,
            meaning that I was completely detached and could act as a new user.
            I saw this as a rare but valuable opportunity for us to receive
            unbiased user feedback, and extended this thinking to co-workers who
            had also been uninvolved with the project up until that point. I
            conducted “app reviews”, transcribed our critiques, and translated
            our feedback into design tasks.
          </p>
        </TextContainer>
        <TextContainer>
          <h2>Conclusion</h2>
          <p>One of the first questions my manager, Arseny, asked me was:</p>
          <h3>
            “Imagine you’re making an app for CEOs to use. How can you do your
            user testing when these people don’t have the time or interest to
            talk to you?”
          </h3>
          <p>
            It really took me by surprise then, but now, with 2 coop terms at
            FISPAN under my belt, I understand why he asked me such an
            interesting question. As designers, we look for the ideal way to
            design a new feature, the approach that leads to the least amount of
            friction, or that will result in the highest engagement rates. What
            I’ve learned from my internship, however, is that reality often
            doesn’t provide you with the time or resources to perfect your
            designs (that is, if they're even feasible). You need to be able to
            adapt and think creatively about how you can implement the next best
            thing: the design that isn’t necessarily Behance-able, but that
            makes sense within the realm of the company’s complex ecosystem.
          </p>
        </TextContainer>
      </CaseStudy>
    </BodyContainer>
  );
};

export default Fispan;
