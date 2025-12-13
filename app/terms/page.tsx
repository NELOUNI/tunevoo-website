import { DevelopmentBanner } from "@/components/development-banner"
import { Footer } from "@/components/footer"
import { TunevooLogo } from "@/components/tunevoo-logo"
import Link from "next/link"

export default function TermsOfServicePage() {
  return (
    <>
      <DevelopmentBanner />
      <main className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border bg-card">
          <div className="mx-auto max-w-6xl px-6 py-8">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-3">
                <TunevooLogo />
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="prose prose-slate max-w-none">
            <h1 className="text-4xl font-serif font-bold text-foreground mb-8">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

            <div className="space-y-8">
              <section id="acceptance">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using the Tunevoo website (www.tunevoo.com), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section id="description">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">2. Description of Service</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Tunevoo provides information about premium Tunisian olive oil brands, including Qalaa and Laya. Our website serves as a platform to showcase our products and connect customers with our brand offerings.
                </p>
              </section>

              <section id="use-license">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">3. Use License</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Permission is granted to temporarily download one copy of the materials on Tunevoo's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </section>

              <section id="user-accounts">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">4. User Accounts</h2>
                <p className="text-muted-foreground leading-relaxed">
                  When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.
                </p>
              </section>

              <section id="prohibited-uses">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">5. Prohibited Uses</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You may not use our website:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                  <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>To submit false or misleading information</li>
                  <li>To upload or transmit viruses or any other type of malicious code</li>
                </ul>
              </section>

              <section id="content">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">6. Content</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the content that you post to the website, including its legality, reliability, and appropriateness.
                </p>
              </section>

              <section id="intellectual-property">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">7. Intellectual Property Rights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Other than the content you own, under these Terms, Tunevoo and/or its licensors own all the rights and materials contained in this website. You are granted limited license only for purposes of viewing the material contained on this website.
                </p>
              </section>

              <section id="privacy">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">8. Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the website, to understand our practices.
                </p>
              </section>

              <section id="disclaimers">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">9. Disclaimers</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, Tunevoo:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Excludes all representations and warranties relating to this website and its contents</li>
                  <li>Excludes all liability for damages arising out of or in connection with your use of this website</li>
                </ul>
              </section>

              <section id="limitation">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">10. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In no event shall Tunevoo, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the website.
                </p>
              </section>

              <section id="governing-law">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">11. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be interpreted and governed by the laws of Tunisia, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                </p>
              </section>

              <section id="changes">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">12. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                </p>
              </section>

              <section id="contact">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">13. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p className="text-foreground font-medium">Tunevoo</p>
                  <p className="text-muted-foreground">Email: contact@tunevoo.com</p>
                  <p className="text-muted-foreground">Phone: +216 58 737 106</p>
                  <p className="text-muted-foreground">Address: Avenue 14 Janvier, 4000 Sousse, Tunisia</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
