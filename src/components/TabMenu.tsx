import { Tab, TabButton } from '../styles/tab.styled';

interface TabMenuProps {
	UIList: Array<string>;
	activeTabIndex: number;
	setActiveTabIndex: React.Dispatch<React.SetStateAction<number>>;
}
export const TabMenu = ({ UIList, activeTabIndex, setActiveTabIndex }: TabMenuProps) => {
	return (
		<Tab len={UIList.length}>
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
