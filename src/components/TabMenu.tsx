import { Tab, TabButton } from '../styledComponents/tab';

interface TabMenuProps {
	UIList: Array<string>;
	activeTabIndex: number;
	setActiveTabIndex: React.Dispatch<React.SetStateAction<number>>;
}
export const TabMenu = ({ UIList, activeTabIndex, setActiveTabIndex }: TabMenuProps) => {
	return (
		<Tab>
			{UIList.map((el, index) => (
				<li>
					<TabButton index={index} len={UIList.length} activeTabIndex={activeTabIndex} onClick={() => setActiveTabIndex(index)}>
						{el}
					</TabButton>
				</li>
			))}
		</Tab>
	);
};
