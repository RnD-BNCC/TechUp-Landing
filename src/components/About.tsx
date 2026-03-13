import { motion } from "motion/react";
import { Brain02Icon, ChartHistogramIcon, Globe02Icon, Idea01Icon } from "hugeicons-react";
import { NeoCard } from "./ui/neo-card";

const topics = [
	{
		icon: Brain02Icon,
		title: "AI-Powered Decision Making",
		description:
			"Explore how artificial intelligence transforms raw data into actionable insights that drive strategic business decisions across industries.",
	},
	{
		icon: ChartHistogramIcon,
		title: "Data Science in Practice",
		description:
			"Learn real-world applications of data science — from predictive analytics to automated systems that shape the digital economy.",
	},
	{
		icon: Globe02Icon,
		title: "Global Tech Career Paths",
		description:
			"Discover diverse career opportunities in Indonesia's tech industry and learn how to position yourself in the global AI workforce.",
	},
];

export function About() {
	return (
		<section id="about" className="relative px-6 py-28 sm:py-32 lg:px-8 border-b-2 border-border-dark overflow-hidden">
			<div className="absolute inset-0 bg-grid-dense opacity-30" />
			<div className="mx-auto max-w-7xl relative z-10">


				<div className="grid items-center gap-16 lg:grid-cols-2">

					<div>
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="mb-6 inline-flex border-2 border-bg-base bg-accent-blue px-4 py-1.5 shadow-brutal-sm"
						>
							<span className="text-xs font-bold uppercase tracking-widest text-text-primary">
								WHAT TO EXPECT
							</span>
						</motion.div>

						<motion.h2
							className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl uppercase"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.1 }}
						>
							<span className="text-text-primary">WHAT IS </span>
							<span className="text-metallic">TECH UP?</span>
						</motion.h2>

						<motion.p
							className="mt-6 max-w-xl text-lg text-text-secondary leading-relaxed font-medium"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							BNCC Tech Up 2026 is a hybrid talkshow that explores how AI and data serve as the core foundation for strategic decision-making in the digital era. Join us to understand how raw data is transformed into actionable insights.
						</motion.p>

						<motion.div
							className="mt-8 flex items-center gap-4"
							initial={{ opacity: 0, y: 15 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.3 }}
						>
							<div className="inline-flex items-center gap-3 border-2 border-border-light bg-bg-surface px-5 py-3 shadow-brutal-sm">
								<Idea01Icon size={20} className="text-accent-ice" />
								<span className="text-sm text-text-primary font-bold tracking-wide uppercase">
									100 ONSITE &times; 200 ONLINE
								</span>
							</div>
						</motion.div>
					</div>


					<motion.div
						className="relative flex items-center justify-center lg:justify-end"
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
					>
						<div className="relative h-72 w-full max-w-md border-4 border-border-dark bg-bg-surface shadow-brutal flex items-center justify-center overflow-hidden">

							<div className="absolute inset-0 flex flex-col justify-between py-8 opacity-20">
								{[...Array(5)].map((_, i) => (
									<div key={i} className="h-2 w-full bg-accent-blue" />
								))}
							</div>

							<motion.div 
								className="relative z-10 h-32 w-32 border-4 border-bg-base bg-accent-blue flex items-center justify-center shadow-brutal-sm"
								animate={{ rotate: 360 }}
								transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
							>
								<Brain02Icon size={48} className="text-bg-base" />
							</motion.div>
							
							<div className="absolute top-4 left-4 h-4 w-4 bg-white" />
							<div className="absolute bottom-4 right-4 h-4 w-4 bg-white" />
						</div>
					</motion.div>
				</div>


				<div className="mt-24 grid gap-6 md:grid-cols-3">
					{topics.map((topic, i) => (
						<NeoCard key={topic.title} hover delay={0.2 + i * 0.1} className="p-8 h-full flex flex-col">
							<div className="mb-6 inline-flex h-14 w-14 items-center justify-center border-2 border-bg-base bg-accent-blue shadow-brutal-sm shrink-0">
								<topic.icon size={28} className="text-bg-base" />
							</div>
							<h3 className="text-xl font-bold text-text-primary mb-3 uppercase tracking-tight">
								{topic.title}
							</h3>
							<p className="text-base text-text-secondary leading-relaxed font-medium flex-grow">
								{topic.description}
							</p>
						</NeoCard>
					))}
				</div>
			</div>
		</section>
	);
}
