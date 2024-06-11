import { useState } from 'react';

export const RequiredInput = () => {
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
			<label className={stylingLabel()} htmlFor='required'>
				{`Required *`}
			</label>
			<input
				name='required'
				type='text'
				className={stylingLabel()}
				value={value}
				onChange={(e) => setValue(e.target.value)}
				onFocus={() => setIsActive(true)}
				onBlur={() => setIsActive(false)}
			/>
		</div>
	);
};
