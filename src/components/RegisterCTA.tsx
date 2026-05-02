import { motion } from "motion/react";
import { ArrowRight02Icon, AiLaptopIcon } from "hugeicons-react";
import { NeoButton } from "./ui/neo-button";
import { NeoCard } from "./ui/neo-card";

export function RegisterCTA() {
	return (
		<section
			id="register"
			className="relative px-6 py-24 sm:py-32 lg:px-8 border-t-2 border-border-dark bg-bg-surface overflow-hidden"
		>

			<div className="absolute inset-0 bg-grid-dense opacity-20 pointer-events-none" />
			<div className="absolute top-0 right-0 w-[50%] h-full bg-accent-blue/5 -skew-x-12 pointer-events-none" />

			<div className="relative z-10 mx-auto max-w-5xl">
				<NeoCard className="p-10 sm:p-16 text-center border-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<div className="mx-auto mb-8 h-2 w-24 bg-accent-blue shadow-brutal-sm" />

						<h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl uppercase">
							<span className="text-text-primary block">READY TO </span>
							<span className="text-metallic block mt-2">SHAPE THE FUTURE?</span>
						</h2>

						<p className="mx-auto mt-8 max-w-2xl text-lg sm:text-xl text-text-secondary leading-relaxed font-medium">
							Join 300 tech enthusiasts onsite at BINUS Alam Sutera Auditorium
							or online via Zoom. Seats are limited — secure yours now.
						</p>

						<div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
							<NeoButton variant="primary" href="#">
								REGISTER ONSITE
								<ArrowRight02Icon size={20} />
							</NeoButton>
							<NeoButton variant="secondary" href="#">
								<AiLaptopIcon size={20} />
								JOIN VIA ZOOM
							</NeoButton>
						</div>
					</motion.div>
				</NeoCard>
			</div>
		</section>
	);
}
