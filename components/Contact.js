import { SectionContainer } from "./Containers";
import styled from "styled-components";

const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: start;
  }
`;

const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: #c6c6c6;
  margin-bottom: 30px;
`;

const Contact = () => {
  return (
    <SectionContainer>
      <Line />
      <LinksContainer>
        <a>jenzhang530@gmail.com</a>
        <a href="https://www.linkedin.com/in/cowjuh/">LinkedIn</a>
        <a href="https://www.tiktok.com/@cowjuh">TikTok</a>
        <a href="https://www.instagram.com/cowjuh/">Instagram</a>
        <a href="https://github.com/cowjuh/">Github</a>
        <a href="https://calendly.com/cowjuh/30min">Calendly</a>
      </LinksContainer>
      <p>2022 • Built by Jenny Zhang using NextJS</p>

      <style jsx>
        {`
          a {
            transition: all 250ms;
            cursor: pointer;
            margin: 0 20px 20px 0;
            font-size: 1.2rem;
            font-weight: 500;
          }

          p {
            margin: 0;
          }
        `}
      </style>
    </SectionContainer>
  );
};

export default Contact;
