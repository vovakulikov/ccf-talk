import React from 'react';
import styled from 'styled-components'

import { Slide } from 'presa';
import { Title, H2 } from 'presa/blocks'

import backgroundGif from "./heart.gif";

const DeckTitle = styled(Title)`
  line-height: 0.95;
  margin-top: 90px;
`;

const Contacts = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 180px;
  font-weight: bold;
  font-size: 24px;
  align-items: flex-end;
`;

const Author = styled.div`
  margin-top: 10px;
  background-color: black;
`;

const Underline = styled.span`
	 border-bottom: 2px solid white;
	 
`;

const TwitterHandle = styled.div`
  font-size: 20px;
`;

const ContrastSlide = styled(Slide)`
	color: white;
`;

const Overlay = styled.div`
	background-color: rgba(0,0,0,.5);
`;

const Index = (props) => {
	return (
		<ContrastSlide {...props} background={backgroundGif}>
			<DeckTitle>
				Как мы делали CFF ↝
			</DeckTitle>

			<H2>
				Вова Куликов ↝ Gantt team
			</H2>

			<Contacts>
				<TwitterHandle>@_vovakulikov</TwitterHandle>
			</Contacts>
		</ContrastSlide>
	)
};


export default Index;
