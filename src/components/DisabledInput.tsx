export const DisabledInput = () => {
	return (
		<div className='inputField'>
			<label className='' htmlFor='disabled'>
				Disabled
			</label>
			<input type='text' value='disabled' disabled />
		</div>
	);
};
