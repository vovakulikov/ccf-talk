import React from 'react';

import { Slide } from "presa";
import { H1, H2 } from "presa/blocks";
import styled from 'styled-components';

const BoldFirstLetter = styled.span`
	&:first-letter {
		font-weight: bold;
	}
`;

const Bold = styled.span`
	font-weight: bold;
`;

const WhatIsCCF = () => (
	<Slide name="Что такое кастом филды" centered>
		<H1>Что такое ССF?</H1>
		<H2>
			<Bold>CCF</Bold>&#160;
			- &#160;
			<BoldFirstLetter>
				<Bold>C</Bold>alculated&#160;
				<Bold>C</Bold>ustom&#160;
				<Bold>F</Bold>ield
			</BoldFirstLetter>
		</H2>
	</Slide>
);

export default WhatIsCCF;
