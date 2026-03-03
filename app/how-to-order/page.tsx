import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Instagram, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "How to Order | Floramour Arrangements",
  description: "Learn how to place an order with Floramour Arrangements. Custom luxury floral arrangements in Woodbridge, NJ.",
}

const steps = [
  {
    number: "01",
    title: "Reach Out",
    description:
      "Send us a message via Instagram DMs or email at floramour.arrangements@gmail.com to start your inquiry.",
  },
  {
    number: "02",
    title: "Share Your Details",
    items: [
      "First name, last initial",
      "Pickup date and preferred pickup time",
      "2\u20133 inspiration pictures",
      "General bouquet size desired (small, medium, large)",
      "Color palette and flower preferences",
      "Wrapping color/style preference",
    ],
  },
  {
    number: "03",
    title: "Receive Your Quote",
    description:
      "The more details you share about what you\u2019re looking for and any add-ons, the better we can curate your order. Pricing is shared once we receive your details.",
  },
  {
    number: "04",
    title: "Confirm & Pay",
    description:
      "To confirm an order, we require full payment via Zelle alongside proof of payment (screenshot). Once payment is received, the order is confirmed. No payment = no order.",
  },
]

export default function HowToOrderPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="flex flex-col items-center gap-4 px-6 py-24 text-center lg:py-32">
        <p className="text-xs uppercase tracking-[0.3em] text-burgundy">
          Ordering Guide
        </p>
        <h1 className="font-serif text-4xl tracking-tight text-foreground md:text-5xl lg:text-6xl">
          How to Order
        </h1>
        <p className="mx-auto mt-2 max-w-lg text-base leading-relaxed text-muted-foreground">
          Ordering a custom arrangement is simple. Follow these steps and {"we'll"} bring your floral vision to life.
        </p>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-3xl px-6 pb-24 lg:px-8">
        <div className="flex flex-col gap-16">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-8">
              <div className="flex-shrink-0">
                <span className="font-serif text-4xl text-pink md:text-5xl">
                  {step.number}
                </span>
              </div>
              <div className="flex flex-col gap-3 border-t border-border pt-4">
                <h2 className="font-serif text-xl text-foreground md:text-2xl">
                  {step.title}
                </h2>
                {step.description && (
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                )}
                {step.items && (
                  <ul className="flex flex-col gap-2">
                    {step.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-burgundy" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Weddings & Events */}
      <section className="bg-foreground px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-pink-bright">
            Weddings & Events
          </p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-primary-foreground md:text-4xl">
            Planning a Wedding or Event?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-primary-foreground/70">
            {"If you're looking for floral pieces for your wedding, special event, or large-scale celebration, we'd love to work with you. Schedule a free consultation so we can discuss your vision, color palette, and every detail to make your day unforgettable."}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <a
              href="https://calendly.com/floramourarrangements/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-primary-foreground px-8 py-3 text-xs uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-foreground"
            >
              Schedule a Free Consultation
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf2vEtk8IXHAaia_aPk7Q-tPbGQqUV1B0GH6i5RpwlvbclgCg/viewform?usp=sharing&ouid=116941070972112362817"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-foreground px-8 py-3 text-xs uppercase tracking-widest text-foreground transition-opacity hover:opacity-90"
            >
              Fill Out Our Inquiry Form
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="bg-secondary px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-3xl">
          <div className="border-l-2 border-burgundy pl-8">
            <h3 className="font-serif text-xl text-foreground md:text-2xl">
              Please Read Before Ordering
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We always aim to get your arrangements as close as we can to the inspo pictures sent. However, not all bouquets will be the same as some flowers are seasonal or unavailable. When that happens, we will make thoughtful substitutions and choose florals that match the overall vision and color palette. The final result will still feel beautiful, with each bouquet being unique to you and your loved ones.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Thank you for understanding and for your consideration.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-32">
        <h2 className="font-serif text-2xl tracking-tight text-foreground md:text-3xl">
          Ready to begin?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
          Send us your details via Instagram DMs or email and {"we'll"} get back to you within 24-48 hours.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <a
            href="https://instagram.com/floramour.arrangements"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-burgundy"
          >
            <Instagram className="h-4 w-4" />
            Instagram DMs
          </a>
          <a
            href="mailto:floramour.arrangements@gmail.com"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-burgundy"
          >
            <Mail className="h-4 w-4" />
            floramour.arrangements@gmail.com
          </a>
        </div>
        <div className="mt-8">
          <Link
            href="/policy"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-foreground transition-colors hover:text-burgundy"
          >
            Read Our Order Policy
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  )
}
