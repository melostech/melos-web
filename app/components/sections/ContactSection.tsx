"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container } from "@/app/components/ui";
import { contactSchema, type ContactFormData } from "@/app/lib/schemas";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(payload.error || "There was an error sending your inquiry. Please try again.");
      }

      setSubmitStatus("success");
      reset();
    } catch (error) {
      setSubmitStatus("error");
      setSubmitError(
        error instanceof Error
          ? error.message
          : "There was an error sending your inquiry. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <Container>
        <div className="grid gap-10 rounded-3xl border border-teal-300/15 bg-gradient-to-br from-teal-400/10 to-violet-500/10 p-8 lg:grid-cols-[.85fr_1.15fr] lg:p-12">
          {/* Left Column - Info */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[.26em] text-teal-300">
              Start the conversation
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">
              Build the system your business needs next.
            </h2>
            <p className="mt-5 leading-7 text-slate-300">
              Share the technical challenge. We'll help shape the clearest path
              from concept to dependable delivery.
            </p>
            <a
              href="mailto:melostechsolution@gmail.com"
              className="mt-8 inline-block text-sm font-semibold text-teal-300"
            >
              melostechsolution@gmail.com ↗
            </a>
          </div>

          {/* Right Column - Form */}
          <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* Name Field */}
            <label className="flex flex-col gap-2 text-sm text-slate-300">
              Name
              <input
                {...register("name")}
                aria-invalid={Boolean(errors.name)}
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-teal-300"
                placeholder="Your name"
              />
              {errors.name && (
                <span className="text-xs text-rose-400">{errors.name.message}</span>
              )}
            </label>

            {/* Email Field */}
            <label className="flex flex-col gap-2 text-sm text-slate-300">
              Email
              <input
                {...register("email")}
                type="email"
                aria-invalid={Boolean(errors.email)}
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-teal-300"
                placeholder="you@example.com"
              />
              {errors.email && (
                <span className="text-xs text-rose-400">{errors.email.message}</span>
              )}
            </label>

            {/* Project Type Field */}
            <label className="flex flex-col gap-2 text-sm text-slate-300">
              Project type
              <select
                {...register("projectType")}
                defaultValue=""
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-teal-300"
              >
                <option value="" disabled>
                  Select a project type
                </option>
                <option>Web development</option>
                <option>Mobile application</option>
                <option>Custom software</option>
                <option>System development</option>
                <option>IT consulting</option>
                <option>Digital transformation</option>
              </select>
              {errors.projectType && (
                <span className="text-xs text-rose-400">{errors.projectType.message}</span>
              )}
            </label>

            {/* Message Field */}
            <label className="flex flex-col gap-2 text-sm text-slate-300">
              Technical requirement
              <textarea
                {...register("message")}
                aria-invalid={Boolean(errors.message)}
                className="min-h-28 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-teal-300"
                placeholder="What needs to work better?"
              />
              {errors.message && (
                <span className="text-xs text-rose-400">{errors.message.message}</span>
              )}
            </label>

            {/* Honeypot Field */}
            <div className="hidden" aria-hidden="true">
              <input {...register("website")} tabIndex={-1} autoComplete="off" />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 w-fit rounded-xl bg-teal-400 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-teal-300 disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send inquiry →"}
            </button>

            {/* Status Messages */}
            <div aria-live="polite">
              {submitStatus === "success" && (
                <p className="text-sm text-teal-400">
                  Your inquiry has been sent successfully!
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-sm text-rose-400">{submitError}</p>
              )}
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}