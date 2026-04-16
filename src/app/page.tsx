"use client";

const features = [
  {
    title: "Flooring & Surfaces",
    desc: "Hardwood, LVP, tile, carpet, and refinishing with meticulous project management.",
  },
  {
    title: "Design & Color Consultation",
    desc: "Cohesive palettes, finishes, and space planning tailored to Idaho lifestyles.",
  },
  {
    title: "Custom Installations",
    desc: "Staircases, trim, built-ins, and statement details executed by vetted trades.",
  },
];

const steps = [
  "In-home or virtual consultation",
  "Detailed proposal & scheduling",
  "Material sourcing & logistics",
  "White-glove installation & walkthrough",
];

const gallery = [
  { src: "/living.jpg", alt: "Open living space" },
  { src: "/kitchen.jpg", alt: "Modern kitchen remodel" },
  { src: "/bathroom.jpg", alt: "Modern bathroom design" },
  { src: "/tile-floor.jpg", alt: "Stone flooring detail" },
  { src: "/bedroom.jpg", alt: "Soft neutral bedroom design" },
  { src: "/outdoor.jpg", alt: "Outdoor patio and entertaining space" },
  { src: "/kitchen-2.jpg", alt: "Bright kitchen design" },
  { src: "/shower.jpg", alt: "Custom shower install" },
];

export default function InteriorsOfIdahoLanding() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src="/idaho-logo.jpeg"
              alt="Interiors of Idaho logo"
              className="h-12 w-auto"
            />
          </div>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#services" className="hover:opacity-70">Services</a>
            <a href="#process" className="hover:opacity-70">Process</a>
            <a href="#work" className="hover:opacity-70">Work</a>
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center rounded-2xl bg-slate-900 px-4 py-2 text-white"
          >
            Book a consult
          </a>
        </div>
      </header>

      <section className="relative min-h-[78vh] overflow-hidden flex items-center">
        <div className="absolute inset-0 -z-20">
          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2200&auto=format&fit=crop"
            alt="Premium Idaho interior"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-black/55" />

        <div className="pointer-events-none absolute inset-0 -z-0">
          <div className="absolute left-[18%] top-[14%] h-2 w-2 rounded-full bg-white/80 shadow-[0_0_18px_rgba(255,255,255,0.9)]" />
          <div className="absolute left-[33%] top-[18%] h-2 w-2 rounded-full bg-white/70 shadow-[0_0_18px_rgba(255,255,255,0.9)]" />
          <div className="absolute left-[47%] top-[12%] h-2 w-2 rounded-full bg-white/75 shadow-[0_0_18px_rgba(255,255,255,0.9)]" />
          <div className="absolute left-[60%] top-[20%] h-2 w-2 rounded-full bg-white/70 shadow-[0_0_18px_rgba(255,255,255,0.9)]" />
          <div className="absolute left-[76%] top-[16%] h-2 w-2 rounded-full bg-white/75 shadow-[0_0_18px_rgba(255,255,255,0.9)]" />
          <div className="absolute left-[82%] top-[28%] h-2 w-2 rounded-full bg-white/70 shadow-[0_0_18px_rgba(255,255,255,0.9)]" />
          <div className="absolute left-[70%] top-[58%] h-2 w-2 rounded-full bg-white/75 shadow-[0_0_18px_rgba(255,255,255,0.9)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.22em] text-white/80">
              SERVING ALL OF IDAHO
            </p>

            <h1 className="mt-4 text-5xl font-semibold leading-[0.95] text-white md:text-7xl">
              Premium interiors
            </h1>

            <h2 className="mt-3 text-4xl font-light leading-tight text-white/90 md:text-6xl">
              crafted with precision
            </h2>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/85">
              From concept to installation, we bring refined flooring, finishes, and
              spaces to life. Interior remodeling managed end-to-end for a seamless
              experience.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-white px-8 py-4 text-lg font-medium text-slate-900"
              >
                Request a Free Estimate
              </a>
              <a
                href="#work"
                className="rounded-full border border-white/40 bg-white/10 px-8 py-4 text-lg font-medium text-white backdrop-blur-sm"
              >
                See our Gallery
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Full-service interiors & execution
            </h2>
            <p className="mt-3 text-slate-600">
              Transparent proposals, schedule discipline, and site-ready project plans.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-3 text-slate-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">
              A clear, builder-friendly process
            </h2>
            <p className="mt-3 text-slate-600">
              We plan like PMs and design like artisans—so homeowners and contractors stay aligned.
            </p>

            <ul className="mt-6 space-y-3">
              {steps.map((s) => (
                <li key={s} className="text-slate-700">• {s}</li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {gallery.slice(0, 4).map((g) => (
              <img
                key={g.src}
                src={g.src}
                alt={g.alt}
                className="h-48 w-full rounded-2xl object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-semibold md:text-4xl">
                Selected projects
              </h2>
              <p className="mt-2 text-slate-600">
                A few recent transformations.
              </p>
            </div>

            <a
              href="#contact"
              className="rounded-2xl border border-slate-300 bg-white px-4 py-2 text-slate-900"
            >
              Request a full portfolio
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {gallery.map((g) => (
              <img
                key={g.src}
                src={g.src}
                alt={g.alt}
                className="h-56 w-full rounded-2xl object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Rooted in Idaho craftsmanship
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-slate-700">
            Interiors of Idaho offers design, sourcing, and installation under
            one roof. We’re known for precise scheduling, transparent budgets,
            and considerate site practices—so your home looks extraordinary and
            the process feels easy.
          </p>
        </div>
      </section>

      <section id="contact" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold md:text-4xl">
                Let’s plan your project
              </h2>
              <p className="mt-3 text-slate-600">
                Tell us a bit about your space and timeline. We’ll respond
                within one business day.
              </p>

              <div className="mt-6 space-y-3 text-slate-700">
                <p>(208) 204-6061</p>
                <p>interiorsofidaho@gmail.com</p>
                <p>Serving all of Idaho</p>
                <p>@interiors.of.idaho</p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-3 md:grid-cols-2">
                  <input
                    className="w-full rounded-xl border border-slate-300 px-4 py-3"
                    placeholder="Name"
                    required
                  />
                  <input
                    className="w-full rounded-xl border border-slate-300 px-4 py-3"
                    type="email"
                    placeholder="Email"
                    required
                  />
                </div>

                <input
                  className="w-full rounded-xl border border-slate-300 px-4 py-3"
                  placeholder="Phone"
                />
                <input
                  className="w-full rounded-xl border border-slate-300 px-4 py-3"
                  placeholder="City / Neighborhood"
                />
                <textarea
                  className="min-h-[120px] w-full rounded-xl border border-slate-300 px-4 py-3"
                  placeholder="Tell us about your project…"
                />
                <button
                  type="submit"
                  className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-white"
                >
                  Submit inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} Interiors of Idaho. All rights reserved.
          </p>

          <div className="text-xs text-slate-500">
            <a href="#" className="hover:underline">Privacy</a>{" "}
            ·{" "}
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
