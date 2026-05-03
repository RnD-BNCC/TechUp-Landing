import { motion } from "motion/react";
import { UserIcon, SparklesIcon, Linkedin01Icon } from "hugeicons-react";
import { NeoCard } from "./ui/neo-card";

const speakers = [
    {
        name: "Eggy Tanuwijaya",
        role: "Enterprise Channel Partnership",
        company: "BytePlus",
        linkedin: "https://www.linkedin.com/in/eggy-tanuwijaya-010b50104",
        image: "/images/speakers/eggy_tanuwijaya.webp"
    },
    {
        name: "Risna Hendayana",
        role: "GM Product Engineering",
        company: "PT. Tricada Intronik",
        linkedin: "https://www.linkedin.com/in/risna-hendayana-43462942",
        image: "/images/speakers/risna_hendayana.webp"
    },
];

export function Speaker() {
    return (
        <section id="speaker" className="py-24 sm:py-32 px-6 lg:px-8 border-t-2 border-border-dark bg-bg-surface overflow-hidden relative">

            <div className="absolute -top-[50%] -right-[20%] w-full h-[200%] bg-accent-blue/5 -rotate-12 pointer-events-none" />

            <div className="mx-auto max-w-7xl relative z-10">

                <div className="text-center mb-16 sm:mb-24 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-6 inline-flex items-center gap-2 border-2 border-bg-base bg-accent-blue px-4 py-1.5 shadow-brutal-sm"
                    >
                        <SparklesIcon size={16} className="text-bg-base" />
                        <span className="text-xs font-bold uppercase tracking-widest text-bg-base">
                            FEATURED EXPERTS
                        </span>
                    </motion.div>

                    <motion.h2
                        className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl uppercase"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <span className="text-text-primary block">MEET THE </span>
                        <span className="text-metallic block mt-2">SPEAKERS</span>
                    </motion.h2>

                    <motion.p
                        className="mt-6 max-w-2xl mx-auto text-lg text-text-secondary leading-relaxed font-medium"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Learn from industry leaders who have successfully implemented data-driven decision making and AI strategies at top tech companies.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {speakers.map((speaker, index) => (
                        <motion.div
                            key={speaker.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        >
                            <NeoCard className="p-8 h-full flex flex-col items-center text-center border-4">
                                <div className="mb-8 flex h-36 w-36 items-center justify-center border-4 border-bg-base bg-bg-base shadow-brutal overflow-hidden">
                                    {speaker.image ? (
										<img
											src={speaker.image}
											alt={speaker.name}
											loading="lazy"
											decoding="async"
											width={720}
											height={720}
											className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-300"
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                                if (e.currentTarget.nextElementSibling) {
                                                    (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                                                }
                                            }}
                                        />
                                    ) : null}
                                    <div className="w-full h-full items-center justify-center bg-bg-base" style={{ display: speaker.image ? 'none' : 'flex' }}>
                                        <UserIcon size={40} className="text-text-muted" />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-text-primary mb-1 uppercase flex items-center gap-2 justify-center">
                                    {speaker.name}
                                    {speaker.linkedin && (
                                        <a
                                            href={speaker.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-accent-blue hover:text-white transition-colors"
                                            aria-label={`${speaker.name} LinkedIn`}
                                        >
                                            <Linkedin01Icon size={20} />
                                        </a>
                                    )}
                                </h3>

                                <div className="text-sm font-bold text-accent-blue tracking-widest uppercase mb-4">
                                    {speaker.role} <br />
                                    <span className="text-text-secondary text-xs">@ {speaker.company}</span>
                                </div>
                            </NeoCard>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
