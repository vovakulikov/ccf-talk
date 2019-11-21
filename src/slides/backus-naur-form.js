import React from "react";
import styled from 'styled-components';

import { Slide } from "presa";
import {H1, H4, H3} from "presa/blocks";
import Quote from "../components/quote";

const Bold = styled.span`
	font-weight: bold;
`;
const BackusNaurForm = (props) => (
	<Slide {...props} >
		<H1>Форма Бэкуса — Наура</H1>

		<div style={{ marginTop: '40px' }}>
			<Quote>
				Формальная система описания синтаксиса, в которой одни синтаксические категории последовательно определяются через другие категории
			</Quote>
		</div>

		<H3 style={{ marginTop: '40px' }}> Пример грамматики математических выражений</H3>
		<H4 style={{ marginTop: '20px' }}>
			<Bold>S</Bold> = -<Bold>B</Bold> <br/>
			<Bold>B</Bold> = <Bold>T</Bold> | <Bold>B</Bold> + T | <Bold>B</Bold> - <Bold>T</Bold> <br/>
			<Bold>T</Bold> = <Bold>J</Bold> | <Bold>T</Bold> * <Bold>J</Bold> | <Bold>T</Bold> / <Bold>J</Bold> <br/>
			<Bold>J</Bold> = (<Bold>B</Bold>) | p <br/>
		</H4>
	</Slide>
);

export default BackusNaurForm;
