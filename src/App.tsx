import { lazy, Suspense } from "react";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { EventInfo } from "./components/EventInfo";

const About = lazy(() => import("./components/About").then((module) => ({ default: module.About })));
const TopicShowcase = lazy(() => import("./components/TopicShowcase").then((module) => ({ default: module.TopicShowcase })));
const Speaker = lazy(() => import("./components/Speaker").then((module) => ({ default: module.Speaker })));
const Partners = lazy(() => import("./components/Partners").then((module) => ({ default: module.Partners })));
const Organizer = lazy(() => import("./components/Organizer").then((module) => ({ default: module.Organizer })));
const RegisterCTA = lazy(() => import("./components/RegisterCTA").then((module) => ({ default: module.RegisterCTA })));
const FAQ = lazy(() => import("./components/FAQ").then((module) => ({ default: module.FAQ })));
const Footer = lazy(() => import("./components/Footer").then((module) => ({ default: module.Footer })));

function App() {
    return (
        <main className="min-h-screen bg-surface text-text-primary overflow-x-hidden">
            <Navbar />
            <Hero />
            <EventInfo />
            <Suspense fallback={null}>
                <About />
                <TopicShowcase />
                <Speaker />
                <Partners />
                <Organizer />
                <RegisterCTA />
                <FAQ />
                <Footer />
            </Suspense>
        </main>
    );
}

export default App;
