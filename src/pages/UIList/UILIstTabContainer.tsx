import { useState } from 'react';
import { Container } from '../../styles/container.styled';
import { TabMenu } from '../../components/TabMenu';
import { TabContent } from '../../components/TabContent';

export const UIListTabContainer = () => {
	const UIList = ['Joy', 'Material', 'Base'];
	const [activeTabIndex, setActiveTabIndex] = useState(0);
	return (
		<Container width={500}>
			<TabMenu UIList={UIList} activeTabIndex={activeTabIndex} setActiveTabIndex={setActiveTabIndex} />
			<TabContent activeTabIndex={activeTabIndex} />
		</Container>
	);
};
