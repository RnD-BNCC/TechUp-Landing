import { motion } from "motion/react";
import { NeoCard } from "./ui/neo-card";

const scheduleItems = [
    {
        time: "9:00 - 9:30",
        title: "Open Gate",
        description: "Registrasi ulang dan pendaftaran di tempat.",
        active: false,
    },
    {
        time: "9:30 - 9:35",
        title: "Opening MC",
        description: "Pembukaan acara.",
        active: false,
    },
    {
        time: "9:35 - 9:50",
        title: "Branding Session",
        description: "Sesi branding dari sponsor.",
        active: false,
    },
    {
        time: "9:50 - 9:55",
        title: "Perkenalan Narasumber",
        description: "Perkenalan narasumber acara.",
        active: true,
    },
    {
        time: "9:55 - 10:35",
        title: "Sesi Talkshow 1",
        description: "Materi oleh Risna Hendayana dari Tritronik.",
        active: true,
    },
    {
        time: "10:35 - 11:15",
        title: "Sesi Talkshow 2",
        description: "Materi oleh Eggy Tanuwijaya dari Byteplus.",
        active: true,
    },
    {
        time: "11:15 - 11:35",
        title: "Sesi QnA",
        description: "Sesi tanya jawab bersama narasumber.",
        active: true,
    },
    {
        time: "11:35 - 11:55",
        title: "Games",
        description: "Sesi games untuk peserta.",
        active: false,
    },
    {
        time: "11:55 - 12:00",
        title: "Sesi Pengumuman Pemenang Games dan QnA",
        description: "Pengumuman pemenang games dan QnA.",
        active: false,
    },
    {
        time: "12:00 - 12:05",
        title: "Sesi penyerahan sertifikat dan dokumentasi",
        description: "Penyerahan sertifikat kepada narasumber.",
        active: false,
    },
    {
        time: "12:05 - 12:10",
        title: "Sesi foto bersama",
        description: "Foto bersama narasumber, panitia, dan peserta.",
        active: false,
    },
    {
        time: "12:10 - 12:15",
        title: "Closing",
        description: "Penutupan acara dan pembagian exit ticket.",
        active: false,
    },
];

export function Schedule() {
    return (
        <section id="schedule" className="py-24 sm:py-32 px-6 lg:px-8 border-t-2 border-border-dark bg-grid">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr]">


                    <div className="lg:sticky lg:top-32 lg:self-start">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-6 inline-flex border-2 border-white bg-bg-surface px-4 py-1.5 shadow-brutal-sm"
                        >
                            <span className="text-xs font-bold uppercase tracking-widest text-text-primary">
                                EVENT TIMELINE
                            </span>
                        </motion.div>

                        <motion.h2
                            className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl uppercase"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <span className="text-text-primary block">EVENT </span>
                            <span className="text-metallic block mt-2">SCHEDULE</span>
                        </motion.h2>

                        <motion.p
                            className="mt-6 text-base font-bold text-text-secondary uppercase tracking-widest"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            SABTU, 9 MEI 2026 &middot; 09:00 WIB
                        </motion.p>

                        <motion.p
                            className="mt-6 max-w-sm text-lg text-text-secondary leading-relaxed font-medium"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            Rangkaian acara Tech Up 2026 dari registrasi, talkshow, QnA, games, hingga closing.
                        </motion.p>
                    </div>


                    <div className="relative">

                        <div className="absolute left-[29px] top-0 bottom-0 w-1 bg-border-dark sm:left-[33px]" />

                        <div className="space-y-8 relative z-10">
                            {scheduleItems.map((item, i) => (
                                <motion.div
                                    key={item.time}
                                    className="relative flex gap-6 sm:gap-8"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                                >

                                    <div className="mt-6 flex h-16 w-16 shrink-0 items-center justify-center bg-bg-base border-2 border-border-dark z-10 sm:mt-5">
                                        <div
                                            className={`h-4 w-4 ${item.active ? "bg-accent-blue shadow-[0_0_15px_rgba(37,99,235,0.8)]" : "bg-border-light"
                                                }`}
                                        />
                                    </div>


                                    <NeoCard
                                        hover
                                        className={`flex-1 p-6 sm:p-8 ${item.active ? "border-accent-blue shadow-brutal-accent bg-bg-surface-hover" : ""
                                            }`}
                                    >
                                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-6">
                                            <span
                                                 className={`shrink-0 font-bold text-lg ${item.active ? "text-accent-blue" : "text-text-muted"
                                                    }`}
                                            >
                                                {item.time}
                                            </span>
                                            <div>
                                                <h3
                                                     className={`font-bold text-xl uppercase tracking-tight mb-2 ${item.active ? "text-text-primary" : "text-text-secondary"
                                                        }`}
                                                >
                                                    {item.title}
                                                </h3>
                                                <p className="text-base text-text-muted font-medium leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </NeoCard>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
