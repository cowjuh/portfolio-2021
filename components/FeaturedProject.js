import styled from "styled-components";
import featuredProjects from "../content/featureProjects";
import Link from "next/link";

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: start;
  margin-bottom: 50px;
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

const FeaturedImage = styled.img`
  cursor: pointer;
  width: 100%;
  height: auto;
  border-radius: 2px;
  transition: all 250ms;
  :hover {
    transform: scale(1.03);
  }
`;

export const Subtitle = styled.p`
  margin: 0;
  font-size: 0.9rem;
  text-transform: uppercase;
  margin-top: 20px;
  color: gray;
`;

const ProjectTitle = styled.p`
  cursor: pointer;
  font-weight: 500;
  font-size: 1.2rem;
  margin-bottom: 0px;
  :hover {
    color: #3f51b5;
  }
`;

const Badge = styled.div`
  position: absolute;
  color: white;
  font-weight: 500;
  top: 10px;
  left: 10px;
  padding: 5px 10px;
  background-color: rgb(255, 255, 255, 0.4);
  border-radius: 5px;
`;

const FeaturedProject = (props) => {
  const project = props.project;
  const link = project.comingSoon ? "" : `/case-study/${project.url}`;
  const notClickable = project.notClickable;
  return (
    <Container disabled={project.comingSoon || notClickable}>
      <Link href={link}>
        <FeaturedImage disabled={project.comingSoon} src={project.imgUrl} />
      </Link>
      <Subtitle>{project.context}</Subtitle>
      <Link href={link}>
        <ProjectTitle>{project.title}</ProjectTitle>
      </Link>
      {project.comingSoon && <Badge>Incoming</Badge>}
    </Container>
  );
};

export default FeaturedProject;
