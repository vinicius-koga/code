import { createContext, useContext, useEffect, useReducer } from "react";
import { interruptTask } from "../utils/interruptTask";
import { submitTask } from "../utils/submitTask";

// types
export type TaskType = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completeDate: number | null; // quando o timer chega ao final
  interruptDate: number | null; // quando a task for interrompida
  type: keyof AppStateType['config'];
};
export type AppStateType = {
  taskHistory: TaskType[];
  secondsRemaining: number;
  formattedTime: string;
  activeTask: TaskType | null;
  currentCycle: number;
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};
export type ActionType = {
	type: 'submit' | 'interrupt';
	inputValue?: string;
}
type AppContextType = {
	appState: AppStateType;
	dispatch: React.Dispatch<ActionType>;
};

// app initial state
const appInitialState: AppStateType = {
  taskHistory: [],
  secondsRemaining: 0,
  formattedTime: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

// context creation
const AppContext = createContext<AppContextType | null>(null);

// context provider
export function AppContextProvider({ children }: { children: React.ReactNode }) {

	// useReducer
	const [appState, dispatch] = useReducer((appState, action) => {
		switch(action.type) {
			case 'submit':
				return submitTask(appState, action);

			case 'interrupt':
				return interruptTask(appState);
		}
		return appState;
	}, appInitialState);

	useEffect(() => {
		console.log(appState);
	}, [appState])

	return (
		<AppContext.Provider value={{appState, dispatch}}>
			{children}
		</AppContext.Provider>
	)
};

// context consumer
export function useAppContext() {
	const context = useContext(AppContext);
	if (!context) {
        throw new Error("Componente deve estar dentro de AppContext.Provider.");
    };
	return context;
};