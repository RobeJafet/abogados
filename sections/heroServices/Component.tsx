import ImageComponent from '@/components/ImageComponent';
import { HeroServicesSection } from './types';

export default function HeroServices(section: HeroServicesSection) {
    return (
        <section className="hero-services">
            <div className="container-fluid relative h-[500px] md:h-[600px]">
                {section.backgroundImage && (
                    <div className="absolute top-0 left-0 w-full h-full">
                        <ImageComponent
                            image={section.mobileImage ?? section.backgroundImage}
                            optionalAlt={section.title}
                            classContainer="md:hidden w-full h-full overflow-hidden"
                            classImg="w-full h-full object-cover"
                        />
                        <ImageComponent
                            image={section.backgroundImage}
                            optionalAlt={section.title}
                            classContainer="hidden md:block w-full h-full overflow-hidden"
                            classImg="w-full h-full object-cover"
                        />
                    </div>
                )}
                <div className="relative h-full flex flex-col justify-end md:justify-center pb-red">
                    <div className="row justify-center text-center">
                        <div className="w-full md:w-10/12 lg:w-6/12">
                            <p className="link text-white">{section.subtitle}</p>
                            <h1 className="display text-white pt-2">{section.title}</h1>
                            {section.description && (
                                <div className="pt-red">
                                     <p className="text-white pt-6 border-t border-gray/30 w-full">{section.description}</p>
                                </div>    
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
