import { useReducer } from 'react';
import './styles/global.css';

type state = {
	count: number;
}
type action = {
	type: string;
	payload: number;
}

function App() {
	const [ state, dispatch ] = useReducer(reducer, { count: 0 });

	function reducer(state: state, action: action) {
		switch (action.type) {
			case 'increment':
				return { count: state.count + action.payload };
			case 'decrement':
				return (state.count - action.payload) <= 0 ? { count: 0 } : { count: state.count - action.payload };
			default:
				return state;
		}
	}

	// Para cada novo botão, basta alterar o payload.
	return (
		<>
			<button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>-10</button>
			<button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>-1</button>

			<h1>{state.count}</h1>

			<button onClick={() => dispatch({ type: 'increment', payload: 1 })}>+1</button>
			<button onClick={() => dispatch({ type: 'increment', payload: 10 })}>+10</button>
		</>
	);
};

export default App;
