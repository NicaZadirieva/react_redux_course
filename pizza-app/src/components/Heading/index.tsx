import cn from 'classnames';
import { HeadingProps } from './Heading.props';
import styles from './index.module.css';

function Heading({children, className, ...props}: HeadingProps) {
	return (
		<h1 {...props} className={cn(className, styles['h1'])}>{children}</h1>
	);
};

export default Heading;