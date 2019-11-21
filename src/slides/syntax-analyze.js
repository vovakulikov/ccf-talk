import React from "react";

import { Slide } from "presa";
import { H1, H4 } from "presa/blocks";
import Quote from "../components/quote";

const SyntaxAnalyze = (props) => (
	<Slide {...props} >
		<H1>Cинтаксический анализ</H1>

		<div style={{ marginTop: '40px' }}>
			<Quote>
				Процесс сопоставления линейной последовательности лексем (слов, токенов) естественного или формального языка с его формальной грамматикой.
			</Quote>
		</div>

		<H4 style={{ marginTop: '40px', fontStyle: 'italic' }}>В конце у нас будет ответ на вопрос корректна ли формула. <br/> Если да то получим AST</H4>
	</Slide>
);

export default SyntaxAnalyze;
