"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Home, Phone, Mail, MapPin, Instagram, Images, Ruler, Palette } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const fadeIn = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const features = [
  { title: "Flooring & Surfaces", desc: "Hardwood, LVP, tile, carpet, and refinishing with meticulous project management.", icon: <Home className="h-6 w-6" aria-hidden /> },
  { title: "Design & Color Consultation", desc: "Cohesive palettes, finishes, and space planning tailored to Idaho lifestyles.", icon: <Palette className="h-6 w-6" aria-hidden /> },
  { title: "Custom Installations", desc: "Staircases, trim, built-ins, and statement details executed by vetted trades.", icon: <Ruler className="h-6 w-6" aria-hidden /> },
];

const steps = [
  "In-home or virtual consultation",
  "Detailed proposal & scheduling",
  "Material sourcing & logistics",
  "White-glove installation & walkthrough",
];

const gallery = [
  { src: "/living.jpg", alt: "Modern living room with dark flooring and art" },
  { src: "/kitchen.jpg", alt: "Kitchen with stone countertop and warm finishes" },
  { src: "/bathroom.jpg", alt: "Modern bathroom with custom shower" },
  { src: "/bedroom.jpg", alt: "Soft neutral bedroom design" },
];

export default function InteriorsOfIdahoLanding() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full backdrop-blur border-b border-slate-200 bg-white/70">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/idaho-logo.jpeg" alt="Interiors of Idaho logo" className="h-12 w-auto" />
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:opacity-70">Services</a>
            <a href="#process" className="hover:opacity-70">Process</a>
            <a href="#work" className="hover:opacity-70">Work</a>
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </nav>
          <Button asChild className="rounded-2xl">
            <a href="#contact" className="inline-flex items-center">Book a consult <ArrowRight className="ml-2 h-4 w-4" /></a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/hero.jpg"
            alt="Elegant Idaho interior hero"
            className="h-[680px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-white/0" />
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-20">
          <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-2xl">
            <p className="uppercase tracking-[0.2em] text-xs text-slate-600">Treasure Valley • Coeur d'Alene • Sun Valley</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-medium leading-tight">
              Modern Idaho interiors, crafted with precision.
            </h1>
            <p className="mt-5 text-lg text-slate-700">
              From concept to installation, we deliver refined spaces—flooring, finishes, and furnishings—managed end-to-end for a seamless experience.
            </p>
            <div className="mt-6 flex gap-3">
              <Button size="lg" className="rounded-2xl" asChild>
                <a href="#contact">Start your project</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-2xl" asChild>
                <a href="#work">See recent work</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold">Full-service interiors & execution</h2>
            <p className="mt-3 text-slate-600">Transparent proposals, schedule discipline, and site-ready project plans.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <Card key={f.title} className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    {f.icon}
                    {f.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">A clear, builder-friendly process</h2>
            <p className="mt-3 text-slate-600">We plan like PMs and design like artisans—so homeowners and contractors stay aligned.</p>
            <ul className="mt-6 space-y-3">
              {steps.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-0.5" aria-hidden />
                  <span className="text-slate-700">{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {gallery.slice(0, 3).map((g) => (
              <img key={g.src} src={g.src} alt={g.alt} className="rounded-2xl object-cover h-48 w-full" />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="work" className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold">Selected projects</h2>
              <p className="mt-2 text-slate-600">A few recent transformations across Idaho.</p>
            </div>
            <Button variant="outline" className="rounded-2xl" asChild>
              <a href="#contact" className="inline-flex items-center"><Images className="mr-2 h-4 w-4" />Request a full portfolio</a>
            </Button>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {gallery.map((g) => (
              <img key={g.src} src={g.src} alt={g.alt} className="rounded-2xl object-cover h-56 w-full" />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">Rooted in Idaho craftsmanship</h2>
          <p className="mt-4 text-slate-700 max-w-3xl mx-auto">
            Interiors of Idaho offers design, sourcing, and installation under one roof.
            We’re known for precise scheduling, transparent budgets, and considerate site practices—so your home looks extraordinary and the process feels easy.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold">Let’s plan your project</h2>
              <p className="mt-3 text-slate-600">Tell us a bit about your space and timeline. We’ll respond within one business day.</p>
              <div className="mt-6 space-y-3 text-slate-700">
                <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> (208) 204-6061</p>
                <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> interiorsofidaho@gmail.com</p>
                <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Serving all of Idaho</p>
                <p className="flex items-center gap-2"><Instagram className="h-4 w-4" /> @interiors.of.idaho</p>
              </div>
            </div>
            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-3">
                    <Input placeholder="Name" required />
                    <Input type="email" placeholder="Email" required />
                  </div>
                  <Input placeholder="Phone" />
                  <Input placeholder="City / Neighborhood" />
                  <Textarea placeholder="Tell us about your project…" className="min-h-[120px]" />
                  <Button type="submit" className="rounded-2xl w-full">Submit inquiry</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Interiors of Idaho. All rights reserved.</p>
          <div className="text-xs text-slate-500">
            <a href="#" className="hover:underline">Privacy</a> · <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
