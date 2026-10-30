zimport type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";

import Providers from "./providers";
import NavigationBar from "@/components/NavigationBar";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CourtIQ — AI Basketball Analyst",
  description:
    "Ask natural-language questions about NBA players and teams. Answers are grounded in real statistics computed in code, never fabricated.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ibmPlexMono.variable}>
      <body>
        <Providers>
          <NavigationBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
