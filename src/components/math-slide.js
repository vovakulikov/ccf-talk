import React from 'react';
import styled from 'styled-components';
import { Slide } from "presa";
import MathJax from "react-mathjax";

export default (props) => (
	<Slide {...props} layout={false}>
		<MathJax.Provider>
			{ props.children }
		</MathJax.Provider>
	</Slide>
);

const Formula = styled(MathJax.Node)`
	display: flex;
	font-size: ${props => props.fontSize && props.fontSize}px;
`;

export { Formula };
