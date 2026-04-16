"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Wrench, MessageSquare, MapPin, Home } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const services = [
  {
    eyebrow: "KITCHEN REMODELS",
    title: "Kitchens That Cook Up Style & Function",
    desc: "The kitchen is the heart of your home—let’s make it unforgettable. From custom cabinetry to backsplashes, countertops, and flooring, we deliver spaces that are both stylish and practical.",
  },
  {
    eyebrow: "BATHROOM REMODELS",
    title: "Elevated Comfort, Everyday Luxury",
    desc: "We transform bathrooms into relaxing, functional sanctuaries. Think custom vanities, beautiful tilework, smart storage, and finishes that reflect your personal style—with meticulous attention to detail.",
  },
  {
    eyebrow: "BASEMENT FINISHING",
    title: "Basements, Reimagined from the Ground Down",
    desc: "Turn unused square footage into fully finished living space—from cozy lounges and guest suites to gyms, home theaters, or wet bars. Expert framing, lighting, flooring, and finish work.",
  },
  {
    eyebrow: "EPOXY FLOORING & OUTDOOR AREAS",
    title: "Surfaces That Work as Hard as They Look",
    desc: "Sleek, strong, and low-maintenance—ideal for garages, basements, commercial spaces, and outdoor living areas. Durable finishes that resist moisture, wear, and time.",
  },
  {
    eyebrow: "FLOORING INSTALLATION",
    title: "Flooring That Elevates Every Step",
    desc: "Hardwood and tile to carpet, luxury vinyl, engineered flooring, and stone. We’ll help you choose the perfect surface—installed with care and built to last.",
  },
  {
    eyebrow: "CUSTOM INSTALLATIONS",
    title: "Craftsmanship That Stands Out",
    desc: "Staircases, trim, built-ins, and architectural details that make a house truly yours. Always done right the first time.",
  },
];

const whyChoose = [
  {
    icon: <Wrench className="h-7 w-7" aria-hidden />,
    title: "Quality Craftsmanship",
    desc: "Detail-driven installs and finishes that are built to last.",
  },
  {
    icon: <MessageSquare className="h-7 w-7" aria-hidden />,
    title: "Clear Communication",
    desc: "Transparent pricing, steady timelines, and proactive updates.",
  },
  {
    icon: <MapPin className="h-7 w-7" aria-hidden />,
    title: "Locally Owned & Operated",
    desc: "Serving all of Idaho with fast, reliable service.",
  },
  {
    icon: <Home className="h-7 w-7" aria-hidden />,
    title: "Function + Style",
    desc: "Design-forward solutions that work for everyday living.",
  },
];

const gallery = [
  { src: "/basement.webp", alt: "Finished basement with carpet" },
  { src: "/outdoor.webp", alt: "Covered patio and poolside entertaining area" },
  { src: "/kitchen1.webp", alt: "Modern kitchen with waterfall island" },
  { src: "/kitchen2.webp", alt: "Bright kitchen with stone counters" },
  { src: "/kitchen3.webp", alt: "Kitchen with dining nook and island seating" },
  { src: "/wood-kitchen.webp", alt: "Warm wood kitchen cabinetry and cork flooring" },
  { src: "/bathroom1.webp", alt: "Modern bathroom with large-format tile" },
  { src: "/bathroom2.webp", alt: "Spa bathroom with tub and shower" },
  { src: "/stone-floor.webp", alt: "Tile flooring detail" },
  { src: "/tile-shower.webp", alt: "Custom tiled shower install" },
];

const processImages = [
  { src: "/kitchen1.webp", alt: "Kitchen remodel detail" },
  { src: "/bathroom1.webp", alt: "Bathroom remodel detail" },
  { src: "/basement.webp", alt: "Finished basement project" },
];

export default function InteriorsOfIdahoLanding() {
  return (
    <div className="min-h-screen bg-[#F6F7F9] text-slate-900">
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-[#F6F7F9]/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <img src="/idaho-logo.jpeg" alt="Interiors of Idaho logo" className="h-12 w-auto" />

          <nav className="hidden items-center gap-8 text-sm text-slate-800 md:flex">
            <a href="#services" className="hover:opacity-70">Services</a>
            <a href="#process" className="hover:opacity-70">Process</a>
            <a href="#gallery" className="hover:opacity-70">Work</a>
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-[#07173F] px-6 py-3 text-white shadow-sm"
          >
            Request a Free Estimate
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2200&auto=format&fit=crop"
            alt="Premium Idaho interior"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-white/80">
              SERVING ALL OF IDAHO
            </p>

            <h1 className="mt-4 text-5xl font-semibold leading-[0.95] text-white md:text-7xl">
              Premium interiors
            </h1>

            <h2 className="mt-2 text-4xl font-light leading-tight text-white/90 md:text-6xl">
              crafted with precision
            </h2>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
              From concept to installation, we bring refined flooring, finishes, and spaces to life.
              Interior remodeling managed end-to-end for a seamless experience.
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
          </motion.div>
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-2 gap-4 px-6 pb-12 md:max-w-md md:grid-cols-2 md:pb-16">
          <a
            href="tel:2082046061"
            className="rounded-full border border-slate-300 bg-white/95 px-6 py-3 text-center text-lg font-medium text-slate-900"
          >
            Call
          </a>
          <a
            href="sms:2082046061"
            className="rounded-full bg-[#07173F] px-6 py-3 text-center text-lg font-medium text-white"
          >
            Text
          </a>
        </div>
      </section>

      <section id="services" className="bg-[#F6F7F9] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-medium text-slate-500">Built on Craftsmanship.</p>
          <h2 className="mt-2 max-w-4xl text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            Up-front costs, steady timelines, and thoughtful guidance—so you enjoy the process as much as the results.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200"
              >
                <p className="text-xs font-semibold tracking-[0.18em] text-slate-500">
                  {service.eyebrow}
                </p>
                <h3 className="mt-4 text-2xl font-semibold leading-tight text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-medium text-slate-500">HOW WE WORK</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            Our Simple 3-Step Process
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl bg-[#F6F7F9] p-8 ring-1 ring-slate-200">
              <div className="text-4xl font-semibold text-slate-900">1</div>
              <h3 className="mt-4 text-2xl font-semibold">Schedule a Free Consultation</h3>
              <p className="mt-3 text-lg text-slate-600">Tell us about your vision and your space.</p>
            </div>

            <div className="rounded-3xl bg-[#F6F7F9] p-8 ring-1 ring-slate-200">
              <div className="text-4xl font-semibold text-slate-900">2</div>
              <h3 className="mt-4 text-2xl font-semibold">Get a Custom Plan & Quote</h3>
              <p className="mt-3 text-lg text-slate-600">Clear scope, timeline, and estimate—no surprises.</p>
            </div>

            <div className="rounded-3xl bg-[#F6F7F9] p-8 ring-1 ring-slate-200">
              <div className="text-4xl font-semibold text-slate-900">3</div>
              <h3 className="mt-4 text-2xl font-semibold">Watch Your Dream Take Shape</h3>
              <p className="mt-3 text-lg text-slate-600">Expert craftsmanship brings your project to life.</p>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {processImages.map((image) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                className="h-72 w-full rounded-3xl object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07173F] py-20 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-semibold md:text-5xl">
            Why choose Interiors of Idaho?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-white/80">
            Quality craftsmanship, clear communication, and a local team focused on function + style.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {whyChoose.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/5">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-lg text-white/75">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="#contact"
              className="inline-flex rounded-full bg-white px-8 py-4 text-lg font-medium text-slate-900"
            >
              Request a Free Estimate
            </a>
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-[#F6F7F9] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Gallery</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
                Refined interiors across Idaho.
              </h2>
            </div>

            <a
              href="#contact"
              className="inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 text-lg text-slate-900"
            >
              Request a full portfolio
            </a>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {gallery.map((image) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                className="h-64 w-full rounded-3xl object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            Rooted in Idaho craftsmanship
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-2xl leading-relaxed text-slate-600">
            Interiors of Idaho brings design, sourcing, and installation together under one roof.
            We’re known for precise scheduling, transparent budgets, and considerate site practices,
            so your home looks extraordinary and the process feels effortless.
          </p>
        </div>
      </section>

      <section id="contact" className="bg-[#F6F7F9] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
                Let’s plan your project
              </h2>
              <p className="mt-4 text-xl leading-relaxed text-slate-600">
                Tell us a bit about your space and timeline. We’ll respond within one business day.
              </p>

              <div className="mt-10 space-y-5 text-2xl text-slate-700">
                <p>(208) 204-6061</p>
                <p>interiorsofidaho@gmail.com</p>
                <p>Serving All of Idaho</p>
                <p>@interiors.of.idaho</p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input className="w-full rounded-2xl border border-slate-200 px-5 py-4 text-lg" placeholder="Name" />
                <input className="w-full rounded-2xl border border-slate-200 px-5 py-4 text-lg" placeholder="Email" />
                <input className="w-full rounded-2xl border border-slate-200 px-5 py-4 text-lg" placeholder="Phone" />
                <input className="w-full rounded-2xl border border-slate-200 px-5 py-4 text-lg" placeholder="City / Neighborhood" />
                <textarea className="min-h-[180px] w-full rounded-2xl border border-slate-200 px-5 py-4 text-lg" placeholder="Tell us about your project…" />
                <button className="w-full rounded-full bg-[#07173F] px-6 py-4 text-lg font-medium text-white">
                  Request Free Estimate
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <p className="text-xl text-slate-500">© 2026 Interiors of Idaho. All rights reserved.</p>
          <div className="text-lg text-slate-500">
            interiorsofidaho@gmail.com · Instagram · Privacy · Terms
          </div>
        </div>
      </footer>
    </div>
  );
}
