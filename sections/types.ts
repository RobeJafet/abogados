import type { HomeHeroSection } from "./homeHero/types";
import type { ServiciosSection } from "./servicios/types";
import type { HeroServicesSection } from "./heroServices/types";

export type Section = | HomeHeroSection | ServiciosSection | HeroServicesSection;

export type SectionMap = {
    [K in Section["_type"]]: React.FC<Extract<Section, { _type: K }>>;
  };