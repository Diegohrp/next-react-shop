import React from 'react';
import { Header } from '@components/Header';
function Layout(props) {
	return (
		<div className='Layout'>
			<Header />
			{props.children}
		</div>
	);
}

export { Layout };
