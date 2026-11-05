import './styles/global.css'
import { createRoot } from 'react-dom/client'
import { AppContextProvider } from './contexts/appContext.tsx';
import App from './App.tsx'
//import { StrictMode } from 'react'

createRoot(document.getElementById('root')!).render(
	//<StrictMode>
		<AppContextProvider>
			<App />
		</AppContextProvider>
	//</StrictMode>
);
