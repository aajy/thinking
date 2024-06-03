import { TabBox } from '../styledComponents/tab';
interface TabContentProps {
	activeTabIndex: number;
}
export const TabContent = ({ activeTabIndex }: TabContentProps) => {
	return <TabBox>{activeTabIndex}</TabBox>;
};
