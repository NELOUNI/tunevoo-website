"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

interface BrandCardProps {
  brand: "qalaa" | "tunigold"
  title: string
  description: string
  ctaText: string
  href: string
  premium: boolean
}

export function BrandCard({ brand, title, description, ctaText, href, premium }: BrandCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    // For now, just log the click - replace with actual navigation
    console.log(`Navigating to ${href}`)
    // window.open(href, '_blank')
  }

  return (
    <div
      className={`
        group relative overflow-hidden rounded-2xl border bg-card p-8 md:p-10 
        transition-all duration-500 ease-out cursor-pointer
        hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2
        ${isHovered ? "scale-[1.02]" : "scale-100"}
        ${premium ? "border-accent/30 hover:border-accent/50" : "border-primary/30 hover:border-primary/50"}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleClick()
        }
      }}
      aria-label={`Explore ${title} brand`}
    >
      {/* Subtle background gradient */}
      <div
        className={`
        absolute inset-0 opacity-0 transition-opacity duration-500
        ${premium ? "bg-gradient-to-br from-accent/5 to-accent/10" : "bg-gradient-to-br from-primary/5 to-primary/10"}
        ${isHovered ? "opacity-100" : "opacity-0"}
      `}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-6">
        {/* Brand logo placeholder */}
        <div
          className={`
          flex items-center justify-center w-16 h-16 rounded-xl border-2 transition-all duration-300
          ${
            premium
              ? "bg-accent/10 border-accent/30 group-hover:border-accent/50"
              : "bg-primary/10 border-primary/30 group-hover:border-primary/50"
          }
        `}
        >
          <span
            className={`
            text-xl font-serif font-bold transition-colors duration-300
            ${premium ? "text-accent" : "text-primary"}
          `}
          >
            {brand === "qalaa" ? "Q" : "TG"}
          </span>
        </div>

        {/* Brand name */}
        <h2 className="text-2xl md:text-3xl font-serif font-light text-foreground tracking-tight">{title}</h2>

        {/* Description */}
        <p className="text-muted-foreground font-light leading-relaxed text-balance max-w-xs">{description}</p>

        {/* CTA Button */}
        <div
          className={`
          inline-flex items-center space-x-2 px-6 py-3 rounded-full border transition-all duration-300
          ${
            premium
              ? "border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground"
              : "border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
          }
          group-hover:shadow-lg
        `}
        >
          <span className="font-medium text-sm tracking-wide">{ctaText}</span>
          <ArrowRight
            className={`
            w-4 h-4 transition-transform duration-300
            ${isHovered ? "translate-x-1" : "translate-x-0"}
          `}
          />
        </div>
      </div>

      {/* Hover glow effect */}
      <div
        className={`
        absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 pointer-events-none
        ${
          premium
            ? "shadow-[0_0_50px_rgba(var(--color-accent),0.15)]"
            : "shadow-[0_0_50px_rgba(var(--color-primary),0.15)]"
        }
        ${isHovered ? "opacity-100" : "opacity-0"}
      `}
      />
    </div>
  )
}
