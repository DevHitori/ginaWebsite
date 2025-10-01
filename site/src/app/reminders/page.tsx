export default function RemindersPage() {
  return (
    <section className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
      <div className="rounded-2xl p-6 sm:p-8 bg-[var(--surface)] border border-white/10">
        <h2 className="text-2xl sm:text-3xl font-semibold">Reminders</h2>
        <p className="mt-2 text-white/70">Set reminders for inspections, rent, and renewals.</p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button className="w-full rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 py-4 text-lg">New reminder</button>
          <button className="w-full rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 py-4 text-lg">View schedule</button>
        </div>
      </div>
    </section>
  );
}
