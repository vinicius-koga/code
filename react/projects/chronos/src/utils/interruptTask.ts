import type { AppStateType } from "../contexts/appContext";

export function interruptTask(appState: AppStateType) {
	return {
			...appState,

			activeTask: null,
			formattedTime: '00:00',
			secondsRemaining: 0,
			currentCycle: 0,

			taskHistory: appState.taskHistory.map(task => {
				if (appState.activeTask && appState.activeTask.id === task.id) {
					return {
						...task,
						interruptDate: Date.now()
					}
				}
				return task;
			}),
		};
};