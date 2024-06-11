import { useState } from 'react';

const useInputFocus = (): [boolean, () => void, () => void] => {
	const [isActive, setIsActive] = useState<boolean>(false);

	const handleFocus = () => {
		setIsActive(true);
	};

	const handleBlur = () => {
		setIsActive(false);
	};
	return [isActive, handleFocus, handleBlur];
};

export default useInputFocus;
