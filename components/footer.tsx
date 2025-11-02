import Link from "next/link"
import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin, Clock } from "lucide-react"
import { COMPANY_INFO } from "@/lib/constants"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 border-t border-slate-700/50">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <span className="text-3xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Thulir
              </span>
              <span className="text-sm text-slate-400 ml-2">Agency</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">{COMPANY_INFO.tagline}</p>
            <div className="flex gap-4">
              <a
                href={COMPANY_INFO.socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-secondary/20 border border-slate-700 hover:border-secondary/50 flex items-center justify-center text-slate-400 hover:text-secondary transition-all"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href={COMPANY_INFO.socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-secondary/20 border border-slate-700 hover:border-secondary/50 flex items-center justify-center text-slate-400 hover:text-secondary transition-all"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href={COMPANY_INFO.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-secondary/20 border border-slate-700 hover:border-secondary/50 flex items-center justify-center text-slate-400 hover:text-secondary transition-all"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-100 mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-slate-300 hover:text-secondary transition-colors inline-flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary/50 group-hover:bg-secondary mr-2 transition-colors" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-sm text-slate-300 hover:text-secondary transition-colors inline-flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary/50 group-hover:bg-secondary mr-2 transition-colors" />
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/brands"
                  className="text-sm text-slate-300 hover:text-secondary transition-colors inline-flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary/50 group-hover:bg-secondary mr-2 transition-colors" />
                  Brands
                </Link>
              </li>
              <li>
                <Link
                  href="/technical-support"
                  className="text-sm text-slate-300 hover:text-secondary transition-colors inline-flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary/50 group-hover:bg-secondary mr-2 transition-colors" />
                  Technical Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-slate-100 mb-6 uppercase tracking-wider">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                  <Phone className="h-4 w-4 text-secondary" />
                </div>
                <span className="text-sm text-slate-300 pt-1">{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                  <Mail className="h-4 w-4 text-secondary" />
                </div>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-sm text-slate-300 hover:text-secondary transition-colors pt-1"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                  <MapPin className="h-4 w-4 text-secondary" />
                </div>
                <span className="text-sm text-slate-300 pt-1">{COMPANY_INFO.address}</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-sm font-semibold text-slate-100 mb-6 uppercase tracking-wider">Business Hours</h3>
            <div className="flex items-start gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-4 w-4 text-secondary" />
              </div>
              <div className="text-sm text-slate-300 space-y-1 pt-1">
                <div>{COMPANY_INFO.businessHours.weekdays}</div>
                <div>{COMPANY_INFO.businessHours.saturday}</div>
                <div className="text-slate-400">{COMPANY_INFO.businessHours.sunday}</div>
              </div>
            </div>
            <Link
              href="/request-quote"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-950 border border-[#7a4d15] text-white rounded-lg font-medium text-sm hover:bg-gray-900 hover:shadow-xl hover:shadow-secondary/45 transition-all"
            >
              Request Quote
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">© {currentYear} Thulir Agency. All rights reserved.</p>
            <div className="flex gap-8">
              <Link href="/privacy-policy" className="text-sm text-slate-400 hover:text-secondary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="text-sm text-slate-400 hover:text-secondary transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
