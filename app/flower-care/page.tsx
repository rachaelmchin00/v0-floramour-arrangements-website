import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Droplets, Scissors, Sun, Leaf } from "lucide-react"

export const metadata: Metadata = {
  title: "Flower Care Guide | Floramour Arrangements",
  description: "Learn how to care for your floral arrangement from Floramour Arrangements. Tips for keeping your flowers fresh and beautiful.",
}

const careSteps = [
  {
    icon: Leaf,
    title: "Initial Setup",
    items: [
      "Unwrap: Remove packaging (to keep the waterproof wrap, message us for special instructions).",
      "Vase: Place in a clean vase with water and the provided floral food.",
    ],
  },
  {
    icon: Scissors,
    title: "Every 2\u20133 Days",
    items: [
      "Trim: Cut stems by 1 inch at an angle for better water absorption.",
      "Refresh: Change the water and add 1 tsp sugar + 1 drop bleach to kill bacteria.",
      "Prune: Remove any dead flowers immediately to keep the arrangement looking fresh.",
    ],
  },
  {
    icon: Sun,
    title: "Placement & Environment",
    items: [
      "Temperature: Keep in a cool, dark spot away from direct sunlight, heaters, or hair dryers.",
      "Keep Clear: Avoid placing near fruit (the gases cause faster wilting).",
    ],
  },
  {
    icon: Droplets,
    title: "Additional Notes",
    items: [
      "Flower longevity depends on proper care and environmental conditions.",
      "Once flowers are picked up or delivered, care is the client\u2019s responsibility.",
      "If you have any additional questions, message us anytime.",
    ],
  },
]

export default function FlowerCarePage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="flex flex-col items-center gap-4 px-6 py-24 text-center lg:py-32">
        <p className="text-xs uppercase tracking-[0.3em] text-burgundy">
          After Your Purchase
        </p>
        <h1 className="font-serif text-4xl tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Flower Care Guide
        </h1>
        <p className="mx-auto mt-2 max-w-lg text-base leading-relaxed text-muted-foreground">
          To help ensure the longevity of your flowers, please follow the care instructions below.
        </p>
      </section>

      {/* Feature Image */}
      <section className="mx-auto max-w-5xl px-6">
        <div className="relative aspect-[16/7] overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9439-yDoNykiGRPiP7AhUrVpxs1vJH80S3b.jpg"
            alt="Pink stargazer lily bouquet wrapped in white tissue by Floramour Arrangements"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Care Steps */}
      <section className="mx-auto max-w-4xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-16 md:grid-cols-2">
          {careSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center border border-burgundy">
                    <Icon className="h-5 w-5 text-burgundy" />
                  </div>
                  <h2 className="font-serif text-xl text-foreground">{step.title}</h2>
                </div>
                <ul className="flex flex-col gap-3 pl-[52px]">
                  {step.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-pink" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary px-6 py-24 text-center lg:py-32">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-2xl tracking-tight text-foreground md:text-3xl">
            <span className="text-balance">Need more help with your flowers?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            {"Don't"} hesitate to reach out via Instagram or email. {"We're"} always happy to help.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/how-to-order"
              className="group inline-flex items-center gap-2 border border-foreground bg-foreground px-8 py-3 text-xs uppercase tracking-widest text-primary-foreground transition-all hover:bg-transparent hover:text-foreground"
            >
              Place an Inquiry
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/policy"
              className="inline-flex items-center gap-2 border border-foreground px-8 py-3 text-xs uppercase tracking-widest text-foreground transition-all hover:bg-foreground hover:text-primary-foreground"
            >
              Order Policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
