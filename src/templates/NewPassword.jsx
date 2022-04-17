import React from 'react';
import '@styles/NewPassword.scss';
import yardSaleLogo from '@images/logo_yard_sale.svg';
function NewPassword() {
	return (
		<div className='new-password'>
			<div className='new-password__container'>
				<img
					className='new-password__logo'
					src={yardSaleLogo}
					alt='yard sale logo'
				/>
				<h1 className='new-password__title'>Create a new password</h1>
				<p className='new-password__subtitle'>
					Enter a new password for your account
				</p>
				<form action='/' className='new-password__form'>
					<label htmlFor='password' className='new-password__label'>
						Password
					</label>
					<input
						type='password'
						className='new-password__input'
						id='password'
						placeholder='*********'
					/>
					<label htmlFor='new-password' className='new-password__label'>
						Re-enter password
					</label>
					<input
						type='password'
						className='new-password__input'
						id='new-password'
						placeholder='*********'
					/>
					<input
						type='submit'
						value='Confirm'
						className='primary-button login-button'
					/>
				</form>
			</div>
		</div>
	);
}

export { NewPassword };
