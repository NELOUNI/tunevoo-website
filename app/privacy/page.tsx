import { DevelopmentBanner } from "@/components/development-banner"
import { Footer } from "@/components/footer"
import { TunevooLogo } from "@/components/tunevoo-logo"
import Link from "next/link"

export default function PrivacyPolicyPage() {
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
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="prose prose-slate max-w-none">
            <h1 className="text-4xl font-serif font-bold text-foreground mb-8">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

            <div className="space-y-8">
              <section id="introduction">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Tunevoo ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.tunevoo.com (the "Site").
                </p>
              </section>

              <section id="information-collection">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-medium text-foreground mb-3">2.1 Personal Information</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li>Register for an account</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Contact us through our website</li>
                  <li>Make a purchase</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground mb-3">2.2 Automatically Collected Information</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We automatically collect certain information about your device and usage patterns, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website information</li>
                </ul>
              </section>

              <section id="information-use">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide, operate, and maintain our website</li>
                  <li>Improve, personalize, and expand our website</li>
                  <li>Understand and analyze how you use our website</li>
                  <li>Develop new products, services, features, and functionality</li>
                  <li>Communicate with you for customer service and support</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Process transactions and send related information</li>
                  <li>Find and prevent fraud</li>
                </ul>
              </section>

              <section id="information-sharing">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">4. Information Sharing and Disclosure</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and prevent fraud</li>
                  <li>With trusted service providers who assist us in operating our website</li>
                </ul>
              </section>

              <section id="data-security">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">5. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
                </p>
              </section>

              <section id="cookies">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">6. Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section id="your-rights">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">7. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion of your personal information</li>
                  <li>Restriction of processing</li>
                  <li>Data portability</li>
                  <li>Objection to processing</li>
                </ul>
              </section>

              <section id="children-privacy">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">8. Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
                </p>
              </section>

              <section id="changes">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">9. Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section id="contact">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">10. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
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
