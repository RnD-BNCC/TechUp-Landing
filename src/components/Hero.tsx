import { motion } from "motion/react";
import { ArrowRight02Icon } from "hugeicons-react";
import { NeoButton } from "./ui/neo-button";
import { HeroShowcase } from "./hero-visuals/HeroShowcase";
import { MeteorShower } from "./hero-visuals/MeteorShower";

export function Hero() {
	return (
		<section className="relative h-[100dvh] w-full overflow-hidden border-b-2 border-border-dark bg-bg-base">
			<MeteorShower />
			<div className="mx-auto h-full w-full max-w-7xl px-6 pt-24 pb-12 flex flex-col lg:flex-row items-center">
				

				<div className="flex-1 w-full flex flex-col justify-center relative z-10">
					<motion.h1
						className="flex flex-col font-bold uppercase"
						initial={{ opacity: 0, x: -40 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
					>
						<span className="text-[clamp(3.5rem,8vw,7rem)] leading-[0.9] tracking-tighter text-text-primary">AI & DATA</span>
						<span className="text-[clamp(1.25rem,3vw,2.5rem)] leading-[1.1] tracking-tight text-metallic mt-2">
							THE POWER BEHIND DECISIONS
						</span>
					</motion.h1>

					<motion.div
						className="mt-8 h-2 w-24 bg-accent-blue shadow-brutal-sm"
						initial={{ scaleX: 0 }}
						animate={{ scaleX: 1 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						style={{ originX: 0 }}
					/>

					<motion.p
						className="mt-8 max-w-xl text-lg sm:text-xl text-text-secondary leading-relaxed font-medium"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.5 }}
					>
						Discover how data-driven technologies reshape decision-making and unlock career opportunities in Indonesia's thriving tech industry.
					</motion.p>

					<motion.div
						className="mt-12 flex flex-col sm:flex-row gap-5"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.7 }}
					>
						<NeoButton variant="primary" href="#register">
							REGISTER NOW
							<ArrowRight02Icon size={20} />
						</NeoButton>
					</motion.div>
				</div>


				<div className="hidden lg:flex flex-1 h-full w-full items-center justify-center p-8">
					<HeroShowcase />
				</div>
			</div>
		</section>
	);
}
