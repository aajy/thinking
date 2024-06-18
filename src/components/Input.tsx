import { useState } from 'react';
import '../styles/input.scss';

interface InputProps {
	value?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	maxInputLength?: number;
}

export const Input = ({ value = '', onChange, maxInputLength = 20 }: InputProps) => {
	const [internalValue, setInternalValue] = useState<string>(value);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (onChange) onChange(e);
		setInternalValue(e.target.value);
	};

	const isActive = (value: string) => {
		if (value.length >= maxInputLength) return true;
		else return false;
	};

	return <input className={internalValue && isActive(internalValue) ? 'active' : ''} type='text' value={internalValue} onChange={handleChange} />;
};
