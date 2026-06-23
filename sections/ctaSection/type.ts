export type CTASectionType = {
    _type: "ctaSection";    
    _key: string;
    items: {
        _key: string;
        cta: Link;
        title: string;
        description: string;
        image: Image;   
    }[];
};