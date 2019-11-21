import React from 'react';

import styled from 'styled-components';
import PlainSlide from '../../components/plain-slide';
import ccfCurrency from './ccf-currency.jpeg'
import ccfNumber from './cf-number.jpeg'

const Img = styled.img`
	height: 100%;
`;

export const CentredContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;


const ImageOfCCF = (props) => (
	<PlainSlide {...props}>
		<CentredContent>
			<Img src={ccfCurrency} alt="ccf-currency"/>
			<Img src={ccfNumber} alt="ccf-currency"/>
		</CentredContent>
	</PlainSlide>
);

export default ImageOfCCF;
