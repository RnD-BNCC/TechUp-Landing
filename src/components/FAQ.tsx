import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Message01Icon } from "hugeicons-react";
import { NeoCard } from "./ui/neo-card";

const faqs = [
    {
        question: "Siapa saja yang dapat mengikuti event BNCC Tech Up?",
        answer: "Acara ini terbuka untuk Binusian (mahasiswa BINUS) dan maupun masyarakat umum yang tertarik untuk mengenal lebih jauh tentang AI dan peran data dalam pengambilan keputusan.",
    },
    {
        question: "Apakah ada biaya untuk mengikuti event BNCC Tech Up?",
        answer: "Tidak, peserta dapat mengikuti acara BNCC Tech Up secara gratis tanpa dipungut biaya apapun.",
    },
    {
        question: "Apakah acara ini ada batasan kuota?",
        answer: "Untuk peserta online tidak terdapat batasan kuota. Namun, peserta onsite memiliki kuota terbatas.",
    },
    {
        question: "Apakah bisa registrasi secara on the spot?",
        answer: "Bisa. Registrasi on the spot dapat dilakukan langsung di meja depan Auditorium BINUS @Alam Sutera [B0501].",
    },
    {
        question: "Apakah Binusian akan mendapatkan SAT?",
        answer: "Binusian akan mendapatkan poin SAT dengan syarat telah mendaftar, melakukan re-registrasi, mengikuti acara hingga selesai, dan mengisi exit ticket.",
    },
];

const contacts = [
    {
        name: "Jason Prayogo Chois's",
        phone: "+62 822-5258-1338",
        link: "https://wa.me/6282252581338",
    },
    {
        name: "Rebecca Jielian",
        phone: "+62 813-5204-8767",
        link: "https://wa.me/6281352048767",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="relative border-t-2 border-border-dark bg-bg-base px-6 py-24 sm:py-32 lg:px-8">
            <div className="absolute inset-0 bg-grid-dense opacity-20" />
            <div className="relative z-10 mx-auto max-w-5xl">
                <div className="mb-14 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-6 inline-flex border-2 border-bg-base bg-accent-blue px-4 py-1.5 shadow-brutal-sm"
                    >
                        <span className="text-xs font-bold uppercase tracking-widest text-bg-base">
                            FAQ
                        </span>
                    </motion.div>

                    <motion.h2
                        className="text-4xl font-bold uppercase tracking-tight sm:text-5xl md:text-6xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <span className="block text-text-primary">FREQUENTLY ASKED </span>
                        <span className="mt-2 block text-metallic">QUESTIONS</span>
                    </motion.h2>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={faq.question}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.06 }}
                        >
                            <div className="overflow-hidden border-2 border-border-light bg-bg-surface shadow-brutal-sm">
                                <button
                                    type="button"
                                    className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left transition-colors hover:bg-bg-surface-hover sm:px-8"
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    aria-expanded={openIndex === index}
                                >
                                    <span className="text-base font-bold tracking-tight text-text-primary sm:text-lg">
                                        {faq.question}
                                    </span>
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-bg-base bg-accent-blue text-xl font-bold leading-none text-bg-base shadow-brutal-sm">
                                        {openIndex === index ? "-" : "+"}
                                    </span>
                                </button>
                                <AnimatePresence initial={false}>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25 }}
                                        >
                                            <p className="border-t-2 border-border-dark px-6 py-6 text-base font-medium leading-relaxed text-text-secondary sm:px-8">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <NeoCard className="mt-20 p-8 text-center sm:p-12">
                    <div className="mx-auto mb-7 flex h-14 w-14 items-center justify-center border-2 border-bg-base bg-accent-blue shadow-brutal-sm">
                        <Message01Icon size={28} className="text-bg-base" />
                    </div>
                    <h3 className="text-2xl font-bold uppercase tracking-tight text-text-primary">
                        Have any more questions?
                    </h3>
                    <div className="mt-10 grid gap-6 sm:grid-cols-2">
                        {contacts.map((contact) => (
                            <a
                                key={contact.name}
                                href={contact.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-2 border-border-light bg-bg-base p-6 text-left shadow-brutal-sm transition-colors hover:bg-bg-surface-hover"
                            >
                                <span className="block text-base font-bold text-text-primary">
                                    {contact.name}
                                </span>
                                <span className="mt-2 block text-sm font-bold text-accent-ice">
                                    WA: {contact.phone}
                                </span>
                            </a>
                        ))}
                    </div>
                </NeoCard>
            </div>
        </section>
    );
}
