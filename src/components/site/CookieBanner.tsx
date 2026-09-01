import { useEffect, useState } from "react";
import { Cookie, X } from "lucide-react";
import { Link } from "@tanstack/react-router";

const STORAGE_KEY = "anka-cookie-consent";

/**
 * Cookie notice. Consent is read in useEffect (never during render) so SSR
 * output stays stable and hydration cannot mismatch.
 */
export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!window.localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // Storage blocked: stay hidden rather than nagging on every page view.
    }
  }, []);

  const decide = (value: "accepted" | "declined") => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie notice"
      className="fixed inset-x-0 bottom-0 z-[60] px-3 pb-3 sm:px-5 sm:pb-5"
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 border border-ink-border bg-ink/95 p-4 text-ink-foreground shadow-2xl backdrop-blur-md sm:flex-row sm:items-center sm:gap-6 sm:p-5">
        <Cookie aria-hidden="true" className="h-5 w-5 shrink-0 text-gold" />
        <p className="text-sm leading-relaxed text-ink-muted">
          We use essential cookies to run this site and optional ones to understand how visitors
          use it. See our{" "}
          <Link to="/contact" className="text-gold underline underline-offset-4">
            contact page
          </Link>{" "}
          if you have questions about your data.
        </p>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => decide("declined")}
            className="label border border-ink-border px-4 py-3 text-[0.6rem] transition-colors hover:bg-white/10"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="label bg-primary px-4 py-3 text-[0.6rem] text-primary-foreground transition-colors hover:bg-green-deep"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={() => decide("declined")}
            aria-label="Dismiss cookie notice"
            className="p-2 text-ink-muted transition-colors hover:text-ink-foreground"
          >
            <X aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
