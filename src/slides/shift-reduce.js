import React from 'react';
import { Slide } from "presa";
import styled from 'styled-components';

const Table = styled.table`
	table-layout: fixed;
	border-collapse: collapse;
`;

const StackColumn = styled.th`
	width: 200px;
`;

const ActionColumn = styled.th`
	width: 200px;
`;

const Cell = styled.td`
	padding: 5px 8px;
	text-align: ${props => props.centerd ? 'center' : 'left'};
`;

const Thead = styled.thead`
	height: 40px;
`;

const ShiftReduce = (props) => (
	<Slide {...props}>
		<Table>
			<Thead>
				<tr>
					<th>Входная цепочка</th>
					<StackColumn>Стек</StackColumn>
					<ActionColumn>Действие</ActionColumn>
					<th>Правило свертки</th>
				</tr>
			</Thead>
			<tbody>
				<tr>
					<Cell>-p&p^p</Cell>
					<Cell></Cell>
					<Cell centerd>Перенос</Cell>
					<Cell></Cell>
				</tr>
				<tr>
					<Cell>p&p^p</Cell>
					<Cell>-</Cell>
					<Cell centerd>Перенос</Cell>
					<Cell></Cell>
				</tr>
				<tr>
					<Cell>&p^p</Cell>
					<Cell>-p</Cell>
					<Cell centerd>Свертка</Cell>
					<Cell></Cell>
				</tr>
				<tr>
					<Cell>&p^p</Cell>
					<Cell>-E</Cell>
					<Cell centerd>Перенос</Cell>
					<Cell>7</Cell>
				</tr>
				<tr>
					<Cell>p^p</Cell>
					<Cell>-E&</Cell>
					<Cell centerd>Перенос</Cell>
					<Cell>7</Cell>
				</tr>
				<tr>
					<Cell>^p</Cell>
					<Cell>-E&p</Cell>
					<Cell centerd>Свертка</Cell>
					<Cell>7</Cell>
				</tr>
				<tr>
					<Cell>^p</Cell>
					<Cell>-E&E</Cell>
					<Cell centerd>Перенос</Cell>
					<Cell>7 7 </Cell>
				</tr>
				<tr>
					<Cell>p</Cell>
					<Cell>-E&E^</Cell>
					<Cell centerd>Перенос</Cell>
					<Cell>7 7 </Cell>
				</tr>
				<tr>
					<Cell></Cell>
					<Cell>-E&E^p</Cell>
					<Cell centerd>Свертка</Cell>
					<Cell>7 7 7</Cell>
				</tr>
				<tr>
					<Cell></Cell>
					<Cell>-E&E^E</Cell>
					<Cell centerd>Свертка</Cell>
					<Cell>7 7 7 5</Cell>
				</tr>
				<tr>
					<Cell></Cell>
					<Cell>-E&E</Cell>
					<Cell centerd>Свертка</Cell>
					<Cell>7 7 7 5, 3</Cell>
				</tr>
				<tr>
					<Cell></Cell>
					<Cell>-E</Cell>
					<Cell centerd>Свертка</Cell>
					<Cell>7 7 7 5 3</Cell>
				</tr>
				<tr>
					<Cell></Cell>
					<Cell>E</Cell>
					<Cell centerd>Свертка</Cell>
					<Cell>7 7 7 5 3, 1</Cell>
				</tr>
			</tbody>
		</Table>
	</Slide>
);

export default ShiftReduce;
