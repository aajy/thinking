import { useState } from 'react';
import { TabListWrap, TabButton } from '../styles/tab.styled';

interface TabListProps {
	tabDataList: Array<string>;
	handleTabClick: React.MouseEventHandler<HTMLButtonElement>;
}
export const TabList = ({ tabDataList, handleTabClick }: TabListProps) => {
	const [activeTabIndex, setActiveTabIndex] = useState(0);
	return (
		<TabListWrap len={tabDataList.length}>
			{tabDataList.map((el, index) => (
				<li>
					<TabButton
						index={index}
						len={tabDataList.length}
						activeTabIndex={activeTabIndex}
						onClick={(e) => {
							handleTabClick(e);
							setActiveTabIndex(index);
						}}
					>
						{el}
					</TabButton>
				</li>
			))}
		</TabListWrap>
	);
};
