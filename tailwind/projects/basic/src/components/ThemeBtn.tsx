import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function ThemeBtn() {
	const [ theme, setTheme ] = useState(() => {
		const storageTheme = localStorage.getItem('theme');
		return storageTheme ? storageTheme : '';
	});

	function handleClick() {
		setTheme(currentTheme => {
			return currentTheme === 'dark' ? '' : 'dark';
		})
	}

	useEffect(() => {
		localStorage.setItem('theme', theme);
		document.getElementById('root')!.classList = theme;
	}, [theme]);

	return (
		<div className="fixed bottom-5 right-5 z-30 flex">
			{theme ? <Moon /> : <Sun />}
			<input 
				type="checkbox" 
				// se theme=(truthy) -> false // se theme=(falsy) -> true 
				checked={!theme} 
				className="toggle ml-2" 
				onChange={handleClick}
			/>
		</div>
	)
}

export default ThemeBtn