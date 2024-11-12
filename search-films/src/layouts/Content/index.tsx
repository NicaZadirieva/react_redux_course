import cn from 'classnames';
import type { ContentProps } from './content.props';
function Content({children, className}: ContentProps) {
	return (
		<div className={cn('restrict-content-size', className)}>
			{children}
		</div>
	);
}
export default Content;