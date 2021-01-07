import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
`;

const HeaderContainer = styled.div`
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
`;

const HeaderTitle = styled.h1`
    font-weight: 400;
`;

const Span = styled.span`
    cursor: pointer;
    transition: all 250ms;
    :hover {
        color: blue;
    }
`;

const Arrow = styled(FontAwesomeIcon)`
    animation: MoveUpDown 1.5s linear infinite;
    @keyframes MoveUpDown {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
    }
`;

const Hero = () => {
    return(
        <HeroContainer>
            <HeaderContainer>
                <HeaderTitle>Hi 👩🏻‍ I’m Jenny Zhang, a 
                    <Span> designer</Span>,
                    <Span> developer</Span>, and Integrated Engineering student at UBC.
                    I’ve designed fintech products at <Span>FISPAN</Span> and am helping build <Span>Copysmith's</Span> AI Copywriter.
                </HeaderTitle>    
                <PrimaryButton>More about me</PrimaryButton>                  
            </HeaderContainer>
            <Arrow style={{fontSize: "20px"}} icon={faArrowDown}/>
        </HeroContainer>
    )
}

export default Hero;