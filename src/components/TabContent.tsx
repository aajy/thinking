import { TabBox } from '../styles/tab.styled';
interface TabContentProps {
	activeTabIndex: number;
}
export const TabContent = ({ activeTabIndex }: TabContentProps) => {
	return <TabBox>{activeTabIndex}</TabBox>;
};
