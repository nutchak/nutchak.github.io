import React from 'react';

export default function Box({ children }) {
	return /*#__PURE__*/ React.createElement(
		'div',
		{
			className:
				'flex flex-col items-center justify-center w-full bg-primary-l border-2 border-black p-8 m-10',
		},
		children,
	);
}
