import Header from "./components/Header";
import MainSection from "./components/MainSection";

function App() {
	return (
		<div className="bg-white dark:bg-slate-950 min-h-screen">
			<div className="max-w-312.5 m-auto">
				<Header />
				<MainSection />
			</div>
		</div>
	)
}

export default App
