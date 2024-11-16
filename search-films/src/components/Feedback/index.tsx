import Flex from '../Flex';
import Paragraph from '../Paragraph';
import Title from '../Title';
import { FeedbackProps } from './Feedback.props';
import styles from './index.module.css';

export default function Feedback(props: FeedbackProps) {
	return (
		<Flex gap={14} position='vertical' className={'no-justify-content'}>
			<div className={styles['movie-desc']}>
				<Flex position='horizontal'>
					<Title className={styles['movie-desc-title']} text={props.data.description}/>
					<Paragraph 
						text={props.data.review.author.dateCreated}
						fontSizeInPx={14}
						className={styles['movie-desc-date']}
					/>
				</Flex>
						
				<Paragraph 
					text={props.data.review.author.reviewBody}
					fontSizeInPx={20}
					className={styles['movie-desc-short-info']}
				/>
			</div>
		</Flex>
	);
}