export type TeamSection = {
    _type: "team";
    headline: string;
    title: string;
    team: {
        _key: string;
        name: string;
        role: string;
        image: Image;
    }[];
}