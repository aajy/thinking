interface InputFieldProps {
	label: string;
	type: string;
	value?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const InputField = ({ label, type, value, onChange }: InputFieldProps) => {
	return (
		<>
			<label htmlFor={label}>{label}</label>
			<input
				name={label}
				type={type}
				value={value}
				onChange={(e) => {
					onChange?.(e);
				}}
			/>
		</>
	);
};
