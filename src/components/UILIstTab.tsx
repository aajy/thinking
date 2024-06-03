import { UITab, UITabButton } from '../styledComponents/tab';

interface UIListTabProps {
	UIList: Array<string>;
	setActiveNum: React.Dispatch<React.SetStateAction<number>>;
}
export const UIListTab = ({ UIList, setActiveNum }: UIListTabProps) => {
	return (
		<UITab>
			{UIList.map((el, index) => (
				<li>
					<UITabButton index={index} len={UIList.length} onClick={() => setActiveNum(index)}>
						{el}
					</UITabButton>
				</li>
			))}
		</UITab>
	);
};
