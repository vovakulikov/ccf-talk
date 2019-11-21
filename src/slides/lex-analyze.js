import React from "react";

import { Slide } from "presa";
import {H1, H4} from "presa/blocks";
import Quote from "../components/quote";

const LexicalAnalyze = (props) => (
	<Slide {...props} >
		<H1>Лексический анализ</H1>

		<div style={{ marginTop: '40px' }}>
			<Quote>
				Процесс аналитического разбора входной последовательности символов на распознанные группы — лексемы, с целью получения на выходе идентифицированных последовательностей, называемых «токенами»
			</Quote>
		</div>

		<H4 style={{ marginTop: '40px', fontStyle: 'italic' }}>Необходимо разбить строку на токены (лексемы) и определить их тип</H4>
	</Slide>
);

export default LexicalAnalyze;
