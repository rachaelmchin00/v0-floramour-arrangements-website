import Link from "next/link"
import { ArrowRight, Instagram, Mail } from "lucide-react"

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
          We accept order inquiries via Instagram DMs and email. Please read our ordering guide and policy before reaching out.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/how-to-order"
            className="group flex items-center gap-2 border border-foreground bg-foreground px-8 py-3 text-xs uppercase tracking-widest text-primary-foreground transition-all hover:bg-transparent hover:text-foreground"
          >
            How to Order
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/policy"
            className="flex items-center gap-2 border border-foreground px-8 py-3 text-xs uppercase tracking-widest text-foreground transition-all hover:bg-foreground hover:text-primary-foreground"
          >
            Order Policy
          </Link>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="https://instagram.com/floramour.arrangements"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-burgundy"
          >
            <Instagram className="h-4 w-4" />
            Instagram DMs
          </a>
          <span className="hidden text-border sm:block">|</span>
          <a
            href="mailto:floramour.arrangements@gmail.com"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-burgundy"
          >
            <Mail className="h-4 w-4" />
            floramour.arrangements@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}
