import React, { useEffect, useRef } from "react";
import {
  ArrowRight,
  FileText,
  CheckCircle2,
  Shield,
  Layers,
  Gauge,
} from "lucide-react";
import gsap from "gsap";
import { labConfig } from "../data/labConfig";

export const Hero = ({ onExploreServices, onRequestQuote }) => {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const subtextRef = useRef(null);
  const buttonsRef = useRef(null);
  const trustStripRef = useRef(null);

  // GSAP Animations
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      if (headlineRef.current) {
        tl.from(headlineRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
        });
      }

      if (subtextRef.current) {
        tl.from(
          subtextRef.current,
          {
            y: 15,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.35",
        );
      }

      if (buttonsRef.current?.children.length > 0) {
        tl.from(
          buttonsRef.current.children,
          {
            y: 12,
            opacity: 0,
            stagger: 0.12,
            duration: 0.5,
          },
          "-=0.3",
        );
      }

      if (trustStripRef.current?.children.length > 0) {
        tl.from(
          trustStripRef.current.children,
          {
            y: 15,
            opacity: 0,
            stagger: 0.08,
            duration: 0.5,
          },
          "-=0.2",
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Trust Highlights
  const trustHighlights = [
    {
      icon: Gauge,
      title: "Calibrated Instruments",
      desc: "Periodic calibration traceable to national standards",
    },
    {
      icon: Layers,
      title: "Strict Standard Methods",
      desc: "Testing strictly to IS, ASTM, IRC & MoRTH protocols",
    },
    {
      icon: Shield,
      title: "Traceable Reporting",
      desc: "Tamper-evident civil engineering test certificates",
    },
    {
      icon: CheckCircle2,
      title: "Field & Lab Readiness",
      desc: "Highway diamond core cutting & in-situ pavement analysis",
    },
  ];

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative pt-24 sm:pt-36 lg:pt-40 pb-4 sm:pb-8 lg:pb-10 bg-navy-950 overflow-hidden text-white border-b border-navy-800"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d0fbb1861593?auto=format&fit=crop&w=2000&q=85"
          alt="Highway construction and asphalt paving"
          className="w-full h-full object-cover object-center brightness-[0.28] contrast-125 scale-105"
          loading="eager"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/75 to-navy-900/60" />

        {/* Engineering Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />

        {/* Background Glow */}
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-safety-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Content */}
        <div className="max-w-4xl">
          {/* Engineering Verification Badge */}
          <div className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 px-3 py-2 rounded-xl sm:rounded-full bg-navy-800/90 border border-navy-700/80 text-graphite-300 text-xs sm:text-sm font-medium mb-5 sm:mb-6 shadow-sm backdrop-blur-md max-w-full">
            <span className="w-2 h-2 rounded-full bg-safety-500 animate-pulse shrink-0" />

            <span className="text-safety-400 font-semibold uppercase tracking-wider text-[10px] sm:text-xs">
              Material Testing & Engineering Lab
            </span>

            <span className="hidden sm:inline text-graphite-600">|</span>

            <span className="w-full sm:w-auto text-graphite-300 text-[11px] sm:text-sm leading-relaxed">
              Bitumen · Highway Cores · Concrete · Soil · Aggregates
            </span>
          </div>

          {/* Main Heading */}
          <h1
            ref={headlineRef}
            className="text-[clamp(2rem,7vw,3.75rem)] font-extrabold text-white tracking-tight leading-[1.12] mb-5 sm:mb-6 font-display break-words"
          >
            Precision Testing.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-safety-400 via-safety-500 to-amber-300">
              Reliable Results.
            </span>
            <span className="block">Stronger Infrastructure.</span>
          </h1>

          {/* Supporting Description */}
          <p
            ref={subtextRef}
            className="text-base sm:text-lg lg:text-xl text-graphite-300 leading-relaxed mb-3 sm:mb-4 max-w-3xl font-normal"
          >
            {labConfig.description}
          </p>

          {/* Action Buttons */}
          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-6"
          >
            {/* Request Quote */}
            <a
              href="#contact"
              onClick={(e) => {
                if (onRequestQuote) {
                  e.preventDefault();
                  onRequestQuote();
                }
              }}
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-safety-500 hover:bg-safety-600 text-white font-semibold text-sm sm:text-base shadow-lg shadow-safety-500/30 transition-all hover:shadow-safety-500/50 hover:-translate-y-0.5 active:translate-y-0"
            >
              <FileText className="w-5 h-5" />
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </a>

            {/* Explore Services */}
            <a
              href="#services"
              onClick={(e) => {
                if (onExploreServices) {
                  e.preventDefault();
                  onExploreServices();
                }
              }}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-navy-800/80 hover:bg-navy-700/80 text-graphite-100 font-semibold text-sm sm:text-base border border-navy-700 hover:border-graphite-500 transition-all backdrop-blur-sm hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore Our Testing Services</span>
            </a>
          </div>
        </div>

        {/* Trust and Capability Strip */}
        <div
          ref={trustStripRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-2 sm:pt-4 border-t border-navy-800/80"
        >
          {trustHighlights.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-4 rounded-xl bg-navy-900/60 border border-navy-800/70 backdrop-blur-sm hover:border-navy-700 transition-colors"
              >
                {/* Icon */}
                <div className="p-2.5 rounded-lg bg-navy-800 text-safety-400 shrink-0 border border-navy-700">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <h4 className="text-sm font-semibold text-white tracking-wide">
                    {item.title}
                  </h4>

                  <p className="text-xs text-graphite-400 mt-0.5 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
