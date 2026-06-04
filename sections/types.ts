import type { HomeHeroSection } from "./homeHero/types";
import type { ServiciosSection } from "./servicios/types";

export type Section = | HomeHeroSection | ServiciosSection;

export type SectionMap = {
    [K in Section["_type"]]: React.FC<Extract<Section, { _type: K }>>;
  };