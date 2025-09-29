import { BrandCard } from "@/components/brand-card"
import { TunevooLogo } from "@/components/tunevoo-logo"
import { Footer } from "@/components/footer"
import { DevelopmentBanner } from "@/components/development-banner"

export default function HomePage() {
  return (
    <>
      <DevelopmentBanner />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-12">
          <div className="mx-auto max-w-4xl text-center">
            {/* Tunevoo Logo with fade-in animation */}
            <div className="mb-16 opacity-0 animate-fade-in">
              <TunevooLogo />
            </div>

            {/* Brand Cards Container */}
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              {/* Qalaa Brand Card */}
              <div className="opacity-0 animate-fade-in-up animate-delay-200">
                <BrandCard
                  brand="qalaa"
                  title="Qalaa"
                  description="Exquisite Olive Oil for the Refined Palate"
                  ctaText="Explore Qalaa"
                  href="https://www.qalaaoliveoil.com"
                  premium={true}
                />
              </div>

              {/* TuniGold Brand Card */}
              <div className="opacity-0 animate-fade-in-up animate-delay-400">
                <BrandCard
                  brand="tunigold"
                  title="TuniGold"
                  description="Premium Taste, Everyday Elegance"
                  ctaText="Explore TuniGold"
                  href="https://www.tunevoo.com"
                  premium={false}
                />
              </div>
            </div>

            {/* Subtle tagline */}
            <div className="mt-16 opacity-0 animate-fade-in animate-delay-400">
              <p className="text-sm text-muted-foreground font-light tracking-wide">
                Crafted in Tunisia, Celebrated Worldwide
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
