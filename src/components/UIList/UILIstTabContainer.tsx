import { useState } from 'react';
import { Container } from '../../styledComponents/container';
import { TabMenu } from '../TabMenu';
import { TabContent } from '../TabContent';

export const UIListTabContainer = () => {
	const UIList = ['Joy', 'Material', 'Base'];
	const [activeTabIndex, setActiveTabIndex] = useState(0);
	return (
		<Container>
			<TabMenu UIList={UIList} activeTabIndex={activeTabIndex} setActiveTabIndex={setActiveTabIndex} />
			<TabContent activeTabIndex={activeTabIndex} />
		</Container>
	);
};
