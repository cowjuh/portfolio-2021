import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  width: 100%;
`;

const Card = styled.div`
  background-color: #f9f9f9;
  cursor: pointer;
  padding: 30px;
  min-height: 150px;
  transition: all 250ms;
  :hover {
    transform: scale(1.03);
    background-color: #fde8ef;
    color: #e91e63;
  }
`;

const P = styled.p`
  margin: 0;
`;

const EverythingElse = () => {
  return (
    <Container>
      <Card>🙋🏻‍♀️ I led a software engineering design team as its Co-President.</Card>
      <Card>📸 I was published in two magazines.</Card>
      <Card>🎬 I briefly started a YouTube channel.</Card>
      <Card>👩🏻‍💻 I built a VR art gallery for a photography publication.</Card>
      <Card>😎 I made some 3D illustrations in Adobe Dimension.</Card>
      <Card>🎨 I raised just under $1000 for an important cause through art.</Card>
      <Card>✨ I made some motion graphics animations!</Card>
      <Card>✏️ I designed a couple logos.</Card>
      <Card>🤓 I built my first full stack web application.</Card>
    </Container>
  );
};

export default EverythingElse;
