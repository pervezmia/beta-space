"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { Eye, EyeSlash } from "@gravity-ui/icons";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.email.includes("@")) e.email = "Enter a valid email";
    if (form.password.length < 8) e.password = "Password must be at least 8 characters";
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    alert("Account created! (UI only)");
  };

  const field = (id, label, type, placeholder, key) => (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={form[key]}
        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
        className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-brand"
      />
      {errors[key] && <p className="mt-1 text-xs text-red-500">{errors[key]}</p>}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-8 flex flex-col gap-5">
      {field("name", "Full Name", "text", "Jamie Davis", "name")}
      {field("email", "Email", "email", "designer@example.com", "email")}

      {/* Password with toggle */}
      <div>
        <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-slate-700">
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="h-12 w-full rounded-xl border border-slate-200 px-4 pr-12 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-brand"
          />
          <button
            type="button"
            aria-label={showPassword ? "Hide password" : "Show password"}
            onClick={() => setShowPassword((p) => !p)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
          >
            {showPassword ? <EyeSlash className="size-4" /> : <Eye className="size-4" />}
          </button>
        </div>
        {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
      </div>

      <Button
        type="submit"
        className="mt-2 h-12 w-full rounded-full bg-highlight text-base font-semibold text-slate-900 hover:bg-highlight/90"
      >
        Continue
      </Button>

      <p className="text-center text-sm text-slate-500">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-brand hover:underline">
          Login
        </Link>
      </p>
    </form>
  );
}