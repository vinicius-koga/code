import styles from './styles.module.css'
import { CirclePlay, StopCircleIcon } from 'lucide-react'
import { useRef } from 'react';
import { useAppContext } from '../../contexts/appContext';
import { Cycles } from '../Cycles';
import { FormMessage } from '../FormMessage';

export function HomeForm() {
	const { appState, dispatch } = useAppContext();

	// adding input ref
	const inputRef = useRef<HTMLInputElement>(null);

	// submit task dispatcher
	function dispatchSubmit(e: React.SubmitEvent) {
		e.preventDefault();
		dispatch({ type: 'submit', inputValue: inputRef.current?.value });
	};

	// interrupt task dispatcher
	function dispatchInterrupt() {
		dispatch({ type: 'interrupt' })
	}

	return (
		<>
			<form action="#" method="POST" onSubmit={dispatchSubmit} className={styles.taskForm}>
				<label htmlFor="task">Digite sua tarefa:</label>
				<input
					type="text"
					id="task"
					name="task"
					aria-describedby="user-task"
					required
					ref={inputRef}
					disabled={!!appState.activeTask}
					className={styles.formInput}
				/>

				{appState.activeTask === null ? 
					<span className={styles.formtaskMessage}>Inicie seus estudos</span> 
					: 
					<FormMessage activeTask={appState.activeTask}/>
				}

				<Cycles />

			{!appState.activeTask ? (
				<button type='submit'
						aria-label='initiate a new task'
						title='initiate a new task'
						className={`${styles.formSubmitBtn} ${styles.formBtnGreen}`}
						key='submitBtn'
				>
					<CirclePlay size={26}/>
				</button>
			) : (
				<button type='button'
						aria-label='interrupt the current task'
						title='interrupt the current task'
						className={`${styles.formSubmitBtn} ${styles.formBtnRed}`} 
						onClick={dispatchInterrupt}
						key='interruptBtn'
				>
					<StopCircleIcon size={26}/>
				</button>
			)}
			</form>
		</>
	)
}