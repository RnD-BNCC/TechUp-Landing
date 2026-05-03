import { lazy, Suspense, useEffect, useState } from "react";
import { ArrowRight02Icon } from "hugeicons-react";
import { NeoButton } from "./ui/neo-button";
import { MeteorShower } from "./hero-visuals/MeteorShower";

const HeroShowcase = lazy(() => import("./hero-visuals/HeroShowcase").then((module) => ({ default: module.HeroShowcase })));

function DesktopHeroShowcase() {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 1024px)");
        const updateDesktop = () => setIsDesktop(mediaQuery.matches);

        updateDesktop();
        mediaQuery.addEventListener("change", updateDesktop);

        return () => mediaQuery.removeEventListener("change", updateDesktop);
    }, []);

    if (!isDesktop) {
        return null;
    }

    return (
        <Suspense fallback={null}>
            <HeroShowcase />
        </Suspense>
    );
}

export function Hero() {
    return (
        <section className="relative h-[100dvh] w-full overflow-hidden border-b-2 border-border-dark bg-bg-base">
            <MeteorShower />
            <div className="mx-auto h-full w-full max-w-7xl px-6 pt-24 pb-12 flex flex-col lg:flex-row items-center">


                <div className="flex-1 w-full flex flex-col justify-center relative z-10">
                    <h1 className="flex flex-col font-bold uppercase">
                        <span className="text-[clamp(3.5rem,8vw,7rem)] leading-[0.9] tracking-tighter text-text-primary">AI & DATA</span>
                        <span className="text-[clamp(1.25rem,3vw,2.5rem)] leading-[1.1] tracking-tight text-metallic mt-2">
                            THE POWER BEHIND DECISIONS
                        </span>
                    </h1>

                    <div className="mt-8 h-2 w-24 bg-accent-blue shadow-brutal-sm" />

                    <p className="mt-8 max-w-xl text-lg sm:text-xl text-text-secondary leading-relaxed font-medium">
                        Discover how data-driven technologies reshape decision-making and unlock career opportunities in Indonesia's thriving tech industry.
                    </p>

                    <div className="mt-12 flex flex-col sm:flex-row gap-5">
                        <NeoButton variant="primary" href="https://upform.id/forms/5d86c673-e037-4d18-be71-ce27fd78f5d5">
                            REGISTER NOW
                            <ArrowRight02Icon size={20} />
                        </NeoButton>
                    </div>
                </div>


                <div className="hidden lg:flex flex-1 h-full w-full items-center justify-center p-8">
                    <DesktopHeroShowcase />
                </div>
            </div>
        </section>
    );
}
