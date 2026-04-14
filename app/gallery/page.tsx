import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Instagram, Mail, Calendar, Flower2, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Gallery | Floramour Arrangements",
  description: "Browse our portfolio of luxury floral arrangements, bouquets, and event florals by Floramour Arrangements.",
}

const portfolioImages = [
  {
    // 1
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9529-P20ma1Y5wbyHaNutS4UunsCp5gKbZf.jpg",
    alt: "Heart-shaped red rose arrangement on moss base",
  },
  {
    // 2 (swapped with 18)
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/D3B10A6E-608E-469E-AA95-CB3F3819048D_1_105_c-T34TBDf0AaWJsa5MuNyD5IyBC1ec8G.jpeg",
    alt: "Bride in white lace dress and cowboy hat holding calla lily bouquets with pearl strands",
  },
  {
    // 3
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/86A620A9-A69B-4C79-8DC4-9A22278BBC54_1_105_c-n9NAYT2N0dfo1ST5YdcL62hsYLnGSb.jpeg",
    alt: "Bride holding calla lily and white orchid bouquet with trailing amaranthus greenery",
  },
  {
    // 4
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9026-f0svNWkbvj3MjbUxX54Vyg6Thob20h.jpg",
    alt: "Luxury floral arrangement with burgundy carnations, pink orchids, peach anthuriums and trailing amaranthus in white ribbed bowl",
  },
  {
    // 5 (swapped with 9)
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7FDB7299-DC00-4947-A19E-CD3D3D6977E5_1_105_c-QMEXiUV61x66m4gaZnaHbVTk8YBJpu.jpeg",
    alt: "Pink roses and white flowers arrangement in urn vase with Floramour Arrangements card",
  },
  {
    // 6 (swapped with 10)
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8974-52BMoiYrdUxFK7PiKN3msji5ByhPln.jpg",
    alt: "White and lime green cascade bridal bouquet with pearl strands held by person in white",
  },
  {
    // 7
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EB2E0F8D-58BC-45F6-8C76-DE59FBCCB452_1_105_c-soNBZxg9aNzjZRAsBXlIeHhI6vZ0Hr.jpeg",
    alt: "Blue hydrangea, white roses, and purple anemone arrangement in white ribbed bowl",
  },
  {
    // 8
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9050-xGoMPNKAlOCTRYZ4AQbsZmQqQA5dd8.jpg",
    alt: "Hand-held bouquet of pink cymbidium orchids, purple calla lilies, peach anthurium and trailing burgundy amaranthus with gold lace fan",
  },
  {
    // 9 (swapped with 5)
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/36232395-5D27-4081-A2AA-0CC23DBD69B1_1_105_c-Zq7kEDDctGs7ZQXcl0DVWz6GWHXNXz.jpeg",
    alt: "Bride in white off-shoulder ball gown with tulle skirt holding white calla lily bouquet with green ribbon",
  },
  {
    // 10 (swapped with 6)
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9528.PNG-r48wgCZh9qh9JkT3TArJnW39Je3M73.png",
    alt: "Elegant white rose arrangement with red ribbon accents",
  },
  {
    // 11
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9527.PNG-xuuSIDABFbOo0in4rypG954fWqADo6.png",
    alt: "Dramatic red rose and orchid arrangement in dark vase on white pedestal",
  },
  {
    // 12
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9439-LynPwIqMASYTIt2k0g4peazF5yCjYX.jpg",
    alt: "Pink stargazer lily bouquet wrapped in white tissue with greenery",
  },
  {
    // 13
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8710-u9EJXqIsZUpAhN2cATgiKKjDxgPL3U.jpg",
    alt: "Red roses wrapped in black paper with eucalyptus and red ribbon",
  },
  {
    // 14
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7240-DHNtOvhHzYdCzTvXBx7rZJXlDDZJ7f.jpg",
    alt: "Lush pink roses and cream chrysanthemum bouquet wrapped in white paper with pink ribbon",
  },
  {
    // 15 (swapped with 18)
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/60F90C88-7F8A-4801-ADC3-65CCA71320CC_4_5005_c-EU0n0ClhAGPCQN6qi2xrmTStdmdR8B.jpeg",
    alt: "Pink and cream dahlia bouquet wrapped in pink paper with Floramour Arrangements card",
  },
  {
    // 16 (swapped with 19)
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8822-9DctwElMLqHZ9EZ6jjDITcErhFDxS9.jpg",
    alt: "Large red rose bouquet with eucalyptus in kraft paper wrapping",
  },
  {
    // 17 (swapped with 19)
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1A55A506-3D71-4AAB-A6ED-8CB93D1CCB9C_4_5005_c-AP8oHITIrJNUrQVX1vtuvSgFY9eG5D.jpeg",
    alt: "Red roses, burgundy dahlias, pink carnations and white baby's breath bouquet in black tulle wrapping inside car",
  },
  {
    // 18 (swapped with 15)
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8675-Sd4v2pAfCl5rA8aw730mKxJZ0uf7zu.jpg",
    alt: "Person holding large red rose bouquet wrapped in white paper with red ribbon",
  },
  {
    // 19 (swapped with 16)
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8949-NyK1Sn5kLFU1i2cyTmfjNOlCoB5nDY.jpg",
    alt: "Soft pink bouquet with tulips, roses, and eucalyptus in white paper with pink ribbon",
  },
  {
    // 20
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/93762888-9461-4FD6-8D0E-3EF6923E9DF0_4_5005_c-z7fNCFgyIlcrNlK7FdDvq1bYvEHCm9.jpeg",
    alt: "Red roses, burgundy flowers and pink carnations bouquet in white paper with red ribbons",
  },
  {
    // 21
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/22FFC471-B1F8-46B3-8DA1-FC102C29C10C_1_105_c-Lj2Z20ob6sAzZSPzBk8Q4dlnwPjLza.jpeg",
    alt: "White ranunculus and carnations with flowing ornamental grasses modern arrangement",
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
        <div className="mx-auto" style={{ maxWidth: "800px" }}>
          <div className="grid grid-cols-2 gap-3 auto-rows-[160px] sm:gap-4 sm:auto-rows-[280px] sm:grid-cols-3">
            {portfolioImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden col-span-1"
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

      {/* CTA — mirrors homepage */}
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
                    href="mailto:floramourarrangements@gmail.com"
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
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Before reaching out, please review our{" "}
            <Link
              href="/policy"
              className="text-foreground underline underline-offset-4 transition-colors hover:text-burgundy"
            >
              order policy
            </Link>{" "}
            to ensure a smooth experience.
          </p>
        </div>
      </section>
    </div>
  )
}

