import localFont from "next/font/local";
import Head from "next/head"; // Importing the Head component from Next.js
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import Footer from "./componenet/footer";
import Header from "./componenet/header";

interface Metadata {
  title: string;
  description: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Abfallkalender App - Stadt Geilenkirchen",
  description: "Die Abfallkalender-App hilft Ihnen, die nächste Abholtermine in der Stadt Geilenkirchen im Jahr 2024 zu verwalten.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="de" suppressHydrationWarning>
        <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <meta name="keywords" content="Abfall, Abfallwirtschaft, Recycling, Umwelt, Entsorgung, Abholtermine, Abfallkalender, Geilenkirchen " />
          <meta name="author" content="Samer Alaws" />
          <meta property="og:title" content={metadata.title} />
          <meta property="og:description" content={metadata.description} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://abfall.vercel.app/" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="w-4/5 mx-auto flex flex-col min-h-screen ">
              <Header />
              <main className="my-10 flex-1">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
