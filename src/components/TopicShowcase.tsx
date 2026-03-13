import { motion } from "motion/react";
import {
	DatabaseIcon,
	ChartUpIcon,
	AiNetworkIcon,
	BrainIcon,
	Shield01Icon,
	CpuIcon,
	ArrowUpRight01Icon,
	Layers01Icon,
} from "hugeicons-react";
import { NeoCard } from "./ui/neo-card";

interface BentoCardProps {
	icon: React.ElementType;
	title: string;
	description: string;
	className?: string;
	accentColor?: string;
	delay: number;
}

function BentoCard({ icon: Icon, title, description, className, accentColor = "bg-accent-blue", delay }: BentoCardProps) {
	return (
		<NeoCard
			hover
			delay={delay}
			className={`p-6 sm:p-8 flex flex-col h-full ${className}`}
		>
			<div className={`mb-6 inline-flex h-12 w-12 items-center justify-center border-2 border-bg-base shadow-brutal-sm ${accentColor}`}>
				<Icon size={24} className="text-bg-base" />
			</div>
			<h3 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-tight">
				{title}
			</h3>
			<p className="text-sm text-text-secondary leading-relaxed font-medium mt-auto">
				{description}
			</p>
		</NeoCard>
	);
}

const bentoItems = [
	{
		icon: BrainIcon,
		title: "Neural Networks & Deep Learning",
		description:
			"How deep learning models process vast datasets to recognize patterns, predict outcomes, and automate complex decision processes at scale.",
		accentColor: "bg-accent-blue",
		className: "md:col-span-2",
	},
	{
		icon: DatabaseIcon,
		title: "Big Data Pipelines",
		description:
			"Modern data architectures that collect, transform, and deliver billions of data points in real-time.",
		accentColor: "bg-emerald-500",
		className: "md:col-span-1",
	},
	{
		icon: ChartUpIcon,
		title: "Predictive Analytics",
		description:
			"Statistical models and machine learning algorithms that forecast trends, behaviors, and market shifts before they happen.",
		accentColor: "bg-purple-500",
		className: "md:col-span-1",
	},
	{
		icon: AiNetworkIcon,
		title: "AI in Indonesia's Tech Ecosystem",
		description:
			"The growing adoption of AI across Indonesian startups and enterprises — from fintech fraud detection to e-commerce recommendation engines powering millions of transactions daily.",
		accentColor: "bg-rose-500",
		className: "md:col-span-2",
	},
	{
		icon: Shield01Icon,
		title: "Responsible AI",
		description:
			"Addressing bias, fairness, and transparency in systems. Building models that are accountable.",
		accentColor: "bg-amber-500",
		className: "md:col-span-1",
	},
	{
		icon: CpuIcon,
		title: "MLOps & Production AI",
		description:
			"Deploying, monitoring, and maintaining machine learning models in production environments at enterprise scale.",
		accentColor: "bg-cyan-500",
		className: "md:col-span-1",
	},
	{
		icon: ArrowUpRight01Icon,
		title: "Career Growth",
		description:
			"Emerging roles, salary trends, and skill requirements for aspiring data scientists and AI engineers.",
		accentColor: "bg-indigo-500",
		className: "md:col-span-1",
	},
	{
		icon: Layers01Icon,
		title: "The Data-Driven Organization",
		description:
			"How leading companies build a culture of data literacy — from executive dashboards to democratized analytics across every department.",
		accentColor: "bg-accent-blue",
		className: "md:col-span-2",
	},
];

export function TopicShowcase() {
	return (
		<section id="topics" className="relative px-6 py-28 sm:py-32 lg:px-8 border-b-2 border-border-dark bg-bg-base">
			<div className="mx-auto max-w-7xl relative z-10">

				<div className="mb-16 max-w-2xl">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="mb-6 inline-flex border-2 border-bg-base bg-bg-surface px-4 py-1.5 shadow-brutal-sm"
					>
						<span className="text-xs font-bold uppercase tracking-widest text-text-primary">
							DEEP DIVE TOPICS
						</span>
					</motion.div>

					<motion.h2
						className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl uppercase"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1 }}
					>
						<span className="text-text-primary block">THE AI & DATA </span>
						<span className="text-metallic block mt-2">LANDSCAPE</span>
					</motion.h2>

					<motion.p
						className="mt-6 text-lg text-text-secondary leading-relaxed font-medium"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						From neural networks to production ML systems — explore the technologies,
						practices, and career paths that define the modern data-driven world.
					</motion.p>
				</div>


				<div className="grid gap-6 md:grid-cols-3">
					{bentoItems.map((item, i) => (
						<BentoCard
							key={item.title}
							icon={item.icon}
							title={item.title}
							description={item.description}
							className={item.className}
							accentColor={item.accentColor}
							delay={0.1 + i * 0.05}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
