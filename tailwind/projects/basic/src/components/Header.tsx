import { Menu, X } from "lucide-react";
import { useState } from "react";

function Header() {
	const [ isOpen, setIsOpen ] = useState(false);

	return (
		<>
			{/* HEADER */}
			<div className="flex justify-between py-5 px-5 bg-slate-950 text-white">
				{/* LOGO */}
				<div className="cursor-pointer">Logo</div>

				{/* DESKTOP NAVBAR */}
				<nav>
					<ul className="hidden sm:flex gap-8">
						<li><a href="#">Início</a></li>
						<li><a href="#">Sobre</a></li>
						<li><a href="#">Contato</a></li>
					</ul>
				</nav>

				{/* MOBILE MENU-ICON */}
				<Menu 
					className="cursor-pointer hover:scale-110 transition-all duration-300 sm:hidden"
					onClick={() => setIsOpen(true)}
				/>
			</div>

			{/* MOBILE HAMBURGER MENU */}
			<nav
				className={`sm:hidden z-2 fixed right-0 top-0 h-screen w-64 bg-slate-950 
					      text-white p-6 flex items-start 
							transition-all duration-300
						    ${isOpen ? "translate-x-0" : "translate-x-full"}
				`}
			>
				<button onClick={() => setIsOpen(false)}>
					<X className="cursor-pointer hover:scale-110 transition-all"/>
				</button>

				<ul className="flex flex-col gap-4 text-right w-full">
					<li><a href="#">Início</a></li>
					<li><a href="#">Sobre</a></li>
					<li><a href="#">Contato</a></li>
				</ul>
			</nav>

			{/* MOBILE MENU BACKDROP */}
			{isOpen && <div 
				className="bg-black opacity-35 absolute top-0 bottom-0 right-0 left-0 z-1 sm:hidden"
				onClick={() => {setIsOpen(false)}}
			></div>}
		</>
	)
}

export default Header