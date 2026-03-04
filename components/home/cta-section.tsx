import Link from "next/link"
import { ArrowRight, Instagram, Mail, Calendar, Flower2, Heart } from "lucide-react"

export function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
      <div className="flex flex-col items-center gap-8 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-burgundy">
          Ready to Order?
        </p>
        <h2 className="font-serif text-3xl leading-snug tracking-tight text-foreground md:text-4xl lg:text-5xl">
          <span className="text-balance">{"Let's create something beautiful together"}</span>
        </h2>
        <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
          Whether you need a stunning arrangement for a special moment or full floral design for your wedding day, we have you covered.
        </p>

        {/* Two Pathway Cards */}
        <div className="mt-4 grid w-full max-w-4xl gap-6 md:grid-cols-2">
          {/* Luxury Arrangements Card */}
          <div className="group flex flex-col items-center gap-6 border border-border bg-card p-8 text-center transition-all hover:border-burgundy/30 hover:shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sage/20">
              <Flower2 className="h-6 w-6 text-sage" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-xl text-foreground">Luxury Arrangements</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Custom bouquets, gifts, and arrangements for birthdays, anniversaries, or just because.
              </p>
            </div>
            <div className="mt-auto flex flex-col gap-3">
              <Link
                href="/how-to-order#arrangements"
                className="group/btn flex items-center justify-center gap-2 border border-foreground bg-foreground px-6 py-2.5 text-xs uppercase tracking-widest text-primary-foreground transition-all hover:bg-transparent hover:text-foreground"
              >
                How to Order
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
              </Link>
              <div className="flex items-center justify-center gap-3 text-xs text-muted-foreground">
                <a
                  href="https://instagram.com/floramour.arrangements"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 transition-colors hover:text-burgundy"
                >
                  <Instagram className="h-3.5 w-3.5" />
                  DM
                </a>
                <span className="text-border">|</span>
                <a
                  href="mailto:floramour.arrangements@gmail.com"
                  className="flex items-center gap-1 transition-colors hover:text-burgundy"
                >
                  <Mail className="h-3.5 w-3.5" />
                  Email
                </a>
              </div>
            </div>
          </div>

          {/* Weddings & Events Card */}
          <div className="group flex flex-col items-center gap-6 border border-border bg-card p-8 text-center transition-all hover:border-burgundy/30 hover:shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blush/30">
              <Heart className="h-6 w-6 text-burgundy" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-xl text-foreground">Weddings & Events</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Full floral design for your special day — bridal bouquets, centerpieces, installations, and more.
              </p>
            </div>
            <div className="mt-auto flex flex-col gap-3">
              <Link
                href="/how-to-order#events"
                className="group/btn flex items-center justify-center gap-2 border border-burgundy bg-burgundy px-6 py-2.5 text-xs uppercase tracking-widest text-white transition-all hover:bg-transparent hover:text-burgundy"
              >
                Book a Consultation
                <Calendar className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
              </Link>
              <p className="text-xs text-muted-foreground">
                Free consultation to discuss your vision
              </p>
            </div>
          </div>
        </div>

        {/* Policy Link */}
        <Link
          href="/policy"
          className="mt-4 text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          Read our order policy
        </Link>
      </div>
    </section>
  )
}
