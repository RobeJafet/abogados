import { SanityLive } from "@/sanity/lib/live";
import { VisualEditing } from "next-sanity/visual-editing";
import { draftMode } from "next/headers";
import { Toaster } from "sonner";
import DisableDraftMode from "@/components/DisableDraftMode";
import { fetchSettings } from "@/sanity/services/fetchSettings";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function FrontendLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { isEnabled: isDraftMode } = await draftMode();
    const settings = await fetchSettings();
    console.log(settings);
    return (
        <>
            <Header links={settings.headerNavigation} mail={settings.mail} />
            {children}
            <Footer address={settings.footerAddress} phone={settings.footerPhone} mail={settings.footerEmail} links={settings.footerSitemap} />
            <Toaster />
            {isDraftMode && (
                <>
                    <DisableDraftMode />
                    <VisualEditing />
                </>
            )}
            <SanityLive />
        </>
    );
}
