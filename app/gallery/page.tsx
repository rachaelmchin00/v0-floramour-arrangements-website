import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Gallery | Floramour Arrangements",
  description: "Browse our portfolio of luxury floral arrangements, bouquets, and event florals by Floramour Arrangements.",
}

const portfolioImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9529-P20ma1Y5wbyHaNutS4UunsCp5gKbZf.jpg",
    alt: "Heart-shaped red rose arrangement on moss base",
    className: "col-span-1 row-span-2",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8822-9DctwElMLqHZ9EZ6jjDITcErhFDxS9.jpg",
    alt: "Large red rose bouquet with eucalyptus in kraft paper wrapping",
    className: "col-span-1",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9527.PNG-xuuSIDABFbOo0in4rypG954fWqADo6.png",
    alt: "Dramatic red rose and orchid arrangement in dark vase on white pedestal",
    className: "col-span-1",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8710-u9EJXqIsZUpAhN2cATgiKKjDxgPL3U.jpg",
    alt: "Red roses wrapped in black paper with eucalyptus and red ribbon",
    className: "col-span-1",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9528.PNG-r48wgCZh9qh9JkT3TArJnW39Je3M73.png",
    alt: "Elegant white rose arrangement with red ribbon accents",
    className: "col-span-1",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9439-LynPwIqMASYTIt2k0g4peazF5yCjYX.jpg",
    alt: "Pink stargazer lily bouquet wrapped in white tissue with greenery",
    className: "col-span-1",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8949-NyK1Sn5kLFU1i2cyTmfjNOlCoB5nDY.jpg",
    alt: "Soft pink bouquet with tulips, roses, and eucalyptus in white paper with pink ribbon",
    className: "col-span-1",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7240-DHNtOvhHzYdCzTvXBx7rZJXlDDZJ7f.jpg",
    alt: "Lush pink roses and cream chrysanthemum bouquet wrapped in white paper with pink ribbon",
    className: "col-span-1",
  },
]

export default function GalleryPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="flex flex-col items-center gap-4 px-6 py-24 text-center lg:py-32">
        <p className="text-xs uppercase tracking-[0.3em] text-burgundy">
          Portfolio
        </p>
        <h1 className="font-serif text-4xl tracking-tight text-foreground md:text-5xl lg:text-6xl">
          <span className="text-balance">Our Work</span>
        </h1>
        <p className="mx-auto mt-2 max-w-lg text-base leading-relaxed text-muted-foreground">
          A collection of our custom arrangements, bouquets, and event florals. Each piece is uniquely designed to capture the essence of the occasion.
        </p>
      </section>

      {/* Gallery Grid */}
      <section className="bg-secondary px-6 py-24 lg:py-32">
        <div className="mx-auto" style={{ maxWidth: "750px" }}>
          <div className="grid grid-cols-3 gap-4 auto-rows-[280px]">
            {portfolioImages.map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden ${image.className}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-32">
        <h2 className="font-serif text-2xl tracking-tight text-foreground md:text-3xl">
          <span className="text-balance">Love what you see?</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
          {"Let's"} create something beautiful together. Every arrangement is custom-designed to reflect your vision and the occasion.
        </p>
        <div className="mt-8">
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
