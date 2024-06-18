import { useState } from 'react';
import '../styles/input.scss';

interface InputProps {
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ onChange }: InputProps) => {
	const [value, setValue] = useState<string>('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (onChange) onChange(e);
		setValue(e.target.value);
	};

	const isActive = (value: string) => {
		if (value.length >= 10) return true;
		else return false;
	};

	return <input className={value && isActive(value) ? 'active' : ''} type='text' value={value} onChange={handleChange} />;
};
