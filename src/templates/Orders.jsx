import React from 'react';
import { OrderItem } from '@components/OrderItem';

function Orders() {
	return (
		<main className='orders-container'>
			<p className='orders-container__title'>My orders</p>
			<OrderItem />
		</main>
	);
}

export { Orders };
