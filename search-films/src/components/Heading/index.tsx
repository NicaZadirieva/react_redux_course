import cn from 'classnames';
import { HeadingProps } from './Heading.props';
import styles from './index.module.css';
function Heading({text, className}: HeadingProps) {
	return (
		<h1 className={cn(className, styles.title)}>{text}</h1>
	);
}

export default Heading;