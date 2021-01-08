import styled from "styled-components";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
`;

const HeroImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const ScrollableSection = styled.div`
  flex: 1;
`;

const StickySection = styled.div`
  top: 60px;
  position: sticky;
  flex: 1;
  margin-right: 30px;
  max-height: calc(100vh - 60px);
`;

const BodyText = styled.p`
  white-space: pre-wrap;
`;

const CaseSummary = (props) => {
  const content = props.content;
  return (
    <Container>
      <StickySection>
        <HeroImage src={content.imgUrl} />
      </StickySection>
      <ScrollableSection>
        <h4 className='section-title'>PROBLEM</h4>
        <h2>{content.problemTitle}</h2>
        {content &&
          content.problemParagraph.map((element) => {
            return <p>{element}</p>;
          })}
        <h4 className='section-title'>SOLUTION</h4>
        {content &&
          content.solution.map((element) => {
            return <p>{element}</p>;
          })}
        <h4 className='section-title'>OUTCOME</h4>
        {content &&
          content.outcome.map((element) => {
            return <p>{element}</p>;
          })}
        <h4 className='section-title'>CONTEXT</h4>
        {content &&
          content.context.map((element) => {
            return <p>{element}</p>;
          })}
      </ScrollableSection>
    </Container>
  );
};

export default CaseSummary;
