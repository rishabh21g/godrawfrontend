import { useState } from "react";
import SketchyButton from "../ui/SketchyButton";
import {
  FaCheck,
  FaArrowRight,
  FaArrowDown,
  FaArrowDownLong,
} from "react-icons/fa6";

const plans = [
  {
    name: "Free solo",
    price: "Free",
    frequency: "Forever",
    cta: "Draw now",
    features: [
      "Full editor functions",
      "Single infinite scene",
      "Up to three collaborators",
      "Export PNG, SVG or save to file",
      "Unlimited SVG icons",
      "Dashboard with 2 projects",
      "E2EE locally in browser",
      "Work offline",
    ],
    highlight: false,
    arrow: <FaArrowRight />,
  },
  {
    name: "Plus",
    price: "$4",
    frequency: "/month",
    cta: "Try for free",
    trial: "14 days free trial",
    features: [
      "Everything in Free",
      "Unlimited scenes & folders",
      "Page-based canvas + PDF export",
      "Unlimited cloud storage",
      "Access management",
      "Edit / View permissions",
      "Readonly share links & embeds",
      "Team collaboration",
      "Comments",
    ],
    highlight: true,
    arrow: <FaArrowDown />,
  },
  {
    name: "Enterprise",
    price: "Custom",
    frequency: "One-time",
    cta: "Contact us",
    contactLink: "https://x.com/@godraw_",
    features: [
      "All Plus features",
      "Unlimited users & storage",
      "Custom domain & branding",
      "SSO",
      "Admin dashboard & analytics",
      "Priority onboarding",
      "Dedicated cloud / on-prem",
      "API & integrations",
      "Bulk licensing",
      "Custom feature development",
      "SLA options",
    ],
    highlight: false,
    arrow: <FaArrowDownLong />,
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <section
      id="pricing"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Upgrade to GoDraw Plus
        </h2>

        {/* Billing toggle */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
          <button
            onClick={() => setBilling("monthly")}
            className={`px-4 py-2 rounded-md font-semibold transition ${
              billing === "monthly"
                ? "bg-primary text-primary-foreground"
                : "bg-muted"
            }`}
          >
            Monthly
          </button>

          <span className="text-muted-foreground hidden sm:inline">
            Billing frequency
          </span>

          <button
            onClick={() => setBilling("annual")}
            className={`px-4 py-2 rounded-md font-semibold flex items-center gap-2 transition ${
              billing === "annual"
                ? "bg-primary text-primary-foreground"
                : "bg-muted"
            }`}
          >
            Annually
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
              save 14%
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col rounded-2xl border-3 bg-card p-6 sm:p-7 shadow-sketchy transition
              ${
                plan.highlight
                  ? "border-primary ring-2 ring-primary/20"
                  : "border-muted"
              }`}
          >
            {/* Plan Header */}
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-xl font-bold text-primary">{plan.name}</h3>
              <span className="text-primary">{plan.arrow}</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-4xl font-extrabold">{plan.price}</span>
              <span className="text-sm text-muted-foreground">
                {plan.frequency}
              </span>
            </div>

            {plan.trial && (
              <div className="text-sm text-green-700 font-medium mb-4">
                {plan.trial}
              </div>
            )}

            {/* CTA */}
            {plan.name === "Enterprise" ? (
              <a
                href={plan.contactLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-6"
              >
                <SketchyButton variant="outline" className="w-full">
                  {plan.cta}
                </SketchyButton>
              </a>
            ) : (
              <SketchyButton
                variant={plan.highlight ? "primary" : "outline"}
                className="w-full mb-6"
              >
                {plan.cta}
              </SketchyButton>
            )}

            {/* Features */}
            <ul className="space-y-3 text-sm sm:text-base">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <FaCheck className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="leading-snug">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
