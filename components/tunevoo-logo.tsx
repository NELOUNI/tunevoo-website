export function TunevooLogo() {
  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Company name */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-foreground tracking-tight text-balance">
        TunEVOO
      </h1>

      {/* Subtle separator */}
      <div className="w-16 h-px bg-border"></div>

      {/* Tagline */}
      <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide text-balance">
        Premium Extra Virgin Olive Oil from Tunisia to your Table
      </p>
    </div>
  )
}
