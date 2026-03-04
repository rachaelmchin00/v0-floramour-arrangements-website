import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0 bg-[#c8c0ba]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8B62FA38-EA2C-44F5-A626-C41C22EB5933_4_5005_c-V1vA4K3jNKLa6PpMVAawaSx9lBZ8Ce.jpeg"
          alt="Elegant white rose arrangement with red ribbons by Floramour Arrangements"
          fill
          className="object-cover object-center scale-90"
          priority
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-8 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-burgundy">
          Luxury & Events Florist
        </p>

        <h1 className="font-serif text-5xl leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl">
          <span className="text-balance">Floramour Arrangements</span>
        </h1>

        <p className="max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
          Bespoke floral designs by Rachael Chin. Based in Woodbridge, NJ, serving New Jersey and surrounding areas.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/how-to-order"
            className="group flex items-center gap-2 border border-foreground bg-foreground px-8 py-3 text-xs uppercase tracking-widest text-primary-foreground transition-all hover:bg-transparent hover:text-foreground"
          >
            Place an Inquiry
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/policy"
            className="flex items-center gap-2 border border-foreground px-8 py-3 text-xs uppercase tracking-widest text-foreground transition-all hover:bg-foreground hover:text-primary-foreground"
          >
            View Our Policy
          </Link>
        </div>
      </div>
    </section>
  )
}
