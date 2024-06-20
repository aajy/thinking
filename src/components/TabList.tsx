import { useState } from 'react';
import { TabListWrap, TabButton } from '../styles/tab.styled';

interface TabListProps {
	tabDataList: Array<string>;
	handleTabClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const TabList = ({ tabDataList, handleTabClick }: TabListProps) => {
	const [currentTab, setCurrentTab] = useState<string>(tabDataList[0]);

	return (
		<TabListWrap $len={tabDataList.length}>
			{tabDataList.map((el, index) => (
				<li key={index + el}>
					<TabButton
						$index={index}
						$len={tabDataList.length}
						$isActive={currentTab === el}
						onClick={(e) => {
							handleTabClick(e);
							setCurrentTab(el);
						}}
					>
						{el}
					</TabButton>
				</li>
			))}
		</TabListWrap>
	);
};
