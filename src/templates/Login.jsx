import React from 'react';
import '@styles/login.scss';
import logoYardSale from '@images/logo_yard_sale.svg';
function Login() {
	const form = React.useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			username: formData.get('email'),
			password: formData.get('password'),
		};
		console.log(data);
	};

	return (
		<main className='login-container'>
			<img src={logoYardSale} alt='yard sale logo' className='login__logo' />
			<form action='' className='login__form' ref={form}>
				<label htmlFor='email' className='login__label'>
					Email address
				</label>
				<input
					type='email'
					className='login__input'
					placeholder='user@email.example'
					name='email'
				/>
				<label htmlFor='password' className='login__label'>
					Password
				</label>
				<input
					type='password'
					className='login__input'
					placeholder='*********'
					name='password'
				/>
				<input
					type='submit'
					value='Login'
					className='login__button'
					onClick={handleSubmit}
				/>
				<a href='#' className='login__text'>
					Forgot my password
				</a>
			</form>
			<div className='others'>
				<a href='#' className='others__button'>
					Sign up
				</a>
			</div>
		</main>
	);
}

export { Login };
