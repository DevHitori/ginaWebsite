import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gina • Landlord Helper",
  description: "Simple tools to manage documents, leases, and reminders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-night`}
        style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
      >
        <div className="min-h-screen">
          <header className="container-px pt-10 sm:pt-14 pb-8">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[var(--surface)]">
              <div className="absolute right-[-60px] top-[-60px] h-64 w-64 rounded-full blur-3xl opacity-30" style={{background:"radial-gradient(closest-side, rgba(96,165,250,.4), rgba(96,165,250,0))"}} />
              <div className="absolute left-[-80px] bottom-[-80px] h-72 w-72 rounded-full blur-3xl opacity-25" style={{background:"radial-gradient(closest-side, rgba(34,211,238,.35), rgba(34,211,238,0))"}} />
              <div className="relative px-6 sm:px-10 py-10 sm:py-14">
                <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                  Gina’s Landlord Helper
                </h1>
                <p className="mt-3 text-lg sm:text-xl text-white/75 max-w-2xl">
                  Quick actions for documents, leases, and reminders — designed to save time and reduce hassle.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a href="#tools" className="inline-flex items-center justify-center rounded-2xl px-6 py-4 text-lg font-semibold bg-white text-black hover:bg-white/90 transition border border-white/10">
                    Explore tools
                  </a>
                  <a href="/documents" className="inline-flex items-center justify-center rounded-2xl px-6 py-4 text-lg font-semibold bg-transparent text-white hover:bg-white/10 transition border border-white/20">
                    Go to Documents
                  </a>
                </div>
              </div>
            </div>
          </header>
          <main className="container-px pb-16 sm:pb-20">{children}</main>
          <footer className="container-px py-8 text-sm text-white/50">© {new Date().getFullYear()} Gina Tools</footer>
        </div>
      </body>
    </html>
  );
}
