import styles from './styles/index.module.css';

export default function JournalBody({date, label, post}) {
	return (
		<div className={styles['journal-body']}>
			<div className={styles['journal-body__date']}>
				<div className={styles['journal-body__date-header']}>
					<img width={18} height={18} src='/calendar.svg'/>
					<span>Дата</span>
				</div>
				
				<div className={styles['journal-body__date-content']}>
					{date}
				</div>
			</div>
			<div className={styles['journal-body__label']}>
				<div className={styles['journal-body__label-header']}>
					<img width={18} height={18} src='/folder.svg'/>
					<span>Метка</span>
				</div>
				
				<div className={styles['journal-body__label-content']}>
					{label}
				</div>
			</div>
			<div className={styles['journal-body__text']}>{post}</div>
		</div>
	);
}