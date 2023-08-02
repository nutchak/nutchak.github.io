import React from 'react';
import { Navigation } from './navigation/Navigation';
import { Example } from './navigation/Example';
import { Testnav }from './navigation/Testnav';

export default function Header() {
	return (
		<>
			<Example />
			<Testnav />
		</>
	);
}
