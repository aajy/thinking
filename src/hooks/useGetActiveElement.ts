import { useState } from 'react';

const useGetActiveElement = (): { isActive: boolean; activateOnFocus: () => void; deactivateOnBlur: () => void } => {
	const [isActive, setIsActive] = useState<boolean>(false);

	const activateOnFocus = () => {
		setIsActive(true);
	};

	const deactivateOnBlur = () => {
		setIsActive(false);
	};
	return { isActive, activateOnFocus, deactivateOnBlur };
};

export default useGetActiveElement;
