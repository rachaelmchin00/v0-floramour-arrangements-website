import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Instagram, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "About | Floramour Arrangements",
  description: "Learn about Floramour Arrangements, a luxury and events florist founded by Rachael Chin in Woodbridge, NJ.",
}

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="flex flex-col items-center gap-4 px-6 py-24 text-center lg:py-32">
        <p className="text-xs uppercase tracking-[0.3em] text-burgundy">
          About Us
        </p>
        <h1 className="font-serif text-4xl tracking-tight text-foreground md:text-5xl lg:text-6xl">
          <span className="text-balance">Floramour Arrangements</span>
        </h1>
      </section>

      {/* Story Section */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9529-P20ma1Y5wbyHaNutS4UunsCp5gKbZf.jpg"
              alt="Heart-shaped red rose arrangement by Floramour Arrangements"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="font-serif text-2xl leading-snug tracking-tight text-foreground md:text-3xl">
              <span className="text-balance">Crafted with love, designed with intention</span>
            </h2>
            <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Floramour Arrangements was founded by Rachael Chin with a simple vision: to bring luxury, artistry, and heart to every floral creation. What began as a deep passion for flowers has blossomed into a bespoke floral studio, where each arrangement is a unique work of art.
              </p>
              <p>
                Based in Woodbridge, New Jersey, Floramour serves clients across New Jersey and surrounding areas. Whether it{"'"}s an intimate bouquet for a loved one, a statement centerpiece for an event, or lush florals for your special day, every design is meticulously crafted to reflect your personal style and the significance of the moment.
              </p>
              <p>
                As a small business and passion project, Floramour is built on the belief that flowers have the power to tell stories, evoke emotion, and elevate any occasion. We are committed to sourcing the finest blooms and creating arrangements that feel as extraordinary as the people who receive them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="flex flex-col gap-4">
              <div className="h-px w-12 bg-burgundy" />
              <h3 className="font-serif text-xl text-foreground">Bespoke Design</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Every arrangement is custom-designed to reflect your vision, color palette, and the occasion. No two creations are ever the same.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="h-px w-12 bg-burgundy" />
              <h3 className="font-serif text-xl text-foreground">Premium Quality</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We source the freshest, highest-quality blooms to ensure every arrangement is as vibrant and long-lasting as it is beautiful.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="h-px w-12 bg-burgundy" />
              <h3 className="font-serif text-xl text-foreground">Personal Touch</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                As a small studio, every order receives dedicated attention and care. Your vision is our priority from inquiry to delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-32">
        <p className="text-xs uppercase tracking-[0.3em] text-burgundy">
          Get in Touch
        </p>
        <h2 className="mt-4 font-serif text-2xl leading-snug tracking-tight text-foreground md:text-3xl">
          <span className="text-balance">{"We'd love to hear from you"}</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
          Reach out via Instagram DMs or email to start your floral inquiry.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <a
            href="https://instagram.com/floramour.arrangements"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-burgundy"
          >
            <Instagram className="h-4 w-4" />
            @floramour.arrangements
          </a>
          <a
            href="mailto:floramour.arrangements@gmail.com"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-burgundy"
          >
            <Mail className="h-4 w-4" />
            floramour.arrangements@gmail.com
          </a>
        </div>
        <div className="mt-10">
          <Link
            href="/how-to-order"
            className="group inline-flex items-center gap-2 border border-foreground bg-foreground px-8 py-3 text-xs uppercase tracking-widest text-primary-foreground transition-all hover:bg-transparent hover:text-foreground"
          >
            How to Order
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  )
}
