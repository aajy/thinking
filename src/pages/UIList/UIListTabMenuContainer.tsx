import { Container } from '../../styles/container.styled';
import { TabList } from '../../components/TabList';
import { TabPanel } from '../../components/TabPanel';

export const UIListTabMenuContainer = () => {
	const uiList: string[] = ['Joy', 'Material', 'Base'];

	const getActiveTab = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
	};

	return (
		<Container width={500}>
			<TabList tabDataList={uiList} handleTabClick={getActiveTab} />
			<TabPanel />
		</Container>
	);
};
