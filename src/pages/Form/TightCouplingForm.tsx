import { useState } from 'react';
import '../../styles/form.scss';
import { TightInputField } from '../../components/TightInputField';
import useInputFocus from '../../hooks/useInputFocus';
interface FormValuesType {
	required: string;
	disabled: string;
	password: string;
}
export const TightCouplingForm = () => {
	const [isActiveRequired, handleFocusRequired, handleBlurRequired] = useInputFocus();
	const [isActivePassword, handleFocusPassword, handleBlurPassword] = useInputFocus();
	const [FormValues, setFormValues] = useState<FormValuesType>({
		required: '',
		disabled: 'disabled',
		password: '',
	});
	return (
		<>
			<h1>Tight Coupling Form</h1>
			<div className='formContainer'>
				<TightInputField
					label='Required'
					type='text'
					value={FormValues.required}
					onFocus={handleFocusRequired}
					onBlur={handleBlurRequired}
					onChange={(e) =>
						setFormValues((prevValues) => ({
							...prevValues,
							required: e.target.value,
						}))
					}
					isActive={isActiveRequired}
				/>
				<TightInputField label='Disabled' type='text' value={FormValues.disabled} />
				<TightInputField
					label='Password'
					type='password'
					value={FormValues.password}
					onFocus={handleFocusPassword}
					onBlur={handleBlurPassword}
					onChange={(e) =>
						setFormValues((prevValues) => ({
							...prevValues,
							password: e.target.value,
						}))
					}
					isActive={isActivePassword}
				/>
			</div>
		</>
	);
};
