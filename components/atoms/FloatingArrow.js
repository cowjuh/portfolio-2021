import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const Arrow = styled(FontAwesomeIcon)`
    animation: MoveUpDown 1.5s linear infinite;
    @keyframes MoveUpDown {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-5px);
        }
    }
`;

const FloatingArrow = () => {
    return <Arrow style={{fontSize: "20px"}} icon={faArrowDown}/>
}

export default FloatingArrow;