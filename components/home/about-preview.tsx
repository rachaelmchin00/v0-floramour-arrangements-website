import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function AboutPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9527-Y5IRJvbdfK8T6kNENM2CqMQH1vczen.jpg"
            alt="Red roses and orchid arrangement in dark vase on white pedestal by Floramour Arrangements"
            fill
            className="object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-6">
          <p className="text-xs uppercase tracking-[0.3em] text-burgundy">
            About Floramour
          </p>
          <h2 className="font-serif text-3xl leading-snug tracking-tight text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">Where artistry meets intention</span>
          </h2>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            Founded by Rachael Chin, Floramour Arrangements is a luxury floral studio dedicated to crafting one-of-a-kind arrangements for life{"'"}s most meaningful moments — from everyday bouquets and gifts to full wedding and event florals. Every design is thoughtfully created to reflect your vision, your story, and the beauty of the occasion.
          </p>
          <Link
            href="/about"
            className="group mt-2 flex items-center gap-2 text-xs uppercase tracking-widest text-foreground transition-colors hover:text-burgundy"
          >
            Learn More
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
