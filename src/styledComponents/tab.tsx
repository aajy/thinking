import styled from 'styled-components';
interface ButtonProps {
	index: number;
	len: number;
}
const getRadius = (props: ButtonProps) => {
	if (props.index === 0) {
		return '10px 0px 0px 10px';
	} else if (props.index === props.len - 1) {
		return '0px 10px 10px 0px';
	}
};
const UITab = styled.ul`
	display: flex;
	background-color: #f7fbfe;
	padding: 10px 20px;
`;
const UITabButton = styled.button<ButtonProps>`
	color: #fff;
	padding: 10px 20px;
	border: 1px solid #eeeeee;
	color: #3e3e3e;
	border-radius: ${(props) => getRadius(props)};
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		border: 1px solid #8293d7;
		color: #8293d7;
		background-color: #f7fbfe;
	}
`;

export { UITab, UITabButton };
