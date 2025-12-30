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
    frequency: "Free forever",
    cta: "Draw now",
    features: [
      "Full editor functions",
      "Single infinite scene",
      "Upto three collaborators",
      "Export to .png, .svg or 'save to file'",
      "Infinite librarries",
      "E2EE locally in your browser",
      "Work offline",
      "Free for all",
    ],
    highlight: false,
    arrow: <FaArrowRight />,
  },
  {
    name: "Plus",
    price: "$4",
    frequency: "single user only",
    cta: "Try for free",
    trial: "14 days of free trial",
    features: [
      "Everything in Free +",
      "Unlimited scenes and folders",
      "Page based canvas with Pdf export",
      "Securely saved on cloud",
      "Access management",
      "Sharing with edit/view rights",
      "Read-Only non-collaborative links & Embeds",
      "Teams management & collaboration",
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
      "Single Sign-On (SSO)",
      "Admin dashboard & analytics",
      "Priority support & onboarding",
      "Dedicated cloud or on-prem deployment",
      "API & custom integrations",
      "Advanced security & compliance",
      "Bulk licensing for schools/colleges",
      "Custom feature development",
      "SLA & contract options",
    ],
    highlight: false,
    arrow: <FaArrowDownLong />,
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <section id="pricing" className="w-full p-6 flex flex-col items-center">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold my-8 tracking-tighter">
          Extend your current version to Godraw plus!
        </h2>
        <div className="flex items-center justify-center gap-4 mb-2">
          <span
            className={`cursor-pointer px-4 py-2 rounded-md font-semibold ${
              billing === "monthly"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-foreground"
            }`}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </span>
          <span className="text-muted-foreground">Billing frequency</span>
          <span
            className={`cursor-pointer px-4 py-2 rounded-md font-semibold flex items-center gap-2 ${
              billing === "annual"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-foreground"
            }`}
            onClick={() => setBilling("annual")}
          >
            Annually
            <span className="ml-1 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
              save 14%
            </span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col border-3 rounded-2xl shadow-sketchy p-8 bg-card ${
              plan.highlight ? "border-primary scale-105 z-10" : "border-muted"
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl font-bold text-primary">
                {plan.name}
              </span>
              <span className="text-primary">{plan.arrow}</span>
            </div>
            <div className="flex items-end gap-2 mb-2">
              <span className="text-4xl font-extrabold">{plan.price}</span>
              <span className="text-lg text-muted-foreground">
                {plan.frequency}
              </span>
            </div>
            {plan.trial && (
              <div className="mb-4 text-green-700 font-medium text-sm">
                {plan.trial}
              </div>
            )}
            {plan.name === "Enterprise" ? (
              <a
                href={plan.contactLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-6 w-full"
              >
                <SketchyButton variant="outline" className="w-full">
                  {plan.cta}
                </SketchyButton>
              </a>
            ) : (
              <SketchyButton
                variant={plan.highlight ? "primary" : "outline"}
                className="mb-6 w-full"
              >
                {plan.cta}
              </SketchyButton>
            )}
            <ul className="space-y-3 mb-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-base">
                  <FaCheck className="text-primary w-4 h-4" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
