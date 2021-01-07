import styled from 'styled-components';

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
    border-bottom: 1px solid #F2F2F2;
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
    margin-right: ${props => props.margin ? "20px" : "0px"};
    :hover {
        color: blue;
        transform: scale(1.1);
    }
`;

const Navbar = () => {
    return (
        <NavOuter>
            <NavInner>
                <NavSection id="left">
                    <NavLink>Jenny Zhang</NavLink>
                </NavSection>
                <NavSection id="right">
                    <NavLink margin>About</NavLink>
                    <NavLink margin>Email</NavLink>
                    <NavLink>Github</NavLink>
                </NavSection>                
            </NavInner>
        </NavOuter>
    )
}

export default Navbar;