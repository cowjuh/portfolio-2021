import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-bottom: 80px;
`;

const TextContainer = (props) => {
  return <Container>{props.children}</Container>;
};

export default TextContainer;
