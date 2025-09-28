export function TunevooLogo() {
  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Logo placeholder - replace with actual logo */}
      <div className="flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 border border-primary/20">
        <span className="text-2xl font-serif font-bold text-primary">T</span>
      </div>

      {/* Company name */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-foreground tracking-tight text-balance">
        Tunevoo
      </h1>

      {/* Subtle separator */}
      <div className="w-16 h-px bg-border"></div>

      {/* Tagline */}
      <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide text-balance">
        Premium Tunisian Olive Oil
      </p>
    </div>
  )
}
