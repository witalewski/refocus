"use client";

import { Button } from "@/components/ui/button";
import { CalmIcon } from "@/components/icons/calm-icon";
import { EnergizeIcon } from "@/components/icons/energize-icon";
import { ResetIcon } from "@/components/icons/reset-icon";

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
        <nav
          aria-label="Break mode selection"
          className="w-full flex flex-col sm:flex-row gap-6 sm:gap-8 items-center justify-center mt-2"
        >
          <Button
            className="w-full sm:w-auto flex-1 max-w-xs flex flex-row items-center justify-center gap-3 py-6 px-4 text-xl font-semibold rounded-2xl shadow-lg bg-[#d1fae5] hover:bg-[#a7f3d0] focus-visible:ring-4 focus-visible:ring-[#34d399] border-2 border-transparent transition-all duration-150 outline-none group text-black"
            aria-label="Start Calm mode"
            onClick={() => {
              /* TODO: Start Calm mode */
            }}
          >
            <span className="mr-2 flex-shrink-0" aria-hidden>
              <CalmIcon className="text-[#059669] group-hover:text-[#047857] transition-colors duration-150" />
            </span>
            <span>Calm</span>
          </Button>
          <Button
            className="w-full sm:w-auto flex-1 max-w-xs flex flex-row items-center justify-center gap-3 py-6 px-4 text-xl font-semibold rounded-2xl shadow-lg bg-[#fef08a] hover:bg-[#fde047] focus-visible:ring-4 focus-visible:ring-[#facc15] border-2 border-transparent transition-all duration-150 outline-none group text-black"
            aria-label="Start Energize mode"
            onClick={() => {
              /* TODO: Start Energize mode */
            }}
          >
            <span className="mr-2 flex-shrink-0" aria-hidden>
              <EnergizeIcon className="text-[#eab308] group-hover:text-[#ca8a04] transition-colors duration-150" />
            </span>
            <span>Energize</span>
          </Button>
          <Button
            className="w-full sm:w-auto flex-1 max-w-xs flex flex-row items-center justify-center gap-3 py-6 px-4 text-xl font-semibold rounded-2xl shadow-lg bg-[#bae6fd] hover:bg-[#7dd3fc] focus-visible:ring-4 focus-visible:ring-[#38bdf8] border-2 border-transparent transition-all duration-150 outline-none group text-black"
            aria-label="Start Reset mode"
            onClick={() => {
              /* TODO: Start Reset mode */
            }}
          >
            <span className="mr-2 flex-shrink-0" aria-hidden>
              <ResetIcon className="text-[#0ea5e9] group-hover:text-[#0369a1] transition-colors duration-150" />
            </span>
            <span>Reset</span>
          </Button>
        </nav>
      </main>
    </div>
  );
}
