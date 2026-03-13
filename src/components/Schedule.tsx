import { motion } from "motion/react";
import { NeoCard } from "./ui/neo-card";

const scheduleItems = [
	{
		time: "12:30",
		title: "Open Gate & Registration",
		description: "Participant check-in, on-site registration, and venue access.",
		active: false,
	},
	{
		time: "13:30",
		title: "Opening & Introductions",
		description: "Official welcome by MC, partner branding sessions, and speaker introductions.",
		active: false,
	},
	{
		time: "13:50",
		title: "The Main Talkshow",
		description: "Deep dive into AI and data roles in decision making, strategy, and ethics.",
		active: true,
	},
	{
		time: "14:50",
		title: "Interactive Q&A Session",
		description: "Direct interaction between online/onsite participants and the expert panel.",
		active: false,
	},
	{
		time: "15:20",
		title: "Games & Closing",
		description: "Kahoot games, prize announcements, certificate handovers, and final wrap-up.",
		active: false,
	},
];

export function Schedule() {
	return (
		<section id="schedule" className="py-24 sm:py-32 px-6 lg:px-8 border-t-2 border-border-dark bg-grid">
			<div className="mx-auto max-w-7xl">
				<div className="grid gap-16 lg:grid-cols-[1fr_1.5fr]">
					

					<div className="lg:sticky lg:top-32 lg:self-start">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="mb-6 inline-flex border-2 border-white bg-bg-surface px-4 py-1.5 shadow-brutal-sm"
						>
							<span className="text-xs font-bold uppercase tracking-widest text-text-primary">
								EVENT TIMELINE
							</span>
						</motion.div>

						<motion.h2
							className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl uppercase"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.1 }}
						>
							<span className="text-text-primary block">EVENT </span>
							<span className="text-metallic block mt-2">SCHEDULE</span>
						</motion.h2>

						<motion.p
							className="mt-6 text-base font-bold text-text-secondary uppercase tracking-widest"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							FRIDAY, MAY 08, 2026 &middot; 12:30 WIB
						</motion.p>

						<motion.p
							className="mt-6 max-w-sm text-lg text-text-secondary leading-relaxed font-medium"
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.3 }}
						>
							From the opening introduction to the final networking session, every part of the timeline is designed to maximize insight into data and AI.
						</motion.p>
					</div>


					<div className="relative">

						<div className="absolute left-[29px] top-0 bottom-0 w-1 bg-border-dark sm:left-[33px]" />

						<div className="space-y-8 relative z-10">
							{scheduleItems.map((item, i) => (
								<motion.div
									key={item.time}
									className="relative flex gap-6 sm:gap-8"
									initial={{ opacity: 0, x: 20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
								>

									<div className="mt-6 flex h-16 w-16 shrink-0 items-center justify-center bg-bg-base border-2 border-border-dark z-10 sm:mt-5">
										<div
											className={`h-4 w-4 ${
												item.active ? "bg-accent-blue shadow-[0_0_15px_rgba(37,99,235,0.8)]" : "bg-border-light"
											}`}
										/>
									</div>


									<NeoCard
										hover
										className={`flex-1 p-6 sm:p-8 ${
											item.active ? "border-accent-blue shadow-brutal-accent bg-bg-surface-hover" : ""
										}`}
									>
										<div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-6">
											<span
												className={`shrink-0 font-bold text-lg ${
													item.active ? "text-accent-blue" : "text-text-muted"
												}`}
											>
												{item.time}
											</span>
											<div>
												<h3
													className={`font-bold text-xl uppercase tracking-tight mb-2 ${
														item.active ? "text-text-primary" : "text-text-secondary"
													}`}
												>
													{item.title}
												</h3>
												<p className="text-base text-text-muted font-medium leading-relaxed">
													{item.description}
												</p>
											</div>
										</div>
									</NeoCard>
								</motion.div>
							))}
						</div>
					</div>

				</div>
			</div>
		</section>
	);
}
