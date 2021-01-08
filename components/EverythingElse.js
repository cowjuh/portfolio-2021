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
  height: 150px;
  transition: all 250ms;
  :hover {
    transform: scale(1.03);
    background-color: #fde8ef;
    color: #e91e63;
  }
`;

const EverythingElse = () => {
  return (
    <Container>
      <Card>Art & Illustration</Card>
      <Card>Digital & Film Photography</Card>
      <Card>Video & Motion Graphics</Card>
      <Card>Software & Engineering</Card>
      <Card>Project Management</Card>
      <Card>Card</Card>
    </Container>
  );
};

export default EverythingElse;
