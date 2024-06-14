import { useState } from 'react';
import '../../styles/form.scss';
import { TightInputField } from '../../components/TightInputField';
import useGetActiveElement from '../../hooks/useGetActiveElement';

interface FormValuesType {
	required: string;
	disabled: string;
	password: string;
}

export const LooseCouplingFormContainer = () => {
	const { isActive: isActiveRequired, activateOnFocus: activateOnFocusRequired, deactivateOnBlur: deactivateOnBlurRequired } = useGetActiveElement();
	const { isActive: isActivePassword, activateOnFocus: activateOnFocusPassword, deactivateOnBlur: deactivateOnBlurPassword } = useGetActiveElement();
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
					onFocus={activateOnFocusRequired}
					onBlur={deactivateOnBlurRequired}
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
					onFocus={activateOnFocusPassword}
					onBlur={deactivateOnBlurPassword}
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
