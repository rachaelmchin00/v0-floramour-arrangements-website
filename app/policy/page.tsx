import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Order Policy | Floramour Arrangements",
  description: "Read our order policy before placing an order with Floramour Arrangements. Luxury floral arrangements in Woodbridge, NJ.",
}

const policies = [
  {
    title: "When Can I Order?",
    items: [
      "Orders must be placed at least 10 days in advance (the earlier the better).",
      "Rachael is a full-time graduate student and may not be able to accommodate last-minute requests.",
    ],
  },
  {
    title: "Orders & Payments",
    items: [
      "To confirm an order, we require a full payment via Zelle alongside proof of payment (screenshot).",
      "Once payment is received, the order is confirmed.",
      "No payment = No order.",
    ],
  },
  {
    title: "Order Cancellations & Refunds",
    items: [
      "Flowers are carefully prepped and selected for each individual order; thus, all sales are final.",
      "If there are any issues regarding pickup times or date adjustments, please reach out 5 days prior to your original pickup date.",
      "Additional charges may incur as a result of changes.",
    ],
  },
  {
    title: "Flower Substitutions",
    items: [
      "We always aim to get your arrangements as close as we can to the inspo pictures sent.",
      "However, not all bouquets will be the same as some flowers are seasonal or unavailable.",
      "When that happens, we will make thoughtful substitutions and choose florals that match the overall vision and color palette.",
      "The final result will still feel beautiful, with each bouquet being unique to you and your loved ones.",
    ],
  },
  {
    title: "Flower Care & Longevity",
    items: [
      "Flower longevity depends on proper care and environmental conditions.",
      "Once flowers are picked up or delivered, care is the client\u2019s responsibility.",
    ],
  },
  {
    title: "Response Times",
    items: [
      "Please note that response times may take 24\u201348 hours.",
      "We truly appreciate your understanding and support and will reach out as soon as we can.",
    ],
  },
]

export default function PolicyPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="flex flex-col items-center gap-4 px-6 py-24 text-center lg:py-32">
        <p className="text-xs uppercase tracking-[0.3em] text-burgundy">
          Our Terms
        </p>
        <h1 className="font-serif text-4xl tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Order Policy
        </h1>
        <p className="mx-auto mt-2 max-w-lg text-base leading-relaxed text-muted-foreground">
          Please review our policies before placing an order. We want to ensure a seamless experience for you.
        </p>
      </section>

      {/* Policies */}
      <section className="mx-auto max-w-3xl px-6 pb-24 lg:px-8">
        <div className="flex flex-col gap-16">
          {policies.map((policy, index) => (
            <div key={index}>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-border" />
                <h2 className="font-serif text-xl text-foreground md:text-2xl">
                  {policy.title}
                </h2>
                <div className="h-px flex-1 bg-border" />
              </div>
              <ul className="flex flex-col gap-3">
                {policy.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-burgundy" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary px-6 py-24 text-center lg:py-32">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-2xl tracking-tight text-foreground md:text-3xl">
            <span className="text-balance">Questions about our policy?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            {"Don't"} hesitate to reach out. We{"'"}re happy to clarify anything before you place your order.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/how-to-order"
              className="group inline-flex items-center gap-2 border border-foreground bg-foreground px-8 py-3 text-xs uppercase tracking-widest text-primary-foreground transition-all hover:bg-transparent hover:text-foreground"
            >
              How to Order
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/flower-care"
              className="inline-flex items-center gap-2 border border-foreground px-8 py-3 text-xs uppercase tracking-widest text-foreground transition-all hover:bg-foreground hover:text-primary-foreground"
            >
              Flower Care Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
