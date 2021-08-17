import styled from "styled-components";

const DropdownContainer = styled.div`
  position: absolute;
  top: 100%;
  right: 0%;
  z-index: 2;
  background: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 3px;
`;

const DropdownItem = styled.div`
  padding: 10px;
  white-space: nowrap;
  overflow: hidden;
`;

const DropdownItemLink = styled.a`
  width: 100%;
`;

const Dropdown = ({ items }) => {
  return (
    <DropdownContainer>
      {items.map((item) => {
        return (
          <DropdownItem>
            <DropdownItemLink href={item.url} target='_blank'>
              {item.title}
            </DropdownItemLink>
          </DropdownItem>
        );
      })}
    </DropdownContainer>
  );
};

export default Dropdown;
