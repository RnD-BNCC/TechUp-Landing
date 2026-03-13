import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

interface NeoButtonProps {
	children: ReactNode;
	className?: string;
	variant?: "primary" | "secondary";
	href?: string;
	onClick?: () => void;
}

export function NeoButton({
	children,
	className,
	variant = "primary",
	href,
	onClick,
}: NeoButtonProps) {
	const baseStyles = "relative inline-flex items-center justify-center gap-2.5 px-8 py-4 font-bold tracking-wide transition-all duration-150 active-brutal select-none";
	
	const variantClasses = {
		primary: "bg-accent-blue text-white border-2 border-white shadow-brutal",
		secondary: "bg-bg-surface text-text-primary border-2 border-border-light shadow-brutal hover:bg-bg-surface-hover",
	};

	const inner = (
		<span className={cn(baseStyles, variantClasses[variant], className)}>
			{children}
		</span>
	);

	if (href) {
		return (
			<a href={href} target="_blank" rel="noopener noreferrer" className="inline-block outline-none">
				{inner}
			</a>
		);
	}

	return <button onClick={onClick} className="outline-none">{inner}</button>;
}
