import type { Metadata } from "next";
import glossaryData from "./static/glossary.json";

export const metadata: Metadata = {
  title: "Glossary – Exploring AI Through the Years",
  description:
    "Key concepts and terminology used in the Exploring AI Through the Years presentation.",
};

type GlossaryEntry = {
  id: string;
  term: string;
  shortDefinition: string;
  longDefinition: string;
  category: string;
};

const GLOSSARY = (glossaryData.glossary as GlossaryEntry[]).sort((a, b) =>
  a.term.localeCompare(b.term)
);

export default function GlossaryPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-6xl gap-8 px-4 py-10 lg:gap-12 lg:py-16">
        {/* Sidebar */}
        <aside className="hidden w-64 shrink-0 md:block">
          <div className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">
              Glossary
            </h2>
            <p className="mb-4 text-xs text-slate-400">
              Click a term to jump to its detailed explanation.
            </p>
            <nav className="space-y-1 text-sm">
              {GLOSSARY.map((entry) => (
                <a
                  key={entry.id}
                  href={`#${entry.id}`}
                  className="block rounded-md px-3 py-1.5 text-slate-200 hover:bg-slate-800 hover:text-white"
                >
                  {entry.term}
                </a>
              ))}
            </nav>
          </div>
        </aside>
        {/* Content */}
        <section className="flex-1">
          <header className="mb-8 border-b border-slate-800 pb-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-amber-400">
              Exploring AI Through the Years
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-50">
              AI Glossary
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-300">
              This page collects the key terms used in the{" "}
              <strong>“Exploring AI Through the Years”</strong>{" "}
              presentation.
            </p>
          </header>

          <div className="space-y-10">
            {GLOSSARY.map((entry) => (
              <article
                key={entry.id}
                id={entry.id}
                className="scroll-mt-24 rounded-xl border border-slate-800 bg-slate-900/40 p-5"
              >
                <div className="mb-2 flex items-center justify-between gap-2">
                  <h2 className="text-xl font-semibold text-slate-50">
                    {entry.term}
                  </h2>
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300">
                    {entry.category}
                  </span>
                </div>
                <p className="text-sm font-medium text-amber-300">
                  {entry.shortDefinition}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-200">
                  {entry.longDefinition}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
