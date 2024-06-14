import { Container } from '../../styles/container.styled';
import { TabList } from '../../components/TabList';
import { TabPanel } from '../../components/TabPanel';
import { TabPanelDataType } from '../../types/tabData';
import { useState } from 'react';

export const UIListTabMenuContainer = () => {
	const uiList: string[] = ['Joy UI', 'Material UI', 'Base UI'];
	const [activeTabPanelData, setActiveTabPanelData] = useState<TabPanelDataType>({
		userId: 1,
		id: 1,
		title: 'Joy UI',
		completed: false,
	});

	// 탭버튼 클릭 시 가져올 데이터 요청하는 함수
	const getActiveTabPanelData = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): TabPanelDataType => {
		e.preventDefault();
		fetchPanelData(e.currentTarget.innerText);
		return fetchPanelData(e.currentTarget.innerText);
	};

	// 데이터 요청 함수
	// TODO:: axios로 불러오기
	const fetchPanelData = (ActiveTab: string): TabPanelDataType => {
		let newData: TabPanelDataType;

		switch (ActiveTab) {
			case 'Joy UI':
				newData = {
					userId: 1,
					id: 1,
					title: 'Joy UI Title',
					completed: false,
				};
				break;
			case 'Material UI':
				newData = {
					userId: 2,
					id: 2,
					title: 'Material UI Title',
					completed: true,
				};
				break;
			case 'Base UI':
				newData = {
					userId: 3,
					id: 3,
					title: 'Base UI Title',
					completed: false,
				};
				break;
			default:
				newData = {
					userId: 0,
					id: 0,
					title: 'Unknown UI',
					completed: false,
				};
				break;
		}
		setActiveTabPanelData(newData);
		return newData;
	};
	return (
		<Container width={500}>
			<TabList tabDataList={uiList} handleTabClick={getActiveTabPanelData} />
			<TabPanel tabPanelData={activeTabPanelData} />
		</Container>
	);
};
