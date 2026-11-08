import styles from './styles.module.css'
import type { TaskType } from '../../contexts/appContext';

export function FormMessage({ activeTask }: { activeTask: TaskType }) {
	switch (activeTask.type) {
		case 'workTime':
			return (
				<>
					<span className={styles.taskMessage}>Estude por <span className={styles.bold}>25min</span></span>
				</>
			)
		case 'shortBreakTime':
			return (
				<>
					<span className={styles.taskMessage}>Descanse por <span className={styles.bold}>5min</span></span>
				</>
			)
		case 'longBreakTime':
			return (
				<>
					<span className={styles.taskMessage}>Descanse por <span className={styles.bold}>15min</span></span>
				</>
			)
	}
}