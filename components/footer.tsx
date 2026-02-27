import Link from "next/link"
import { Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-2xl tracking-wide text-foreground">
              Floramour Arrangements
            </h3>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Luxury & events florist based in Woodbridge, NJ. Serving New Jersey and surrounding areas.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-widest text-foreground">Navigate</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground transition-colors hover:text-burgundy">
                  About
                </Link>
              </li>
              <li>
                <Link href="/how-to-order" className="text-sm text-muted-foreground transition-colors hover:text-burgundy">
                  How to Order
                </Link>
              </li>
              <li>
                <Link href="/policy" className="text-sm text-muted-foreground transition-colors hover:text-burgundy">
                  Order Policy
                </Link>
              </li>
              <li>
                <Link href="/flower-care" className="text-sm text-muted-foreground transition-colors hover:text-burgundy">
                  Flower Care Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-widest text-foreground">Get in Touch</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:floramour.arrangements@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-burgundy"
              >
                <Mail className="h-4 w-4" />
                floramour.arrangements@gmail.com
              </a>
              <a
                href="https://instagram.com/floramour.arrangements"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-burgundy"
              >
                <Instagram className="h-4 w-4" />
                @floramour.arrangements
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <p className="text-center text-xs tracking-wide text-muted-foreground">
            Floramour Arrangements. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
