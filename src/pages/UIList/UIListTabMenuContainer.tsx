import { useState } from 'react';
import { Container } from '../../styles/container.styled';
import { TabList } from '../../components/TabList';
import { TabPanel } from '../../components/TabPanel';

export const UIListTabMenuContainer = () => {
	const uiList = ['Joy', 'Material', 'Base'];
	const [activeTabIndex, setActiveTabIndex] = useState(0);
	return (
		<Container width={500}>
			<TabList uiList={uiList} activeTabIndex={activeTabIndex} setActiveTabIndex={setActiveTabIndex} />
			<TabPanel activeTabIndex={activeTabIndex} />
		</Container>
	);
};
