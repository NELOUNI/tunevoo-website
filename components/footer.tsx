"use client"

import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-serif text-olive-light mb-2">TunEVOO</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Premium Tunisian olive oil brands, crafted with tradition and excellence.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium text-slate-300 mb-4 tracking-wide uppercase">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-olive-light mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:contact@tunevoo.com"
                  className="text-sm text-slate-400 hover:text-olive-light transition-colors duration-200"
                >
                  contact@tunevoo.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-olive-light mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+21658737106"
                  className="text-sm text-slate-400 hover:text-olive-light transition-colors duration-200"
                >
                  +216 58 737 106
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-olive-light mt-0.5 flex-shrink-0" />
                <address className="text-sm text-slate-400 not-italic leading-relaxed">
                  Avenue 14 Janvier
                  <br />
                  4000 Sousse, Tunisia
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-500">© 2025 TunEVOO. All rights reserved. Made with love in Tunisia.</p>
            <div className="flex gap-6">
              <a href="/privacy" className="text-xs text-slate-500 hover:text-slate-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="text-xs text-slate-500 hover:text-slate-400 transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
