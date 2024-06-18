import styled from 'styled-components';

interface TabProps {
	$len: number;
}

interface ButtonProps {
	$index: number;
	$len: number;
	$isActive: boolean;
}

const getRadius = (props: ButtonProps) => {
	if (props.$index === 0) {
		return '10px 0px 0px 10px';
	} else if (props.$index === props.$len - 1) {
		return '0px 10px 10px 0px';
	}
};

const TabListWrap = styled.ul<TabProps>`
	width: 100%;
	display: flex;
	margin: 0;

	li {
		width: ${(props) => `calc(100% / ${props.$len})`};
	}
`;

const TabButton = styled.button<ButtonProps>`
	display: block;
	width: 100%;
	padding: 10px 30px;
	border-radius: ${(props) => getRadius(props)};
	cursor: pointer;
	background-color: #fefefe;
	transition: 0.3s;
	margin-bottom: 10px;

	${(props) => {
		if (props.$isActive) {
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

const TabPanelContent = styled.div`
	border: 1px solid #d8dcf1;
	border-radius: 5px;
	padding: 20px 10px;
	text-align: center;
`;

export { TabListWrap, TabButton, TabPanelContent };
