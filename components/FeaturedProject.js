import styled from "styled-components";
import featuredProjects from "../content/featureProjects";
import Link from "next/link";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 100px;
`;

const FeaturedImage = styled.img`
  cursor: pointer;
  width: 100%;
  height: auto;
  border-radius: 2px;
  transition: all 250ms;
  :hover {
    transform: scale(1.01);
  }
`;

const Subtitle = styled.p`
  margin: 0;
  color: gray;
`;

const ProjectTitle = styled.h2`
  cursor: pointer;
  font-weight: 500;
  font-size: 30px;
  margin-bottom: 0px;
  :hover {
    color: blue;
  }
`;

const FeaturedProject = (props) => {
  const project = props.project;
  return (
    <Container>
      <Link href={`/case-study/${project.url}`}>
        <FeaturedImage src={project.imgUrl} />
      </Link>
      <Link href={`/case-study/${project.url}`}>
        <ProjectTitle>{project.title}</ProjectTitle>
      </Link>
      <Subtitle>{project.context}</Subtitle>
      <p>{project.description}</p>
    </Container>
  );
};

export default FeaturedProject;
