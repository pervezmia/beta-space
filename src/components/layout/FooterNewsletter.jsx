"use client";

import { useState } from "react";
import { Button } from "@heroui/react";

export default function FooterNewsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div className="max-w-[480px]">
      {submitted ? (
        <p className="text-sm font-medium text-slate-800">
          Thanks for subscribing! Check your inbox.
        </p>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="flex items-center gap-3">
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="h-12 flex-1 rounded-full border border-slate-200 bg-white px-5 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-highlight"
            />
            <Button
              type="submit"
              className="h-12 min-w-[102px] rounded-full bg-highlight px-6 text-sm font-medium text-slate-900 hover:bg-highlight/90"
            >
              Search
            </Button>
          </form>
          <p className="mt-3 text-xs text-slate-500">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates from our company.
          </p>
        </>
      )}
    </div>
  );
}