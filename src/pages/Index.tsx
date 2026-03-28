import { ExternalLink, Briefcase, Bot, Smartphone, GraduationCap, Chrome, Search, Database, Newspaper, Coins, Monitor, Users, Wrench, Radio, UserCheck, Building } from "lucide-react";

const SOCIAL_LINKS = [
  { label: "X (Twitter)", handle: "@cosmoquickhq", url: "https://x.com/cosmoquickhq", icon: "𝕏" },
  { label: "LinkedIn", handle: "CosmoQuick", url: "https://www.linkedin.com/company/cosmoquick", icon: "in" },
  { label: "Facebook", handle: "cosmoquickhq", url: "https://facebook.com/cosmoquickhq", icon: "f" },
  { label: "Medium", handle: "@cosmoquick", url: "https://medium.com/@cosmoquick", icon: "M" },
  { label: "Instagram", handle: "cosmoquickhq", url: "https://instagram.com/cosmoquickhq", icon: "📸" },
];

const PRODUCTS = [
  { name: "Instant Hiring", desc: "Hire in minutes, not months", icon: Briefcase, accent: "primary" },
  { name: "Recruiter OS", desc: "Command center for recruiters", icon: Users, accent: "accent" },
  { name: "Tools Suite", desc: "20+ AI-powered tools", icon: Wrench, accent: "primary" },
  { name: "Live", desc: "Real-time hiring events", icon: Radio, accent: "accent" },
  { name: "Screen", desc: "AI-powered screening", icon: Monitor, accent: "primary" },
  { name: "HRM SaaS", desc: "End-to-end HR management", icon: Building, accent: "accent" },
  { name: "Remote Job Board", desc: "Global remote opportunities", icon: Search, accent: "primary" },
  { name: "Freelance Platform", desc: "Connect with top freelancers", icon: UserCheck, accent: "accent" },
  { name: "CosmoQuick Learn", desc: "600+ courses", icon: GraduationCap, accent: "primary" },
  { name: "Auto-Apply Extension", desc: "Chrome extension for auto-apply", icon: Chrome, accent: "accent" },
  { name: "Candidate Import", desc: "Recruiter import extension", icon: Chrome, accent: "primary" },
  { name: "Mobile App", desc: "Hiring on the go", icon: Smartphone, accent: "accent" },
  { name: "Mira AI Agent", desc: "Your AI hiring assistant", icon: Bot, accent: "primary" },
  { name: "Founders & Hires", desc: "Media division", icon: Newspaper, accent: "accent", url: "https://foundersandhires.co" },
  { name: "Infoproducts", desc: "Digital products & guides", icon: GraduationCap, accent: "primary", url: "https://cosmoquick.gumroad.com" },
  { name: "CSQK Token", desc: "Utility token ecosystem", icon: Coins, accent: "accent" },
  { name: "X-Ray Search", desc: "700M+ database, plain English", icon: Database, accent: "primary" },
  { name: "Job Aggregator", desc: "1M+ listings from multiple ATS & APIs", icon: Search, accent: "accent" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent/[0.03] blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-border/30 animate-spin-slow opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/10 animate-spin-slow opacity-15" style={{ animationDirection: "reverse", animationDuration: "45s" }} />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-5 py-12 space-y-8">
        {/* Website CTA - Top Block */}
        <a
          href="https://cosmoquick.com"
          target="_blank"
          rel="noopener noreferrer"
          className="animate-slide-up block group"
        >
          <div className="relative rounded-2xl border border-primary/30 bg-card p-5 glow-teal glow-teal-hover card-shine">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-1">Visit us</p>
                <p className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  cosmoquick.com
                </p>
              </div>
              <ExternalLink className="w-5 h-5 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </a>

        {/* Future of Hiring - 3D Hero Block */}
        <div className="animate-slide-up relative rounded-2xl border border-border bg-card p-8 md:p-12 overflow-hidden" style={{ animationDelay: "0.1s" }}>
          {/* Orbiting elements */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="animate-orbit" style={{ animationDuration: "18s" }}>
              <div className="w-3 h-3 rounded-full bg-primary/40" />
            </div>
            <div className="animate-orbit" style={{ animationDuration: "25s", animationDelay: "-8s" }}>
              <div className="w-2 h-2 rounded-full bg-accent/40" />
            </div>
            <div className="animate-orbit" style={{ animationDuration: "32s", animationDelay: "-15s" }}>
              <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
            </div>
          </div>

          {/* Floating 3D shapes */}
          <div className="absolute top-6 right-8 animate-float">
            <div className="w-12 h-12 border-2 border-primary/30 rounded-lg" style={{ transform: "perspective(200px) rotateX(20deg) rotateY(-25deg)" }} />
          </div>
          <div className="absolute bottom-6 left-8 animate-float-delayed">
            <div className="w-8 h-8 bg-accent/20 rounded-full" style={{ transform: "perspective(200px) rotateX(-15deg)" }} />
          </div>
          <div className="absolute top-1/2 right-12 animate-float" style={{ animationDelay: "2s" }}>
            <div className="w-6 h-6 border border-accent/20 rotate-45" />
          </div>

          <div className="relative text-center space-y-4">
            <p className="text-xs font-mono text-muted-foreground tracking-[0.3em] uppercase">Redefining</p>
            <h1
              className="text-5xl md:text-7xl font-bold text-gradient-hero leading-tight tracking-tight"
              style={{
                textShadow: "0 0 80px hsl(168 80% 50% / 0.15)",
                transform: "perspective(800px) rotateX(2deg)",
              }}
            >
              Future of
              <br />
              Hiring
            </h1>
            <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
              An entire ecosystem of AI-powered hiring tools, platforms, and products — all under one roof.
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="space-y-3">
          <p className="animate-slide-up text-[10px] font-mono text-muted-foreground tracking-[0.3em] uppercase pl-1" style={{ animationDelay: "0.2s" }}>
            Connect
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {SOCIAL_LINKS.map((link, i) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="animate-slide-up group rounded-xl border border-border bg-card p-3 text-center glow-teal-hover card-shine"
                style={{ animationDelay: `${0.25 + i * 0.05}s` }}
              >
                <span className="block text-lg mb-1 grayscale group-hover:grayscale-0 transition-all">{link.icon}</span>
                <span className="block text-[10px] font-mono text-muted-foreground group-hover:text-foreground transition-colors">{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Ecosystem */}
        <div className="space-y-4">
          <div className="animate-slide-up flex items-center gap-3 pl-1" style={{ animationDelay: "0.5s" }}>
            <p className="text-[10px] font-mono text-muted-foreground tracking-[0.3em] uppercase">Ecosystem</p>
            <div className="flex-1 h-px bg-border" />
            <span className="text-[10px] font-mono text-primary">{PRODUCTS.length} products</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {PRODUCTS.map((product, i) => {
              const Icon = product.icon;
              const isAccent = product.accent === "accent";
              const Wrapper = product.url ? "a" : "div";
              const wrapperProps = product.url
                ? { href: product.url, target: "_blank", rel: "noopener noreferrer" as const }
                : {};

              return (
                <Wrapper
                  key={product.name}
                  {...(wrapperProps as any)}
                  className="animate-slide-up group rounded-xl border border-border bg-card p-3.5 glow-teal-hover card-shine flex items-start gap-3 cursor-default"
                  style={{ animationDelay: `${0.55 + i * 0.03}s` }}
                >
                  <div className={`mt-0.5 p-1.5 rounded-lg ${isAccent ? "bg-accent/10" : "bg-primary/10"}`}>
                    <Icon className={`w-4 h-4 ${isAccent ? "text-accent" : "text-primary"}`} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate flex items-center gap-1.5">
                      {product.name}
                      {product.url && <ExternalLink className="w-3 h-3 opacity-40" />}
                    </p>
                    <p className="text-[11px] text-muted-foreground truncate">{product.desc}</p>
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="animate-slide-up text-center pt-6 pb-4 space-y-2" style={{ animationDelay: "1.2s" }}>
          <div className="w-8 h-px bg-primary/30 mx-auto" />
          <p className="text-[10px] font-mono text-muted-foreground tracking-widest">
            © {new Date().getFullYear()} COSMOQUICK
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
