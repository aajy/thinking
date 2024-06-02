import { UITab, UITabButton } from '../styledComponents/tab';

export const UIListTab = () => {
	const UIList = ['Joy', 'Material', 'Base'];
	return (
		<UITab>
			{UIList.map((el, index) => (
				<li>
					<UITabButton index={index} len={UIList.length}>
						{el}
					</UITabButton>
				</li>
			))}
		</UITab>
	);
};
