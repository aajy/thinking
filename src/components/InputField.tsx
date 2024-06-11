interface InputFieldProps {
	label: string;
	type: string;
	value?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const InputField = ({ label, type, value, onChange }: InputFieldProps) => {
	const stylingLabel = (label: string) => {
		if (label === 'Disabled') {
			return '';
		} else {
			if (!value || value.length <= 0) {
				return 'labelDefault';
			} else {
				return 'active';
			}
		}
	};
	return (
		<div className='inputField'>
			<label className={stylingLabel(label)} htmlFor={label}>
				{label}
			</label>
			<input
				name={label}
				type={type}
				value={value}
				onChange={(e) => {
					onChange?.(e);
				}}
			/>
		</div>
	);
};
