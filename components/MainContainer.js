import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  @media (max-width: 1000px) {
    width: 80%;
  }
`;

const MainContainer = (props) => {
  return <Container>{props.children}</Container>;
};

export default MainContainer;
