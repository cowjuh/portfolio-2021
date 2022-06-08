import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  width: 100%;
  margin-top: 20px;
`;

const MainContainer = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

const CardContainer = styled.div`
  background-color: #f9f9f9;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 500;
  display: relative;
  border-radius: 3px;
  padding: 30px;
  min-height: 200px;
  transition: all 250ms;
  :hover {
    transform: scale(1.03);
    background-color: #fde8ef;
    color: #e91e63;
  }
  @media (max-width: 1000px) {
    min-height: 100px;
  }
`;

const CardHover = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 30px;
  right: 30px;
`;

const Card = (props) => {
  const [hover, setHover] = useState();
  return (
    <Link href={props.link}>
      <CardContainer
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <p>{props.displayText}</p>
        {hover && (
          <CardHover>
            {props.external ? (
              <FontAwesomeIcon
                style={{ marginRight: "10px" }}
                icon={faExternalLinkAlt}
              />
            ) : (
              <FontAwesomeIcon icon={faArrowRight} />
            )}
          </CardHover>
        )}
      </CardContainer>
    </Link>
  );
};

const EverythingElse = () => {
  return (
    <MainContainer>
      <h2>What I've been up to.</h2>
      <Container>
        <Card
          external
          link="https://www.tiktok.com/@cowjuh"
          displayText="🎵 I started a unique TikTok account"
        />
        <Card
          external
          link="https://github.com/cowjuh/tyle"
          displayText="👩🏻‍💻 I designed and built an IoT web application"
        />
        <Card
          link="/case-study/notule"
          displayText={
            "🤓 I designed and built my first full stack web application."
          }
          hoverText="Read case study"
        />
        <Card
          link="/play/stratus"
          displayText={
            "🦋 I built a VR art gallery for a photography publication."
          }
          hoverText="Read case study"
        />
        <Card
          link="/play/photography"
          displayText={"📸 My photography was published in a magazine."}
          hoverText="Read case study"
        />
        <Card
          external
          link="https://youtu.be/iHgjeb3GMLw"
          displayText={"🎬 I made a fun YouTube video on a whim."}
          hoverText="Read case study"
        />
        <Card
          link="/play/3d"
          displayText={"😎 I made some 3D illustrations in Adobe Dimension."}
          hoverText="Read case study"
        />
        <Card
          link="/play/art-commissions"
          displayText={
            "🎨 I raised just under $1000 for an important cause through art."
          }
          hoverText="Read case study"
        />
        <Card
          link="/play/motion-graphics"
          displayText={"✨ I made some motion graphics animations!"}
          hoverText="Read case study"
        />
      </Container>
    </MainContainer>
  );
};

export default EverythingElse;
