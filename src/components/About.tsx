import { motion } from "motion/react";
import { Brain02Icon, Idea01Icon } from "hugeicons-react";
import { DraggableCardBody, DraggableCardContainer } from "./ui/draggable-card";

const documentationItems = [
	{
		title: "1.png",
		image: "/images/documentation/techup-01.webp",
		width: 520,
		height: 347,
		className: "rotate-[-7deg]",
	},
	{
		title: "2.jpeg",
		image: "/images/documentation/techup-02.webp",
		width: 520,
		height: 347,
		className: "-translate-y-6 rotate-[5deg]",
	},
	{
		title: "3.jpg",
		image: "/images/documentation/techup-03.webp",
		width: 347,
		height: 520,
		className: "rotate-[-3deg]",
	},
	{
		title: "4.webp",
		image: "/images/documentation/techup-04.webp",
		width: 520,
		height: 347,
		className: "translate-y-8 rotate-[6deg]",
	},
	{
		title: "5.png",
		image: "/images/documentation/techup-05.webp",
		width: 347,
		height: 520,
		className: "-translate-y-3 rotate-[-5deg]",
	},
	{
		title: "6.jpg",
		image: "/images/documentation/techup-06.webp",
		width: 347,
		height: 520,
		className: "translate-y-12 rotate-[4deg]",
	},
	{
		title: "7.jpg",
		image: "/images/documentation/techup-07.webp",
		width: 347,
		height: 520,
		className: "translate-y-10 rotate-[-4deg]",
	},
];

export function About() {
    return (
        <section id="about" className="relative z-40 px-6 py-28 sm:py-32 lg:px-8 border-b-2 border-border-dark overflow-visible">
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
                                    JOIN 300+ ATTENDEES
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


				<div className="mt-24 text-center">
					<motion.h3
						className="text-3xl font-bold uppercase tracking-tight text-text-primary sm:text-4xl md:text-5xl"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						Past <span className="text-metallic">Highlights</span>
					</motion.h3>
				</div>

				<DraggableCardContainer className="relative z-40 mt-12 flex min-h-[58rem] flex-wrap items-center justify-center gap-x-8 gap-y-14 overflow-visible px-6 py-20 xl:px-0">

					{documentationItems.map((item) => (
						<DraggableCardBody key={item.title} className={item.className}>
							<img
								src={item.image}
								alt={item.title}
								loading="lazy"
								decoding="async"
								width={item.width}
								height={item.height}
								className="pointer-events-none relative z-10 h-56 w-full border-2 border-border-light object-cover shadow-brutal sm:h-64"
							/>
							<div className="h-14" />
						</DraggableCardBody>
					))}
				</DraggableCardContainer>
            </div>
        </section>
    );
}
