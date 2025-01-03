import cn from 'classnames';
import styles from './index.module.css';
import { TitleProps } from './Title.props';
function Title({text, className}: TitleProps) {
	return (
		<h1 className={cn(className, styles.title)}>{text}</h1>
	);
}

export default Title;