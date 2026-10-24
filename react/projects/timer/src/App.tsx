import { useRef, useState } from 'react';
import './styles/global.css';

function App() {
	const [state, setState] = useState({
		hours: 0,
		minutes: 0,
		seconds: 0
	})

	const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

	function handleStart() {
		if (intervalRef.current !== null) return;

		intervalRef.current = setInterval(() => {
			setState(prevState => {
				if (prevState.minutes === 59) {
					return {
						...prevState,
						hours: prevState.hours + 1,
						minutes: 0,
						seconds: 0,
					}
				} else if (prevState.seconds === 59) {
					return {
						...prevState,
						minutes: prevState.minutes + 1,
						seconds: 0,
					}
				} else {
					return {
						...prevState,
						seconds: prevState.seconds + 1,
					}
				}
			})
		}, 1000)
	}

	function handlePause() {
		if (intervalRef.current === null) return;

		clearInterval(intervalRef.current);
    	intervalRef.current = null;
	}

	function handleStop() {
		handlePause();
		setState(prevState => {
			return {
				...prevState,
				hours: 0,
				minutes: 0,
				seconds: 0
			}
		});
	}

	const hours = String(state.hours).padStart(2, "0");
	const minutes = String(state.minutes).padStart(2, "0");
	const seconds = String(state.seconds).padStart(2, "0");

	return (
		<>
			<div className='container bg'>
				<span className='timer'>{hours}:{minutes}:{seconds}</span>
			</div>
			<div className="container">
				<button type="button" onClick={handleStop}>stop</button>
				<button type="button" onClick={handlePause}>pause</button>
				<button type="button" onClick={handleStart}>start</button>
			</div>
		</>
	);
};

export default App;
