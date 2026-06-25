import { ServiciosSection } from './types';
import ImageComponent from '@/components/ImageComponent';
import LinkComponent from '@/components/LinkComponent';
import AnimateOnView from '@/components/AnimateOnView';

export default function Servicios(section: ServiciosSection) {
    return (
        <section id="servicios" className="pt-blue">
            <AnimateOnView className="container-fluid">
                <div className="row justify-center">
                    <div className="w-full md:w-10/12 lg:w-6/12 text-center animate">
                        <p className="link text-blue">{section.headline}</p>
                        <h2 className="h1 pt-2">{section.title}</h2>
                    </div>
                    <div className="w-full md:w-10/12 pt-red">
                        <div className="border border-gray rounded-[25px] w-full d-flex flex-col lg:grid  lg:grid-cols-3" >
                            {section?.servicios?.map((servicio) => (
                                <div key={servicio._key} className="p-8 md:p-12 lg:py-16 flex flex-col md:flex-row lg:flex-col items-center lg:border-r border-gray last:border-b-0 last:lg:border-r-0 border-b lg:border-b-0 gap-8 md:gap-12 lg:gap-0 animate">
                                    <h3 className="h2 hidden lg:block">{servicio.title}</h3>
                                    <div className="flex lg:pt-24 w-[72.609%] md:w-[35.643%] lg:w-full">
                                        <LinkComponent {...servicio.link} className="w-full">
                                            <ImageComponent
                                                classContainer="w-full rounded-[15px] aspect-square overflow-hidden"
                                                classImg="w-full h-full object-cover" image={servicio.image} optionalAlt={servicio.title}
                                                sizes=" (min-width: 768px) 20vw, 100vw"
                                            />
                                        </LinkComponent>
                                    </div>
                                    <div className="flex flex-col items-center md:items-start lg:items-center flex-1 self-stretch">
                                        <p className="h2 lg:hidden">{servicio.title}</p>
                                        <p className="pt-4 md:pt-6 lg:pt-24 text-center md:text-left lg:text-center mt-auto lg:mt-0">{servicio.description}</p>
                                        <div className="pt-yellow flex justify-center md:justify-start lg:justify-center lg:mt-auto">
                                            <LinkComponent {...servicio.link} className="link text-blue link-cta">
                                                {servicio.link.label}
                                            </LinkComponent>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </AnimateOnView>
        </section>
    );
}