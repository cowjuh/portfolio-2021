import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100vw;
  @media (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
  }
`;

const HeroImage = styled.img`
  height: 100vh;
  object-fit: contain;
  @media (max-width: 1000px) {
    height: 50vh;
  }
`;

const ScrollableSection = styled.div`
  width: 50%;
  display: block;
  padding: 40px 80px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 0;
  }
`;

const StickySection = styled.div`
  top: 60px;
  position: sticky;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: calc(100vh - 60px);
  @media (max-width: 1000px) {
    position: inherit;
  }
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
        <h4 className="section-title">PROBLEM</h4>
        <h2 style={{ fontWeight: "600" }}>{content.problemTitle}</h2>
        {content &&
          content.problemParagraph.map((element) => {
            return <p>{element}</p>;
          })}
        {content.externalUrl && (
          <>
            <h4 className="section-title">LINK</h4>
            <a href={content.externalUrl}>{content.externalUrl}</a>
          </>
        )}
        <h4 className="section-title">SOLUTION</h4>
        {content &&
          content.solution.map((element) => {
            return <p>{element}</p>;
          })}
        <h4 className="section-title">OUTCOME</h4>
        {content &&
          content.outcome.map((element) => {
            return <p>{element}</p>;
          })}
        <h4 className="section-title">CONTEXT</h4>
        {content &&
          content.context.map((element) => {
            return <p>{element}</p>;
          })}
      </ScrollableSection>
    </Container>
  );
};

export default CaseSummary;
