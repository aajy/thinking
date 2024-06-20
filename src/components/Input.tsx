import '../styles/input.scss';

interface InputProps {
	value: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	maxInputLength?: number;
}

export const Input = ({ value, onChange, maxInputLength = 20 }: InputProps) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (onChange) onChange(e);
	};

	const isActive = (value: string) => {
		if (value.length >= maxInputLength) return true;
		else return false;
	};

	return <input className={value && isActive(value) ? 'active' : ''} type='text' value={value} onChange={handleChange} />;
};
