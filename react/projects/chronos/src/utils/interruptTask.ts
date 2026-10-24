import { type AppStateType } from "../contexts/appContext";

export function interruptTask(setAppState: React.Dispatch<React.SetStateAction<AppStateType>>) {
	setAppState(currentState => {
		return {
			...currentState,

			activeTask: null,
			formattedTime: '00:00',
			secondsRemaining: 0,
			currentCycle: 0,

			taskHistory: currentState.taskHistory.map(task => {
				if (currentState.activeTask && currentState.activeTask.id === task.id) {
					return {
						...task,
						interruptDate: Date.now()
					}
				}
				return task;
			}),
		};
	});
};