import { fetchHome } from "@/sanity/services/fetchHome";
import Sections from "@/components/Sections";

export default async function Home() {
    const data = await fetchHome();
    console.log(data);
    return(
        <main>
            {data.sections && <Sections sections={data.sections} />}
        </main>
    );
}