interface UITabBoxProps {
	activeNum: number;
}
export const UITabBox = ({ activeNum }: UITabBoxProps) => {
	return <div>{activeNum}</div>;
};
