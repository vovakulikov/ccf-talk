import React from 'react';
import styled from 'styled-components';

import MathExpression, {Formula} from "../components/math-slide";

const Item = styled.div`
	display: flex;
	align-items: baseline;
	justify-content: flex-start;
	width: 100%;
	height: 40px;
`;

const FSMExplanation = (props) => (
	<MathExpression {...props} centered name="Автомат это пятерка">
		<Formula fontSize={30} formula="{\displaystyle M=(V,Q,q_{0},F,\delta )}" />

		<Item>
			<Formula fontSize={22} formula="V" />

			<span>&#160;— входной алфавит, из которого формируются входные слова;</span>
		</Item>

		<Item>
			<Formula fontSize={22} formula="Q " />
			&#160;— множество внутренних состояний
		</Item>

		<Item>
			<Formula fontSize={22} formula="q_{0} " />
			&#160;— начальное состояние <Formula fontSize={17} formula='(q_{0}\in Q)' />
		</Item>

		<Item>
			<Formula fontSize={22} formula="F " />
			&#160;— множество заключительных, или конечных состояний <Formula fontSize={17} formula='(F\subset Q)' />
		</Item>

		<Item>
			<Formula fontSize={22} formula="\delta   " />
			&#160;— функция переходов, определенная как отображение
			<Formula fontSize={17} formula='{\displaystyle \delta \colon Q\times (V\cup \{\varepsilon \})\rightarrow Q}' />
		</Item>

	</MathExpression>
);

export default FSMExplanation;
