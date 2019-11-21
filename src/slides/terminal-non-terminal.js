import React from 'react';
import { Slide, ControlledFragment } from "presa";
import styled from 'styled-components';

const NonTerminal = styled.span`
	padding: 0 8px;
	background-color: ${props => props.highlight ? 'firebrick' : ''};
	color: ${props => props.highlight ? 'white' : 'black'};
	font-size: 40px;
	border-radius: 4px;
	margin: 5px;
`;

const Terminal = styled.span`
	padding: 0 8px;
	background-color: ${props => props.highlight ? 'teal' : ''};
	color: ${props => props.highlight ? 'white' : 'black'};
	font-size: 40px;
		border-radius: 4px;
	margin: 5px;
`;

const TermControls = styled.div`
	display: flex;
	justify-content: center;
`;

const Item = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const TerminalDemo = (props) => (
	<Slide {...props} centered>
		<ControlledFragment numberOfSteps={2}>
			{
				(currentFragment) => {
					const highlight = currentFragment == 1;
					return (
						<React.Fragment>

							<TermControls>
								<Terminal highlight={highlight}>Терминалы</Terminal>
								<NonTerminal highlight={highlight}>Нетерминалы</NonTerminal>
							</TermControls>

							<div style={{ marginTop: '40px' }}>
								<Item>
									<NonTerminal highlight={highlight}>S</NonTerminal> = <Terminal highlight={highlight}>-</Terminal><NonTerminal highlight={highlight}>B</NonTerminal> <br/>
								</Item>
								<Item>
									<NonTerminal highlight={highlight}>B</NonTerminal> = <NonTerminal highlight={highlight}>T</NonTerminal> | <NonTerminal highlight={highlight}>B</NonTerminal> <Terminal highlight={highlight}>+</Terminal>  <NonTerminal highlight={highlight}>T</NonTerminal> | <NonTerminal highlight={highlight}>B</NonTerminal> <Terminal highlight={highlight}>-</Terminal>  <NonTerminal highlight={highlight}>T</NonTerminal> <br/>
								</Item>
								<Item>
									<NonTerminal highlight={highlight}>T</NonTerminal> = <NonTerminal highlight={highlight}>J</NonTerminal> | <NonTerminal highlight={highlight}>T</NonTerminal> <Terminal highlight={highlight}>*</Terminal>  <NonTerminal highlight={highlight}>J</NonTerminal> | <NonTerminal highlight={highlight}>T</NonTerminal> <Terminal highlight={highlight}>/</Terminal> <NonTerminal highlight={highlight}>J</NonTerminal> <br/>
								</Item>
								<Item>
									<NonTerminal highlight={highlight}>J</NonTerminal> = <Terminal highlight={highlight}>(</Terminal><NonTerminal highlight={highlight}>B</NonTerminal><Terminal highlight={highlight}>)</Terminal> | <Terminal highlight={highlight}>p</Terminal> <br/>
								</Item>
							</div>
						</React.Fragment>
					);
				}
			}
		</ControlledFragment>
	</Slide>
);

export default TerminalDemo;
