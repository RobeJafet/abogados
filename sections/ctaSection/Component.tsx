import type { CTASectionType } from './type';

export default function CTASection(section: CTASectionType) {
    return (
        <section className="cta-section">
            <div className="container-fluid">
                <div className="row">
                    {section.items.map((item) => (
                        <div key={item._key} className='w-full md:w-1/3'>
                            <h2 className="h2">{item.title}</h2>
                            <p className="text-left pt-2">{item.description}</p>
                        </div>
                    ))}
                    <div className="w-full md:w-1/3">
                        <p className="link text-white">Contáctanos</p>
                        <div className="text-white">
                            Tienes alguna duda o hay algo en lo que podamos ayudarte, por favor contáctanos
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}