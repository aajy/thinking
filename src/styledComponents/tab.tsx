import styled from 'styled-components';
interface ButtonProps {
	index: number;
	len: number;
	activeTabIndex: number;
}
const getRadius = (props: ButtonProps) => {
	if (props.index === 0) {
		return '10px 0px 0px 10px';
	} else if (props.index === props.len - 1) {
		return '0px 10px 10px 0px';
	}
};
const Tab = styled.ul`
	display: flex;
	padding: 10px 20px;
	gap: -1px;
`;
const TabButton = styled.button<ButtonProps>`
	padding: 10px 20px;
	border-radius: ${(props) => getRadius(props)};
	cursor: pointer;
	background-color: #fefefe;
	transition: 0.3s;
	${(props) => {
		if (props.activeTabIndex === props.index) {
			return `border: 1px solid #4261df;
				color: #4261df;
				background-color: #edeffd;
				&:hover {
		background-color: #d8dcf1;
	}`;
		} else {
			return `border: 1px solid #eeeeee;
				color: #3e3e3e;
				&:hover {
					background-color: #f7f7f7;
				}`;
		}
	}}
`;

const TabBox = styled.div`
	color: red;
`;

export { Tab, TabButton, TabBox };
