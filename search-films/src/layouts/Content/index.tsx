import type { ContentProps } from './content.props';

function Content({children}: ContentProps) {
	return (
		<div className="restrict-content-size">
			{children}
		</div>
	);
}
export default Content;