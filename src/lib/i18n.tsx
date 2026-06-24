"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { site } from "@/content/site";
import type { Locale, LS, LL } from "@/content/types";

type I18nValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggle: () => void;
  /** Resolve a localized string. */
  t: (v: LS) => string;
  /** Resolve a localized list. */
  tl: (v: LL) => string[];
  /** UI chrome string by key. */
  ui: (key: keyof typeof site.ui) => string;
  site: typeof site;
};

const I18nContext = createContext<I18nValue | null>(null);
const STORAGE_KEY = "amine-portfolio-locale";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  // Restore preference once mounted (avoids hydration mismatch).
  useEffect(() => {
    const stored = (typeof window !== "undefined" && window.localStorage.getItem(STORAGE_KEY)) as Locale | null;
    const guess: Locale | null =
      stored ?? (typeof navigator !== "undefined" && navigator.language?.toLowerCase().startsWith("fr") ? "fr" : null);
    // Intentional post-mount restore to avoid a hydration mismatch on first paint.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (guess && guess !== locale) setLocaleState(guess);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    if (typeof window !== "undefined") window.localStorage.setItem(STORAGE_KEY, l);
  }, []);

  const toggle = useCallback(() => setLocale(locale === "en" ? "fr" : "en"), [locale, setLocale]);

  const value = useMemo<I18nValue>(
    () => ({
      locale,
      setLocale,
      toggle,
      t: (v: LS) => v[locale],
      tl: (v: LL) => v[locale],
      ui: (key) => site.ui[key][locale],
      site,
    }),
    [locale, setLocale, toggle],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
