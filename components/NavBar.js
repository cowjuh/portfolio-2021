import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const NavOuter = styled.div`
  height: 60px;
  position: fixed;
  margin: 0;
  left: 0px;
  top: 0px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  z-index: 2;
  border-bottom: 1px solid #f2f2f2;
`;

const NavInner = styled.div`
  height: 60px;
  position: fixed;
  margin: 0;
  top: 0px;
  width: 90%;
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
`;

const NavSection = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  cursor: pointer;
  color: black;
  text-decoration: none;
  margin: 0;
  transition: all 250ms;
  margin-right: ${(props) => (props.margin ? "20px" : "0px")};
  :hover {
    color: blue;
    transform: scale(1.05);
  }
`;

const Navbar = () => {
  return (
    <NavOuter>
      <NavInner>
        <NavSection id='left'>
          <NavLink href='/'>Jenny Zhang</NavLink>
        </NavSection>
        <NavSection id='right'>
          <NavLink margin href='/about'>
            About
          </NavLink>
          <NavLink margin href='/about'>
            Resume
          </NavLink>
          <NavLink margin>
            <FontAwesomeIcon icon={faEnvelope} />
          </NavLink>
          <NavLink margin>
            <FontAwesomeIcon icon={faGithub} />
          </NavLink>
          <NavLink>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </NavLink>
        </NavSection>
      </NavInner>
    </NavOuter>
  );
};

export default Navbar;
