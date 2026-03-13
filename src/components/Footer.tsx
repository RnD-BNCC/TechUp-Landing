import { MapPinIcon, Call02Icon, GlobalIcon } from "hugeicons-react";

export function Footer() {
	return (
		<footer className="relative border-t-4 border-border-dark px-6 py-16 sm:px-8 lg:px-12 bg-bg-base">
			<div className="relative z-10 mx-auto max-w-7xl">
				<div className="grid gap-12 lg:grid-cols-3">
					

					<div className="flex flex-col items-start max-w-sm">
						<img
							src="/images/techup-logo.png"
							alt="Tech Up 2026"
							className="h-12 w-auto object-contain mb-6"
						/>
						<p className="text-base text-text-secondary leading-relaxed font-medium mb-6">
							Tech Up 2026 — AI and Data: The Power Behind Decisions. A hybrid
							talkshow presented by BNCC at BINUS University.
						</p>
						<div className="flex flex-col gap-2">
							<span className="text-xs font-bold text-text-muted uppercase tracking-widest">Organized by</span>
							<img
								src="https://bncc.net/logo/bncc-white.png"
								alt="BNCC"
								className="h-8 w-auto object-contain opacity-70"
							/>
						</div>
					</div>


					<div className="flex flex-col items-start gap-4">
						<h4 className="text-sm font-bold uppercase tracking-widest text-text-primary mb-2">
							CONTACT
						</h4>
						<div className="flex items-center gap-4 text-base text-text-secondary font-medium">
							<div className="p-2 border-2 border-border-light bg-bg-surface">
								<MapPinIcon size={20} className="text-accent-blue" />
							</div>
							<span>Jl. Kebon Jeruk Raya No. 50, Jakarta Barat</span>
						</div>
						<div className="flex items-center gap-4 text-base text-text-secondary font-medium">
							<div className="p-2 border-2 border-border-light bg-bg-surface">
								<Call02Icon size={20} className="text-accent-blue" />
							</div>
							<span>(021) 536 532 79</span>
						</div>
						<div className="flex items-center gap-4 text-base text-text-secondary font-medium">
							<div className="p-2 border-2 border-border-light bg-bg-surface">
								<GlobalIcon size={20} className="text-accent-blue" />
							</div>
							<a
								href="https://www.bncc.net"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-text-primary transition-colors underline decoration-2 underline-offset-4"
							>
								www.bncc.net
							</a>
						</div>
					</div>


					<div className="flex flex-col items-start gap-4">
						<h4 className="text-sm font-bold uppercase tracking-widest text-text-primary mb-2">
							QUICK LINKS
						</h4>
						<a href="#register" className="text-base text-text-secondary font-bold hover:text-accent-blue transition-colors uppercase tracking-wider">
							Register Now
						</a>
						<a href="#about" className="text-base text-text-secondary font-bold hover:text-accent-blue transition-colors uppercase tracking-wider">
							About Event
						</a>
						<a href="#speaker" className="text-base text-text-secondary font-bold hover:text-accent-blue transition-colors uppercase tracking-wider">
							Speaker Info
						</a>
						<a href="#schedule" className="text-base text-text-secondary font-bold hover:text-accent-blue transition-colors uppercase tracking-wider">
							Timeline
						</a>
					</div>
				</div>


				<div className="mt-16 flex flex-col items-center gap-4 border-t-2 border-border-dark pt-8 sm:flex-row sm:justify-between">
					<p className="text-sm font-bold text-text-muted uppercase tracking-wider">
						&copy; 2026 BNCC. 35 YEARS OF EXCELLENCE.
					</p>
					<p className="text-sm font-bold text-text-muted/60 uppercase tracking-wider">
						AI & DATA: THE POWER BEHIND DECISIONS
					</p>
				</div>
			</div>
		</footer>
	);
}
