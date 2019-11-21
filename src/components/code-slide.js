import React from 'react';
import styled from 'styled-components';
import { Slide, ControlledFragment } from 'presa';
import { H3 } from 'presa/blocks';
import CustomCode from "./surf-code";

const gen = (from, to) => Array.from(Array(to + 1 - from).keys()).map(v => from + v)

const CodeSlide = (props) => {
	const { lightMap = {} } = props;

	return (
		<Slide {...props} layout={false} background="black">
			<ControlledFragment numberOfSteps={lightMap.length}>
				{(currentIndex) => {
					const lines = lightMap[currentIndex]
						? gen(lightMap[currentIndex].lines[0], lightMap[currentIndex].lines[1])
						: [];

					const SubTitle = lightMap[currentIndex] && lightMap[currentIndex].subTitle
						? lightMap[currentIndex].subTitle
						: EmptySubTitle;

					return (
						<CodeSlideContent>
							{props.title && <CodeH>{props.title || ''}</CodeH>}

							<CustomCode
								code={props.code}
								lines={lines}/>

								<div style={{ color: 'white'}}>
									<SubTitle/>
								</div>
							{/*{ subTitle && <p>{ <SubTitle/> }</p>}*/}
						</CodeSlideContent>
					)
				}}
			</ControlledFragment>
		</Slide>
	);
};


const EmptySubTitle = styled.p`
	display: none;
`;

const CodeH = styled(H3)`
	color: white;
`;

const CodeSlideContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px 64px;
  will-change: all;
`;

export default CodeSlide;
