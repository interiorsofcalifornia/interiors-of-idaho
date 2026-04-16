"use client";

const services = [
  {
    eyebrow: "Kitchen Remodels",
    title: "Kitchens That Cook Up Style & Function",
    desc: "From custom cabinetry to backsplashes, countertops, and flooring, we deliver spaces that are both stylish and practical.",
  },
  {
    eyebrow: "Bathroom Remodels",
    title: "Elevated Comfort, Everyday Luxury",
    desc: "We transform bathrooms into relaxing, functional sanctuaries with beautiful tilework, smart storage, and finishes that reflect your style.",
  },
  {
    eyebrow: "Basement Finishing",
    title: "Basements, Reimagined from the Ground Down",
    desc: "Turn unused square footage into fully finished living space, from cozy lounges and guest suites to gyms, theaters, and flex rooms.",
  },
  {
    eyebrow: "Flooring Installation",
    title: "Flooring That Elevates Every Step",
    desc: "Hardwood, tile, carpet, luxury vinyl, engineered flooring, and stone installed with care and built to last.",
  },
  {
    eyebrow: "Custom Installations",
    title: "Craftsmanship That Stands Out",
    desc: "Trim, built-ins, stair details, and architectural touches that make a house feel truly custom.",
  },
  {
    eyebrow: "Outdoor Living",
    title: "Spaces Designed for Entertaining",
    desc: "Covered patios, transitional indoor-outdoor finishes, and details that create a polished, welcoming atmosphere.",
  },
];

const steps = [
  {
    number: "1",
    title: "Schedule a Free Consultation",
    desc: "Tell us about your vision and your space.",
  },
  {
    number: "2",
    title: "Get a Custom Plan & Quote",
    desc: "Clear scope, timeline, and estimate with no surprises.",
  },
  {
    number: "3",
    title: "Watch Your Dream Take Shape",
    desc: "Expert craftsmanship brings your project to life.",
  },
];

const whyChoose = [
  {
    title: "Quality Craftsmanship",
    desc: "Detail-driven installs and finishes that are built to last.",
  },
  {
    title: "Clear Communication",
    desc: "Transparent pricing, steady timelines, and proactive updates.",
  },
  {
    title: "Locally Focused Service",
    desc: "Serving Idaho homeowners with responsive, reliable support.",
  },
  {
    title: "Function + Style",
    desc: "Design-forward solutions that work beautifully for everyday living.",
  },
];

const processImages = [
  { src: "/hero.jpg", alt: "Primary bedroom with warm wood ceiling and carpet" },
  { src: "/living.jpg", alt: "Modern living room with dark flooring and art" },
  { src: "/bedroom.jpg", alt: "Cozy bedroom with soft carpet and layered textures" },
];

const gallery = [
  { src: "/hero.jpg", alt: "Primary bedroom with warm wood ceiling and carpet" },
  { src: "/living.jpg", alt: "Modern living room with dark flooring and art" },
  { src: "/bedroom.jpg", alt: "Cozy bedroom with soft carpet and layered textures" },
  { src: "/carpet-bedroom.jpg", alt: "Large finished basement with wall-to-wall carpet" },
  { src: "/outdoor.jpg", alt: "Covered veranda with fireplace and outdoor lounge" },
  { src: "/kitchen.jpg", alt: "Kitchen view toward island with stone countertop" },
  { src: "/kitchen-2.jpg", alt: "Bright kitchen with custom finishes" },
  { src: "/tile-floor.jpg", alt: "Warm stone flooring detail" },
  { src: "/bathroom.jpg", alt: "Contemporary bath with large-format tile and shower" },
  { src: "/shower.jpg", alt: "Bathroom with custom glass shower" },
];

export default function InteriorsOfIdahoLanding() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
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
            <a href="#gallery" className="hover:opacity-70">Gallery</a>
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-white"
          >
            Request a Free Estimate
          </a>
        </div>
      </header>

      <section className="relative flex min-h-[78vh] items-center overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <img
            src="/hero.jpg"
            alt="Premium Idaho interior"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-black/55" />

        <div className="pointer-events-none absolute inset-0">
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
              Serving All of Idaho
            </p>

            <h1 className="mt-4 text-5xl font-semibold leading-[0.95] text-white md:text-7xl">
              Premium interiors
            </h1>

            <h2 className="mt-3 text-4xl font-light leading-tight text-white/90 md:text-6xl">
              crafted with precision
            </h2>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/85">
              From concept to installation, we bring refined flooring, finishes, and spaces to life. Interior remodeling managed end-to-end for a seamless experience.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-white px-8 py-4 text-lg font-medium text-slate-900"
              >
                Request a Free Estimate
              </a>
              <a
                href="#gallery"
                className="rounded-full border border-white/40 bg-white/10 px-8 py-4 text-lg font-medium text-white backdrop-blur-sm"
              >
                See our Gallery
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.15em] text-slate-500">
              Built on Craftsmanship
            </p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
              Up-front costs, steady timelines, and thoughtful guidance.
            </h2>
            <p className="mt-3 text-slate-600">
              So you enjoy the process as much as the results.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <p className="text-sm font-medium text-slate-500">{service.eyebrow}</p>
                <h3 className="mt-3 text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm uppercase tracking-[0.15em] text-slate-500">
            How We Work
          </p>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
            Our Simple 3-Step Process
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="text-3xl font-semibold text-slate-900">{step.number}</div>
                <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {processImages.map((img) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                className="h-72 w-full rounded-2xl object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Why choose Interiors of Idaho?
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Quality craftsmanship, clear communication, and a team focused on function + style.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whyChoose.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-white"
            >
              Request a Free Estimate
            </a>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.15em] text-slate-500">
                Gallery
              </p>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
                Refined interiors across Idaho.
              </h2>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-slate-300 px-5 py-3 text-slate-900"
            >
              Request a full portfolio
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {gallery.map((img) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                className="h-64 w-full rounded-2xl object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Rooted in Idaho craftsmanship
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-slate-700">
            Interiors of Idaho brings design, sourcing, and installation together under one roof. We’re known for precise scheduling, transparent budgets, and considerate site practices, so your home looks extraordinary and the process feels effortless.
          </p>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold md:text-4xl">
                Let’s plan your project
              </h2>
              <p className="mt-3 text-slate-600">
                Tell us a bit about your space and timeline. We’ll respond within one business day.
              </p>

              <div className="mt-6 space-y-3 text-slate-700">
                <p>(208) 204-6061</p>
                <p>interiorsofidaho@gmail.com</p>
                <p>Serving All of Idaho</p>
                <p>@interiors.of.idaho</p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-3 md:grid-cols-2">
                  <input className="w-full rounded-xl border border-slate-300 px-4 py-3" placeholder="Name" required />
                  <input className="w-full rounded-xl border border-slate-300 px-4 py-3" type="email" placeholder="Email" required />
                </div>
                <input className="w-full rounded-xl border border-slate-300 px-4 py-3" placeholder="Phone" />
                <input className="w-full rounded-xl border border-slate-300 px-4 py-3" placeholder="City / Neighborhood" />
                <textarea className="min-h-[120px] w-full rounded-xl border border-slate-300 px-4 py-3" placeholder="Tell us about your project…" />
                <button type="submit" className="w-full rounded-full bg-slate-900 px-4 py-3 text-white">
                  Submit inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} Interiors of Idaho. All rights reserved.
          </p>
          <div className="text-sm text-slate-500">
            interiorsofidaho@gmail.com · Instagram · Privacy · Terms
          </div>
        </div>
      </footer>
    </div>
  );
}
