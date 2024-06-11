import { useState } from 'react';
import '../../styles/form.scss';
import { InputField } from '../../components/InputField';
interface FormValuesType {
	required: string;
	disabled: string;
	password: string;
}
export const FormContainer = () => {
	const [FormValues, setFormValues] = useState<FormValuesType>({
		required: '',
		disabled: 'disabled',
		password: '',
	});
	return (
		<>
			<div className='formContainer'>
				<InputField
					label='Required'
					type='text'
					value={FormValues.required}
					onChange={(e) =>
						setFormValues((prevValues) => ({
							...prevValues,
							required: e.target.value,
						}))
					}
				/>
				<InputField label='Disabled' type='text' value={FormValues.disabled} />

				<InputField
					label='Password'
					type='password'
					value={FormValues.password}
					onChange={(e) =>
						setFormValues((prevValues) => ({
							...prevValues,
							password: e.target.value,
						}))
					}
				/>
			</div>
			<div className='formValues'>
				{Object.keys(FormValues).map((property) => (
					<p key={property}>{`${property}: ${FormValues[property as keyof FormValuesType]}`}</p>
				))}
			</div>
		</>
	);
};
