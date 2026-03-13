import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu01Icon, Cancel01Icon } from "hugeicons-react";

const navItems = [
	{ label: "About", href: "#about" },
	{ label: "Speaker", href: "#speaker" },
	{ label: "Schedule", href: "#schedule" },
	{ label: "BNCC", href: "#organizer" },
];

export function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<>
			<motion.nav
				className="fixed top-4 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.2 }}
			>
				<div
					className={`
						flex items-center justify-between border-2 px-6 py-3 transition-all duration-300
						${scrolled ? "bg-bg-surface border-border-dark shadow-brutal" : "bg-transparent border-transparent"}
					`}
				>
					<a href="#" className="flex items-center gap-4">
						<img
							src="/images/techup-logo.png"
							alt="Tech Up"
							className="h-8 w-auto"
						/>
					</a>


					<div className="hidden items-center gap-8 md:flex">
						{navItems.map((item) => (
							<a
								key={item.label}
								href={item.href}
								className="text-sm font-bold text-text-secondary transition-colors hover:text-text-primary uppercase tracking-wider"
							>
								{item.label}
							</a>
						))}
					</div>


					<a
						href="#register"
						className="hidden md:inline-flex items-center justify-center bg-bg-surface px-6 py-2.5 text-sm font-bold text-text-primary border-2 border-border-dark hover:bg-accent-blue hover:text-white transition-colors shadow-brutal-sm active-brutal"
					>
						REGISTER NOW
					</a>


					<button
						className="flex h-10 w-10 items-center justify-center border-2 border-border-dark bg-bg-surface text-text-primary md:hidden shadow-brutal-sm active-brutal"
						onClick={() => setMobileOpen(!mobileOpen)}
					>
						{mobileOpen ? (
							<Cancel01Icon size={24} color="currentColor" />
						) : (
							<Menu01Icon size={24} color="currentColor" />
						)}
					</button>
				</div>
			</motion.nav>


			<AnimatePresence>
				{mobileOpen && (
					<motion.div
						className="fixed top-28 left-4 right-4 z-50 border-2 border-border-light bg-bg-surface p-6 shadow-brutal md:hidden"
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.2 }}
					>
						<div className="flex flex-col gap-4">
							{navItems.map((item) => (
								<a
									key={item.label}
									href={item.href}
									onClick={() => setMobileOpen(false)}
									className="text-lg font-bold text-text-secondary hover:text-text-primary"
								>
									{item.label}
								</a>
							))}
							<div className="mt-4 border-t-2 border-border-dark pt-6">
								<a
									href="#register"
									onClick={() => setMobileOpen(false)}
									className="flex w-full items-center justify-center bg-accent-blue px-6 py-4 text-base font-bold text-white border-2 border-bg-base shadow-brutal active-brutal"
								>
									REGISTER NOW
								</a>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
