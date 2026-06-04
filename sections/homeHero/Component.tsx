import { HomeHeroSection } from './types';

export default function HomeHero(section: HomeHeroSection) {
    return (
        <section className="home-hero">
            <h1>{section.title}</h1>
            <p>{section.description}</p>
        </section>
    );
}