import React from 'react';
import '@styles/MyAccount.scss';
function MyAccount() {
	return (
		<main className='my-account'>
			<h1 className='my-account__title'>My account</h1>
			<form action='/' className='my-account__form'>
				<div className='my-account__items-container'>
					<label htmlFor='name' className='my-account__label'>
						Name
					</label>
					<p className='my-account__info'>My name</p>

					<label htmlFor='email' className='my-account__label'>
						Email address
					</label>
					<p className='my-account__info'>myemail@gmail.com</p>
					<label htmlFor='' className='my-account__label'>
						Password
					</label>
					<p className='my-account__info'>*********</p>
				</div>
				<input type='submit' value='Edit' className='my-account__button' />
			</form>
		</main>
	);
}

export { MyAccount };
