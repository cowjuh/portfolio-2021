import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const BannerContainer = styled.div`
	border: 2px solid #3f51b5;
	color: #3f51b5;
	border-radius: 5px;
	background: #3f51b51a;
	padding: 10px 15px;
	width: 100%;
	display: flex;
	align-items: center;
`;

const NotificationBanner = ({children}) => {
	return(
		<BannerContainer>
		<FontAwesomeIcon icon={faBell} style={{marginRight: "0.5rem"}}/>
		<div>
			{children}
		</div>
		</BannerContainer>
	)
}

export default NotificationBanner;