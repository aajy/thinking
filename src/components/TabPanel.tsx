import { TabPanelContent } from '../styles/tab.styled';
interface TabPanelProps {
	activeTabIndex: number;
}
export const TabPanel = ({ activeTabIndex }: TabPanelProps) => {
	return <TabPanelContent>{activeTabIndex}</TabPanelContent>;
};
