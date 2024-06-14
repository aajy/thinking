interface TightInputFieldProps {
	label: string;
	type: string;
	value?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	onFocus?: React.FocusEventHandler<HTMLInputElement>;
	onBlur?: React.FocusEventHandler<HTMLInputElement>;
	isActive?: boolean;
}

export const TightInputField = ({ label, type, value, onChange, onFocus, onBlur, isActive }: TightInputFieldProps) => {
	const stylingLabel = (label: string) => {
		if (label === 'Disabled') {
			return '';
		} else {
			if (isActive) {
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
				onFocus={onFocus}
				onBlur={onBlur}
				disabled={label === 'Disabled'}
			/>
		</div>
	);
};
