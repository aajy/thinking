import styled from 'styled-components';
interface ContainerProps {
	width: number;
}
const Container = styled.div<ContainerProps>`
	width: ${(props) => `${props.width}px`};
	padding: 10px 20px;
	background-color: #f4f7fd;
`;

export { Container };
