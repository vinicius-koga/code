import styles from './styles.module.css'
import { CirclePlay, StopCircleIcon } from 'lucide-react'
import { useRef } from 'react';
import { useAppContext, type TaskType } from '../../contexts/appContext';
import { getNextCycleNumber, getNextCycleName } from '../../utils/getNextCycle';
import { formatTime } from '../../utils/formatTime';
import { Cycles } from '../Cycles';
import { FormMessage } from '../FormMessage';
import { interruptTask } from '../../utils/interruptTask';

export function HomeForm() {
	const { appState, setAppState } = useAppContext();

	// adding input ref
	const inputRef = useRef<HTMLInputElement>(null);
	// getting next cycle number
	const nextCycle = getNextCycleNumber(appState.currentCycle);
	// getting next cycle name
	const nextCycleName = getNextCycleName(nextCycle);

	// submit handler
	function handleSubmit(e: React.SubmitEvent) {
		e.preventDefault();
		
		// getting user input value
		const taskName = inputRef.current!.value.trim();
		if (!taskName) {
			inputRef.current!.value = ''
			alert('You need to type something');
		};

		// newTask creation
		const newTask: TaskType = {
			id: Date.now().toString(),
			name: taskName,
			duration: appState.config[nextCycleName],
			type: nextCycleName,
			startDate: Date.now(),
			completeDate: null,
			interruptDate: null,
		};

		// appState update
		const secondsRemaining = newTask.duration * 60;
		setAppState(currentState => {
			return {
				...currentState,
				taskHistory: [...currentState.taskHistory, newTask],
				activeTask: newTask,
				currentCycle: nextCycle,
				secondsRemaining: secondsRemaining,
				formattedTime: formatTime(secondsRemaining),
			};
		});
	};

	function handleInterrupt() {
		interruptTask(setAppState);
	};

	return (
		<>
			<form action="#" method="POST" onSubmit={handleSubmit} className={styles.taskForm}>
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
						onClick={handleInterrupt}
						key='Btn'
				>
					<StopCircleIcon size={26}/>
				</button>
			)}
			</form>
		</>
	)
}