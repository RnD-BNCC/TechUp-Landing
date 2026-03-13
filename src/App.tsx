import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { EventInfo } from "./components/EventInfo";
import { About } from "./components/About";
import { TopicShowcase } from "./components/TopicShowcase";
import { Organizer } from "./components/Organizer";
import { Speaker } from "./components/Speaker";
import { Schedule } from "./components/Schedule";
import { RegisterCTA } from "./components/RegisterCTA";
import { Footer } from "./components/Footer";

function App() {
    return (
        <main className="min-h-screen bg-surface text-text-primary overflow-x-hidden">
            <Navbar />
            <Hero />
            <EventInfo />
            <About />
            <TopicShowcase />
            <Organizer />
            <Speaker />
            <Schedule />
            <RegisterCTA />
            <Footer />
        </main>
    );
}

export default App;
