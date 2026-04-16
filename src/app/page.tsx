"use client";

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* HEADER */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <img src="/idaho-logo.jpeg" className="h-12" />

          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#gallery">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            href="#contact"
            className="bg-slate-900 text-white px-5 py-2 rounded-full"
          >
            Book a consult
          </a>
        </div>
      </header>

      {/* HERO (FIXED) */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">

        <div className="absolute inset-0 -z-20">
          <img
            src="/hero.jpg"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-black/60" />

        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl text-white">

            <p className="uppercase tracking-[0.2em] text-xs text-white/80">
              SERVING ALL OF IDAHO
            </p>

            <h1 className="mt-4 text-5xl md:text-7xl font-semibold leading-tight">
              Premium interiors
            </h1>

            <h2 className="mt-2 text-4xl md:text-6xl font-light text-white/90">
              crafted with precision
            </h2>

            <p className="mt-6 text-lg text-white/85">
              From concept to installation, we bring refined flooring, finishes,
              and spaces to life.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#contact"
                className="bg-white text-black px-6 py-3 rounded-full"
              >
                Request a Free Estimate
              </a>

              <a
                href="#gallery"
                className="border border-white/50 px-6 py-3 rounded-full"
              >
                See our Gallery
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-3xl font-semibold mb-8">
            Full-service interiors & execution
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="p-6 bg-white rounded-xl">
              <h3 className="font-semibold text-lg">Flooring & Surfaces</h3>
              <p className="mt-2 text-slate-600">
                Hardwood, tile, carpet, and more installed with precision.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl">
              <h3 className="font-semibold text-lg">Design & Color</h3>
              <p className="mt-2 text-slate-600">
                Cohesive palettes and layouts tailored to your space.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl">
              <h3 className="font-semibold text-lg">Custom Installations</h3>
              <p className="mt-2 text-slate-600">
                Trim, built-ins, and detail work that elevate your home.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-3xl font-semibold">
              A clear, builder-friendly process
            </h2>

            <ul className="mt-6 space-y-3 text-slate-700">
              <li>• Consultation</li>
              <li>• Proposal & planning</li>
              <li>• Installation</li>
              <li>• Final walkthrough</li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <img src="/living.jpg" className="rounded-xl h-40 object-cover" />
            <img src="/kitchen.jpg" className="rounded-xl h-40 object-cover" />
            <img src="/bathroom.jpg" className="rounded-xl h-40 object-cover" />
            <img src="/shower.jpg" className="rounded-xl h-40 object-cover" />
          </div>

        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-3xl font-semibold mb-8">
            Selected projects
          </h2>

          <div className="grid md:grid-cols-4 gap-4">

            <img src="/living.jpg" className="rounded-xl h-48 object-cover" />
            <img src="/kitchen.jpg" className="rounded-xl h-48 object-cover" />
            <img src="/bathroom.jpg" className="rounded-xl h-48 object-cover" />
            <img src="/shower.jpg" className="rounded-xl h-48 object-cover" />
            <img src="/bedroom.jpg" className="rounded-xl h-48 object-cover" />
            <img src="/outdoor.jpg" className="rounded-xl h-48 object-cover" />

          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20">
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-3xl font-semibold">Let’s plan your project</h2>
            <p className="mt-4 text-slate-600">
              Tell us about your space and timeline.
            </p>

            <p className="mt-6">(208) 204-6061</p>
            <p>interiorsofidaho@gmail.com</p>
          </div>

          <div className="bg-slate-100 p-6 rounded-xl space-y-4">
            <input className="w-full p-3 rounded" placeholder="Name" />
            <input className="w-full p-3 rounded" placeholder="Email" />
            <textarea className="w-full p-3 rounded" placeholder="Project details" />
            <button className="w-full bg-slate-900 text-white p-3 rounded-full">
              Submit inquiry
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}