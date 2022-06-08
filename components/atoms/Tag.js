import styled from "styled-components";

const TagContainer = styled.div`
  border: 1px solid black;
  padding: 2px 7px;
  border-radius: 20px;
  max-width: fit-content;
`;

const Tag = ({ children }) => {
  return <TagContainer>{children}</TagContainer>;
};

export default Tag;
