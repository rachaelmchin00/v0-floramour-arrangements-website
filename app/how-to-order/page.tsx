import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Instagram, Mail, Flower2, Heart } from "lucide-react"

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
          Whether you need a custom arrangement for a special occasion or full floral design for your wedding day, choose your path below and {"we'll"} bring your vision to life.
        </p>

        {/* Choose Your Path */}
        <div className="mt-12 grid w-full max-w-2xl gap-4 sm:grid-cols-2">
          <a
            href="#arrangements"
            className="group flex items-center gap-4 border border-border bg-card p-5 transition-all hover:border-sage hover:shadow-sm"
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sage/20">
              <Flower2 className="h-5 w-5 text-sage" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base text-foreground">Arrangements & Bouquets</span>
              <span className="text-xs text-muted-foreground">Gifts & special occasions</span>
            </div>
            <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-sage" />
          </a>
          <a
            href="#events"
            className="group flex items-center gap-4 border border-border bg-card p-5 transition-all hover:border-burgundy hover:shadow-sm"
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blush/30">
              <Heart className="h-5 w-5 text-burgundy" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base text-foreground">Weddings & Events</span>
              <span className="text-xs text-muted-foreground">Full floral design</span>
            </div>
            <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-burgundy" />
          </a>
        </div>
      </section>

      {/* Steps */}
      <section id="arrangements" className="scroll-mt-24 mx-auto max-w-3xl px-6 pb-24 lg:px-8">
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
      <section id="events" className="scroll-mt-24 bg-foreground px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
            {/* Image */}
            <div className="relative w-full flex-shrink-0 overflow-hidden lg:w-72">
              <div className="relative aspect-[3/4]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8974-52BMoiYrdUxFK7PiKN3msji5ByhPln.jpg"
                  alt="White and lime green cascade bridal bouquet with pearl strands"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Text + CTAs */}
            <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
              <p className="text-xs uppercase tracking-[0.3em] text-pink-bright">
                Weddings & Events
              </p>
              <h2 className="font-serif text-3xl tracking-tight text-primary-foreground md:text-4xl">
                Planning a Wedding or Event?
              </h2>
              <p className="max-w-lg text-base leading-relaxed text-primary-foreground/70">
                {"If you're looking for floral pieces for your wedding, corporate or branding event, special occasion, or large-scale celebration, we'd love to work with you. Schedule a free consultation so we can discuss your vision, color palette, and every detail to make your event unforgettable."}
              </p>
              <div className="flex flex-col items-center gap-4 lg:items-start">
                <a
                  href="https://calendly.com/floramourarrangements/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-primary-foreground px-8 py-3 text-xs uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-foreground"
                >
                  Schedule a Free Consultation
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
                <div className="flex flex-col items-center gap-3 sm:flex-row lg:items-start">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSf2vEtk8IXHAaia_aPk7Q-tPbGQqUV1B0GH6i5RpwlvbclgCg/viewform?usp=sharing&ouid=116941070972112362817"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary-foreground px-6 py-3 text-xs uppercase tracking-widest text-foreground transition-opacity hover:opacity-90"
                  >
                    Wedding Inquiry
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSenohjwYBBpkk3j07TiR-ztyisVdwzt8BaNf-E30wdUCfQksw/viewform?usp=publish-editor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-primary-foreground/50 bg-primary-foreground/20 px-6 py-3 text-xs uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary-foreground/30"
                  >
                    Event Inquiry
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
                <p className="text-xs text-primary-foreground/50">
                  Weddings · Corporate · Branding · Engagements · Elopements · Special Events · Funerals
                </p>
              </div>
            </div>
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
          Before reaching out, please take a moment to review our{" "}
          <Link href="/policy" className="text-foreground underline underline-offset-4 transition-colors hover:text-burgundy">
            order policy
          </Link>{" "}
          to ensure we{"'"}re the right fit for your needs.
        </p>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          For arrangements and bouquets, send us your details via Instagram DMs or email. For weddings and events, book a consultation or submit an inquiry form above. {"We'll"} get back to you within 24-48 hours. Have questions? {"We're"} happy to help clarify anything.
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
      </section>
    </div>
  )
}
