import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import ClickableIcon from "./atoms/ClickableIcon";
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
  @media (max-width: 1000px) {
    width: 90%;
  }
`;

const NavSection = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  cursor: pointer;
  color: black;
  font-weight: 500;
  text-decoration: none;
  margin: 0;
  transition: all 250ms;
  margin-left: ${(props) => (props.margin ? "20px" : "0px")};
  :hover {
    color: #3f51b5;
    transform: scale(1.05);
  }
`;

const Navbar = () => {
  const [width, setWidth] = useState();
  const [sidebar, setSidebar] = useState(false);
  const breakpoint = 768;
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", (e) => setWidth(e.target.innerWidth));
  }, []);

  return (
    <>
      <NavOuter>
        <NavInner>
          <NavSection id='left'>
            <NavLink href='/'>👩🏻‍💻 Jenny Zhang</NavLink>
          </NavSection>
          <NavSection id='right'>
            <NavLink href='/about'>About</NavLink>
            <NavLink
              margin
              target='_blank'
              href='https://drive.google.com/file/d/1ZZd3H84nBZbRShXFg46T50prV9QfLWjt/view?usp=sharing'>
              Resume
            </NavLink>
          </NavSection>
        </NavInner>
      </NavOuter>
      <div style={{ height: "60px" }}></div>
    </>
  );
};

export default Navbar;
