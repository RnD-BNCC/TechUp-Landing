import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

interface NeoCardProps {
	children: ReactNode;
	className?: string;
	hover?: boolean;
	as?: "div" | "article" | "button";
	delay?: number;
}

export function NeoCard({
	children,
	className,
	hover = false,
	as: Component = "div",
	delay = 0,
}: NeoCardProps) {
	const content = (
		<Component
			className={cn(
				"relative bg-bg-surface border-2 border-border-dark",
				"shadow-brutal gloss-overlay",
				hover && "transition-all duration-200 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_#000000] hover:border-border-light",
				className
			)}
		>
			{children}
		</Component>
	);

	if (delay > 0) {
		return (
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{
					type: "spring",
					stiffness: 100,
					damping: 20,
					delay,
				}}
				className={cn(className?.includes("h-full") && "h-full")}
			>
				{content}
			</motion.div>
		);
	}

	return content;
}
