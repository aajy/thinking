import { useState } from 'react';

interface InputFieldProps {
	label: string;
	type: string;
	value?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const InputField = ({ label, type, value, onChange }: InputFieldProps) => {
	const [active, setActive] = useState(false);
	const stylingLabel = (label: string) => {
		if (label === 'Disabled') {
			return '';
		} else {
			if (active) {
				return 'active';
			} else {
				if (!value || value.length <= 0) {
					return 'default';
				} else {
					return '';
				}
			}
		}
	};
	return (
		<div className='inputField'>
			<label className={stylingLabel(label)} htmlFor={label}>
				{label === 'Required' ? `${label} *` : `${label}`}
			</label>
			<input
				name={label}
				type={type}
				className={stylingLabel(label)}
				value={value}
				onChange={(e) => {
					onChange?.(e);
				}}
				onFocus={() => setActive(true)}
				onBlur={() => setActive(false)}
				disabled={label === 'Disabled'}
			/>
		</div>
	);
};
