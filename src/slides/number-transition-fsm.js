import React from 'react';

import CodeSlide from "../components/code-slide";

const code = `const transitions: TransitionMap<States> = {
  [States.Initial]: [
    { to: States.Integer, byCondition: isDigit },
    { to: States.NoNextState }
  ],
  [States.Integer]: [
    { to: States.Integer, byCondition: isDigit },
    { to: States.BeginNumberWithFractionalPart, byCondition: isCharacter('.') },
    { to: States.BeginNumberWithExponent, byCondition: isCharacter('e') },
    { to: States.NoNextState }
  ],
  [States.BeginNumberWithFractionalPart]: [
    { to: States.NumberWithFractionalPart, byCondition: isDigit },
    { to: States.NoNextState }
  ],
  [States.NumberWithFractionalPart]: [
    { to: States.NumberWithFractionalPart, byCondition: isDigit },
    { to: States.BeginNumberWithExponent, byCondition: isCharacter('e') },
    { to: States.NoNextState }
  ],
  [States.BeginNumberWithExponent]: [
    {
      to: States.BeginNumberWithSignedExponent,
      byCondition: (char: string) => isCharacter('+')(char) || isCharacter('-')(char)
    },
    { to: States.NumberWithExponent, byCondition: isDigit },
    { to: States.NoNextState }
  ],
  [States.BeginNumberWithSignedExponent]: [
    { to: States.NumberWithExponent, byCondition: isDigit },
    { to: States.NoNextState }
  ],
  [States.NumberWithExponent]: [
    { to: States.NumberWithExponent, byCondition: isDigit },
    { to: States.NoNextState }
  ],
  [States.NoNextState]: []
};`;

const highlightSettings = [
	{ lines: [2,5] },
	{ lines: [6,11] },
	{ lines: [12,15] }
];

const FSMTransition = (props) => (
	<CodeSlide {...props} code={code} lightMap={highlightSettings} />
);

export default FSMTransition;
