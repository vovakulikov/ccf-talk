import React from 'react';
import { ControlledFragment, Slide } from "presa";
import styled from 'styled-components';
import {H2} from "presa/blocks";

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const Label = styled.div`
	color: white;
	background-color: darkgreen;
	font-size: 18px;
	left: 0;
	padding: 3px;
	border-radius: 4px;
	
	 ${props => props.side == 'top' 
			&& "top: 0; transform: translateY(calc( -100% - 10px))"
		}
	 
	  ${props => props.side == 'bottom'
			&& "top: 100; transform: translateY(10px)"
		}
`;

const Lexem = styled.div`
	position: relative;
	font-size: 35px;
	background-color: ${props => (props.hasHighlight ? 'yellow' : 'none')};
	line-height: 1.6;
	border-radius: 4px;
	padding: 0 8px;
	
	> ${Label} {
			display: ${props => (props.hasHighlight ? 'block' : 'none')};
			position: absolute;
	}
`;

const LexicalDemo = (props) => (
	<Slide centered {...props}>
		<ControlledFragment numberOfSteps={7}>
			{
				(currentIndex) => {
					const hasHighlight = currentIndex == 0;

					console.log(currentIndex, hasHighlight);
					return (
						<Container>

							<Lexem hasHighlight={currentIndex >= 0}>
								(
								<Label side="top">Open bracket</Label>
							</Lexem>
							&#160;
							&#160;

							<Lexem hasHighlight={currentIndex >= 1}>
								[Duration]
								<Label side="bottom">Variable</Label>
							</Lexem>

							&#160;
							&#160;

							<Lexem hasHighlight={currentIndex >= 2}>
								*
								<Label side="top">Operator</Label>
							</Lexem>

							&#160;
							&#160;

							<Lexem hasHighlight={currentIndex >= 3}>
								[SomeFactor]
								<Label side="bottom">Variable</Label>
							</Lexem>

							&#160;
							&#160;

							<Lexem hasHighlight={currentIndex >= 4}>
								)
								<Label side="top">Close bracket</Label>
							</Lexem>

							&#160;
							&#160;

							<Lexem hasHighlight={currentIndex >= 5}>
								+
								<Label side="bottom">Operator</Label>
							</Lexem>

							&#160;
							&#160;
							&#160;
							&#160;

							<Lexem hasHighlight={currentIndex >= 6}>
								[Start Date]
								<Label side="top" >Variable</Label>
							</Lexem>

						</Container>
					);
				}
			}
		</ControlledFragment>
	</Slide>
);

export default LexicalDemo;
