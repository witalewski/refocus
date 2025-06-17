export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#f8fafc] to-[#e0e7ef] dark:from-[#18181b] dark:to-[#23272f] transition-colors duration-300">
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-8 sm:px-8 w-full max-w-3xl mx-auto">
        <section className="w-full text-center sm:text-left mb-8 bg-white/80 dark:bg-[#23272f]/80 rounded-xl shadow-md p-6 sm:p-8 border border-[#e5e7eb] dark:border-[#2a2a2e]">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] dark:text-[#fafafa] mb-3 tracking-tight">
            Ready to refocus with a short break?
          </h1>
          <p className="text-lg sm:text-xl text-[#333] dark:text-[#e0e0e0] leading-relaxed max-w-3xl mx-auto">
            Choose one of the three modes below to take a time-boxed break and
            return to your work refreshed.
          </p>
        </section>
      </main>
    </div>
  );
}
