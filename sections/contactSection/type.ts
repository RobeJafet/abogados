export type ContactSection = {
    _type: "contactSection";
    _key: string;
    title: string;  
    subtitle: string;
    items: {
        _key: string;
        title: string;
        description: string;    
    }[];
    cta: Link;
    image: Image;
};