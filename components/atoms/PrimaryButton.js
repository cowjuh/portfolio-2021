import Link from "next/link";
import styled from "styled-components";

const ButtonContainer = styled.a`
  font-family: inherit;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  border-radius: 5px;
  transition: all 250ms ease 0s;
  margin-right: 10px;
  padding: 5px 10px;
  white-space: nowrap;
  border: 3px solid transparent;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(
      110deg,
      rgb(225, 245, 73),
      rgb(41, 208, 190),
      rgb(108, 184, 234),
      rgb(255, 89, 89)
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: rgb(255, 255, 255) 2px 1000px 1px inset;
  :hover {
    box-shadow: none;
    color: white;
  }
`;

const ButtonText = styled.p`
  margin: 5px 0px;
  font-weight: 500;
  font-size: 16px;
`;

const PrimaryButton = (props) => {
  return (
    <Link href={props.href}>
      <ButtonContainer>
        <ButtonText>{props.children}</ButtonText>
      </ButtonContainer>
    </Link>
  );
};

export default PrimaryButton;
