import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Head>
                <title>Germa Studio</title>
                <meta name="description" content="Germa Studio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
}
