import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import {
	animate,
	motion,
	useAnimationControls,
	useMotionValue,
	useSpring,
	useTransform,
	useVelocity,
	type PanInfo,
} from "motion/react";
import { cn } from "../../lib/cn";

interface DragConstraints {
	top: number;
	left: number;
	right: number;
	bottom: number;
}

interface DraggableCardBodyProps {
	className?: string;
	children?: ReactNode;
}

interface DraggableCardContainerProps {
	className?: string;
	children?: ReactNode;
}

const springConfig = {
	stiffness: 100,
	damping: 20,
	mass: 0.5,
};

let topCardZIndex = 20;

export function DraggableCardBody({ className, children }: DraggableCardBodyProps) {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);
	const cardRef = useRef<HTMLDivElement>(null);
	const controls = useAnimationControls();
	const [zIndex, setZIndex] = useState(10);
	const [constraints, setConstraints] = useState<DragConstraints>({
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	});

	const velocityX = useVelocity(mouseX);
	const velocityY = useVelocity(mouseY);
	const rotateX = useSpring(useTransform(mouseY, [-300, 300], [18, -18]), springConfig);
	const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-18, 18]), springConfig);
	const opacity = useSpring(useTransform(mouseX, [-300, 0, 300], [0.9, 1, 0.9]), springConfig);
	const glareOpacity = useSpring(useTransform(mouseX, [-300, 0, 300], [0.16, 0, 0.16]), springConfig);

	useEffect(() => {
		const updateConstraints = () => {
			const card = cardRef.current;
			const container = card?.parentElement;

			if (!card || !container) {
				return;
			}

			const cardRect = card.getBoundingClientRect();
			const containerRect = container.getBoundingClientRect();

			setConstraints({
				top: containerRect.top - cardRect.top,
				left: containerRect.left - cardRect.left,
				right: containerRect.right - cardRect.right,
				bottom: containerRect.bottom - cardRect.bottom,
			});
		};

		updateConstraints();
		window.addEventListener("resize", updateConstraints);

		return () => {
			window.removeEventListener("resize", updateConstraints);
		};
	}, []);

	const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
		const { clientX, clientY } = event;
		const { width, height, left, top } = cardRef.current?.getBoundingClientRect() ?? {
			width: 0,
			height: 0,
			left: 0,
			top: 0,
		};
		const centerX = left + width / 2;
		const centerY = top + height / 2;

		mouseX.set(clientX - centerX);
		mouseY.set(clientY - centerY);
	};

	const handleMouseLeave = () => {
		mouseX.set(0);
		mouseY.set(0);
	};

	const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
		document.body.style.cursor = "default";

		controls.start({
			rotateX: 0,
			rotateY: 0,
			transition: {
				type: "spring",
				...springConfig,
			},
		});

		const currentVelocityX = velocityX.get();
		const currentVelocityY = velocityY.get();
		const velocityMagnitude = Math.sqrt(currentVelocityX * currentVelocityX + currentVelocityY * currentVelocityY);
		const bounce = Math.min(0.8, velocityMagnitude / 1000);

		animate(info.point.x, info.point.x + currentVelocityX * 0.3, {
			duration: 0.8,
			ease: [0.2, 0, 0, 1],
			bounce,
			type: "spring",
			stiffness: 50,
			damping: 15,
			mass: 0.8,
		});

		animate(info.point.y, info.point.y + currentVelocityY * 0.3, {
			duration: 0.8,
			ease: [0.2, 0, 0, 1],
			bounce,
			type: "spring",
			stiffness: 50,
			damping: 15,
			mass: 0.8,
		});
	};

	return (
		<motion.div
			ref={cardRef}
			drag
			dragConstraints={constraints}
			dragElastic={0.28}
			dragMomentum={false}
			onDragStart={() => {
				document.body.style.cursor = "grabbing";
				topCardZIndex += 1;
				setZIndex(topCardZIndex);
			}}
			onDragEnd={handleDragEnd}
			style={{
				rotateX,
				rotateY,
				opacity,
				zIndex,
				willChange: "transform",
			}}
			animate={controls}
			whileHover={{ scale: 1.02 }}
			whileDrag={{ scale: 1.06 }}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			className={cn(
				"relative z-10 min-h-80 w-64 cursor-grab overflow-hidden border-4 border-border-dark bg-bg-surface p-4 shadow-brutal active:cursor-grabbing sm:w-72",
				className,
			)}
		>
			{children}
			<motion.div
				style={{ opacity: glareOpacity }}
				className="pointer-events-none absolute inset-0 select-none bg-white"
			/>
		</motion.div>
	);
}

export function DraggableCardContainer({ className, children }: DraggableCardContainerProps) {
	return <div className={cn("[perspective:3000px]", className)}>{children}</div>;
}
