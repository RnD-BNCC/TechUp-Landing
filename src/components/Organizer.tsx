import { motion } from "motion/react";
import { NeoCard } from "./ui/neo-card";
import { InfiniteSlider } from "./ui/infinite-slider";

const activities = [
	"IT Training",
	"Software Development",
	"Online Magazines",
	"Tech Events",
	"Technology Researches",
	"Workshops",
	"Hackathons",
	"Mentorship Programs",
];

export function Organizer() {
	return (
		<section id="organizer" className="py-24 sm:py-32 px-6 lg:px-8 bg-grid">
			<div className="mx-auto max-w-7xl">
				<NeoCard className="p-8 sm:p-12 overflow-hidden border-4">
					<div className="flex flex-col lg:flex-row gap-12 items-center">
						

						<div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-2/5 shrink-0">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6 }}
								className="mb-6 inline-flex border-2 border-border-light bg-bg-base px-4 py-1.5 shadow-brutal-sm"
							>
								<span className="text-xs font-bold uppercase tracking-widest text-text-primary">
									ORGANIZED BY
								</span>
							</motion.div>

							<motion.img
								src="/images/bncc-white.png"
								alt="BNCC - Bina Nusantara Computer Club"
								className="h-10 w-auto sm:h-12 mb-6"
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: 0.1 }}
							/>

							<motion.p
								className="text-base text-text-secondary leading-relaxed max-w-md font-medium"
								initial={{ opacity: 0, y: 15 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: 0.2 }}
							>
								Bina Nusantara Computer Club — one of the best computer-based
								organizations at BINUS University, celebrating{" "}
								<span className="text-text-primary font-bold underline decoration-2 decoration-accent-blue underline-offset-4">
									35 years of excellence
								</span>{" "}
								in technology education.
							</motion.p>
						</div>


						<div className="hidden lg:block w-0.5 h-32 bg-border-light" />
						<div className="lg:hidden h-0.5 w-full max-w-xs bg-border-light" />


						<div className="w-full lg:flex-1 min-w-0">
							<p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-6 text-center lg:text-left">
								CORE ACTIVITIES
							</p>
							<InfiniteSlider speed={35} gap={16} pauseOnHover>
								{activities.map((activity) => (
									<div
										key={activity}
										className="inline-flex shrink-0 items-center border-2 border-border-light bg-bg-base px-6 py-3 shadow-brutal-sm"
									>
										<span className="text-sm font-bold text-text-primary uppercase tracking-wider whitespace-nowrap">
											{activity}
										</span>
									</div>
								))}
							</InfiniteSlider>
						</div>
					</div>
				</NeoCard>
			</div>
		</section>
	);
}
