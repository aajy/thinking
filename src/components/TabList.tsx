import { Tab, TabButton } from '../styles/tab.styled';

interface TabListProps {
	uiList: Array<string>;
	activeTabIndex: number;
	setActiveTabIndex: React.Dispatch<React.SetStateAction<number>>;
}
export const TabList = ({ uiList, activeTabIndex, setActiveTabIndex }: TabListProps) => {
	return (
		<Tab len={uiList.length}>
			{uiList.map((el, index) => (
				<li>
					<TabButton index={index} len={uiList.length} activeTabIndex={activeTabIndex} onClick={() => setActiveTabIndex(index)}>
						{el}
					</TabButton>
				</li>
			))}
		</Tab>
	);
};
