import Link from "next/link";
import { FileText, FileSignature, Bell } from "lucide-react";

export default function Home() {
  const items = [
    {
      href: "/documents",
      title: "Documents",
      hint: "Scan, store, and find landlord files fast.",
      Icon: FileText,
    },
    {
      href: "/lease",
      title: "Lease",
      hint: "Fill templates and track key dates.",
      Icon: FileSignature,
    },
    {
      href: "/reminders",
      title: "Reminders",
      hint: "Never miss renewals or inspections.",
      Icon: Bell,
    },
  ];

  return (
    <section id="tools" className="max-w-3xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {items.map(({ href, title, hint, Icon }) => (
          <Link
            key={href}
            href={href}
            className="w-full rounded-2xl p-6 sm:p-8 bg-[var(--surface)] border border-white/10 shadow-lg shadow-black/30 transition hover:border-white/20 focus-visible:focus-ring"
          >
            <div className="flex items-center gap-5">
              <div
                className="flex h-[72px] w-[72px] sm:h-24 sm:w-24 items-center justify-center rounded-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(96,165,250,0.15), rgba(34,211,238,0.12))",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <Icon size={42} className="text-white/90 sm:h-14 sm:w-14" aria-hidden />
              </div>
              <div className="flex-1">
                <div className="text-2xl sm:text-3xl font-semibold tracking-wide">
                  {title}
                </div>
                <p className="mt-1 text-sm sm:text-base text-white/60">{hint}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
