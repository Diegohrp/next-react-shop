import React from 'react';
import '@styles/CreateAccount.scss';
function CreateAccount() {
	return (
		<main className='create-account'>
			<h1 className='create-account__title'>My account</h1>
			<form action='/' className='create-account__form'>
				<div className='create-account__items-container'>
					<label for='name' className='create-account__label'>
						Name
					</label>
					<input
						type='text'
						name='name'
						id='name'
						className='create-account__input'
						placeholder='Name'
					/>
					<label for='email' className='create-account__label'>
						Email address
					</label>
					<input
						type='email'
						name='email'
						id='email'
						className='create-account__input'
						placeholder='user@email.example'
					/>
					<label for='' className='create-account__label'>
						Password
					</label>
					<input
						type='password'
						name='password'
						id='password'
						className='create-account__input'
						placeholder='*********'
					/>
				</div>
				<input
					type='submit'
					value='Create'
					className='create-account__button'
				/>
			</form>
		</main>
	);
}

export { CreateAccount };
