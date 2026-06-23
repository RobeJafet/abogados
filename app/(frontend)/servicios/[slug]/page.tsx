import { fetchService } from "@/sanity/services/fetchService";
import Sections from "@/components/Sections";
import { notFound } from "next/navigation";

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = await fetchService(slug);

    if (!data) return notFound();

    return (
        <main>
            {data.sections && <Sections sections={data.sections} />}
        </main>
    );
}
