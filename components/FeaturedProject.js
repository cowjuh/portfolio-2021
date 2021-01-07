import styled from 'styled-components';
import featuredProjects from '../content/featureProjects';

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
    border-radius: 5px;
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
    return(
        <Container>
            <FeaturedImage src={props.imgUrl}/>
            <ProjectTitle>{props.title}</ProjectTitle>
            <Subtitle>{props.context}</Subtitle>
            <p>{props.description}</p>
        </Container>
    )
}

export default FeaturedProject;