import cn from 'classnames';
import { forwardRef } from 'react';
import styles from './index.module.css';
import { SearchProps } from './Search.props';

const Search = forwardRef<HTMLInputElement, SearchProps>(function Input({ isValid = true, className, ...props} : SearchProps, ref) {
	return (
		<div className={styles['input-wrapper']}>
			<input ref={ref} {...props} className={cn(styles['input'], className, {
				[styles['invalid']]: isValid == false
			})}/>
			<img className={styles['icon']} alt='Иконка лупы' src='/search-icon.svg' />
		</div>
	);
});

export default Search;