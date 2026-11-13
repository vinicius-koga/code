import type { ActionType, AppStateType, TaskType } from "../contexts/appContext";
import { formatTime } from "./formatTime";
import { getNextCycleName, getNextCycleNumber } from "./getNextCycle";

export function submitTask(appState: AppStateType, action: ActionType) {
	// getting next cycle number
	const nextCycle = getNextCycleNumber(appState.currentCycle);
	// getting next cycle name
	const nextCycleName = getNextCycleName(nextCycle);

	// getting user input value
	const taskName = action.inputValue!.trim();
	if (!taskName) {
		action.inputValue! = ''
		alert('You need to type something');
		return appState;
	};

	// newTask creation
	const newTask: TaskType = {
		id: Date.now().toString(),
		name: taskName,
		duration: appState.config[nextCycleName],
		startDate: Date.now(),
		completeDate: null,
		interruptDate: null,
		type: nextCycleName,
	};

	// appState update
	const secondsRemaining = newTask.duration * 60;
	return {
		...appState,
		taskHistory: [...appState.taskHistory, newTask],
		activeTask: newTask,
		currentCycle: nextCycle,
		secondsRemaining,
		formattedTime: formatTime(secondsRemaining),
	};
}