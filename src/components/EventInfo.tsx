import { motion } from "motion/react";
import { Calendar01Icon, Clock01Icon, Location01Icon, UserGroupIcon } from "hugeicons-react";
import { NeoCard } from "./ui/neo-card";

const infoItems = [
	{
		icon: Calendar01Icon,
		label: "DATE",
		value: "MAY 08, 2026",
	},
	{
		icon: Clock01Icon,
		label: "TIME",
		value: "12:30 - 16:00 WIB",
	},
	{
		icon: Location01Icon,
		label: "LOCATION",
		value: "BINUS ALAM SUTERA",
	},
	{
		icon: UserGroupIcon,
		label: "ATTENDEES",
		value: "300 PARTICIPANTS",
	},
];

export function EventInfo() {
	return (
		<section className="relative z-20 px-6 lg:px-8 -mt-12">
			<div className="mx-auto max-w-7xl">
				<NeoCard className="p-0 border-4 bg-bg-surface overflow-hidden">
					<div className="grid grid-cols-2 md:grid-cols-4 bg-border-dark gap-[2px]">
						{infoItems.map((item, i) => (
							<motion.div
								key={item.label}
								className="group flex flex-col p-6 sm:p-8 bg-bg-surface transition-colors hover:bg-bg-surface-hover"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: i * 0.1 }}
							>
								<div className="mb-4 inline-flex h-12 w-12 items-center justify-center border-2 border-bg-base bg-accent-blue shadow-brutal-sm group-hover:-translate-y-1 transition-transform">
									<item.icon size={24} color="var(--color-bg-base)" />
								</div>
								<p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-1">
									{item.label}
								</p>
								<p className="text-base sm:text-lg font-bold text-text-primary uppercase truncate">
									{item.value}
								</p>
							</motion.div>
						))}
					</div>
				</NeoCard>
			</div>
		</section>
	);
}
