import { DisabledInput } from '../../components/DisabledInput';
import { PasswordInput } from '../../components/PasswordInput';
import { RequiredInput } from '../../components/RequiredInput';

export const TightCouplingFormContainer = () => {
	return (
		<>
			<h1>Loose Coupling Form</h1>
			<div className='formContainer'>
				<RequiredInput />
				<DisabledInput />
				<PasswordInput />
			</div>
		</>
	);
};
