import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const gridClasses = [
  "col-span-1 row-span-2",
  "col-span-1",
  "col-span-1",
  "col-span-1",
  "col-span-1",
  "col-span-1",
  "col-span-1",
  "col-span-1",
]

const portfolioImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9529-P20ma1Y5wbyHaNutS4UunsCp5gKbZf.jpg",
    alt: "Heart-shaped red rose arrangement on moss base",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8822-9DctwElMLqHZ9EZ6jjDITcErhFDxS9.jpg",
    alt: "Large red rose bouquet with eucalyptus in kraft paper wrapping",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9527.PNG-xuuSIDABFbOo0in4rypG954fWqADo6.png",
    alt: "Dramatic red rose and orchid arrangement in dark vase on white pedestal",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8710-u9EJXqIsZUpAhN2cATgiKKjDxgPL3U.jpg",
    alt: "Red roses wrapped in black paper with eucalyptus and red ribbon",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9528.PNG-r48wgCZh9qh9JkT3TArJnW39Je3M73.png",
    alt: "Elegant white rose arrangement with red ribbon accents",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9439-LynPwIqMASYTIt2k0g4peazF5yCjYX.jpg",
    alt: "Pink stargazer lily bouquet wrapped in white tissue with greenery",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8949-NyK1Sn5kLFU1i2cyTmfjNOlCoB5nDY.jpg",
    alt: "Soft pink bouquet with tulips, roses, and eucalyptus in white paper with pink ribbon",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7240-DHNtOvhHzYdCzTvXBx7rZJXlDDZJ7f.jpg",
    alt: "Lush pink roses and cream chrysanthemum bouquet wrapped in white paper with pink ribbon",
  },
]

export function PortfolioGrid() {
  return (
    <section className="bg-secondary px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-burgundy">
            Portfolio
          </p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">A glimpse of our work</span>
          </h2>
        </div>

        {/* Full grid — visible only at lg (1024px+), capped at 800px */}
        <div className="mx-auto hidden grid-cols-3 auto-rows-[280px] gap-4 lg:grid" style={{ maxWidth: "800px" }}>
          {portfolioImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden ${gridClasses[index]}`}
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

        {/* Compact 3-image view — visible below lg */}
        <div className="lg:hidden">
          <div className="mx-auto grid max-w-sm grid-cols-3 gap-2">
            {portfolioImages.slice(0, 3).map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden"
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
          <div className="mt-8 text-center">
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-2 border border-foreground bg-foreground px-8 py-3 text-xs uppercase tracking-widest text-primary-foreground transition-all hover:bg-transparent hover:text-foreground"
            >
              View Full Gallery
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
