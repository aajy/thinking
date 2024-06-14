import { TabPanelContent } from '../styles/tab.styled';
import { TabPanelDataType } from '../types/tabData';

interface TabPanelProps {
	tabPanelData: TabPanelDataType;
}

export const TabPanel = ({ tabPanelData }: TabPanelProps) => {
	console.log(tabPanelData);
	return <TabPanelContent>{Object.entries(tabPanelData).map(([key, value]) => `${key}: ${value}`)}</TabPanelContent>;
};
