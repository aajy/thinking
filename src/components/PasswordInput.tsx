import { useState } from 'react';

export const PasswordInput = () => {
	const [isActive, setIsActive] = useState(false);
	const [value, setValue] = useState('');
	const stylingLabel = () => {
		if (isActive) {
			return 'active';
		} else {
			if (!value || value.length <= 0) {
				return 'default';
			} else {
				return '';
			}
		}
	};
	return (
		<div className='inputField'>
			<label className={stylingLabel()} htmlFor='password'>
				{`Password *`}
			</label>
			<input
				name='password'
				type='password'
				className={stylingLabel()}
				value={value}
				onChange={(e) => setValue(e.target.value)}
				onFocus={() => setIsActive(true)}
				onBlur={() => setIsActive(false)}
			/>
		</div>
	);
};
