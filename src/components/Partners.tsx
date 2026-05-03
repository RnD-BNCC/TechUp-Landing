import { motion } from "motion/react";

const goldSponsors = [
    { name: "BytePlus", logo: "/images/partners/sponsors/byte.webp" },
    { name: "Tricada Intronik", logo: "/images/partners/sponsors/trik.webp" },
];

const silverSponsors = [
    { name: "Vida", logo: "/images/partners/sponsors/vida.webp" },
];

const mediaPartners = [
    { name: "BTI", logo: "/images/partners/media/bti.webp" },
    { name: "HIMTI", logo: "/images/partners/media/himti.webp" },
    { name: "Program Males", logo: "/images/partners/media/prog-males.webp" },
    { name: "BSLC", logo: "/images/partners/media/bslc.webp" },
    { name: "CSC", logo: "/images/partners/media/csc.webp" },
    { name: "BGDC", logo: "/images/partners/media/bgdc.webp" },
    { name: "AIESEC", logo: "/images/partners/media/aiesec-blue.webp" },
    { name: "BNFC", logo: "/images/partners/media/bnfc.webp" },
    { name: "Hapkido", logo: "/images/partners/media/hapkido.webp" },
    { name: "Volley", logo: "/images/partners/media/volley.webp" },
];

function PartnerLogo({ name, logo, size }: { name: string; logo: string; size: "gold" | "silver" | "media" }) {
    const wrapperClassName = size === "media"
        ? "flex h-24 w-full max-w-44 items-center justify-center rounded-xl border-2 border-border-light bg-white px-4 py-3 shadow-brutal-sm"
        : size === "gold"
            ? "flex h-32 w-full max-w-sm items-center justify-center border-2 border-border-light bg-white px-6 py-4 shadow-brutal-sm rounded-2xl"
            : "flex h-28 w-full max-w-xs items-center justify-center border-2 border-border-light bg-white px-6 py-4 shadow-brutal-sm rounded-2xl";
    const imageClassName = size === "gold"
        ? "max-h-20 max-w-72 object-contain"
        : size === "silver"
            ? "max-h-14 max-w-56 object-contain"
            : "max-h-14 max-w-32 object-contain";

    return (
        <div className={wrapperClassName}>
            <img src={logo} alt={name} loading="lazy" decoding="async" width={700} height={300} className={imageClassName} />
        </div>
    );
}

export function Partners() {
    return (
        <section id="partners" className="relative overflow-hidden border-t-2 border-border-dark bg-bg-surface px-6 py-24 lg:px-8">
            <div className="absolute inset-0 bg-grid-dense opacity-20" />
            <div className="absolute -top-24 left-1/2 h-64 w-[70%] -translate-x-1/2 bg-accent-blue/10 blur-3xl" />
            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-6 inline-flex border-2 border-bg-base bg-accent-blue px-4 py-1.5 shadow-brutal-sm"
                    >
                        <span className="text-xs font-bold uppercase tracking-widest text-bg-base">
                            Event Partners
                        </span>
                    </motion.div>

                    <div className="mb-10 text-center">
                        <motion.h2
                            className="text-3xl font-bold uppercase tracking-tight text-text-primary sm:text-4xl"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            Supported By
                        </motion.h2>
                    </div>
                </div>

                <motion.div
                    className="mx-auto max-w-5xl space-y-8"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                >
                    <div className="grid items-center justify-items-center gap-8 sm:grid-cols-2">
                        {goldSponsors.map((partner) => (
                            <PartnerLogo key={partner.name} {...partner} size="gold" />
                        ))}
                    </div>
                    <div className="flex justify-center">
                        {silverSponsors.map((partner) => (
                            <PartnerLogo key={partner.name} {...partner} size="silver" />
                        ))}
                    </div>
                </motion.div>

                <div className="relative z-10 mx-auto mt-20 max-w-6xl">
                    <div className="mb-10 text-center">
                        <motion.h2
                            className="text-3xl font-bold uppercase tracking-tight text-text-primary sm:text-4xl"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            Media Partners
                        </motion.h2>
                    </div>

                    <motion.div
                        className="grid grid-cols-2 items-center justify-items-center gap-6 sm:grid-cols-3 lg:grid-cols-5"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        {mediaPartners.map((partner) => (
                            <PartnerLogo key={partner.name} {...partner} size="media" />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
