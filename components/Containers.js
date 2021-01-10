import styled from "styled-components";

const Container = styled.div`
  top: 0px;
  left: 0px;
  margin: 0px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgContainer = styled.img`
  width: 100%;
  max-width: 800px;
  background-image: cover;
`;

const SecContainer = styled.div`
  width: 100%;
  max-width: 800px;
`;

export const BodyContainer = (props) => {
  return <Container>{props.children}</Container>;
};

export const ImageContainer = (props) => {
  return <ImgContainer src={props.src} />;
};

export const SectionContainer = (props) => {
  return <SecContainer>{props.children}</SecContainer>;
};
