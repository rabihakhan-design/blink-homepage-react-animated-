import React, { useState, useEffect, useRef } from "react";

import logo from "./assets/logo.png";
import scene from "./assets/scene.png";

import logoTanmiah from "./assets/logo_tanmiah.png";
import logoAlMeera from "./assets/logo_almeera.png";
import logoAlRifai from "./assets/logo_alrifai.png";
import logoHeart from "./assets/logo_heart.png";
import logoBaskin1 from "./assets/logo_baskin1.png";
import logoBaskin2 from "./assets/logo_baskin2.png";
import logoCakesBakes from "./assets/logo_cakesbakes.png";
import logoCinnabon from "./assets/logo_cinnabon.png";
import logoDunkin from "./assets/logo_dunkin.png";
import logoJalalSons from "./assets/logo_jalalsons.png";

import prodPos from "./assets/prod_pos.png";
import prodOrdering from "./assets/prod_ordering.png";
import prodLoyalty from "./assets/prod_loyalty.png";
import prodAnalytics from "./assets/prod_analytics.png";
import prodDelivery from "./assets/prod_delivery.png";

import intBlink from "./assets/int_blink.png";
import intFoodics from "./assets/int_foodics.png";
import intSendgrid from "./assets/int_sendgrid.png";
import intSavyour from "./assets/int_savyour.png";
import intMailchimp from "./assets/int_mailchimp.png";

const COLORS = {
  purple: "#3F1E82",
  lavender: "#E7DFFB",
  ink: "#241948",
  gray: "#5B5570",
  blue: "#2F6BFF",
};

const NAV_LINKS = [
  { label: "About us", id: "about" },
  { label: "Products", id: "products", dropdown: ["Modern POS & RMS", "Online Ordering", "Loyalty & Engagement", "Data & Analytics", "Delivery Fleet"] },
  { label: "Pricing", id: "pricing" },
  { label: "Academy", id: "academy" },
  { label: "Resources", id: "resources", dropdown: ["Blog", "Case Studies", "Help Center", "Webinars"] },
  { label: "Customers", id: "customers" },
  { label: "Our Integrations", id: "integrations" },
];

// Real logos cropped straight from your screenshots
const REAL_LOGOS = [
  logoTanmiah,
  logoAlMeera,
  logoAlRifai,
  logoHeart,
  logoBaskin1,
  logoBaskin2,
  logoCakesBakes,
  logoCinnabon,
  logoDunkin,
  logoJalalSons,
].map((src) => ({ type: "img", src }));

// Extra brand names — shown as icon+name badges (a generic glyph, not the
// official trademarked wordmark/logo artwork) so the strip still reads as a
// row of "logos" rather than plain text.
const EXTRA_BRANDS = [
  { name: "McDonald's", color: "#DA291C", icon: "🍔" },
  { name: "KFC", color: "#8B0000", icon: "🍗" },
  { name: "Pizza Hut", color: "#EE3831", icon: "🍕" },
  { name: "Domino's", color: "#0078AE", icon: "🍕" },
  { name: "Starbucks", color: "#00704A", icon: "☕" },
  { name: "Subway", color: "#00954D", icon: "🥪" },
  { name: "Hardee's", color: "#E4610F", icon: "🍔" },
  { name: "Chili's", color: "#C8102E", icon: "🌶️" },
  { name: "Papa John's", color: "#006241", icon: "🍕" },
  { name: "Burger King", color: "#D62300", icon: "🍔" },
].map((b) => ({ type: "text", ...b }));

const ALL_LOGOS = [...REAL_LOGOS, ...EXTRA_BRANDS];

// Integrations strip: your 5 real cropped logos + extra common tool badges
const REAL_INTEGRATIONS = [intBlink, intFoodics, intSendgrid, intSavyour, intMailchimp].map((src) => ({
  type: "img",
  src,
}));

const EXTRA_INTEGRATIONS = [
  { name: "Zapier", color: "#FF4A00", icon: "⚡" },
  { name: "Shopify", color: "#95BF47", icon: "🛍️" },
  { name: "QuickBooks", color: "#2CA01C", icon: "💰" },
  { name: "Stripe", color: "#635BFF", icon: "💳" },
  { name: "Twilio", color: "#F22F46", icon: "✉️" },
  { name: "Slack", color: "#4A154B", icon: "#️⃣" },
  { name: "WhatsApp Business", color: "#25D366", icon: "💬" },
  { name: "Google Analytics", color: "#E37400", icon: "📊" },
].map((b) => ({ type: "text", ...b }));

const ALL_INTEGRATIONS = [...REAL_INTEGRATIONS, ...EXTRA_INTEGRATIONS];

const PRODUCTS = [
  { img: prodPos, title: "Modern POS & RMS", desc: "An integrated, cloud-based POS for modern restaurants" },
  { img: prodOrdering, title: "Online Ordering System", desc: "Your own website & mobile apps for seamless online ordering." },
  { img: prodLoyalty, title: "Loyalty & Engagement", desc: "Advanced tools to build customer loyalty and drive repeat business." },
  { img: prodAnalytics, title: "Advanced Data & Analytics", desc: "Gain actionable insights into sales trends, and customer behaviour, and optimize your business for maximum profit." },
  { img: prodDelivery, title: "Delivery Fleet Management", desc: "Optimized routing & live-tracking for on-time deliveries and happy customers." },
];

const DOT_POINTS = [
  { left: "16.3%", top: "51.3%" },
  { left: "56.4%", top: "26.0%" },
  { left: "77.3%", top: "51.3%" },
];

/* ---------------- Customers page data ---------------- */

// First logo strip on the Customers page — icon+name badges (generic glyphs,
// not the official trademarked artwork) plus a couple of your real cropped
// logos where you already have them.
const CUSTOMERS_LOGOS_TOP = [
  { type: "text", name: "Açaí Xpress", color: "#3D7A3D", icon: "🍇" },
  { type: "img", src: logoBaskin1 },
  { type: "text", name: "Second Cup", color: "#6B6B6B", icon: "☕" },
  { type: "text", name: "Burger King", color: "#D62300", icon: "🍔" },
  { type: "img", src: logoDunkin },
  { type: "text", name: "IHOP", color: "#1E88E5", icon: "🥞" },
];

const CUSTOMERS_LOGOS_MID = [
  { type: "text", name: "Jozi Feast", color: "#F97316", icon: "📍" },
  { type: "text", name: "Nando's", color: "#7A0C0C", icon: "🐔" },
  { type: "text", name: "Pepe's", color: "#B5651D", icon: "🍕" },
  { type: "text", name: "Açaí Xpress", color: "#3D7A3D", icon: "🍇" },
  { type: "img", src: logoBaskin1 },
  { type: "text", name: "Second Cup", color: "#6B6B6B", icon: "☕" },
];

// "Landscape" strip — real, freely-licensed food photography (Unsplash
// License — free to use, no attribution required) matched to each brand's
// theme, since we can't reproduce the brands' own proprietary photos.
const LANDSCAPE_CARDS = [
  {
    name: "Spar",
    tagline: "Fruit, grocery & retail",
    variant: "grocery",
    photo: "https://images.unsplash.com/photo-1653222439737-a377eb21c965?w=700&q=80&auto=format&fit=crop",
  },
  {
    name: "Jozi Feast",
    tagline: "Cloud-kitchen sushi & more",
    variant: "sushi",
    photo: "https://images.unsplash.com/photo-1712725214706-e564b8dd1bbe?w=700&q=80&auto=format&fit=crop",
  },
  {
    name: "CGC",
    tagline: "Gourmet burgers",
    variant: "burger",
    photo: "https://images.unsplash.com/photo-1498654831517-895a5dfe4edc?w=700&q=80&auto=format&fit=crop",
  },
  {
    name: "Nando's",
    tagline: "Flame-grilled chicken",
    variant: "chicken",
    photo: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=700&q=80&auto=format&fit=crop",
  },
  {
    name: "Second Cup",
    tagline: "Coffee & cafe culture",
    variant: "coffee",
    photo: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=700&q=80&auto=format&fit=crop",
  },
];

// Real customer video testimonials — your YouTube links, embedded directly.
const VIDEO_TESTIMONIALS = [
  {
    youtubeId: "vCcKekfVcVQ",
    title: "Customers in Focus: New Yorker Pizza",
    quote:
      "Blink has given us a great backend to the app and website. Everything is in our hands now, I can sit down anywhere right now and make deals, promo codes, menu changes, and run a complete analysis on my customers",
    name: "Usman Ahmed",
    role: "Co-founder & CEO, New Yorker Pizza",
    color: "#1F1F1F",
    icon: "🍕",
  },
  {
    youtubeId: "OsozKmf1ZbI",
    title: "Customer in Focus: OD",
    quote:
      "It has become extremely easy for us to manage everything from one single platform - push notifications, e-wallet top-ups, loyalty points and even email marketing",
    name: "Affan Ather",
    role: "Sales Marketing Manager, OD",
    color: "#EC4899",
    icon: "🛵",
  },
  {
    youtubeId: "xyqO17M1yek",
    title: "Customers In Focus: Spar Pakistan",
    quote: "With the unified ordering, we can manage our mobile apps and website together from a single window",
    name: "Ehsan Saleem",
    role: "E-Commerce Manager, Spar",
    color: "#15803D",
    icon: "🛒",
  },
  {
    youtubeId: "dXOGi0KAEFE",
    title: "Customers In Focus: Nando's Pakistan",
    quote: "Having your own owned platform in the restaurant industry is vital as opposed to third-party aggregators",
    name: "Faiza Musawwar",
    role: "GM Marketing, Nando's",
    color: "#7A0C0C",
    icon: "🐔",
  },
];

/* ---------------- Scroll / entrance animation system ---------------- */

// Injected once — keyframes + reusable animation classes used everywhere below.
function GlobalAnimStyles() {
  return (
    <style>{`
      @keyframes blink-fade-up {
        from { opacity: 0; transform: translateY(28px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes blink-fade-in {
        from { opacity: 0; }
        to   { opacity: 1; }
      }
      @keyframes blink-scale-in {
        from { opacity: 0; transform: scale(0.94); }
        to   { opacity: 1; transform: scale(1); }
      }
      @keyframes blink-float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      @keyframes blink-pulse-soft {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.6; }
      }

      .blink-reveal {
        opacity: 0;
        transform: translateY(28px);
        transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        will-change: opacity, transform;
      }
      .blink-reveal.blink-in-view {
        opacity: 1;
        transform: translateY(0);
      }
      @media (prefers-reduced-motion: reduce) {
        .blink-reveal {
          opacity: 1 !important;
          transform: none !important;
          transition: none !important;
        }
      }

      .blink-hover-lift {
        transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.28s ease;
      }
      .blink-hover-lift:hover {
        transform: translateY(-6px);
        box-shadow: 0 18px 34px rgba(63, 30, 130, 0.16);
      }

      .blink-btn-anim {
        transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.22s ease, filter 0.22s ease;
      }
      .blink-btn-anim:hover {
        transform: translateY(-2px) scale(1.02);
        filter: brightness(1.04);
      }
      .blink-btn-anim:active {
        transform: translateY(0) scale(0.98);
      }

      .blink-float-anim {
        animation: blink-float 5s ease-in-out infinite;
      }
    `}</style>
  );
}

// Wraps children in a fade-up-on-scroll animation. Animates once, the first
// time it enters the viewport, then stays visible (no re-hide on scroll out).
function Reveal({ children, delay = 0, as = "div", style, className = "" }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const Tag = as;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`blink-reveal ${inView ? "blink-in-view" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}

function Chevron(props) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function ChatIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function Modal({ title, children, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(36,25,72,0.45)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
        padding: 20,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: 16,
          padding: 32,
          width: "100%",
          maxWidth: 440,
          boxShadow: "0 30px 60px rgba(0,0,0,0.3)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "#F1EBFD",
            border: "none",
            borderRadius: "50%",
            width: 32,
            height: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: COLORS.purple,
          }}
        >
          <CloseIcon />
        </button>
        <h3 style={{ color: COLORS.purple, fontSize: 22, fontWeight: 800, marginBottom: 16, paddingRight: 24 }}>{title}</h3>
        {children}
      </div>
    </div>
  );
}

const inputStyle = {
  padding: "12px 14px",
  borderRadius: 8,
  border: "1px solid #DCD4F0",
  fontSize: 14.5,
  outline: "none",
  fontFamily: "system-ui, sans-serif",
};

const primaryBtn = {
  background: COLORS.purple,
  color: "#fff",
  border: "none",
  padding: "13px 22px",
  borderRadius: 8,
  fontWeight: 700,
  fontSize: 15,
  cursor: "pointer",
};

function DemoForm() {
  const [submitted, setSubmitted] = useState(false);
  if (submitted) {
    return (
      <div style={{ color: COLORS.ink, fontSize: 15, lineHeight: 1.6 }}>
        Thanks! Our team will reach out shortly to schedule your demo. 🎉
      </div>
    );
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      style={{ display: "flex", flexDirection: "column", gap: 12 }}
    >
      <input required placeholder="Full name" style={inputStyle} />
      <input required type="email" placeholder="Work email" style={inputStyle} />
      <input required placeholder="Restaurant name" style={inputStyle} />
      <button type="submit" style={{ ...primaryBtn, marginTop: 8 }} className="blink-btn-anim">
        Submit Request
      </button>
    </form>
  );
}

function NavBar({ onNavigate, onBookDemo }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpenDropdown(null);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    <header
      ref={wrapRef}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 48px",
        background: "#fff",
        fontFamily: "system-ui, sans-serif",
        position: "sticky",
        top: 0,
        zIndex: 40,
        boxShadow: "0 2px 10px rgba(36,25,72,0.06)",
      }}
    >
      <img src={logo} alt="Blink" style={{ height: 46, cursor: "pointer" }} onClick={() => onNavigate("top")} />
      <nav style={{ display: "flex", alignItems: "center", gap: 34 }}>
        {NAV_LINKS.map((l) => (
          <div key={l.label} style={{ position: "relative" }}>
            <div
              onClick={(e) => {
                e.stopPropagation();
                if (l.dropdown) {
                  setOpenDropdown(openDropdown === l.label ? null : l.label);
                } else {
                  setOpenDropdown(null);
                  onNavigate(l.id);
                }
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                fontWeight: 600,
                fontSize: 15,
                color: openDropdown === l.label ? COLORS.purple : COLORS.ink,
                cursor: "pointer",
                userSelect: "none",
              }}
            >
              {l.label}
              {l.dropdown && (
                <Chevron
                  style={{
                    color: COLORS.gray,
                    marginTop: 2,
                    transition: "transform 0.2s ease",
                    transform: openDropdown === l.label ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              )}
            </div>

            {l.dropdown && openDropdown === l.label && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 14px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#fff",
                  borderRadius: 10,
                  boxShadow: "0 16px 40px rgba(36,25,72,0.18)",
                  padding: 8,
                  minWidth: 200,
                  zIndex: 50,
                }}
              >
                {l.dropdown.map((item) => (
                  <div
                    key={item}
                    onClick={() => {
                      setOpenDropdown(null);
                      onNavigate(
                        item === "Modern POS & RMS"
                          ? "pos"
                          : item === "Online Ordering"
                          ? "ordering"
                          : item === "Loyalty & Engagement"
                          ? "loyalty"
                          : item === "Data & Analytics"
                          ? "analytics"
                          : l.id
                      );
                    }}
                    style={{ padding: "10px 14px", borderRadius: 6, fontSize: 14, fontWeight: 500, color: COLORS.ink, cursor: "pointer" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = COLORS.lavender)}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
      <button onClick={onBookDemo} style={primaryBtn} className="blink-btn-anim">
        Book a Demo
      </button>
    </header>
  );
}

function Hero({ onGetStarted }) {
  return (
    <section
      id="top"
      style={{
        background: `linear-gradient(180deg, ${COLORS.lavender} 0%, #EFE7FB 100%)`,
        padding: "64px 24px 40px",
        textAlign: "center",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: "#fff",
          borderRadius: 30,
          padding: "10px 20px",
          fontWeight: 600,
          color: COLORS.purple,
          fontSize: 14.5,
          boxShadow: "0 6px 18px rgba(36,25,72,0.08)",
          animation: "blink-fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        }}
      >
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#3EC6E0",
            display: "inline-block",
            animation: "blink-pulse-soft 1.8s ease-in-out infinite",
          }}
        />
        All-in-one Restaurant Management System
      </div>

      <h1
        style={{
          fontSize: "clamp(32px, 4.6vw, 56px)",
          fontWeight: 800,
          color: COLORS.purple,
          maxWidth: 980,
          margin: "26px auto 0",
          lineHeight: 1.15,
          animation: "blink-fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
          animationDelay: "0.1s",
        }}
      >
        Restaurant Management System for POS, Online Ordering, Delivery & More
      </h1>

      <p
        style={{
          maxWidth: 620,
          margin: "22px auto 0",
          color: "#392C5E",
          fontSize: 16.5,
          lineHeight: 1.6,
          animation: "blink-fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
          animationDelay: "0.2s",
        }}
      >
        From online ordering and in-store management to delivery tracking and customer
        engagement, Blink's all-in-one platform simplifies everything your restaurant
        needs to succeed
      </p>

      <button
        onClick={onGetStarted}
        className="blink-btn-anim"
        style={{
          ...primaryBtn,
          marginTop: 30,
          padding: "16px 36px",
          fontSize: 16,
          animation: "blink-fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
          animationDelay: "0.3s",
        }}
      >
        Get Started
      </button>
    </section>
  );
}

function ConnectionsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % DOT_POINTS.length), 1100);
    return () => clearInterval(id);
  }, []);

  return (
    <section style={{ background: `linear-gradient(180deg, #EFE7FB 0%, ${COLORS.lavender} 100%)`, padding: "0 24px 40px", position: "relative" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
        <img src={scene} alt="Blink across App, Merchant Console, Website and POS" style={{ width: "100%", display: "block", borderRadius: 12 }} />
        {DOT_POINTS.map((pos, i) => (
          <span
            key={i}
            style={{
              position: "absolute",
              left: pos.left,
              top: pos.top,
              transform: "translate(-50%, -50%) scale(" + (i === active ? 1.6 : 1) + ")",
              width: 16,
              height: 16,
              borderRadius: "50%",
              background: i === active ? COLORS.blue : "transparent",
              boxShadow: i === active ? "0 0 0 8px rgba(47,107,255,0.28)" : "none",
              transition: "all 0.45s ease",
              pointerEvents: "none",
            }}
          />
        ))}
      </div>
    </section>
  );
}

function LogoBadge({ item, size = 64 }) {
  if (item.type === "img") {
    return <img src={item.src} alt="logo" style={{ height: size, objectFit: "contain" }} />;
  }
  return (
    <div
      style={{
        height: size,
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "0 18px",
        border: "1px solid #EDE6FA",
        borderRadius: 12,
        background: "#fff",
        whiteSpace: "nowrap",
        boxShadow: "0 2px 8px rgba(36,25,72,0.05)",
      }}
    >
      <span
        style={{
          width: size * 0.42,
          height: size * 0.42,
          borderRadius: "50%",
          background: item.color || COLORS.purple,
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: size * 0.24,
          flexShrink: 0,
        }}
      >
        {item.icon || item.name.trim()[0]}
      </span>
      <span style={{ fontWeight: 800, fontSize: size * 0.22, color: COLORS.ink }}>{item.name}</span>
    </div>
  );
}

// Auto-sliding, infinite-loop logo strip. The list is duplicated once so the
// CSS animation (0% -> -50%) loops seamlessly with no visible jump/reset.
function LogoMarquee({ id, items, heading, speed = 32, reverse = false, badgeSize = 64 }) {
  const track = [...items, ...items];
  const animName = reverse ? "blink-logo-scroll-rev" : "blink-logo-scroll";

  return (
    <section id={id} style={{ padding: "10px 0 40px", fontFamily: "system-ui, sans-serif" }}>
      <style>{`
        @keyframes blink-logo-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes blink-logo-scroll-rev {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .blink-marquee-viewport {
          overflow: hidden;
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
          mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
        }
        .blink-marquee-track {
          display: flex;
          align-items: center;
          gap: 28px;
          width: max-content;
          animation: ${animName} ${speed}s linear infinite;
        }
        .blink-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {heading && (
        <div style={{ maxWidth: 1100, margin: "0 auto 26px", padding: "0 24px" }}>
          <h3 style={{ color: COLORS.purple, fontSize: 24, fontWeight: 800, lineHeight: 1.3 }}>{heading}</h3>
        </div>
      )}

      <div className="blink-marquee-viewport">
        <div className="blink-marquee-track">
          {track.map((item, i) => (
            <LogoBadge key={i} item={item} size={badgeSize} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsSection({ onLearnMore, onOpenPos, onOpenOrdering, onOpenLoyalty, onOpenAnalytics }) {
  return (
    <section id="products" style={{ padding: "20px 24px 90px", fontFamily: "system-ui, sans-serif" }}>
      <h2 style={{ textAlign: "center", color: COLORS.purple, fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 800, marginBottom: 46 }}>
        Grow Faster, Manage Smarter with Blink
      </h2>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 28, alignItems: "stretch" }}>
        {PRODUCTS.map((p, i) => (
          <Reveal key={p.title} delay={(i % 5) * 70}>
            <div
              className="blink-hover-lift"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                height: "100%",
                borderRadius: 18,
                padding: 12,
              }}
            >
              <img src={p.img} alt={p.title} style={{ width: "100%", height: 150, objectFit: "contain", marginBottom: 20 }} />
              <h4 style={{ fontSize: 17, fontWeight: 800, color: COLORS.ink, marginBottom: 8, minHeight: 42 }}>{p.title}</h4>
              <p style={{ fontSize: 14, color: COLORS.gray, lineHeight: 1.55, marginBottom: 20 }}>{p.desc}</p>
              {/* marginTop: auto pushes every button to the same bottom line,
                  regardless of how many lines the description above took up */}
              <button
                onClick={() =>
                  p.title === "Modern POS & RMS"
                    ? onOpenPos()
                    : p.title === "Online Ordering System"
                    ? onOpenOrdering()
                    : p.title === "Loyalty & Engagement"
                    ? onOpenLoyalty()
                    : p.title === "Advanced Data & Analytics"
                    ? onOpenAnalytics()
                    : onLearnMore(p)
                }
                className="blink-btn-anim"
                style={{ ...primaryBtn, marginTop: "auto" }}
              >
                Learn More
              </button>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function IntegrationsSection() {
  return (
    <div style={{ background: COLORS.lavender, padding: "50px 0" }}>
      <LogoMarquee
        id="integrations"
        items={ALL_INTEGRATIONS}
        heading="Providing you with an ecosystem of integrations to suit your needs"
        speed={26}
        reverse
        badgeSize={54}
      />
    </div>
  );
}

/* ---------------- Growth / Pricing feature highlights ---------------- */
/* Same headline + copy as the reference design, but original illustrated
   graphics in place of the real branded stock photography (that belongs to
   the original site and isn't something we can reproduce). */

function GrowthIllustration({ variant }) {
  const common = { viewBox: "0 0 320 220", width: "100%", height: "100%" };
  if (variant === "design") {
    return (
      <svg {...common}>
        <rect width="320" height="220" fill="#F4F1FB" />
        <rect x="60" y="50" width="200" height="130" rx="10" fill="#fff" stroke="#DCD3F5" strokeWidth="2" />
        <rect x="76" y="66" width="168" height="18" rx="4" fill="#E7DFFB" />
        <rect x="76" y="94" width="120" height="10" rx="3" fill="#EDE6FA" />
        <rect x="76" y="112" width="140" height="10" rx="3" fill="#EDE6FA" />
        <circle cx="205" cy="150" r="20" fill="#3F1E82" />
        <path d="M197 150l6 6 12-13" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    );
  }
  if (variant === "scale") {
    return (
      <svg {...common}>
        <rect width="320" height="220" fill="#241948" />
        <path d="M40 160 L110 110 L160 140 L260 60" stroke="#2F6BFF" strokeWidth="4" fill="none" strokeLinecap="round" />
        <circle cx="260" cy="60" r="6" fill="#F4B400" />
        <circle cx="160" cy="140" r="6" fill="#fff" />
        <circle cx="110" cy="110" r="6" fill="#fff" />
        <circle cx="40" cy="160" r="6" fill="#fff" />
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x={50 + i * 50} y={190 - i * 16} width="18" height={16 + i * 16} fill="rgba(255,255,255,0.15)" />
        ))}
      </svg>
    );
  }
  if (variant === "support") {
    return (
      <svg {...common}>
        <rect width="320" height="220" fill="#E7DFFB" />
        <circle cx="160" cy="95" r="38" fill="#3F1E82" />
        <path d="M132 100a28 28 0 0 1 56 0" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" />
        <rect x="126" y="98" width="12" height="20" rx="6" fill="#fff" />
        <rect x="182" y="98" width="12" height="20" rx="6" fill="#fff" />
        <rect x="120" y="150" width="80" height="14" rx="7" fill="#fff" />
        <circle cx="160" cy="157" r="4" fill="#3F1E82" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <rect width="320" height="220" fill="#fff" />
      <rect x="0" y="0" width="320" height="220" fill="none" stroke="#EDE6FA" strokeWidth="2" />
      <circle cx="160" cy="95" r="34" fill="#FCEFC7" />
      <path d="M160 68v6M188 95h-6M132 95h6M178 78l-4 4M146 112l-4 4M142 78l4 4M174 112l4 4" stroke="#F4B400" strokeWidth="3" strokeLinecap="round" />
      <path d="M148 92a12 12 0 1 1 24 0c0 6-4 8-6 12h-12c-2-4-6-6-6-12z" fill="#3F1E82" />
      <rect x="152" y="118" width="16" height="8" rx="2" fill="#3F1E82" />
    </svg>
  );
}

const GROWTH_CARDS = [
  {
    title: "Intuitive Design",
    desc: "Effortlessly manage your restaurant with our user-friendly interface.",
    tone: "light",
    variant: "design",
  },
  {
    title: "Scalable for Growth",
    desc: "Expand your business with an Online Ordering system that adapts to your needs.",
    tone: "lavender",
    variant: "scale",
  },
  {
    title: "Dedicated Support",
    desc: "Our expert team is here to assist you 24/7.",
    tone: "lavender",
    variant: "support",
  },
  {
    title: "Continuous Innovation",
    desc: "Stay ahead with regular updates and new features.",
    tone: "light",
    variant: "innovation",
  },
];

function GrowthSection() {
  return (
    <section style={{ padding: "20px 24px 90px", fontFamily: "system-ui, sans-serif", background: "#fff" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <h2 style={{ color: COLORS.purple, fontSize: "clamp(26px, 3.4vw, 40px)", fontWeight: 800, marginBottom: 40 }}>
          Drive Growth with Blink's Innovative Solutions
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {GROWTH_CARDS.map((c) => (
            <div
              key={c.title}
              style={{
                background: c.tone === "lavender" ? COLORS.lavender : "#fff",
                border: c.tone === "lavender" ? "none" : "1px solid #EDE6FA",
                borderRadius: 20,
                padding: 28,
                boxShadow: c.tone === "lavender" ? "none" : "0 6px 20px rgba(36,25,72,0.05)",
              }}
            >
              <h3 style={{ color: COLORS.purple, fontSize: 22, fontWeight: 800, marginBottom: 8 }}>{c.title}</h3>
              <p style={{ color: COLORS.ink, fontSize: 15, marginBottom: 20 }}>{c.desc}</p>
              <div style={{ borderRadius: 12, overflow: "hidden", aspectRatio: "16/9" }}>
                <GrowthIllustration variant={c.variant} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Academy page ---------------- */
/* Same headings/copy as the reference design; original icon/illustration
   graphics in place of Blink's own logo mark, product screenshot, and
   designed marketing thumbnails (those are their branded creative work). */

function AcademyMark() {
  return (
    <svg viewBox="0 0 140 120" width="220" height="188">
      <path d="M20 40 L70 15 L120 40 L70 65 Z" fill="#3F1E82" />
      <path d="M40 50v22c0 10 13 18 30 18s30-8 30-18V50" stroke="#3F1E82" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="120" cy="40" r="4" fill="#3F1E82" />
      <path d="M120 40v22" stroke="#3F1E82" strokeWidth="3" strokeLinecap="round" />
      <circle cx="120" cy="66" r="5" fill="#E91E8C" />
      <circle cx="70" cy="90" r="20" fill="#2BC7E4" opacity="0.9" />
      <circle cx="78" cy="86" r="7" fill="#E91E8C" />
      <path d="M62 110h16" stroke="#3F1E82" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function DashboardMock() {
  return (
    <svg viewBox="0 0 420 280" width="100%" style={{ maxWidth: 480 }}>
      <rect x="10" y="10" width="400" height="230" rx="8" fill="#fff" stroke="#2A2440" strokeWidth="10" />
      <rect x="10" y="240" width="400" height="18" rx="4" fill="#2A2440" />
      <rect x="170" y="258" width="80" height="10" rx="3" fill="#2A2440" />
      <text x="34" y="42" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="700" fill="#241948">Sales Statistics</text>
      {[0, 1].map((col) => (
        <g key={col} transform={`translate(${34 + col * 190}, 60)`}>
          <rect width="170" height="90" rx="6" fill="#F8F6FD" stroke="#EDE6FA" />
          <path
            d="M8 60 L28 45 L48 55 L68 30 L88 40 L108 20 L128 35 L150 15"
            stroke="#2F6BFF"
            strokeWidth="2.5"
            fill="none"
          />
        </g>
      ))}
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={34 + i * 92} y="168" width="80" height="40" rx="6" fill="#F8F6FD" stroke="#EDE6FA" />
      ))}
    </svg>
  );
}

function ResourceThumb({ tone, icon }) {
  const bg = { pink: "#E91E8C", purple: "#3F1E82", blue: "#2BC7E4", coral: "#FF6B5B" }[tone] || "#3F1E82";
  return (
    <div
      style={{
        width: 56,
        height: 56,
        borderRadius: 10,
        background: bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <span style={{ color: "#fff", fontSize: 22 }}>{icon}</span>
    </div>
  );
}

function DownloadRow({ label, tone, icon }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "10px 0" }}>
      {tone && <ResourceThumb tone={tone} icon={icon} />}
      <span style={{ color: tone ? COLORS.ink : "#E91E8C", fontWeight: tone ? 500 : 700, fontSize: 14.5, flex: 1 }}>
        {label}
      </span>
      <span style={{ color: "#E91E8C", fontSize: 18 }}>&#8595;</span>
    </div>
  );
}

const ACADEMY_CARDS = [
  {
    title: "E-Guides",
    desc: "Comprehensive, beginner-friendly handbooks that you can save and share.",
    items: [
      { label: "Menu Pricing Strategy for Restaurants", tone: "purple", icon: "%" },
      { label: "Social Media Marketing Strategy for Restaurants", tone: "blue", icon: "@" },
    ],
  },
  {
    title: "Business Templates",
    desc: "The ready-to-use formats you need for your financial, planning and other documents.",
    items: [{ label: "Profit & Loss Statement Template For Restaurants" }],
  },
  {
    title: "How-to",
    desc: "Watch our quick tutorials to learn how to use the Blink Portal's features.",
    cta: "View All",
  },
  {
    title: "Design Templates",
    desc: "Download our professionally designed templates and up the marketing game of your business.",
    items: [
      { label: "Promo Code Social Template", tone: "pink", icon: "%" },
      { label: "App Download Social Template", tone: "purple", icon: "+" },
    ],
  },
  {
    title: "Product Demos",
    desc: "Watch our free video tutorials on how to use Blink.",
    cta: "View All",
  },
  {
    title: "Marketing Resources",
    desc: "Download these marketing resources and learn from the experts.",
    items: [
      { label: "Facebook Catalogue - Blink Academy" },
      { label: "Google Analytics Setup" },
      { label: "Facebook Custom Audience" },
      { label: "Facebook Domain Verification" },
      { label: "Social CTA Button" },
    ],
  },
];

function AcademyCard({ card }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        padding: "28px 26px",
        boxShadow: "0 6px 20px rgba(36,25,72,0.06)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h3 style={{ color: COLORS.purple, fontSize: 24, fontWeight: 800, marginBottom: 10 }}>{card.title}</h3>
      <p style={{ color: COLORS.ink, fontSize: 14.5, lineHeight: 1.55, marginBottom: 18 }}>{card.desc}</p>

      {card.cta && (
        <button
          style={{
            alignSelf: "flex-start",
            border: "none",
            cursor: "pointer",
            background: "#E91E8C",
            color: "#fff",
            fontWeight: 700,
            fontSize: 13,
            padding: "10px 18px",
            borderRadius: 8,
          }}
        >
          {card.cta}
        </button>
      )}

      {card.items && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          {card.items.map((it) => (
            <DownloadRow key={it.label} label={it.label} tone={it.tone} icon={it.icon} />
          ))}
        </div>
      )}
    </div>
  );
}

function MeetingIllustration() {
  return (
    <svg viewBox="0 0 480 380" width="100%" height="100%" style={{ display: "block" }}>
      <rect width="480" height="380" fill="#F4F1FB" />
      <ellipse cx="240" cy="300" rx="170" ry="26" fill="#E7DFFB" />
      <ellipse cx="240" cy="255" rx="150" ry="60" fill="#fff" stroke="#DCD3F5" strokeWidth="3" />

      {/* left person */}
      <circle cx="120" cy="150" r="34" fill="#F2C29A" />
      <path d="M76 230c4-40 28-58 44-58s40 18 44 58" fill="#3F1E82" />
      <path d="M96 128c6-14 40-14 46 2" stroke="#6B4A2A" strokeWidth="6" fill="none" strokeLinecap="round" />

      {/* center person */}
      <circle cx="240" cy="140" r="38" fill="#E8B48C" />
      <path d="M190 232c4-46 30-66 50-66s46 20 50 66" fill="#2BC7E4" />
      <path d="M212 112c8-20 48-20 56 4c4 10-2 16-2 16-4-10-10-14-10-14-4 8-40 8-44-2z" fill="#241948" />

      {/* right person */}
      <circle cx="358" cy="152" r="34" fill="#D99B72" />
      <path d="M316 230c4-40 26-58 42-58s40 18 44 58" fill="#E91E8C" />
      <path d="M334 130c10-16 40-16 48 0" stroke="#241948" strokeWidth="6" fill="none" strokeLinecap="round" />

      {/* table */}
      <ellipse cx="240" cy="272" rx="140" ry="34" fill="#EDE6FA" stroke="#DCD3F5" strokeWidth="2" />
      <rect x="180" y="264" width="60" height="10" rx="3" fill="#fff" />
      <rect x="250" y="268" width="50" height="8" rx="3" fill="#fff" />
    </svg>
  );
}

function WhyAcademySection() {
  const points = [
    { title: "Get expert advice", desc: "Discover the best practices for your business in one place." },
    { title: "Enhance your knowledge", desc: "Learn all that you need to know at your own pace." },
    { title: "Grow your business", desc: "Put your knowledge into practice, and watch your numbers grow." },
  ];

  return (
    <div style={{ padding: "80px 24px", fontFamily: "system-ui, sans-serif", background: "#fff" }}>
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 56,
          alignItems: "center",
        }}
      >
        <div>
          <h2 style={{ color: COLORS.purple, fontSize: "clamp(28px, 3.4vw, 42px)", fontWeight: 800, lineHeight: 1.15, marginBottom: 20 }}>
            Why learn from Blink Academy?
          </h2>
          <p style={{ color: COLORS.ink, fontSize: 16, lineHeight: 1.6, marginBottom: 36 }}>
            Blink is everything that most corporate enterprises are not – in good ways, of course.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
            {points.map((p) => (
              <div key={p.title}>
                <h3 style={{ color: COLORS.purple, fontSize: 19, fontWeight: 800, marginBottom: 6 }}>{p.title}</h3>
                <p style={{ color: COLORS.ink, fontSize: 15, lineHeight: 1.55 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", boxShadow: "0 20px 50px rgba(36,25,72,0.12)" }}>
          <MeetingIllustration />
          <img
            src={logo}
            alt="Blink"
            style={{
              position: "absolute",
              left: 24,
              top: "50%",
              transform: "translateY(-50%)",
              height: 34,
              background: "rgba(255,255,255,0.9)",
              borderRadius: 8,
              padding: "6px 10px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

function AcademySection({ onBookDemo }) {
  return (
    <div>
      <div style={{ padding: "24px 24px 0", fontFamily: "system-ui, sans-serif" }}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            background: `linear-gradient(135deg, ${COLORS.lavender} 0%, #F3EEFC 100%)`,
            borderRadius: 24,
            padding: "64px 56px",
            display: "flex",
            alignItems: "center",
            gap: 40,
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: "1 1 420px" }}>
            <h1 style={{ color: COLORS.purple, fontSize: "clamp(28px, 3.6vw, 44px)", fontWeight: 800, lineHeight: 1.15, marginBottom: 20 }}>
              Leverage our pro tips on how to run your business!
            </h1>
            <p style={{ color: COLORS.ink, fontSize: 16, lineHeight: 1.6, maxWidth: 520 }}>
              Our pros at Blink Academy are here to fill you in on everything you need to know to launch and grow
              your business successfully.
            </p>
          </div>
          <div style={{ flex: "0 0 auto", display: "flex", justifyContent: "center" }}>
            <AcademyMark />
          </div>
        </div>
      </div>

      <WhyAcademySection />

      <div style={{ padding: "80px 24px", textAlign: "center", fontFamily: "system-ui, sans-serif" }}>
        <h2 style={{ color: COLORS.purple, fontSize: "clamp(26px, 3.2vw, 38px)", fontWeight: 800, marginBottom: 14 }}>
          Free access to unlimited resources
        </h2>
        <p style={{ color: COLORS.gray, fontSize: 16, maxWidth: 640, margin: "0 auto 40px" }}>
          With Blink Academy, hundreds of helpful resources are at your fingertips to show you the tricks of the
          trade. And the best part? You pay nothing for it!
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <DashboardMock />
        </div>
      </div>

      <div style={{ background: COLORS.lavender, padding: "70px 24px 90px", fontFamily: "system-ui, sans-serif" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <h2 style={{ color: COLORS.purple, fontSize: "clamp(26px, 3.2vw, 38px)", fontWeight: 800, marginBottom: 40 }}>
            What's on the table?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {ACADEMY_CARDS.map((card) => (
              <AcademyCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatWidget() {
  const [open, setOpen] = useState(true);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  const send = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setMessages((m) => [...m, { from: "user", text }]);
    setText("");
    setTimeout(() => {
      setMessages((m) => [...m, { from: "bot", text: "Thanks for reaching out! A Blink specialist will reply shortly." }]);
    }, 600);
  };

  return (
    <>
      {open && (
        <div
          style={{
            position: "fixed",
            right: 28,
            bottom: 96,
            background: "#fff",
            borderRadius: 16,
            boxShadow: "0 14px 34px rgba(36,25,72,0.25)",
            width: 320,
            zIndex: 95,
            fontFamily: "system-ui, sans-serif",
            overflow: "hidden",
          }}
        >
          <div style={{ padding: "16px 20px", borderBottom: "1px solid #F1EBFD" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: COLORS.ink }}>Hi there! 👋 How may I help you?</div>
              <button onClick={() => setOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", color: COLORS.gray }}>
                <CloseIcon />
              </button>
            </div>
            <div style={{ marginTop: 6, fontSize: 13, color: COLORS.gray }}>Let us know if we can help you with anything at all.</div>
          </div>

          <div style={{ maxHeight: 220, overflowY: "auto", padding: "12px 16px", display: "flex", flexDirection: "column", gap: 8 }}>
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  alignSelf: m.from === "user" ? "flex-end" : "flex-start",
                  background: m.from === "user" ? COLORS.purple : "#F1EBFD",
                  color: m.from === "user" ? "#fff" : COLORS.ink,
                  padding: "8px 12px",
                  borderRadius: 12,
                  fontSize: 13.5,
                  maxWidth: "80%",
                }}
              >
                {m.text}
              </div>
            ))}
          </div>

          <form onSubmit={send} style={{ display: "flex", borderTop: "1px solid #F1EBFD" }}>
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type a message..."
              style={{ flex: 1, border: "none", padding: "12px 14px", fontSize: 14, outline: "none", fontFamily: "system-ui, sans-serif" }}
            />
            <button type="submit" style={{ border: "none", background: "none", color: COLORS.purple, fontWeight: 700, padding: "0 16px", cursor: "pointer" }}>
              Send
            </button>
          </form>
        </div>
      )}

      <div
        onClick={() => setOpen((o) => !o)}
        role="button"
        aria-label="Toggle chat"
        style={{
          position: "fixed",
          right: 28,
          bottom: 28,
          width: 54,
          height: 54,
          borderRadius: "50%",
          background: COLORS.purple,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          boxShadow: "0 10px 24px rgba(63,30,130,0.4)",
          zIndex: 95,
          cursor: "pointer",
        }}
      >
        {open ? <CloseIcon /> : <ChatIcon />}
      </div>
    </>
  );
}

const TESTIMONIALS = [
  {
    quote:
      "Dynamic and seamless. Two words that describe Blink's online ordering ecosystem perfectly. It's where premium design and bulletproof tech come together to optimize customer experience!",
    name: "Talha Abdullah",
    role: "Head of Marketing, OPTP",
    color: "#3F1E82",
  },
  {
    quote:
      "Thanks to Blink, we are offering a seamless, personalized ordering experience that enhances customer loyalty. With streamlined operations and robust e-commerce capabilities, Blink has significantly boosted our e-commerce business and market visibility",
    name: "Sohaib Malik",
    role: "E-Commerce & Delivery Consultant, Cheezious",
    color: "#E23744",
  },
  {
    quote:
      "Blinkco has transformed our delivery operations, making it easy to manage orders from start to finish. Their system allows us to effectively track transactions through cash, credit card, online payments, or bank transfers. The online ordering process is now streamlined and efficient. We're seeing great benefits with Blink.",
    name: "Agha Usman",
    role: "Co-Founder, Crumble",
    color: "#1A1F71",
  },
];

function Stars() {
  return (
    <div style={{ display: "flex", gap: 4, marginBottom: 18 }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 24 24" width="20" height="20" fill="#FBBF24">
          <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      style={{
        background: `linear-gradient(135deg, ${COLORS.lavender} 0%, #F3ECFE 100%)`,
        padding: "70px 24px 90px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{ color: COLORS.purple, fontSize: "clamp(30px, 3.4vw, 44px)", fontWeight: 800, marginBottom: 40 }}>
          Hear from our customers
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 28,
            alignItems: "stretch",
          }}
        >
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              style={{
                background: "#fff",
                borderRadius: 14,
                padding: "34px 32px",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                boxShadow: "0 10px 30px rgba(36,25,72,0.07)",
              }}
            >
              <p style={{ fontSize: 15.5, color: "#2B2340", lineHeight: 1.65, marginBottom: 24 }}>{t.quote}</p>

              {/* marginTop: auto keeps the stars + author block aligned to the
                  bottom of every card, however long the quote above is */}
              <div style={{ marginTop: "auto" }}>
                <Stars />
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: "50%",
                      background: t.color,
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      fontSize: 19,
                      flexShrink: 0,
                    }}
                  >
                    {t.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 16, color: COLORS.purple }}>{t.name}</div>
                    <div style={{ fontSize: 14, color: COLORS.gray, marginTop: 2 }}>{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const STATS = [
  { value: "2 X", label: "Exponential Sales Growth", sub: "order growth within first 3 months" },
  { value: "30 sec", label: "Faster Order Speed", sub: "seamless ordering experience" },
  { value: "51 %", label: "Increased User Retention", sub: "first-order convert into repeat orders" },
  { value: "62 %", label: "Greater Signup Conversions", sub: "new customers place an order" },
];

function StatsSection() {
  return (
    <section id="results" style={{ padding: "70px 24px 90px", fontFamily: "system-ui, sans-serif", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2
          style={{
            color: COLORS.purple,
            fontSize: "clamp(28px, 3.2vw, 42px)",
            fontWeight: 800,
            marginBottom: 46,
            textAlign: "center",
            lineHeight: 1.25,
          }}
        >
          Real Results. Real Customers. Integrations that Grow Your Business
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 24,
            alignItems: "stretch",
          }}
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              style={{
                background: COLORS.purple,
                borderRadius: 14,
                padding: "30px 26px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                color: "#fff",
                height: "100%",
              }}
            >
              <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 18, minHeight: 46 }}>{s.label}</div>
              <div style={{ fontWeight: 800, fontSize: 40, marginBottom: 14 }}>{s.value}</div>
              {/* marginTop: auto keeps the sub-line pinned to the bottom of
                  every card even when the label above wraps differently */}
              <div style={{ fontSize: 14.5, opacity: 0.9, marginTop: "auto" }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const selectStyle = {
  ...inputStyle,
  color: "#5B5570",
  background: "#fff",
  appearance: "auto",
  cursor: "pointer",
};

const COUNTRIES = {
  Pakistan: ["Punjab", "Sindh", "Khyber Pakhtunkhwa", "Balochistan", "Islamabad Capital Territory"],
  "Saudi Arabia": ["Riyadh", "Makkah", "Eastern Province", "Madinah", "Asir"],
  UAE: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Fujairah"],
  Qatar: ["Doha", "Al Rayyan", "Al Wakrah"],
};

const BUSINESS_TYPES = ["Quick Service Restaurant", "Casual Dining", "Cloud Kitchen", "Cafe", "Bakery", "Retail Chain"];
const STORE_COUNTS = ["1", "2-5", "6-10", "11-25", "26-50", "50+"];

const COUNTRY_DIAL_CODES = {
  Pakistan: { flag: "🇵🇰", code: "+92" },
  "Saudi Arabia": { flag: "🇸🇦", code: "+966" },
  UAE: { flag: "🇦🇪", code: "+971" },
  Qatar: { flag: "🇶🇦", code: "+974" },
};

function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    state: "",
    city: "",
    phone: "",
    business: "",
    businessType: "",
    stores: "",
  });
  const [notRobot, setNotRobot] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) => {
    const value = e.target.value;
    setForm((f) => ({
      ...f,
      [field]: value,
      // reset dependent field whenever the country changes
      ...(field === "country" ? { state: "" } : {}),
    }));
  };

  const dial = COUNTRY_DIAL_CODES[form.country];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.city || !form.business) {
      setError("Please fill in all required fields marked with *.");
      return;
    }
    if (!notRobot) {
      setError("Please confirm you're not a robot.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section
        id="contact"
        style={{
          padding: "90px 24px",
          fontFamily: "system-ui, sans-serif",
          background: `linear-gradient(135deg, ${COLORS.lavender} 0%, #F3EEFC 100%)`,
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: 560,
            margin: "0 auto",
            background: "#fff",
            borderRadius: 20,
            padding: "56px 36px",
            boxShadow: "0 20px 60px rgba(63,30,130,0.12)",
          }}
        >
          <div style={{ fontSize: 46, marginBottom: 14 }}>🎉</div>
          <h3 style={{ color: COLORS.purple, fontSize: 24, fontWeight: 800, marginBottom: 10 }}>
            Thanks, {form.name.split(" ")[0] || "there"}!
          </h3>
          <p style={{ color: COLORS.gray, fontSize: 15, lineHeight: 1.6 }}>
            We've received your details. Our team will reach out to <strong>{form.email}</strong> shortly to set up
            your personalised Blink demo.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      style={{
        padding: "90px 24px 100px",
        fontFamily: "system-ui, sans-serif",
        background: `linear-gradient(135deg, ${COLORS.lavender} 0%, #F3EEFC 100%)`,
      }}
    >
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ color: COLORS.purple, fontSize: "clamp(28px, 3.6vw, 44px)", fontWeight: 800, marginBottom: 20 }}>
          Let's Connect
        </h2>
        <p style={{ color: COLORS.ink, fontSize: 17, lineHeight: 1.6, marginBottom: 44, fontWeight: 600 }}>
          Get in touch with us to see how Blink's Full-Stack Restaurant Management System can revolutionise your
          business. We're ready to help you grow.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            background: "#fff",
            borderRadius: 20,
            padding: 36,
            boxShadow: "0 20px 60px rgba(63,30,130,0.12)",
            display: "flex",
            flexDirection: "column",
            gap: 16,
            textAlign: "left",
          }}
        >
          <input required placeholder="Name*" style={inputStyle} value={form.name} onChange={update("name")} />
          <input
            required
            type="email"
            placeholder="Email*"
            style={inputStyle}
            value={form.email}
            onChange={update("email")}
          />

          <select style={selectStyle} value={form.country} onChange={update("country")}>
            <option value="">Select Country</option>
            {Object.keys(COUNTRIES).map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <select style={selectStyle} value={form.state} onChange={update("state")} disabled={!form.country}>
            <option value="">{form.country ? "Select State" : "Select a country first"}</option>
            {(COUNTRIES[form.country] || []).map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>

          <input required placeholder="City Name*" style={inputStyle} value={form.city} onChange={update("city")} />

          <div style={{ display: "flex", gap: 8 }}>
            <div
              style={{
                ...inputStyle,
                width: 84,
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
                color: COLORS.ink,
                fontWeight: 600,
              }}
            >
              <span>{dial ? dial.flag : "🌐"}</span>
              <span>{dial ? dial.code : "+--"}</span>
            </div>
            <input
              type="tel"
              placeholder="Phone Number"
              style={{ ...inputStyle, flex: 1 }}
              value={form.phone}
              onChange={update("phone")}
            />
          </div>

          <input
            required
            placeholder="Business Name*"
            style={inputStyle}
            value={form.business}
            onChange={update("business")}
          />

          <select style={selectStyle} value={form.businessType} onChange={update("businessType")}>
            <option value="">Select type of Business</option>
            {BUSINESS_TYPES.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>

          <select style={selectStyle} value={form.stores} onChange={update("stores")}>
            <option value="">Number of Stores</option>
            {STORE_COUNTS.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>

          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "#F7F5FC",
              border: "1px solid #DCD4F0",
              borderRadius: 8,
              padding: "12px 14px",
              fontSize: 14,
              color: COLORS.ink,
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            <input
              type="checkbox"
              checked={notRobot}
              onChange={(e) => setNotRobot(e.target.checked)}
              style={{ width: 18, height: 18, cursor: "pointer" }}
            />
            I'm not a robot
          </label>

          {error && <div style={{ color: "#C0392B", fontSize: 13.5, fontWeight: 600 }}>{error}</div>}

          <button type="submit" style={{ ...primaryBtn, marginTop: 4, padding: "15px 22px", fontSize: 16 }} className="blink-btn-anim">
            Book a Demo
          </button>
        </form>
      </div>
    </section>
  );
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.9h2.65l.4-3.08h-3.05V8.06c0-.89.25-1.5 1.52-1.5h1.63V3.8A21.8 21.8 0 0 0 14.1 3.66c-2.36 0-3.98 1.44-3.98 4.08v2.28H7.46v3.08h2.66V21h3.38z" />
    </svg>
  );
}
function TwitterIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M22 5.9c-.68.3-1.4.5-2.17.6a3.8 3.8 0 0 0 1.66-2.1 7.6 7.6 0 0 1-2.4.92 3.78 3.78 0 0 0-6.44 3.45A10.72 10.72 0 0 1 4.6 4.9a3.78 3.78 0 0 0 1.17 5.04c-.62-.02-1.2-.19-1.71-.47v.05a3.78 3.78 0 0 0 3.03 3.7 3.8 3.8 0 0 1-1.7.06 3.78 3.78 0 0 0 3.53 2.62A7.58 7.58 0 0 1 2 17.54a10.7 10.7 0 0 0 5.8 1.7c6.96 0 10.77-5.77 10.77-10.77l-.01-.49A7.7 7.7 0 0 0 22 5.9z" />
    </svg>
  );
}
function YoutubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M21.6 7.2s-.21-1.5-.86-2.16c-.82-.86-1.74-.86-2.16-.91C15.6 4 12 4 12 4h-.01s-3.6 0-6.58.13c-.42.05-1.34.05-2.16.91-.65.66-.86 2.16-.86 2.16S2.16 8.96 2.16 10.7v1.6c0 1.74.23 3.5.23 3.5s.21 1.5.86 2.16c.82.86 1.9.83 2.38.92 1.73.16 7.37.21 7.37.21s3.6-.01 6.58-.14c.42-.05 1.34-.05 2.16-.91.65-.66.86-2.16.86-2.16s.23-1.74.23-3.5v-1.6c0-1.74-.23-3.5-.23-3.5zM9.98 14.5V8.9l5.52 2.8-5.52 2.8z" />
    </svg>
  );
}
function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M12 2.2c2.7 0 3 .01 4.12.06 1.1.05 1.85.23 2.5.48a5.05 5.05 0 0 1 1.82 1.19 5.05 5.05 0 0 1 1.19 1.82c.25.65.43 1.4.48 2.5.05 1.12.06 1.42.06 4.12s-.01 3-.06 4.12c-.05 1.1-.23 1.85-.48 2.5a5.05 5.05 0 0 1-1.19 1.82 5.05 5.05 0 0 1-1.82 1.19c-.65.25-1.4.43-2.5.48-1.12.05-1.42.06-4.12.06s-3-.01-4.12-.06c-1.1-.05-1.85-.23-2.5-.48a5.05 5.05 0 0 1-1.82-1.19 5.05 5.05 0 0 1-1.19-1.82c-.25-.65-.43-1.4-.48-2.5C2.21 15 2.2 14.7 2.2 12s.01-3 .06-4.12c.05-1.1.23-1.85.48-2.5a5.05 5.05 0 0 1 1.19-1.82A5.05 5.05 0 0 1 5.75 2.74c.65-.25 1.4-.43 2.5-.48C9.37 2.2 9.67 2.2 12 2.2zm0 1.8c-2.66 0-2.97.01-4.02.06-.9.04-1.4.2-1.72.32-.43.17-.74.36-1.07.69-.33.33-.52.64-.69 1.07-.13.32-.28.82-.32 1.72-.05 1.05-.06 1.36-.06 4.02s.01 2.97.06 4.02c.04.9.2 1.4.32 1.72.17.43.36.74.69 1.07.33.33.64.52 1.07.69.32.13.82.28 1.72.32 1.05.05 1.36.06 4.02.06s2.97-.01 4.02-.06c.9-.04 1.4-.2 1.72-.32.43-.17.74-.36 1.07-.69.33-.33.52-.64.69-1.07.13-.32.28-.82.32-1.72.05-1.05.06-1.36.06-4.02s-.01-2.97-.06-4.02c-.04-.9-.2-1.4-.32-1.72a2.88 2.88 0 0 0-.69-1.07 2.88 2.88 0 0 0-1.07-.69c-.32-.13-.82-.28-1.72-.32-1.05-.05-1.36-.06-4.02-.06zm0 3.06a4.94 4.94 0 1 1 0 9.88 4.94 4.94 0 0 1 0-9.88zm0 1.8a3.14 3.14 0 1 0 0 6.28 3.14 3.14 0 0 0 0-6.28zm5.14-1.98a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0z" />
    </svg>
  );
}
function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3.2a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92zM20.44 20h-3.37v-5.9c0-1.41-.03-3.22-1.96-3.22-1.97 0-2.27 1.54-2.27 3.12V20H9.47V8.5h3.24v1.57h.05c.45-.85 1.55-1.75 3.2-1.75 3.42 0 4.48 2.25 4.48 5.18V20z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { Icon: FacebookIcon, label: "Facebook", href: "#" },
  { Icon: TwitterIcon, label: "Twitter", href: "#" },
  { Icon: YoutubeIcon, label: "YouTube", href: "#" },
  { Icon: InstagramIcon, label: "Instagram", href: "#" },
  { Icon: LinkedinIcon, label: "LinkedIn", href: "#" },
];

const FOOTER_COLUMNS = [
  {
    title: "Products",
    links: [
      "Modern POS & RMS",
      "Online Ordering for F&B",
      "Online Ordering for Supermarkets",
      "Online Ordering for Other Retail",
      "Fleet and Driver Management",
      "Loyalty and Engagement",
      "Advanced Data and Analytics",
    ],
  },
  {
    title: "Company",
    links: ["About Us", "Pricing", "Customers", "Careers"],
  },
  {
    title: "Compare",
    links: [
      "Taker.io",
      "Upserve",
      "Grubtech",
      "GloriaFood",
      "OrderEm",
      "MenuDrive",
      "LunchBox",
      "ChowNow",
      "FreshBytes",
      "Custom Developed vs SaaS",
    ],
  },
  {
    title: "Resources",
    links: ["Academy", "Blog", "Help Center", "Glossary", "Release Notes", "Terms & Conditions", "Privacy Policy"],
  },
  {
    title: "Trending Articles",
    links: [
      "20+ Best Restaurant Mobile App Ordering System & Delivery Order Fulfillment",
      "The 7 Best Online Food Ordering Systems In 2023",
      "35 Online Ordering Systems For Restaurants In 2023",
      "31 Food Business Ideas You Didn't Think Of",
      "Type Of High Protein Fast Food To Order At A Restaurant",
    ],
  },
];

const LOCATIONS = [
  { country: "Bangladesh", items: ["Online Ordering for Restaurants", "POS for Restaurants"] },
  { country: "Saudi Arabia", items: ["Website Ordering", "Mobile App Ordering", "Restaurant Analytics"] },
  { country: "Bahrain", items: ["Website Ordering", "Mobile App Ordering", "Restaurant Analytics"] },
  { country: "Qatar", items: ["Website Ordering", "Mobile App Ordering", "Restaurant Analytics"] },
  { country: "UAE", items: ["Website Ordering", "Mobile App Ordering"] },
  { country: "Kuwait", items: ["Website Ordering", "Mobile App Ordering", "Restaurant Analytics", "Delivery Management"] },
  { country: "South Africa", items: [] },
];

function Footer({ onBookDemo }) {
  const linkStyle = {
    color: COLORS.ink,
    fontSize: 14.5,
    textDecoration: "none",
    cursor: "pointer",
    lineHeight: 1.5,
  };

  return (
    <footer
      style={{
        fontFamily: "system-ui, sans-serif",
        background: `linear-gradient(180deg, ${COLORS.lavender} 0%, #EFE8FB 100%)`,
      }}
    >
      {/* CTA + social links */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px 60px" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 40,
          }}
        >
          <div style={{ maxWidth: 560 }}>
            <h2
              style={{
                color: COLORS.ink,
                fontSize: "clamp(26px, 3.2vw, 38px)",
                fontWeight: 800,
                lineHeight: 1.25,
                marginBottom: 22,
              }}
            >
              Ready to Transform Your Business?
              <br />
              Take the First Step Today!
            </h2>
            <p style={{ color: COLORS.ink, fontSize: 15.5, lineHeight: 1.6 }}>
              Your Restaurant Management System for Online Ordering, In-Store Operations, Delivery &amp; More
            </p>
            <button onClick={onBookDemo} style={{ ...primaryBtn, marginTop: 26 }} className="blink-btn-anim">
              Book a Demo
            </button>
          </div>

          <div>
            <h3 style={{ color: COLORS.ink, fontSize: 20, fontWeight: 800, marginBottom: 18 }}>Social Links</h3>
            <div style={{ display: "flex", gap: 12 }}>
              {SOCIAL_LINKS.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: COLORS.ink,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Link columns */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 60px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 36,
          }}
        >
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 style={{ color: COLORS.ink, fontSize: 19, fontWeight: 800, marginBottom: 18 }}>{col.title}</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {col.links.map((l) => (
                  <a key={l} href="#" style={linkStyle}>
                    {l}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Locations */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 60px" }}>
        <h3 style={{ color: COLORS.ink, fontSize: 22, fontWeight: 800, marginBottom: 22 }}>Locations</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          {LOCATIONS.map((loc) => (
            <div
              key={loc.country}
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "baseline",
                gap: "8px 34px",
              }}
            >
              <div style={{ color: COLORS.ink, fontWeight: 800, fontSize: 15.5, minWidth: 130 }}>{loc.country}</div>
              {loc.items.map((it) => (
                <a key={it} href="#" style={linkStyle}>
                  {it}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(63,30,130,0.15)" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "26px 24px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <img src={logo} alt="Blink" style={{ height: 40 }} />
          <div style={{ color: COLORS.gray, fontSize: 13.5 }}>
            Copyright © 2024 Blink | Powered by Blink Co Technologies
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- About Us page ---------------- */

const TIMELINE = [
  {
    year: "2018",
    title: "Launched Eat Mubarak, a food delivery aggregator",
    badges: [],
    kind: "founders",
  },
  {
    year: "2019",
    title: "3000+ brands onboarded",
    badges: ["McDonald's", "Hardee's", "OPTP", "Ginsoy", "Pizza Max", "Burger Lab"],
  },
  {
    year: "2020",
    title: "COVID hit -> pivoted business model to Direct Online Ordering",
    kind: "blink",
  },
  {
    year: "2021",
    title: "Processed our first 1M orders. Big brands onboarded",
    badges: ["Burger King", "Spar", "Tanmiah", "IHOP", "Dunkin'", "Baskin Robbins", "Nando's", "Second Cup"],
  },
  {
    year: "2022",
    title: "Launched Fleet & Driver Management",
    kind: "fleet",
  },
];

function TimelineSection() {
  return (
    <section style={{ padding: "80px 24px", fontFamily: "system-ui, sans-serif", background: "#fff" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <h2
          style={{
            color: COLORS.purple,
            fontSize: "clamp(24px, 3vw, 34px)",
            fontWeight: 800,
            textAlign: "center",
            marginBottom: 56,
            lineHeight: 1.3,
          }}
        >
          Our Vision Extends Beyond and This Was Just The Beginning of Something Big
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${TIMELINE.length}, 1fr)`,
            gap: 18,
          }}
        >
          {TIMELINE.map((t) => (
            <div key={t.year} style={{ textAlign: "center" }}>
              <div style={{ color: COLORS.purple, fontWeight: 800, fontSize: 20, marginBottom: 10 }}>{t.year}</div>
              <div
                style={{
                  width: 34,
                  height: 34,
                  margin: "0 auto 14px",
                  borderRadius: "50%",
                  background: COLORS.purple,
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                }}
              >
                🕐
              </div>
              <div
                style={{
                  border: `1px solid ${COLORS.lavender}`,
                  borderRadius: 12,
                  padding: 16,
                  minHeight: 190,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 6px 18px rgba(63,30,130,0.06)",
                }}
              >
                <div>
                  {t.badges && t.badges.length > 0 && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 5, justifyContent: "center", marginBottom: 10 }}>
                      {t.badges.map((b) => (
                        <span
                          key={b}
                          style={{
                            fontSize: 10.5,
                            fontWeight: 700,
                            color: COLORS.purple,
                            background: COLORS.lavender,
                            padding: "3px 7px",
                            borderRadius: 6,
                          }}
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  )}
                  {t.kind === "blink" && (
                    <div style={{ fontSize: 28, marginBottom: 10 }}>😇 💜</div>
                  )}
                  {t.kind === "fleet" && <div style={{ fontSize: 28, marginBottom: 10 }}>🛵📱</div>}
                  {t.kind === "founders" && <div style={{ fontSize: 28, marginBottom: 10 }}>🧑‍🤝‍🧑</div>}
                </div>
                <p style={{ color: COLORS.ink, fontSize: 13, lineHeight: 1.5, fontWeight: 600 }}>{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const CORE_VALUES = [
  { icon: "🔎", title: "Transparency across all associations" },
  { icon: "🏆", title: "Seeking excellence to unlock new horizons" },
  { icon: "🤝", title: "Customers' success is our success" },
  { icon: "🧩", title: "Agility to create value" },
  { icon: "🙌", title: "Collaborate and Conquer" },
];

function CoreValuesSection() {
  return (
    <section style={{ padding: "80px 24px", fontFamily: "system-ui, sans-serif", background: "#fff" }}>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: 48,
          alignItems: "center",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=700&q=80"
          alt="Team member"
          style={{ flex: "1 1 320px", maxWidth: 420, width: "100%", borderRadius: 16, objectFit: "cover", height: 420 }}
        />
        <div style={{ flex: "1 1 380px" }}>
          <h2 style={{ color: COLORS.purple, fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 800, marginBottom: 28 }}>
            Our Core Values
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "26px 24px" }}>
            {CORE_VALUES.map((v) => (
              <div key={v.title}>
                <div style={{ fontSize: 30, marginBottom: 10 }}>{v.icon}</div>
                <div style={{ color: COLORS.purple, fontWeight: 700, fontSize: 16.5, lineHeight: 1.4 }}>{v.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const TEAM = [
  { name: "Syed Sair Ali", role: "CEO", img: "https://i.pravatar.cc/400?img=68" },
  { name: "Hyder Abbas", role: "CTO", img: "https://i.pravatar.cc/400?img=13" },
  { name: "Ahmed Bilal", role: "AGM", img: "https://i.pravatar.cc/400?img=14" },
  { name: "Sheikh Aqeel Ahsan", role: "Country Head – Sales", img: "https://i.pravatar.cc/400?img=15" },
  { name: "Usama Iftikhar", role: "Senior Software Architect", img: "https://i.pravatar.cc/400?img=51" },
  { name: "M. Abdullah Tanveer", role: "People and Culture Manager", img: "https://i.pravatar.cc/400?img=52" },
];

function TeamSection() {
  const [active, setActive] = useState(null);

  return (
    <section style={{ padding: "80px 24px", fontFamily: "system-ui, sans-serif", background: "#fff" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <h2 style={{ color: COLORS.purple, fontSize: "clamp(26px, 3.2vw, 38px)", fontWeight: 800, marginBottom: 40 }}>
          The team behind it all
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 24,
          }}
        >
          {TEAM.map((m, i) => {
            const isActive = active === i;
            return (
              <div
                key={m.name}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive((a) => (a === i ? null : a))}
                onClick={() => setActive((a) => (a === i ? null : i))}
                style={{
                  position: "relative",
                  borderRadius: 12,
                  overflow: "hidden",
                  cursor: "pointer",
                  background: "linear-gradient(160deg, #4FA9E8 0%, #7B5CE0 55%, #D6469B 100%)",
                  aspectRatio: "3 / 4",
                }}
              >
                <img
                  src={m.img}
                  alt={m.name}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    mixBlendMode: "luminosity",
                    filter: isActive ? "grayscale(0%) saturate(1)" : "grayscale(100%)",
                    transition: "filter 0.25s ease",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    top: "42%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    display: "flex",
                    gap: 8,
                    opacity: isActive ? 1 : 0,
                    transition: "opacity 0.2s ease",
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                >
                  {[FacebookIcon, TwitterIcon, LinkedinIcon].map((Icon, idx) => (
                    <a
                      key={idx}
                      href="#"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: 6,
                        background: idx === 1 ? "#fff" : "#4FA9E8",
                        color: idx === 1 ? "#4FA9E8" : "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textDecoration: "none",
                      }}
                    >
                      <Icon />
                    </a>
                  ))}
                </div>

                <div
                  style={{
                    position: "absolute",
                    left: 12,
                    right: 12,
                    bottom: 12,
                    background: "#fff",
                    borderRadius: 8,
                    padding: "12px 14px",
                  }}
                >
                  <div style={{ color: COLORS.purple, fontWeight: 800, fontSize: 15.5 }}>{m.name}</div>
                  <div style={{ color: COLORS.ink, fontSize: 13 }}>{m.role}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const INVESTORS = ["SOSV", "GFC", "500", "Sanabil Investments"];

function InvestorsSection() {
  return (
    <section style={{ padding: "70px 24px", fontFamily: "system-ui, sans-serif", background: "#fff" }}>
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          background: COLORS.lavender,
          borderRadius: 24,
          padding: "56px 24px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: COLORS.purple, fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 800, marginBottom: 34 }}>
          Backed by the best
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 20,
          }}
        >
          {INVESTORS.map((inv) => (
            <div
              key={inv}
              style={{
                background: "#fff",
                borderRadius: 12,
                padding: "30px 40px",
                minWidth: 180,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                fontSize: 26,
                color: COLORS.ink,
                letterSpacing: 1,
              }}
            >
              {inv}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ForbesSection() {
  return (
    <section style={{ padding: "80px 24px", fontFamily: "system-ui, sans-serif", background: "#fff", textAlign: "center" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <h2 style={{ color: COLORS.purple, fontSize: "clamp(26px, 3.2vw, 38px)", fontWeight: 800, marginBottom: 14 }}>
          Featured on Forbes
        </h2>
        <p style={{ color: COLORS.ink, fontSize: 16, marginBottom: 34 }}>
          Blink bags $2.1M in 2023 to shape the future of the restaurant industry
        </p>
        <div
          style={{
            borderRadius: 16,
            overflow: "hidden",
            background: "#1b1b1f",
            padding: "30px 30px 40px",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80"
            alt="Blink team featured on Forbes"
            style={{ width: "100%", maxHeight: 420, objectFit: "cover", borderRadius: 10 }}
          />
        </div>
        <a
          href="https://www.forbesmiddleeast.com/innovation/startups/saudi-arabia-based-blink-closes-$21m-seed-funding-round"
          target="_blank"
          rel="noreferrer"
          style={{ display: "inline-block", marginTop: 22, color: COLORS.purple, fontWeight: 700, fontSize: 16 }}
        >
          Check out our feature on Forbes here →
        </a>
      </div>
    </section>
  );
}

const OFFICES = [
  { name: "Karachi office", address: "Block 6 PECHS, Karachi, Sindh, Pakistan" },
  { name: "Lahore office", address: "Sector G, Phase 5, D.H.A, Lahore, Pakistan" },
  { name: "Riyadh office", address: "Alyasmin, Riyadh 13322, Saudi Arabia" },
];

function OfficesSection() {
  return (
    <section style={{ padding: "80px 24px", fontFamily: "system-ui, sans-serif", background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ color: COLORS.purple, fontSize: "clamp(26px, 3.2vw, 38px)", fontWeight: 800, marginBottom: 40 }}>
          Find our offices here
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 48 }}>
          {OFFICES.map((o) => (
            <div key={o.name} style={{ flex: "1 1 240px", minWidth: 220 }}>
              <h4 style={{ color: COLORS.purple, fontWeight: 800, fontSize: 19, marginBottom: 10 }}>{o.name}</h4>
              <p style={{ color: COLORS.ink, fontSize: 14.5, marginBottom: 18, lineHeight: 1.5 }}>{o.address}</p>
              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent(o.address)}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-block",
                  background: COLORS.purple,
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 14,
                  padding: "10px 22px",
                  borderRadius: 8,
                  textDecoration: "none",
                }}
              >
                Location
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const CLIENT_QUOTES = [
  {
    quote:
      "Dynamic and seamless. Two words that describe Blink's online ordering ecosystem perfectly. It's where premium design and bulletproof tech come together to optimize customer experience!",
    name: "Talha Abdullah",
    role: "Head of Marketing, OPTP",
    initial: "O",
    color: "#F5B301",
  },
  {
    quote:
      "Thanks to Blink, we are offering a seamless, personalized ordering experience that enhances customer loyalty. With streamlined operations and robust e-commerce capabilities, Blink has significantly boosted our e-commerce business and market visibility",
    name: "Sohaib Malik",
    role: "E-Commerce & Delivery Consultant, Cheezious",
    initial: "C",
    color: "#D4A017",
  },
  {
    quote:
      "Blinkco has transformed our delivery operations, making it easy to manage orders from start to finish. Their system allows us to effectively track transactions through cash, credit card, online payments, or bank transfers. The online ordering process is now streamlined and efficient. We're seeing great benefits with Blink.",
    name: "Agha Usman",
    role: "Co-Founder, Crumble",
    initial: "C",
    color: "#1E2A6E",
  },
];

function ClientLoveSection() {
  return (
    <section style={{ padding: "80px 24px", fontFamily: "system-ui, sans-serif", background: COLORS.lavender }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <h2 style={{ color: COLORS.purple, fontSize: "clamp(26px, 3.2vw, 38px)", fontWeight: 800, marginBottom: 40 }}>
          Our Clients Love Blink
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {CLIENT_QUOTES.map((c) => (
            <div
              key={c.name}
              style={{
                background: "#fff",
                borderRadius: 14,
                padding: 28,
                boxShadow: "0 10px 30px rgba(63,30,130,0.08)",
              }}
            >
              <p style={{ color: COLORS.ink, fontSize: 14.5, lineHeight: 1.6, marginBottom: 20 }}>{c.quote}</p>
              <div style={{ color: "#F5B301", fontSize: 16, marginBottom: 14 }}>★★★★★</div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: c.color,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: 16,
                  }}
                >
                  {c.initial}
                </div>
                <div>
                  <div style={{ color: COLORS.purple, fontWeight: 800, fontSize: 14.5 }}>{c.name}</div>
                  <div style={{ color: COLORS.gray, fontSize: 13 }}>{c.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Customers page ---------------- */

// Original illustrated scenes for the Landscape strip — hand-drawn SVG art,
// not photography, so there's nothing to license or reproduce.
function LandscapeIllustration({ variant }) {
  const common = { viewBox: "0 0 300 340", width: "100%", height: "100%", preserveAspectRatio: "xMidYMid slice" };

  if (variant === "grocery") {
    return (
      <svg {...common}>
        <rect width="300" height="340" fill="#6B21A8" />
        <rect width="300" height="340" fill="url(#groceryFade)" />
        <defs>
          <linearGradient id="groceryFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C026D3" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#3B0764" stopOpacity="0.85" />
          </linearGradient>
        </defs>
        {/* shelf lines */}
        <rect x="0" y="120" width="300" height="8" fill="rgba(255,255,255,0.15)" />
        <rect x="0" y="230" width="300" height="8" fill="rgba(255,255,255,0.15)" />
        {/* fruit piles */}
        {[30, 80, 130, 180, 230, 270].map((x, i) => (
          <circle key={"a" + i} cx={x} cy={100} r="22" fill={["#F87171", "#FB923C", "#FACC15", "#A3E635", "#F87171", "#FB923C"][i]} />
        ))}
        {[50, 100, 150, 200, 250].map((x, i) => (
          <circle key={"b" + i} cx={x} cy={210} r="20" fill={["#FACC15", "#A3E635", "#F87171", "#FB923C", "#FACC15"][i]} />
        ))}
        {[40, 90, 140, 190, 240].map((x, i) => (
          <circle key={"c" + i} cx={x} cy={300} r="20" fill={["#A3E635", "#F87171", "#FB923C", "#FACC15", "#A3E635"][i]} />
        ))}
      </svg>
    );
  }

  if (variant === "sushi") {
    return (
      <svg {...common}>
        <rect width="300" height="340" fill="#0F172A" />
        <rect width="300" height="340" fill="url(#sushiFade)" />
        <defs>
          <linearGradient id="sushiFade" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0F172A" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        {/* plate */}
        <ellipse cx="150" cy="200" rx="120" ry="60" fill="#F8FAFC" opacity="0.92" />
        {/* sushi pieces */}
        {[-70, -20, 30, 80].map((dx, i) => (
          <g key={i} transform={`translate(${150 + dx}, 190)`}>
            <circle r="26" fill="#FDF2F8" />
            <circle r="26" fill="none" stroke="#1E293B" strokeWidth="6" />
            <circle r="10" fill={["#F97316", "#F43F5E", "#FACC15", "#F97316"][i]} />
          </g>
        ))}
        {/* chopsticks */}
        <rect x="60" y="260" width="150" height="6" rx="3" fill="#D97706" transform="rotate(-8 60 260)" />
        <rect x="70" y="278" width="150" height="6" rx="3" fill="#D97706" transform="rotate(-8 70 278)" />
      </svg>
    );
  }

  if (variant === "burger") {
    return (
      <svg {...common}>
        <rect width="300" height="340" fill="#5C0F0A" />
        <rect width="300" height="340" fill="url(#burgerFade)" />
        <defs>
          <linearGradient id="burgerFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#DC2626" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#450A0A" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        {/* bun top */}
        <path d="M70 160 Q150 90 230 160 Z" fill="#D97706" />
        {/* sesame seeds */}
        {[100, 130, 160, 190].map((x, i) => (
          <ellipse key={i} cx={x} cy={135 - (i % 2) * 6} rx="4" ry="2.4" fill="#FEF3C7" />
        ))}
        {/* lettuce */}
        <path d="M62 165 q12 -14 24 0 q12 -14 24 0 q12 -14 24 0 q12 -14 24 0 q12 -14 24 0 q12 -14 24 0 v18 h-144 Z" fill="#84CC16" />
        {/* patty */}
        <rect x="66" y="183" width="168" height="26" rx="10" fill="#7C2D12" />
        {/* cheese */}
        <path d="M60 209 h180 l-14 22 h-152 Z" fill="#FACC15" />
        {/* bun bottom */}
        <path d="M70 231 h160 q0 30 -80 30 q-80 0 -80 -30 Z" fill="#D97706" />
      </svg>
    );
  }

  if (variant === "chicken") {
    return (
      <svg {...common}>
        <rect width="300" height="340" fill="#3F0A0A" />
        <rect width="300" height="340" fill="url(#chickenFade)" />
        <defs>
          <linearGradient id="chickenFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#B91C1C" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#3F0A0A" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        {/* flames */}
        {[50, 130, 210].map((x, i) => (
          <path
            key={i}
            d={`M${x} 300 q-16 -30 0 -55 q16 25 0 55 Z`}
            fill="#F97316"
            opacity="0.85"
          />
        ))}
        {/* drumstick */}
        <g transform="translate(150,150)">
          <ellipse cx="0" cy="-10" rx="52" ry="42" fill="#B45309" />
          <path d="M-10 25 q-6 40 -30 55 q30 8 46 -18 Z" fill="#F5E6C8" />
          <ellipse cx="0" cy="-10" rx="52" ry="42" fill="none" stroke="#7C2D12" strokeWidth="4" opacity="0.5" />
        </g>
      </svg>
    );
  }

  // coffee
  return (
    <svg {...common}>
      <rect width="300" height="340" fill="#292524" />
      <rect width="300" height="340" fill="url(#coffeeFade)" />
      <defs>
        <linearGradient id="coffeeFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#57534E" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#1C1917" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      {/* steam */}
      <path d="M120 90 q-14 -20 0 -40 q14 20 0 40" stroke="#fff" strokeWidth="5" fill="none" opacity="0.5" strokeLinecap="round" />
      <path d="M160 90 q-14 -20 0 -40 q14 20 0 40" stroke="#fff" strokeWidth="5" fill="none" opacity="0.5" strokeLinecap="round" />
      {/* cup */}
      <path d="M90 120 h100 l-14 130 q-2 20 -36 20 q-34 0 -36 -20 Z" fill="#F5F5F4" />
      <path d="M186 140 q40 -6 40 30 q0 34 -44 30" fill="none" stroke="#F5F5F4" strokeWidth="10" />
      {/* saucer */}
      <ellipse cx="140" cy="285" rx="70" ry="14" fill="#44403C" />
      {/* beans */}
      {[[40, 300], [70, 315], [220, 300], [250, 315]].map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="10" ry="7" fill="#3B2417" transform={`rotate(30 ${x} ${y})`} />
      ))}
    </svg>
  );
}

function LandscapeCarousel() {
  const trackRef = useRef(null);
  const cards = [...LANDSCAPE_CARDS, ...LANDSCAPE_CARDS];

  const scrollByCard = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = el.firstChild ? el.firstChild.offsetWidth + 24 : 300;
    el.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
    // loop back to start seamlessly once we've scrolled past the first set
    if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 10) {
      setTimeout(() => el.scrollTo({ left: 0, behavior: "auto" }), 400);
    }
  };

  useEffect(() => {
    const id = setInterval(() => scrollByCard(1), 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <button
        aria-label="Previous"
        onClick={() => scrollByCard(-1)}
        style={{ ...carouselArrowStyle, left: -8 }}
      >
        ‹
      </button>
      <div
        ref={trackRef}
        style={{
          display: "flex",
          gap: 24,
          overflowX: "auto",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          padding: "4px 2px",
        }}
      >
        {cards.map((c, i) => (
          <div
            key={i}
            style={{
              minWidth: 300,
              height: 340,
              borderRadius: 20,
              flexShrink: 0,
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 14px 34px rgba(36,25,72,0.2)",
            }}
          >
            <div style={{ position: "absolute", inset: 0, background: "#1a1a1a" }}>
              {/* real photo; the illustration behind it is a fallback shown
                  only if the photo URL ever fails to load */}
              <div style={{ position: "absolute", inset: 0 }}>
                <LandscapeIllustration variant={c.variant} />
              </div>
              <img
                src={c.photo}
                alt={`${c.name} — ${c.tagline}`}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,0.75) 100%)",
                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: 16,
                left: 16,
                background: "rgba(255,255,255,0.92)",
                borderRadius: 10,
                padding: "6px 12px",
                fontWeight: 800,
                fontSize: 13,
                color: COLORS.ink,
              }}
            >
              {c.name}
            </div>
            <div
              style={{
                position: "absolute",
                left: 22,
                bottom: 22,
                right: 22,
                color: "#fff",
                fontSize: 15,
                fontWeight: 600,
                textShadow: "0 2px 8px rgba(0,0,0,0.45)",
              }}
            >
              {c.tagline}
            </div>
          </div>
        ))}
      </div>
      <button aria-label="Next" onClick={() => scrollByCard(1)} style={{ ...carouselArrowStyle, right: -8 }}>
        ›
      </button>
    </div>
  );
}

const carouselArrowStyle = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  width: 40,
  height: 40,
  borderRadius: "50%",
  border: "none",
  background: "#fff",
  color: COLORS.purple,
  fontSize: 22,
  fontWeight: 800,
  cursor: "pointer",
  boxShadow: "0 8px 20px rgba(36,25,72,0.18)",
  zIndex: 5,
};

function VideoTestimonialCard({ v }) {
  return (
    <div>
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingTop: "56.25%",
          borderRadius: 12,
          overflow: "hidden",
          background: "#000",
          marginBottom: 18,
        }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${v.youtubeId}`}
          title={v.title}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <p style={{ fontSize: 15.5, color: "#2B2340", lineHeight: 1.6, marginBottom: 18 }}>“{v.quote}”</p>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: v.color,
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
            flexShrink: 0,
          }}
        >
          {v.icon}
        </div>
        <div>
          <div style={{ fontWeight: 800, fontSize: 15, color: COLORS.purple }}>{v.name}</div>
          <div style={{ fontSize: 13.5, color: COLORS.gray }}>{v.role}</div>
        </div>
      </div>
    </div>
  );
}

function CustomersSection({ onBookDemo }) {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }}>
      {/* Hero band */}
      <div style={{ padding: "0 24px" }}>
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            background: `linear-gradient(135deg, ${COLORS.lavender} 0%, #F3ECFE 100%)`,
            borderRadius: 24,
            padding: "80px 24px",
            textAlign: "center",
          }}
        >
          <h1 style={{ color: COLORS.purple, fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800 }}>
            Meet Our Customers
          </h1>
        </div>
      </div>

      {/* Top logo strip */}
      <div style={{ marginTop: 50 }}>
        <LogoMarquee items={CUSTOMERS_LOGOS_TOP} speed={22} badgeSize={56} />
      </div>

      {/* Quick commerce platform blurb, with a second logo strip above it */}
      <div style={{ padding: "10px 24px 70px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 36 }}>
            <LogoMarquee items={CUSTOMERS_LOGOS_MID} speed={24} reverse badgeSize={50} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 40 }}>
            <h2 style={{ color: COLORS.purple, fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 800, lineHeight: 1.2 }}>
              The Direct Quick Commerce Platform that transformed the F&amp;B and Retail Landscape
            </h2>
            <p style={{ color: COLORS.ink, fontSize: 16, lineHeight: 1.7, alignSelf: "center" }}>
              Blink has created a platform to empower restaurants, supermarkets, and retail businesses – giving
              them direct access to the end consumer. Our direct online ordering system has provided our
              customers with 2x order growth, 30 sec faster order speed, 50% increased user retention, and 60%
              greater sign-up conversions, making their lives so much easier. Hear from our customers themselves
              what they have to say about their experience with Blink!
            </p>
          </div>
        </div>
      </div>

      {/* Landscape carousel */}
      <div style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ color: COLORS.purple, fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 800, marginBottom: 30 }}>
            Landscape
          </h2>
          <LandscapeCarousel />
        </div>
      </div>

      {/* Video testimonials */}
      <div style={{ padding: "0 24px 90px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 50 }}>
          {VIDEO_TESTIMONIALS.map((v) => (
            <VideoTestimonialCard key={v.youtubeId} v={v} />
          ))}
        </div>
      </div>

      <div style={{ textAlign: "center", padding: "0 24px 90px" }}>
        <button onClick={onBookDemo} style={{ ...primaryBtn, padding: "16px 36px", fontSize: 16 }} className="blink-btn-anim">
          Book a Demo
        </button>
      </div>
    </div>
  );
}

/* ---------------- Pricing page ---------------- */

const CheckIcon = ({ color = "#fff" }) => (
  <svg viewBox="0 0 20 20" width="16" height="16" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="10" cy="10" r="10" fill={color === "#fff" ? "rgba(255,255,255,0.18)" : COLORS.lavender} />
    <path
      d="M6 10.2l2.4 2.4L14.5 6.5"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PRICING_TABS = [
  {
    label: "Modern POS & RMS",
    tiers: [
      {
        title: "BlinkPOS Starter",
        desc: "Empower Your Growing Restaurant with BlinkPOS Starter. Designed for multi-branch restaurants seeking a robust foundation for their operations.",
        price: 30,
        features: [
          "Cloud-based point of sale",
          "Order management",
          "Menu management",
          "Revenue reconciliation",
          "Analytics & reports",
          "Shift schedule",
          "Offline mode",
          "Tax Integration",
          "Customer Support",
        ],
      },
      {
        title: "BlinkPOS Essential",
        desc: "Empower Your Growing Restaurant with BlinkPOS Essential. Designed for multi-branch restaurants seeking a robust foundation for their operations.",
        price: 45,
        features: [
          "Cloud-based point of sale",
          "Order management",
          "Menu management",
          "Revenue reconciliation",
          "Analytics & reports",
          "Shift schedule",
          "Offline mode",
          "Tax Integration",
          "Recipe Management",
          "Foodpanda Integration",
          "Customer Support",
        ],
      },
      {
        title: "BlinkPOS Integrated",
        desc: "Elevate Your Restaurant with BlinkPOS Integrated. Ideal for multi-branch restaurants demanding advanced features and seamless integrations.",
        price: 60,
        highlight: true,
        features: [
          "Cloud-based point of sale",
          "Order management",
          "Menu management",
          "Revenue reconciliation",
          "Analytics & reports",
          "Shift schedule",
          "Offline mode",
          "Inventory management",
          "Tax integration",
          "Recipe Management",
          "FoodPanda integration",
          "Warehousing",
          "Food Costing",
          "Customer Support",
        ],
      },
    ],
  },
  {
    label: "Online Ordering System",
    tiers: [
      {
        title: "BlinkOrder Starter",
        desc: "Get your restaurant online fast with a branded ordering website built for growing single and multi-branch businesses.",
        price: 20,
        features: [
          "Branded ordering website",
          "Menu management",
          "Order notifications",
          "Basic analytics",
          "Customer database",
          "Coupons & discounts",
          "Customer Support",
        ],
      },
      {
        title: "BlinkOrder Essential",
        desc: "Grow repeat orders with mobile app ordering, loyalty rewards and automated marketing built in.",
        price: 35,
        features: [
          "Branded ordering website",
          "Menu management",
          "Order notifications",
          "Basic analytics",
          "Customer database",
          "Coupons & discounts",
          "Mobile app ordering",
          "Loyalty & rewards",
          "SMS/Email marketing",
          "Abandoned cart recovery",
          "Customer Support",
        ],
      },
      {
        title: "BlinkOrder Integrated",
        desc: "The complete direct-ordering stack for multi-store brands that need advanced reporting and integrations.",
        price: 50,
        highlight: true,
        features: [
          "Branded ordering website",
          "Menu management",
          "Order notifications",
          "Customer database",
          "Coupons & discounts",
          "Mobile app ordering",
          "Loyalty & rewards",
          "SMS/Email marketing",
          "Abandoned cart recovery",
          "Multi-store management",
          "Advanced analytics & reports",
          "API integrations",
          "Dedicated account manager",
        ],
      },
    ],
  },
  {
    label: "Fleet & Driver Management",
    tiers: [
      {
        title: "BlinkFleet Starter",
        desc: "Give your riders a simple app and get every delivery assigned and tracked from day one.",
        price: 15,
        features: [
          "Driver mobile app",
          "Live order assignment",
          "Basic route tracking",
          "Delivery zone setup",
          "Customer Support",
        ],
      },
      {
        title: "BlinkFleet Essential",
        desc: "Optimise every route and keep customers updated automatically while you scale your delivery fleet.",
        price: 25,
        features: [
          "Driver mobile app",
          "Live order assignment",
          "Basic route tracking",
          "Delivery zone setup",
          "Route optimization",
          "Driver performance reports",
          "SMS delivery updates",
          "COD reconciliation",
          "Customer Support",
        ],
      },
      {
        title: "BlinkFleet Integrated",
        desc: "Run multiple fleets with real-time GPS, automated dispatch and custom delivery SLAs.",
        price: 40,
        highlight: true,
        features: [
          "Driver mobile app",
          "Live order assignment",
          "Route optimization",
          "Driver performance reports",
          "SMS delivery updates",
          "COD reconciliation",
          "Multi-fleet management",
          "Real-time GPS tracking",
          "Automated dispatch",
          "Custom delivery SLAs",
          "Dedicated support",
        ],
      },
    ],
  },
];

function PricingSection({ onBookDemo, onViewFeatures }) {
  const [activeTab, setActiveTab] = useState(0);
  const tab = PRICING_TABS[activeTab];

  return (
    <div id="pricing">
      <div
        style={{
          padding: "48px 24px 0",
          fontFamily: "system-ui, sans-serif",
          background: "#fff",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 4,
            background: "#F4F1FB",
            borderRadius: 12,
            padding: 6,
            boxShadow: "0 8px 24px rgba(63,30,130,0.08)",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {PRICING_TABS.map((t, i) => (
            <button
              key={t.label}
              onClick={() => setActiveTab(i)}
              style={{
                border: "none",
                cursor: "pointer",
                padding: "14px 22px",
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 14.5,
                lineHeight: 1.3,
                background: activeTab === i ? COLORS.purple : "transparent",
                color: activeTab === i ? "#fff" : COLORS.ink,
                transition: "background 0.2s ease, color 0.2s ease",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div
        style={{
          margin: "32px auto 0",
          maxWidth: 1180,
          padding: "0 24px",
        }}
      >
        <div
          style={{
            background: `linear-gradient(135deg, ${COLORS.lavender} 0%, #F3EEFC 100%)`,
            borderRadius: 20,
            padding: "70px 24px",
            textAlign: "center",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <h1 style={{ color: COLORS.purple, fontSize: "clamp(28px, 3.6vw, 44px)", fontWeight: 800 }}>
            Flexible {tab.label} Pricing for Your Business
          </h1>
        </div>
      </div>

      <div style={{ padding: "56px 24px 20px", fontFamily: "system-ui, sans-serif", background: "#fff" }}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 28,
            alignItems: "stretch",
          }}
        >
          {tab.tiers.map((tier) => {
            const isHighlight = tier.highlight;
            return (
              <div
                key={tier.title}
                style={{
                  borderRadius: 16,
                  padding: 30,
                  display: "flex",
                  flexDirection: "column",
                  background: isHighlight ? COLORS.purple : "#fff",
                  color: isHighlight ? "#fff" : COLORS.ink,
                  boxShadow: isHighlight
                    ? "0 24px 50px rgba(63,30,130,0.28)"
                    : "0 10px 30px rgba(36,25,72,0.08)",
                  border: isHighlight ? "none" : "1px solid #EFEAFB",
                  transform: isHighlight ? "translateY(-10px)" : "none",
                }}
              >
                <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12, color: isHighlight ? "#fff" : COLORS.ink }}>
                  {tier.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.6,
                    marginBottom: 22,
                    color: isHighlight ? "rgba(255,255,255,0.85)" : COLORS.gray,
                  }}
                >
                  <strong>{tier.desc.split(".")[0]}.</strong>
                  {tier.desc.split(".").slice(1).join(".")}
                </p>
                <div style={{ marginBottom: 18 }}>
                  <span style={{ fontSize: 40, fontWeight: 800 }}>${tier.price}</span>
                  <span style={{ fontSize: 14, fontWeight: 600, opacity: 0.8 }}>/branch /month</span>
                </div>
                <button
                  onClick={onBookDemo}
                  style={{
                    border: "none",
                    cursor: "pointer",
                    borderRadius: 8,
                    padding: "13px 20px",
                    fontWeight: 800,
                    fontSize: 14,
                    letterSpacing: 0.4,
                    marginBottom: 22,
                    background: isHighlight ? "#fff" : COLORS.purple,
                    color: isHighlight ? COLORS.purple : "#fff",
                  }}
                >
                  GET NOW
                </button>
                <div
                  style={{
                    borderTop: isHighlight ? "1px solid rgba(255,255,255,0.2)" : "1px solid #EFEAFB",
                    paddingTop: 18,
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                    flex: 1,
                  }}
                >
                  {tier.features.map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14 }}>
                      <CheckIcon color={isHighlight ? "#fff" : COLORS.purple} />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => onViewFeatures(tier)}
                  style={{
                    marginTop: 24,
                    border: "none",
                    cursor: "pointer",
                    borderRadius: 8,
                    padding: "13px 20px",
                    fontWeight: 800,
                    fontSize: 13.5,
                    letterSpacing: 0.4,
                    background: isHighlight ? "#fff" : COLORS.purple,
                    color: isHighlight ? COLORS.purple : "#fff",
                  }}
                >
                  VIEW ALL FEATURES
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <GrowthSection />
      <TestimonialsSection />
    </div>
  );
}

function AboutSection() {
  return (
    <div id="about">
      {/* Hero */}
      <div
        style={{
          padding: "90px 24px 70px",
          fontFamily: "system-ui, sans-serif",
          background: `linear-gradient(135deg, ${COLORS.lavender} 0%, #F3EEFC 100%)`,
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h1 style={{ color: COLORS.purple, fontSize: "clamp(32px, 4.4vw, 52px)", fontWeight: 800, marginBottom: 26, lineHeight: 1.2 }}>
            Shaping the Future of Restaurants
          </h1>
          <p style={{ color: COLORS.ink, fontSize: 16.5, lineHeight: 1.7, marginBottom: 18 }}>
            Our journey began in 2018 with a vision to empower restaurants. We saw the limitations of the aggregator
            model and built Blink as a solution.
          </p>
          <p style={{ color: COLORS.ink, fontSize: 16.5, lineHeight: 1.7 }}>
            Recognising the challenges restaurants faced with high commissions and limited data insights on
            aggregator platforms, we created Blink. Our mission was clear: to provide restaurants with a
            direct-to-customer solution that offered complete control and valuable data. Blink's innovative
            plug-and-play technology empowers restaurants to establish their own branded online presence,
            eliminating the need for costly third-party platforms.
          </p>
        </div>
      </div>

      {/* data-driven insights + two photos */}
      <div style={{ padding: "70px 24px", fontFamily: "system-ui, sans-serif", background: COLORS.lavender, textAlign: "center" }}>
        <p style={{ maxWidth: 900, margin: "0 auto 40px", color: COLORS.ink, fontSize: 16.5, lineHeight: 1.7 }}>
          With a focus on data-driven insights, Blink offers a robust restaurant management system (RMS) and
          point-of-sale (POS) platform. Our restaurant data analytics solutions provide actionable intelligence to
          help you optimize operations, enhance customer experiences, and drive growth.
        </p>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "center" }}>
          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=900&q=80"
            alt="Restaurant staff serving customers"
            style={{ flex: "1 1 400px", maxWidth: 560, width: "100%", height: 320, objectFit: "cover", borderRadius: 12 }}
          />
          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=900&q=80"
            alt="Cafe staff at work"
            style={{ flex: "1 1 400px", maxWidth: 560, width: "100%", height: 320, objectFit: "cover", borderRadius: 12 }}
          />
        </div>
      </div>

      <TimelineSection />

      {/* Evolution text */}
      <div style={{ padding: "70px 24px 20px", fontFamily: "system-ui, sans-serif", background: "#fff", textAlign: "center" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ color: COLORS.ink, fontSize: 16.5, lineHeight: 1.7, marginBottom: 18 }}>
            From humble beginnings as an online ordering platform, Blink has evolved into a comprehensive restaurant
            management solution.
          </p>
          <p style={{ color: COLORS.ink, fontSize: 16.5, lineHeight: 1.7, marginBottom: 18 }}>
            Today, we offer a full suite of tools including POS systems, delivery management, ordering kiosks, data
            analytics, CRM, and loyalty programs. By handling the complexities of restaurant operations, Blink
            empowers businesses to focus on delivering exceptional customer experiences.
          </p>
          <p style={{ color: COLORS.ink, fontSize: 16.5, lineHeight: 1.7 }}>
            With a strong presence in the GCC region and a proven track record of processing over 8 million orders
            annually, we are committed to driving the future of the restaurant industry.
          </p>
        </div>
      </div>

      {/* Vision & Mission */}
      <div style={{ padding: "50px 24px 80px", fontFamily: "system-ui, sans-serif", background: "#fff", textAlign: "center" }}>
        <div style={{ maxWidth: 780, margin: "0 auto 56px" }}>
          <h2 style={{ color: COLORS.purple, fontSize: "clamp(26px, 3.2vw, 38px)", fontWeight: 800, marginBottom: 16 }}>
            Our Vision
          </h2>
          <p style={{ color: COLORS.ink, fontSize: 16.5, lineHeight: 1.7 }}>
            Pioneering innovative restaurant solutions that redefine efficiency, customer experience, and industry
            standards.
          </p>
        </div>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <h2 style={{ color: COLORS.purple, fontSize: "clamp(26px, 3.2vw, 38px)", fontWeight: 800, marginBottom: 16 }}>
            Our Mission
          </h2>
          <p style={{ color: COLORS.ink, fontSize: 16.5, lineHeight: 1.7 }}>
            Dedicated to equipping restaurants with cutting-edge technology to thrive in a dynamic market, delivering
            exceptional customer experiences and optimized operations.
          </p>
        </div>
      </div>

      <CoreValuesSection />
      <TeamSection />
      <InvestorsSection />
      <ForbesSection />
      <OfficesSection />
      <ClientLoveSection />
    </div>
  );
}

/* ---------------- Modern POS & RMS product page ---------------- */
/* Same headings/copy as the reference design. Photos are free Unsplash
   stock (same approach already used in AboutSection/LANDSCAPE_CARDS above)
   as placeholders for your own product photography — swap the URLs for
   local imports whenever you have the real shots. Dashboard/UI mockups are
   drawn with plain divs, matching the DashboardMock pattern used elsewhere
   in this file, so no extra image files are required for those. */

const POS_PARTNER_LOGOS = [logoTanmiah, logoAlMeera, logoCinnabon, logoDunkin, logoBaskin1, logoJalalSons].map((src) => ({
  type: "img",
  src,
}));

const POS_INTEGRATION_LOGOS = [
  { src: intFoodics, name: "Foodics" },
  { src: intSavyour, name: "Savyour" },
  { src: intBlink, name: "Blink" },
  { src: intSendgrid, name: "SendGrid" },
];

const POS_FEATURES = [
  {
    id: "inventory",
    heading: "Effortless Inventory & Recipe Management",
    desc: "Streamline operations by optimizing inventory levels, controlling costs, and ensuring consistent quality. Consolidate inventory and standardize product recipes across all channels.",
    points: [
      { icon: "⚡", title: "Efficiency", desc: "Eliminate manual tasks and streamline operations for a smoother workflow." },
      { icon: "💰", title: "Cost Control", desc: "Optimize inventory levels and standardize recipes to control costs and maximize profits." },
    ],
    photo: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=900&q=80&auto=format&fit=crop",
    tag: "Inventory Management",
    reverse: false,
  },
  {
    id: "reconciliation",
    heading: "Revenue Reconciliation for Accurate Financials & Reduced Errors",
    desc: "Blink automates reconciliation across all channels, reducing processing time and eliminating errors. Focus on what matters most – growing your business.",
    points: [
      { icon: "🔒", title: "Complete Transparency", desc: "Automated reconciliation ensures accurate transaction matching. Say goodbye to manual errors and potential revenue loss." },
      { icon: "⏱️", title: "Save Time and Cost", desc: "Streamline financial operations, reducing reconciliation times and manual labour costs." },
    ],
    photo: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=900&q=80&auto=format&fit=crop",
    tag: "Revenue Reconciliation",
    reverse: true,
  },
  {
    id: "orders",
    heading: "One System, Endless Orders",
    desc: "BlinkPOS seamlessly integrates with all your ordering channels, allowing you to manage everything from one central platform. Say goodbye to juggling multiple systems.",
    points: [
      { icon: "🧾", title: "Unified Ordering", desc: "Manage all your orders - online, in-store, and delivery - from one central hub. BlinkPOS integrates seamlessly to eliminate complexity and boost efficiency." },
      { icon: "⏱️", title: "Save Time and Cost", desc: "Save valuable time by eliminating the need to switch between different platforms. BlinkPOS empowers you to focus on delivering exceptional service to your customers." },
    ],
    photo: "https://images.unsplash.com/photo-1498654831517-895a5dfe4edc?w=900&q=80&auto=format&fit=crop",
    tag: "Integrated Orders",
    reverse: false,
  },
  {
    id: "analytics",
    heading: "Make Smarter Decisions, Faster with Advanced Analytics",
    desc: "BlinkPOS empowers you with actionable insights through easy-to-understand analytics. Improve performance and make data-driven decisions for your business.",
    points: [
      { icon: "🏆", title: "Competitive Advantage", desc: "Stay ahead of the competition by leveraging data-driven insights to adapt to market trends and customer preferences effectively." },
      { icon: "⚙️", title: "Optimize Efficiency", desc: "Streamline financial operations, reducing reconciliation times and manual labour costs." },
    ],
    photo: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=900&q=80&auto=format&fit=crop",
    tag: "Advanced Analytics",
    reverse: true,
  },
];

const POS_WHY_CARDS = [
  { icon: "🔄", title: "Integrated experience", desc: "Minimize manual tasks and maximize efficiency with our integrated platform." },
  { icon: "📊", title: "Data at Your Fingertips", desc: "Gain valuable insights and make informed decisions with all your data readily available." },
  { icon: "☁️", title: "Cloud-based experience", desc: "Access the POS system from the cloud, owners can access the POS sitting from anywhere around the world." },
];

function PosHero({ onBookDemo }) {
  return (
    <section
      style={{
        background: `linear-gradient(180deg, ${COLORS.lavender} 0%, #fff 100%)`,
        padding: "70px 24px 50px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 1150,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: 50,
          alignItems: "center",
        }}
      >
        <div>
          <h1 style={{ color: COLORS.purple, fontSize: "clamp(30px, 4vw, 46px)", fontWeight: 800, lineHeight: 1.2, marginBottom: 20 }}>
            The All-in-One Restaurant POS System: Manage Everything, Everywhere
          </h1>
          <p style={{ color: COLORS.gray, fontSize: 15.5, lineHeight: 1.7, marginBottom: 28, maxWidth: 480 }}>
            Ditch the complexity, embrace simplicity. BlinkPOS, the all-in-one restaurant POS system, makes managing
            your restaurant easy. Multi-channel orders, staff tools, and advanced analytics — all in one place,
            accessible from anywhere.
          </p>
          <button onClick={onBookDemo} style={primaryBtn} className="blink-btn-anim">
            Book a Demo
          </button>
        </div>
        <div>
          <img src={prodPos} alt="BlinkPOS running across devices" style={{ width: "100%", display: "block", borderRadius: 12 }} />
        </div>
      </div>
    </section>
  );
}

function PosPartnersStrip() {
  return (
    <section style={{ padding: "10px 24px 60px", fontFamily: "system-ui, sans-serif" }}>
      <div
        style={{
          maxWidth: 1150,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 30,
          justifyContent: "space-between",
        }}
      >
        <h3 style={{ color: COLORS.purple, fontSize: 19, fontWeight: 800, lineHeight: 1.35, maxWidth: 230 }}>
          BlinkPOS Handles Millions of Orders for Our Partners
        </h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 26, alignItems: "center" }}>
          {POS_PARTNER_LOGOS.map((item, i) => (
            <LogoBadge key={i} item={item} size={52} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PosFeaturePhoto({ photo, tag }) {
  return (
    <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", boxShadow: "0 14px 40px rgba(36,25,72,0.16)" }}>
      <img src={photo} alt={tag} style={{ width: "100%", height: 340, objectFit: "cover", display: "block" }} />
      <div
        style={{
          position: "absolute",
          top: 18,
          left: 18,
          display: "flex",
          alignItems: "center",
          gap: 10,
          background: "#fff",
          borderRadius: 10,
          padding: "10px 16px",
          fontWeight: 800,
          fontSize: 14,
          color: COLORS.ink,
          boxShadow: "0 8px 20px rgba(36,25,72,0.18)",
        }}
      >
        <span style={{ width: 22, height: 22, borderRadius: 6, background: COLORS.purple, display: "inline-block", flexShrink: 0 }} />
        {tag}
      </div>
    </div>
  );
}

function PosFeatureRow({ f }) {
  const textBlock = (
    <div>
      <h2 style={{ color: COLORS.purple, fontSize: "clamp(24px, 2.8vw, 34px)", fontWeight: 800, marginBottom: 16, lineHeight: 1.25 }}>
        {f.heading}
      </h2>
      <p style={{ color: COLORS.gray, fontSize: 15.5, lineHeight: 1.7, marginBottom: 26 }}>{f.desc}</p>
      <div
        style={{
          borderTop: "1px solid #EDE6FA",
          paddingTop: 26,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
          gap: 24,
        }}
      >
        {f.points.map((p) => (
          <div key={p.title}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: COLORS.purple,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
                marginBottom: 12,
              }}
            >
              {p.icon}
            </div>
            <h4 style={{ color: COLORS.purple, fontSize: 16, fontWeight: 800, marginBottom: 6 }}>{p.title}</h4>
            <p style={{ color: COLORS.gray, fontSize: 13.5, lineHeight: 1.6 }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const photoBlock = <PosFeaturePhoto photo={f.photo} tag={f.tag} />;

  return (
    <div
      style={{
        maxWidth: 1150,
        margin: "0 auto",
        padding: "50px 24px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: 56,
        alignItems: "center",
      }}
    >
      {f.reverse ? (
        <>
          <div>{textBlock}</div>
          <div>{photoBlock}</div>
        </>
      ) : (
        <>
          <div>{photoBlock}</div>
          <div>{textBlock}</div>
        </>
      )}
    </div>
  );
}

function PosWhySection() {
  return (
    <section style={{ padding: "40px 24px 70px", fontFamily: "system-ui, sans-serif", textAlign: "center" }}>
      <h2
        style={{
          color: COLORS.purple,
          fontSize: "clamp(24px, 3vw, 34px)",
          fontWeight: 800,
          maxWidth: 780,
          margin: "0 auto 50px",
          lineHeight: 1.3,
        }}
      >
        Tired of outdated POS systems? Discover the BlinkPOS difference
      </h2>
      <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 40 }}>
        {POS_WHY_CARDS.map((c) => (
          <div key={c.title}>
            <div
              style={{
                width: 62,
                height: 62,
                margin: "0 auto 18px",
                borderRadius: "50%",
                background: COLORS.lavender,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
              }}
            >
              {c.icon}
            </div>
            <h4 style={{ color: COLORS.purple, fontSize: 16.5, fontWeight: 800, marginBottom: 10 }}>{c.title}</h4>
            <p style={{ color: COLORS.gray, fontSize: 14, lineHeight: 1.6, maxWidth: 260, margin: "0 auto" }}>{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CustomerTableMock() {
  const rows = [
    ["Customer 1", "", "34", "22494.00"],
    ["Customer 2", "xxx-xxx-xxx", "27", "17059.80"],
    ["Customer 3", "xxx-xxx-xxx", "1", "1218.00"],
  ];
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 12, flexWrap: "wrap", gap: 8 }}>
        <span style={{ fontSize: 11.5, fontWeight: 700, color: COLORS.ink, background: "#F3EEFC", padding: "6px 10px", borderRadius: 6 }}>
          Export to Excel
        </span>
        <span
          style={{
            marginLeft: "auto",
            fontSize: 11.5,
            color: "#fff",
            background: "#E91E8C",
            padding: "6px 14px",
            borderRadius: 16,
            fontWeight: 700,
          }}
        >
          + Customer
        </span>
      </div>
      <div style={{ border: "1px solid #EDE6FA", borderRadius: 8, overflow: "hidden", fontSize: 11 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1.2fr 0.8fr 1fr",
            background: "#F8F6FD",
            padding: "8px 10px",
            fontWeight: 700,
            color: COLORS.ink,
          }}
        >
          <span>Customer Name</span>
          <span>Phone</span>
          <span>Orders</span>
          <span>Total</span>
        </div>
        {rows.map((r) => (
          <div
            key={r[0]}
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 1.2fr 0.8fr 1fr",
              padding: "8px 10px",
              borderTop: "1px solid #F3EEFC",
              color: COLORS.gray,
            }}
          >
            <span>{r[0]}</span>
            <span>{r[1]}</span>
            <span>{r[2]}</span>
            <span>{r[3]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function OrderModuleMock() {
  return (
    <div style={{ border: "1px solid #EDE6FA", borderRadius: 12, padding: 14 }}>
      {[1, 2, 3].map((i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: i < 3 ? "1px solid #F3EEFC" : "none" }}>
          <div style={{ width: 32, height: 32, borderRadius: 6, background: COLORS.lavender, flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <div style={{ height: 7, width: "70%", background: "#EDE6FA", borderRadius: 4, marginBottom: 6 }} />
            <div style={{ height: 6, width: "40%", background: "#F3EEFC", borderRadius: 4 }} />
          </div>
        </div>
      ))}
      <div style={{ marginTop: 10, height: 26, width: 70, background: "#E91E8C", borderRadius: 14 }} />
    </div>
  );
}

function AddInventoryMock() {
  return (
    <div style={{ background: "#fff", borderRadius: 12, padding: 16, boxShadow: "0 6px 16px rgba(36,25,72,0.08)" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <span style={{ fontWeight: 800, fontSize: 13, color: COLORS.ink }}>Add Direct Inventory</span>
        <span style={{ color: COLORS.gray, fontSize: 13 }}>&times;</span>
      </div>
      <div style={{ fontSize: 11, color: COLORS.gray, marginBottom: 4 }}>Reason</div>
      <div style={{ border: "1px solid #EDE6FA", borderRadius: 6, padding: "6px 10px", fontSize: 11.5, color: COLORS.ink, marginBottom: 10 }}>
        Running Low
      </div>
      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, color: COLORS.gray, marginBottom: 4 }}>Ingredient Name</div>
          <div style={{ border: "1px solid #EDE6FA", borderRadius: 6, padding: "6px 10px", fontSize: 11.5 }}>Bun (Piece)</div>
        </div>
        <div style={{ width: 60 }}>
          <div style={{ fontSize: 11, color: COLORS.gray, marginBottom: 4 }}>Qty</div>
          <div style={{ border: "1px solid #EDE6FA", borderRadius: 6, padding: "6px 10px", fontSize: 11.5 }}>50</div>
        </div>
      </div>
      <div style={{ background: "#E91E8C", color: "#fff", textAlign: "center", borderRadius: 16, padding: "8px 0", fontSize: 12, fontWeight: 700 }}>
        Save
      </div>
    </div>
  );
}

function BranchDevicesMock() {
  return (
    <div style={{ border: "1px solid #EDE6FA", borderRadius: 8, overflow: "hidden", fontSize: 11 }}>
      <div style={{ background: "#F8F6FD", padding: "8px 10px", fontWeight: 700, color: COLORS.ink }}>Branch Devices</div>
      {[1, 2, 3].map((i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 10px", borderTop: "1px solid #F3EEFC" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22C55E", flexShrink: 0 }} />
          <div style={{ height: 6, flex: 1, background: "#EDE6FA", borderRadius: 4 }} />
        </div>
      ))}
    </div>
  );
}

function PosAutomateSection({ onBookDemo }) {
  return (
    <section style={{ padding: "20px 24px 90px", fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 1150, margin: "0 auto" }}>
        <h2 style={{ color: COLORS.purple, fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 800, marginBottom: 40 }}>
          Automate Your Restaurant Operations Under One Platform
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24, marginBottom: 24 }}>
          <div
            style={{
              background: "#fff",
              border: "1px solid #EDE6FA",
              borderRadius: 18,
              padding: 28,
              boxShadow: "0 6px 20px rgba(36,25,72,0.05)",
            }}
          >
            <h3 style={{ color: COLORS.purple, fontSize: 19, fontWeight: 800, marginBottom: 10 }}>Customer Engagement &amp; Growth</h3>
            <p style={{ color: COLORS.gray, fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>
              Reward your customers with exclusive discounts and vouchers using BlinkPOS. Foster lasting
              relationships and boost your bottom line with our engagement tools.
            </p>
            <CustomerTableMock />
          </div>

          <div style={{ background: COLORS.lavender, borderRadius: 18, padding: 28 }}>
            <h3 style={{ color: COLORS.purple, fontSize: 19, fontWeight: 800, marginBottom: 10 }}>Integration Partners Marketplace</h3>
            <p style={{ color: COLORS.ink, fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>
              Stop wasting time searching for compatible partners. BlinkPOS offers a curated marketplace with
              pre-integrated services like FoodPanda, Pandago, Savyour, and more.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))", gap: 14 }}>
              {POS_INTEGRATION_LOGOS.map((it) => (
                <div
                  key={it.name}
                  style={{
                    background: "#fff",
                    borderRadius: 12,
                    height: 74,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 12,
                  }}
                >
                  <img src={it.src} alt={it.name} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 24 }}>
          <div
            style={{
              background: "#fff",
              border: "1px solid #EDE6FA",
              borderRadius: 18,
              padding: 26,
              boxShadow: "0 6px 20px rgba(36,25,72,0.05)",
            }}
          >
            <h4 style={{ color: COLORS.purple, fontSize: 17, fontWeight: 800, marginBottom: 10 }}>Menu Management</h4>
            <p style={{ color: COLORS.gray, fontSize: 13.5, lineHeight: 1.6, marginBottom: 18 }}>
              BlinkPOS makes menu management easy. Quickly upload, update, and manage menus across multiple channels
              in bulk, saving you time and effort.
            </p>
            <div style={{ background: COLORS.purple, borderRadius: 12, padding: 16, color: "#fff" }}>
              <div style={{ fontWeight: 800, fontSize: 13.5, marginBottom: 10 }}>⊕ Menu Management ▾</div>
              <div style={{ fontSize: 12.5, lineHeight: 2, opacity: 0.9 }}>
                • Categories
                <br />
                • Items
                <br />
                • Variation
                <br />• Deals
              </div>
            </div>
          </div>

          <div
            style={{
              background: "#fff",
              border: "1px solid #EDE6FA",
              borderRadius: 18,
              padding: 26,
              boxShadow: "0 6px 20px rgba(36,25,72,0.05)",
            }}
          >
            <h4 style={{ color: COLORS.purple, fontSize: 17, fontWeight: 800, marginBottom: 10 }}>On-Hold/Open Order Module</h4>
            <p style={{ color: COLORS.gray, fontSize: 13.5, lineHeight: 1.6, marginBottom: 18 }}>
              Guests can effortlessly add items like appetizers, drinks, and desserts to their orders. Orders remain
              open until requested, providing an enhanced and personalized dining experience.
            </p>
            <OrderModuleMock />
          </div>

          <div style={{ background: COLORS.lavender, borderRadius: 18, padding: 26 }}>
            <h4 style={{ color: COLORS.purple, fontSize: 17, fontWeight: 800, marginBottom: 10 }}>Add Direct Inventory</h4>
            <p style={{ color: COLORS.ink, fontSize: 13.5, lineHeight: 1.6, marginBottom: 18 }}>
              Say goodbye to manual data entry. BlinkPOS allows you to directly add inventory items to your system,
              saving time and effort.
            </p>
            <AddInventoryMock />
          </div>

          <div
            style={{
              background: "#fff",
              border: "1px solid #EDE6FA",
              borderRadius: 18,
              padding: 26,
              boxShadow: "0 6px 20px rgba(36,25,72,0.05)",
            }}
          >
            <h4 style={{ color: COLORS.purple, fontSize: 17, fontWeight: 800, marginBottom: 10 }}>Branch Devices</h4>
            <p style={{ color: COLORS.gray, fontSize: 13.5, lineHeight: 1.6, marginBottom: 18 }}>
              Eliminate manual printing with BlinkPOS. Our system automatically prints kitchen orders (KOTs) by
              category and station, ensuring seamless workflow and improved efficiency across your branches.
            </p>
            <BranchDevicesMock />
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: 50 }}>
          <button onClick={onBookDemo} style={{ ...primaryBtn, padding: "16px 36px", fontSize: 16 }} className="blink-btn-anim">
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
}

function PosPage({ onBookDemo }) {
  return (
    <div>
      <PosHero onBookDemo={onBookDemo} />
      <Reveal>
        <PosPartnersStrip />
      </Reveal>
      {POS_FEATURES.map((f, i) => (
        <Reveal key={f.id} delay={(i % 2) * 80}>
          <PosFeatureRow f={f} />
        </Reveal>
      ))}
      <div style={{ textAlign: "center", padding: "10px 24px 60px" }}>
        <button onClick={onBookDemo} style={{ ...primaryBtn, padding: "16px 36px", fontSize: 16 }} className="blink-btn-anim">
          Book a Demo
        </button>
      </div>
      <Reveal>
        <PosWhySection />
      </Reveal>
      <Reveal>
        <PosAutomateSection onBookDemo={onBookDemo} />
      </Reveal>
    </div>
  );
}

/* ---------------- Online Ordering System product page ---------------- */

const ORDERING_PARTNER_LOGOS = [logoCakesBakes, logoCinnabon, logoDunkin, logoTanmiah, logoAlMeera, logoBaskin1].map((src) => ({
  type: "img",
  src,
}));

const ORDERING_INDUSTRIES = [
  {
    icon: "🍽️",
    title: "Restaurants",
    desc: "Blink's restaurant online ordering system is the perfect solution for delivery, takeaway, and in-store dining orders. Part ways with aggregators and prepare for greater profits.",
  },
  {
    icon: "🛒",
    title: "Supermarkets",
    desc: "Join the instant grocery delivery space with Blink. Manage your orders, inventory, and operations with our easy-to-use platform.",
  },
  {
    icon: "🏬",
    title: "Retail",
    desc: "We empower retail brands to pivot away from conventional online ordering solutions and enable them to direct ordering and quick deliveries.",
  },
  {
    icon: "🏢",
    title: "Enterprise",
    desc: "Scalable solution for managing high-volume orders and complex delivery logistics.",
  },
];

const ORDERING_TOP_CARDS = [
  {
    title: "Branded Website and Apps",
    desc: "Deliver a seamless experience that builds loyalty with Blink's branded website and mobile apps.",
    tone: "white",
  },
  {
    title: "Digital Ordering & Payment Experience",
    desc: "Reduce costs with Blink's efficient ordering system. Offer secure, faster transactions using your own or Blink's payment gateways for delivery, pick-up, and in-store orders, enhancing customer convenience.",
    tone: "lavender",
  },
];

const ORDERING_BOTTOM_CARDS = [
  {
    title: "Advanced Menu Management & Geo-Fencing",
    desc: "Simplify menu updates and ensure swift deliveries with Blink's geo-fencing technology. Get orders to the closest branch, keeping customers happy.",
    tone: "white",
  },
  {
    title: "Advanced Analytics",
    desc: "Take control of your customer data with Blink's easy-to-use analytics. Gain valuable insights through advanced BI reporting to make informed decisions and achieve improved business visibility.",
    tone: "white",
  },
  {
    title: "An Ecosystem of Integrations",
    desc: "Simplify operations and connect your business seamlessly with Blink's extensive ecosystem of integrations. From payment gateways and delivery providers to POS systems and POS middleware.",
    tone: "lavender",
  },
];

function OrderingHero({ onBookDemo }) {
  return (
    <section
      style={{
        background: `linear-gradient(180deg, ${COLORS.lavender} 0%, #fff 100%)`,
        padding: "70px 24px 50px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 1150,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: 50,
          alignItems: "center",
        }}
      >
        <div>
          <h1 style={{ color: COLORS.purple, fontSize: "clamp(30px, 4vw, 46px)", fontWeight: 800, lineHeight: 1.2, marginBottom: 20 }}>
            Branded Online Ordering for Restaurants, Supermarkets &amp; Retailers
          </h1>
          <p style={{ color: COLORS.gray, fontSize: 15.5, lineHeight: 1.7, marginBottom: 28, maxWidth: 480 }}>
            Take control of your online presence and customer data. Grow sales with low-cost, branded online
            ordering for restaurants, supermarkets, and retailers.
          </p>
          <button onClick={onBookDemo} style={primaryBtn} className="blink-btn-anim">
            Book a Demo
          </button>
        </div>
        <div>
          <img
            src={prodOrdering}
            alt="Blink online ordering across web, mobile and dashboard"
            style={{ width: "100%", display: "block", borderRadius: 12 }}
          />
        </div>
      </div>
    </section>
  );
}

function OrderingPartnersStrip() {
  return (
    <section style={{ padding: "10px 24px 60px", fontFamily: "system-ui, sans-serif" }}>
      <div
        style={{
          maxWidth: 1150,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 30,
          justifyContent: "space-between",
        }}
      >
        <h3 style={{ color: COLORS.purple, fontSize: 19, fontWeight: 800, lineHeight: 1.35, maxWidth: 230 }}>
          Trusted by Hundreds: Power Your Brand's Growth with Blink
        </h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 26, alignItems: "center" }}>
          {ORDERING_PARTNER_LOGOS.map((item, i) => (
            <LogoBadge key={i} item={item} size={52} />
          ))}
        </div>
      </div>
    </section>
  );
}

function OrderingIndustriesSection({ onBookDemo }) {
  return (
    <section style={{ padding: "20px 24px 80px", fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 1150, margin: "0 auto" }}>
        <h2 style={{ color: COLORS.purple, fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 800, marginBottom: 50, textAlign: "center" }}>
          Blink: The Online Ordering Solution for Every Industry
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 34 }}>
          {ORDERING_INDUSTRIES.map((c) => (
            <div key={c.title} style={{ textAlign: "center" }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  margin: "0 auto 16px",
                  borderRadius: "50%",
                  background: COLORS.lavender,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 26,
                }}
              >
                {c.icon}
              </div>
              <h4 style={{ color: COLORS.ink, fontSize: 17, fontWeight: 800, marginBottom: 10 }}>{c.title}</h4>
              <p style={{ color: COLORS.gray, fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>{c.desc}</p>
              <button onClick={onBookDemo} style={primaryBtn} className="blink-btn-anim">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OrderingFeaturesSection({ onBookDemo }) {
  return (
    <section style={{ padding: "20px 24px 90px", fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 1150, margin: "0 auto" }}>
        <h2 style={{ color: COLORS.purple, fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 800, marginBottom: 40 }}>
          Everything You Need for Successful Online Ordering
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24, marginBottom: 24 }}>
          {ORDERING_TOP_CARDS.map((c) => (
            <div
              key={c.title}
              style={{
                background: c.tone === "lavender" ? COLORS.lavender : "#fff",
                border: c.tone === "lavender" ? "none" : "1px solid #EDE6FA",
                borderRadius: 18,
                padding: 28,
                minHeight: 220,
                boxShadow: c.tone === "lavender" ? "none" : "0 6px 20px rgba(36,25,72,0.05)",
              }}
            >
              <h3 style={{ color: COLORS.purple, fontSize: 19, fontWeight: 800, marginBottom: 10 }}>{c.title}</h3>
              <p style={{ color: c.tone === "lavender" ? COLORS.ink : COLORS.gray, fontSize: 14, lineHeight: 1.6 }}>{c.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 24 }}>
          {ORDERING_BOTTOM_CARDS.map((c) => (
            <div
              key={c.title}
              style={{
                background: c.tone === "lavender" ? COLORS.lavender : "#fff",
                border: c.tone === "lavender" ? "none" : "1px solid #EDE6FA",
                borderRadius: 18,
                padding: 26,
                minHeight: 260,
                boxShadow: c.tone === "lavender" ? "none" : "0 6px 20px rgba(36,25,72,0.05)",
              }}
            >
              <h4 style={{ color: COLORS.purple, fontSize: 17, fontWeight: 800, marginBottom: 10 }}>{c.title}</h4>
              <p style={{ color: c.tone === "lavender" ? COLORS.ink : COLORS.gray, fontSize: 13.5, lineHeight: 1.6 }}>{c.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 50 }}>
          <button onClick={onBookDemo} style={{ ...primaryBtn, padding: "16px 36px", fontSize: 16 }} className="blink-btn-anim">
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
}

function OnlineOrderingPage({ onBookDemo }) {
  return (
    <div>
      <OrderingHero onBookDemo={onBookDemo} />
      <Reveal>
        <OrderingPartnersStrip />
      </Reveal>
      <Reveal>
        <OrderingIndustriesSection onBookDemo={onBookDemo} />
      </Reveal>
      <Reveal>
        <OrderingFeaturesSection onBookDemo={onBookDemo} />
      </Reveal>
    </div>
  );
}

/* ---------------- Shared product-page testimonial + advantage blocks ---------------- */

function ProductTestimonial({ quote, name, role }) {
  return (
    <section style={{ padding: "20px 24px 60px", fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", background: COLORS.lavender, borderRadius: 24, padding: "50px 24px" }}>
        <h2 style={{ color: COLORS.purple, fontSize: "clamp(22px, 2.6vw, 30px)", fontWeight: 800, marginBottom: 30, textAlign: "center" }}>
          Our Customers Say It Best: Why They Trust Blink
        </h2>
        <div style={{ maxWidth: 720, margin: "0 auto", background: "#fff", borderRadius: 16, padding: 30, boxShadow: "0 10px 30px rgba(36,25,72,0.08)" }}>
          <p style={{ color: COLORS.ink, fontSize: 14.5, lineHeight: 1.7, marginBottom: 20 }}>{quote}</p>
          <Stars />
          <div style={{ fontWeight: 800, color: COLORS.purple, fontSize: 14.5 }}>{name}</div>
          <div style={{ color: COLORS.gray, fontSize: 13 }}>{role}</div>
        </div>
      </div>
    </section>
  );
}

function ProductAdvantageSection({ heading }) {
  const cards = [
    {
      title: "Customer Support",
      desc: "Our dedicated team is available 7 days a week via call, WhatsApp, and live chat to answer your questions and ensure a smooth online ordering experience.",
    },
    {
      title: "Dedicated Account Managers",
      desc: "Maximize your online retail success with expert guidance and support. Our dedicated account managers will work closely with you to manage and grow your online and offline channels.",
    },
    {
      title: "Multilingual Capabilities",
      desc: "Blink caters to both English and Arabic speakers, allowing you to reach a broader audience and expand your online ordering customer base.",
    },
  ];
  return (
    <section style={{ padding: "20px 24px 90px", fontFamily: "system-ui, sans-serif", textAlign: "center" }}>
      <h2 style={{ color: COLORS.purple, fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 800, marginBottom: 50 }}>{heading}</h2>
      <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 40 }}>
        {cards.map((c) => (
          <div key={c.title}>
            <h4 style={{ color: COLORS.purple, fontSize: 16.5, fontWeight: 800, marginBottom: 10 }}>{c.title}</h4>
            <p style={{ color: COLORS.gray, fontSize: 14, lineHeight: 1.6, maxWidth: 280, margin: "0 auto" }}>{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProductPartnersStrip({ heading, logos }) {
  return (
    <section style={{ padding: "10px 24px 60px", fontFamily: "system-ui, sans-serif" }}>
      <div
        style={{
          maxWidth: 1150,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 30,
          justifyContent: "space-between",
        }}
      >
        <h3 style={{ color: COLORS.purple, fontSize: 19, fontWeight: 800, lineHeight: 1.35, maxWidth: 230 }}>{heading}</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 26, alignItems: "center" }}>
          {logos.map((item, i) => (
            <LogoBadge key={i} item={item} size={52} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Loyalty & Engagement product page ---------------- */

const LOYALTY_PARTNER_LOGOS = [logoDunkin, logoCinnabon, logoHeart, logoJalalSons, logoAlRifai].map((src) => ({
  type: "img",
  src,
}));

const LOYALTY_TOP_CARDS = [
  { title: "Promo Codes", desc: "Irresistible offers at your fingertips. Customize, manage, and boost sales with Blink's promo codes.", tone: "white" },
  { title: "Loyalty Points", desc: "Delight your customers with rewards. Earn loyalty points, boost sales, and strengthen your brand.", tone: "lavender" },
];

const LOYALTY_BOTTOM_CARDS = [
  { title: "E-wallet", desc: "Effortless payments, rewarded loyalty. Boost customer satisfaction with convenient e-wallets.", tone: "white" },
  {
    title: "Personalized Campaigns",
    desc: "Craft personalized push notifications, SMS and email marketing campaigns that keep your customers coming back for more.",
    tone: "white",
  },
  {
    title: "Automated Workflows",
    desc: "Blink's restaurant management system automates personalized customer interactions through targeted SMS, email, and push notifications. Triggered by sign-ups, orders, birthdays, or abandoned carts, workflows drive repeat business, recover lost sales, and enhance customer satisfaction.",
    tone: "lavender",
  },
  {
    title: "Discounts",
    desc: "Attract new diners and keep existing customers coming back for more with Blink's powerful discount engine! Our restaurant loyalty software empowers you to create a wide variety of targeted discounts tailored to your specific marketing goals.",
    tone: "white",
  },
];

function ProductFeatureCard({ c, minHeight }) {
  return (
    <div
      style={{
        background: c.tone === "lavender" ? COLORS.lavender : "#fff",
        border: c.tone === "lavender" ? "none" : "1px solid #EDE6FA",
        borderRadius: 18,
        padding: 26,
        minHeight,
        boxShadow: c.tone === "lavender" ? "none" : "0 6px 20px rgba(36,25,72,0.05)",
      }}
    >
      <h4 style={{ color: COLORS.purple, fontSize: 17, fontWeight: 800, marginBottom: 10 }}>{c.title}</h4>
      <p style={{ color: c.tone === "lavender" ? COLORS.ink : COLORS.gray, fontSize: 13.5, lineHeight: 1.6 }}>{c.desc}</p>
    </div>
  );
}

function LoyaltyHero({ onBookDemo }) {
  return (
    <section
      style={{
        background: `linear-gradient(180deg, ${COLORS.lavender} 0%, #fff 100%)`,
        padding: "70px 24px 50px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 1150,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: 50,
          alignItems: "center",
        }}
      >
        <div>
          <h1 style={{ color: COLORS.purple, fontSize: "clamp(30px, 4vw, 46px)", fontWeight: 800, lineHeight: 1.2, marginBottom: 20 }}>
            Restaurant Loyalty Software by Blink: Boost Repeat Business &amp; Drive Sales
          </h1>
          <p style={{ color: COLORS.gray, fontSize: 15.5, lineHeight: 1.7, marginBottom: 28, maxWidth: 480 }}>
            Build stronger customer relationships and fuel growth with Blink's powerful restaurant loyalty software.
            Attract new customers with engaging offers and keep existing customers coming back for more with loyalty
            points, targeted discounts, personalized promo codes, and automated marketing workflows based on
            customer behaviour.
          </p>
          <button onClick={onBookDemo} style={primaryBtn} className="blink-btn-anim">
            Book a Demo
          </button>
        </div>
        <div>
          <img
            src={prodLoyalty}
            alt="Blink loyalty program across web and mobile"
            style={{ width: "100%", display: "block", borderRadius: 12 }}
          />
        </div>
      </div>
    </section>
  );
}

function LoyaltyFeaturesSection({ onBookDemo }) {
  return (
    <section style={{ padding: "20px 24px 90px", fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 1150, margin: "0 auto" }}>
        <h2 style={{ color: COLORS.purple, fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 800, marginBottom: 16, textAlign: "center" }}>
          Turning Your Customers into Loyal Fans
        </h2>
        <p style={{ color: COLORS.gray, fontSize: 15, lineHeight: 1.7, textAlign: "center", maxWidth: 620, margin: "0 auto 46px" }}>
          Transform casual customers into loyal fans with Blink's engaging loyalty program.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24, marginBottom: 24 }}>
          {LOYALTY_TOP_CARDS.map((c) => (
            <ProductFeatureCard key={c.title} c={c} minHeight={180} />
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 24 }}>
          {LOYALTY_BOTTOM_CARDS.map((c) => (
            <ProductFeatureCard key={c.title} c={c} minHeight={220} />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 50 }}>
          <button onClick={onBookDemo} style={{ ...primaryBtn, padding: "16px 36px", fontSize: 16 }} className="blink-btn-anim">
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
}

function LoyaltyGrowthSection() {
  return (
    <section style={{ padding: "20px 24px 80px", fontFamily: "system-ui, sans-serif" }}>
      <div
        style={{
          maxWidth: 1150,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 56,
          alignItems: "center",
        }}
      >
        <div>
          <h2 style={{ color: COLORS.purple, fontSize: "clamp(24px, 2.8vw, 34px)", fontWeight: 800, marginBottom: 16, lineHeight: 1.25 }}>
            Grow Beyond One-Time Orders &amp; Build Loyalty with Blink
          </h2>
          <p style={{ color: COLORS.gray, fontSize: 15.5, lineHeight: 1.7, marginBottom: 26, borderTop: "1px solid #EDE6FA", paddingTop: 20 }}>
            Restaurants without loyalty lose repeat business. Blink's platform rewards customers, encourages return
            visits, and fuels growth.
          </p>
          <div style={{ fontSize: 40, fontWeight: 800, color: COLORS.purple }}>30%</div>
          <div style={{ fontSize: 14, color: COLORS.gray }}>More repeat customers</div>
        </div>
        <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 14px 40px rgba(36,25,72,0.16)" }}>
          <img
            src="https://images.unsplash.com/photo-1498654831517-895a5dfe4edc?w=900&q=80&auto=format&fit=crop"
            alt="Friends sharing a meal"
            style={{ width: "100%", height: 340, objectFit: "cover", display: "block" }}
          />
        </div>
      </div>
    </section>
  );
}

function LoyaltyPage({ onBookDemo }) {
  return (
    <div>
      <LoyaltyHero onBookDemo={onBookDemo} />
      <Reveal>
        <ProductPartnersStrip heading="Trusted by hundreds of brands across the region" logos={LOYALTY_PARTNER_LOGOS} />
      </Reveal>
      <Reveal>
        <LoyaltyFeaturesSection onBookDemo={onBookDemo} />
      </Reveal>
      <Reveal>
        <LoyaltyGrowthSection />
      </Reveal>
      <Reveal>
        <ProductTestimonial
          quote="Blink has helped us enhance our customer experience and reward regular customers with a loyalty program integrated in our app. Customers love the fact that they can earn loyalty points when placing an order and redeem them for future orders seamlessly through our app!"
          name="Asad Vayani"
          role="Owner, Adobo Mexican Grill"
        />
      </Reveal>
      <div style={{ textAlign: "center", padding: "0 24px 30px" }}>
        <button onClick={onBookDemo} style={{ ...primaryBtn, padding: "16px 36px", fontSize: 16 }} className="blink-btn-anim">
          Book a Demo
        </button>
      </div>
      <Reveal>
        <ProductAdvantageSection heading="The Blink Advantage" />
      </Reveal>
    </div>
  );
}

/* ---------------- Advanced Data & Analytics product page ---------------- */

const ANALYTICS_PARTNER_LOGOS = [logoAlRifai, logoHeart, logoBaskin1, logoCakesBakes, logoCinnabon].map((src) => ({
  type: "img",
  src,
}));

const ANALYTICS_TOP_CARDS = [
  {
    title: "Sales Analysis",
    desc: "Uncover sales trends, identify top-performing items and locations, and optimize pricing strategies with detailed breakdowns of order volume, revenue, and average order value by city, branch, and product category.",
    tone: "white",
    tag: "Sales Analysis",
    tagColor: "#2BC7E4",
  },
  {
    title: "User Retention",
    desc: "Measure customer loyalty and identify opportunities for improvement. Track repeat purchase rates, customer lifetime value, and churn to optimize retention strategies.",
    tone: "lavender",
    tag: "User Retention",
    tagColor: "#FF6B5B",
  },
];

const ANALYTICS_BOTTOM_CARDS = [
  {
    title: "Conversion Analysis",
    desc: "Understand your customer acquisition funnel and identify areas for improvement. Analyze sign-up rates, conversion rates, and customer behavior to optimize marketing efforts and enhance the user experience.",
    tone: "lavender",
  },
  {
    title: "Conjoined Analysis",
    desc: "Discover hidden sales potential. Analyze product popularity, identify complementary items, and optimize product recommendations to boost average order value.",
    tone: "white",
  },
  {
    title: "Product Analysis",
    desc: "Discover hidden opportunities to increase sales and profitability. Analyze product popularity, performance, and profitability to optimize your menu or product offerings.",
    tone: "lavender",
  },
  {
    title: "Operational Efficiency",
    desc: "Track key operational metrics across branches to enhance operational efficiency and customer satisfaction.",
    tone: "white",
  },
  {
    title: "Reviews",
    desc: "Gain valuable insights into customer sentiment and preferences. Track overall ratings, analyze reviews by branch and city, and identify areas for service improvement.",
    tone: "lavender",
  },
  {
    title: "Branch Performance",
    desc: "Compare sales, order volume, and customer satisfaction across different branches and cities.",
    tone: "white",
  },
];

function AnalyticsFeatureCard({ c }) {
  return (
    <div
      style={{
        position: "relative",
        background: c.tone === "lavender" ? COLORS.lavender : "#fff",
        border: c.tone === "lavender" ? "none" : "1px solid #EDE6FA",
        borderRadius: 18,
        padding: 28,
        minHeight: 200,
        boxShadow: c.tone === "lavender" ? "none" : "0 6px 20px rgba(36,25,72,0.05)",
      }}
    >
      <h3 style={{ color: COLORS.purple, fontSize: 19, fontWeight: 800, marginBottom: 10 }}>{c.title}</h3>
      <p style={{ color: c.tone === "lavender" ? COLORS.ink : COLORS.gray, fontSize: 14, lineHeight: 1.6 }}>{c.desc}</p>
      {c.tag && (
        <span
          style={{
            display: "inline-block",
            marginTop: 18,
            background: c.tagColor,
            color: "#fff",
            fontWeight: 700,
            fontSize: 12.5,
            padding: "6px 16px",
            borderRadius: 16,
          }}
        >
          {c.tag}
        </span>
      )}
    </div>
  );
}

function AnalyticsHero({ onBookDemo }) {
  return (
    <section
      style={{
        background: `linear-gradient(180deg, ${COLORS.lavender} 0%, #EFE7FB 100%)`,
        padding: "64px 24px 40px",
        textAlign: "center",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: "#fff",
          borderRadius: 30,
          padding: "10px 20px",
          fontWeight: 600,
          color: COLORS.purple,
          fontSize: 14.5,
          boxShadow: "0 6px 18px rgba(36,25,72,0.08)",
        }}
      >
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#3EC6E0", display: "inline-block" }} />
        All-in-one Restaurant Management System
      </div>

      <h1
        style={{
          fontSize: "clamp(32px, 4.6vw, 52px)",
          fontWeight: 800,
          color: COLORS.purple,
          maxWidth: 900,
          margin: "26px auto 0",
          lineHeight: 1.15,
        }}
      >
        Unlock Insights with Advanced Restaurant Data and Analytics
      </h1>

      <p style={{ maxWidth: 620, margin: "22px auto 0", color: "#392C5E", fontSize: 16.5, lineHeight: 1.6 }}>
        Blink's data analytics platform provides actionable insights to fuel your restaurant's success. Make
        informed decisions, optimize operations, and increase profitability.
      </p>

      <button onClick={onBookDemo} style={{ ...primaryBtn, marginTop: 30, padding: "16px 36px", fontSize: 16 }} className="blink-btn-anim">
        Get Started
      </button>

      <div style={{ maxWidth: 760, margin: "46px auto 0" }}>
        <img
          src={prodAnalytics}
          alt="Blink analytics dashboards"
          style={{ width: "100%", display: "block", borderRadius: 12 }}
        />
      </div>
    </section>
  );
}

function AnalyticsFeaturesSection({ onBookDemo }) {
  return (
    <section style={{ padding: "20px 24px 90px", fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 1150, margin: "0 auto" }}>
        <h2 style={{ color: COLORS.purple, fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 800, marginBottom: 16, textAlign: "center" }}>
          Unleash Your Restaurant's Potential with Advanced Analytics
        </h2>
        <p style={{ color: COLORS.gray, fontSize: 15, lineHeight: 1.7, textAlign: "center", maxWidth: 680, margin: "0 auto 46px" }}>
          Harness the power of your data with Blink's comprehensive restaurant analytics platform. Gain actionable
          insights, optimize operations, and drive growth.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24, marginBottom: 24 }}>
          {ANALYTICS_TOP_CARDS.map((c) => (
            <AnalyticsFeatureCard key={c.title} c={c} />
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {ANALYTICS_BOTTOM_CARDS.map((c) => (
            <AnalyticsFeatureCard key={c.title} c={c} />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 50 }}>
          <button onClick={onBookDemo} style={{ ...primaryBtn, padding: "16px 36px", fontSize: 16 }} className="blink-btn-anim">
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
}

function AnalyticsPage({ onBookDemo }) {
  return (
    <div>
      <AnalyticsHero onBookDemo={onBookDemo} />
      <Reveal>
        <ProductPartnersStrip heading="Trusted by Hundreds: Power Your Restaurant's Growth with Blink" logos={ANALYTICS_PARTNER_LOGOS} />
      </Reveal>
      <Reveal>
        <AnalyticsFeaturesSection onBookDemo={onBookDemo} />
      </Reveal>
      <Reveal>
        <ProductTestimonial
          quote="Blink BI tool has been essential for our success. It allows us to analyze monthly sales trends, optimizing marketing. By identifying correlated products, we create strategic Deals enhancing sales. City-wise purchase analysis helps us tailor our offerings to regional preferences, increasing customer satisfaction and loyalty. This data-driven approach has been pivotal in our growth and expansion."
          name="Affan Athar"
          role="Head of Digital Sales, OD"
        />
      </Reveal>
      <div style={{ textAlign: "center", padding: "0 24px 30px" }}>
        <button onClick={onBookDemo} style={{ ...primaryBtn, padding: "16px 36px", fontSize: 16 }} className="blink-btn-anim">
          Book a Demo
        </button>
      </div>
      <Reveal>
        <ProductAdvantageSection heading="Unlock Your Business Potential with Blink" />
      </Reveal>
    </div>
  );
}

/* ---------------- Our Integrations page ---------------- */

function IntegrationHeroMock() {
  const pills = [
    { label: "Logistics", top: "0%", left: "34%", bg: "#2BC7E4" },
    { label: "Marketing", top: "12%", left: "76%", bg: "#3F1E82" },
    { label: "Payments", top: "30%", left: "-8%", bg: "#E91E8C" },
    { label: "POS & Channel", top: "60%", left: "68%", bg: "#241948" },
    { label: "SMS", top: "76%", left: "10%", bg: "#7C3AED" },
  ];
  return (
    <div style={{ position: "relative", maxWidth: 420, margin: "40px auto 0" }}>
      <div
        style={{
          background: "#fff",
          border: `10px solid ${COLORS.ink}`,
          borderRadius: 10,
          padding: 16,
          boxShadow: "0 16px 40px rgba(36,25,72,0.2)",
        }}
      >
        <div style={{ height: 8, width: "50%", background: COLORS.lavender, borderRadius: 4, marginBottom: 12 }} />
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{ display: "flex", justifyContent: "space-between", padding: "9px 0", borderTop: i > 0 ? "1px solid #F3EEFC" : "none" }}
          >
            <div style={{ height: 6, width: "42%", background: "#EDE6FA", borderRadius: 4 }} />
            <div style={{ height: 8, width: 8, borderRadius: "50%", background: "#22C55E" }} />
          </div>
        ))}
      </div>
      <div style={{ height: 14, width: "60%", margin: "0 auto", background: COLORS.gray, opacity: 0.25, borderRadius: "0 0 8px 8px" }} />
      {pills.map((p) => (
        <span
          key={p.label}
          style={{
            position: "absolute",
            top: p.top,
            left: p.left,
            background: p.bg,
            color: "#fff",
            fontWeight: 700,
            fontSize: 12.5,
            padding: "8px 16px",
            borderRadius: 20,
            boxShadow: "0 8px 20px rgba(36,25,72,0.25)",
            whiteSpace: "nowrap",
          }}
        >
          {p.label}
        </span>
      ))}
    </div>
  );
}

function IntegrationsHero({ onBookDemo }) {
  return (
    <section style={{ background: "#fff", padding: "70px 24px 60px", fontFamily: "system-ui, sans-serif" }}>
      <div
        style={{
          maxWidth: 1150,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: 60,
          alignItems: "center",
        }}
      >
        <div>
          <h1 style={{ color: COLORS.purple, fontSize: "clamp(30px, 4vw, 46px)", fontWeight: 800, lineHeight: 1.2, marginBottom: 20 }}>
            Supercharge Your Restaurant with Seamless Integrations
          </h1>
          <p style={{ color: COLORS.gray, fontSize: 15.5, lineHeight: 1.7, marginBottom: 28, maxWidth: 480 }}>
            Blink's comprehensive integration platform connects the dots for your restaurant. From payments and
            logistics to POS and marketing, we offer a wide range of partnerships to optimize your operations and
            elevate your customer experience.
          </p>
          <button onClick={onBookDemo} style={primaryBtn} className="blink-btn-anim">
            Book a Demo
          </button>
        </div>
        <IntegrationHeroMock />
      </div>
    </section>
  );
}

const INTEGRATION_CATEGORIES = [
  {
    id: "payments",
    heading: "Flexible Payment Solutions for Your Restaurant",
    desc: "Accept a wide range of payments with Blink's seamless integration options. Choose from your preferred payment gateway or utilize our integrated solutions for secure and efficient transactions.",
    label: "Our Payment Partners",
    partners: [
      { name: "Paymob", color: "#5C2D91", icon: "💳" },
      { name: "HyperPay", color: "#0A2540", icon: "💳" },
      { name: "Tabby", color: "#0AAE6F", icon: "🛍️" },
      { name: "Google Pay", color: "#4285F4", icon: "🅖" },
    ],
  },
  {
    id: "logistics",
    heading: "Streamline Your Deliveries with Blink's Logistics Integrations",
    desc: "Effortlessly manage your delivery operations through seamless integration with top logistics providers. Send orders directly from your Blink console and optimize your delivery process.",
    label: "Our Logistics Partners",
    partners: [
      { name: "Aramex", color: "#E4032E", icon: "🚚" },
      { name: "Mrsool", color: "#2BC7E4", icon: "🛵" },
      { name: "Bykea", color: "#E0186C", icon: "🏍️" },
      { name: "Careem", color: "#3AC0A0", icon: "🚗" },
    ],
  },
  {
    id: "marketing",
    heading: "Amplify Your Reach with Integrated Marketing",
    desc: "Drive customer engagement and boost sales with Blink's powerful marketing integrations. Seamlessly execute campaigns across multiple channels for maximum impact.",
    label: "Our Marketing Partners",
    partners: [
      { src: intSendgrid, name: "SendGrid" },
      { name: "Facebook", color: "#1877F2", icon: "📘" },
      { name: "Adjust", color: "#28324E", icon: "📈" },
      { name: "Google Analytics", color: "#E37400", icon: "📊" },
    ],
  },
  {
    id: "sms",
    heading: "Boost Engagement with SMS Integrations",
    desc: "Reach your customers directly and effectively with SMS. Choose from a variety of SMS partners to send timely order updates, promotions, and personalized messages.",
    label: "Our SMS Partners",
    partners: [
      { name: "Twilio", color: "#F22F46", icon: "✉️" },
      { name: "Unifonic", color: "#6C2EB9", icon: "💬" },
      { name: "Infobip", color: "#FA5150", icon: "📡" },
    ],
  },
  {
    id: "pos-channel",
    heading: "Seamless POS and Channel Integrations for Your Business",
    desc: "Connect your POS and other systems effortlessly with Blink's integration platform. Streamline operations, improve order accuracy, and enhance overall efficiency.",
    label: "Our POS and Channel Partners",
    partners: [
      { src: intFoodics, name: "Foodics" },
      { name: "Deliveroo", color: "#00CCBC", icon: "🛵" },
      { name: "foodpanda", color: "#D70F64", icon: "🐼" },
      { name: "Shopify", color: "#95BF47", icon: "🛍️" },
    ],
  },
];

function IntegrationCategorySection({ cat }) {
  const items = cat.partners.map((p) =>
    p.src ? { type: "img", src: p.src } : { type: "text", name: p.name, color: p.color, icon: p.icon }
  );
  return (
    <section style={{ padding: "50px 24px", fontFamily: "system-ui, sans-serif", textAlign: "center" }}>
      <div style={{ maxWidth: 900, margin: "0 auto 36px" }}>
        <h2 style={{ color: COLORS.purple, fontSize: "clamp(22px, 2.8vw, 32px)", fontWeight: 800, marginBottom: 14, lineHeight: 1.3 }}>
          {cat.heading}
        </h2>
        <p style={{ color: COLORS.gray, fontSize: 15, lineHeight: 1.7 }}>{cat.desc}</p>
      </div>
      <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "left" }}>
        <div style={{ fontWeight: 800, color: COLORS.ink, fontSize: 14, marginBottom: 16 }}>{cat.label}</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center" }}>
          {items.map((item, i) => (
            <LogoBadge key={i} item={item} size={48} />
          ))}
        </div>
      </div>
    </section>
  );
}

function IntegrationsAdvantageSection({ onBookDemo }) {
  return (
    <section style={{ padding: "40px 24px 90px", fontFamily: "system-ui, sans-serif" }}>
      <div
        style={{
          maxWidth: 1150,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 56,
          alignItems: "center",
        }}
      >
        <div>
          <h2 style={{ color: COLORS.purple, fontSize: "clamp(24px, 2.8vw, 34px)", fontWeight: 800, marginBottom: 16, lineHeight: 1.25 }}>
            Integrate, Optimize, and Succeed with The Blink Advantage
          </h2>
          <p style={{ color: COLORS.gray, fontSize: 15.5, lineHeight: 1.7, marginBottom: 26 }}>
            Unlock your restaurant's full potential with Blink's seamless integrations. Connect with a wide range of
            partners for payments, logistics, marketing, and more to optimize operations and delight customers.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <button onClick={onBookDemo} style={primaryBtn} className="blink-btn-anim">
              Get Started
            </button>
            <button
              onClick={onBookDemo}
              style={{ ...primaryBtn, background: "#fff", color: COLORS.purple, border: `2px solid ${COLORS.purple}` }}
            >
              Contact Sales
            </button>
          </div>
        </div>
        <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 14px 40px rgba(36,25,72,0.16)" }}>
          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=900&q=80&auto=format&fit=crop"
            alt="Restaurant staff using Blink POS"
            style={{ width: "100%", height: 340, objectFit: "cover", display: "block" }}
          />
        </div>
      </div>
    </section>
  );
}

function IntegrationsTestimonialsSection() {
  return (
    <section style={{ padding: "20px 24px 60px", fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", background: COLORS.lavender, borderRadius: 24, padding: "50px 24px" }}>
        <h2 style={{ color: COLORS.purple, fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 800, marginBottom: 40, textAlign: "center" }}>
          Our Customers Say It Best: Why They Trust Blink.
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 30, marginBottom: 30 }}>
          {VIDEO_TESTIMONIALS.slice(0, 2).map((v) => (
            <VideoTestimonialCard key={v.youtubeId} v={v} />
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
          {TESTIMONIALS.map((t) => (
            <div key={t.name} style={{ background: "#fff", borderRadius: 14, padding: "28px 26px", boxShadow: "0 10px 30px rgba(36,25,72,0.07)" }}>
              <p style={{ fontSize: 14, color: "#2B2340", lineHeight: 1.6, marginBottom: 18 }}>{t.quote}</p>
              <Stars />
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    background: t.color,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: 15,
                    flexShrink: 0,
                  }}
                >
                  {t.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 14, color: COLORS.purple }}>{t.name}</div>
                  <div style={{ fontSize: 12.5, color: COLORS.gray }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IntegrationsPage({ onBookDemo }) {
  return (
    <div>
      <IntegrationsHero onBookDemo={onBookDemo} />
      {INTEGRATION_CATEGORIES.map((cat, i) => (
        <Reveal key={cat.id} delay={(i % 3) * 60}>
          <IntegrationCategorySection cat={cat} />
        </Reveal>
      ))}
      <Reveal>
        <IntegrationsAdvantageSection onBookDemo={onBookDemo} />
      </Reveal>
      <Reveal>
        <IntegrationsTestimonialsSection />
      </Reveal>
    </div>
  );
}

export default function App() {
  const [modal, setModal] = useState(null);
  const [page, setPage] = useState("home");
  const [pendingScroll, setPendingScroll] = useState(null);

  useEffect(() => {
    if (page === "home" && pendingScroll) {
      const id = pendingScroll;
      setPendingScroll(null);
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
    if (
      page === "about" ||
      page === "pricing" ||
      page === "academy" ||
      page === "customers" ||
      page === "pos" ||
      page === "ordering" ||
      page === "loyalty" ||
      page === "analytics" ||
      page === "integrations"
    ) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [page]);

  const scrollTo = (id) => {
    if (
      id === "about" ||
      id === "pricing" ||
      id === "academy" ||
      id === "customers" ||
      id === "pos" ||
      id === "ordering" ||
      id === "loyalty" ||
      id === "analytics" ||
      id === "integrations"
    ) {
      setPage(id);
      return;
    }
    if (id === "top") {
      setPage("home");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (page !== "home") {
      setPage("home");
      setPendingScroll(id);
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <GlobalAnimStyles />
      <NavBar onNavigate={scrollTo} onBookDemo={() => setModal("demo")} />

      {page === "home" ? (
        <>
          <Hero onGetStarted={() => scrollTo("products")} />
          <Reveal>
            <ConnectionsSection />
          </Reveal>
          <Reveal>
            <LogoMarquee
              id="customers"
              items={ALL_LOGOS}
              heading="Trusted by Hundreds: Power Your Restaurant's Growth with Blink"
              speed={34}
            />
          </Reveal>
          <Reveal>
            <ProductsSection
              onLearnMore={(p) => setModal({ product: p })}
              onOpenPos={() => scrollTo("pos")}
              onOpenOrdering={() => scrollTo("ordering")}
              onOpenLoyalty={() => scrollTo("loyalty")}
              onOpenAnalytics={() => scrollTo("analytics")}
            />
          </Reveal>
          <Reveal>
            <IntegrationsSection />
          </Reveal>
          <Reveal>
            <TestimonialsSection />
          </Reveal>
        </>
      ) : page === "pos" ? (
        <PosPage onBookDemo={() => setModal("demo")} />
      ) : page === "ordering" ? (
        <OnlineOrderingPage onBookDemo={() => setModal("demo")} />
      ) : page === "loyalty" ? (
        <LoyaltyPage onBookDemo={() => setModal("demo")} />
      ) : page === "analytics" ? (
        <AnalyticsPage onBookDemo={() => setModal("demo")} />
      ) : page === "integrations" ? (
        <IntegrationsPage onBookDemo={() => setModal("demo")} />
      ) : page === "pricing" ? (
        <Reveal as="section">
          <PricingSection onBookDemo={() => setModal("demo")} onViewFeatures={(tier) => setModal({ features: tier })} />
        </Reveal>
      ) : page === "academy" ? (
        <AcademySection onBookDemo={() => setModal("demo")} />
      ) : page === "customers" ? (
        <CustomersSection onBookDemo={() => setModal("demo")} />
      ) : (
        <Reveal as="section">
          <AboutSection />
        </Reveal>
      )}

      <Reveal>
        <StatsSection />
      </Reveal>
      <Reveal>
        <ContactSection />
      </Reveal>
      <Footer onBookDemo={() => setModal("demo")} />
      <ChatWidget />

      {modal === "demo" && (
        <Modal title="Book a Demo" onClose={() => setModal(null)}>
          <DemoForm />
        </Modal>
      )}

      {modal && modal.product && (
        <Modal title={modal.product.title} onClose={() => setModal(null)}>
          <img src={modal.product.img} alt={modal.product.title} style={{ width: "100%", height: 140, objectFit: "contain", marginBottom: 14 }} />
          <p style={{ fontSize: 14.5, color: COLORS.gray, lineHeight: 1.6, marginBottom: 20 }}>{modal.product.desc}</p>
          <button style={primaryBtn} onClick={() => setModal("demo")} className="blink-btn-anim">
            Book a Demo for this
          </button>
        </Modal>
      )}

      {modal && modal.features && (
        <Modal title={`${modal.features.title} — Full Feature List`} onClose={() => setModal(null)}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
            {modal.features.features.map((f) => (
              <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14.5, color: COLORS.ink }}>
                <CheckIcon color={COLORS.purple} />
                <span>{f}</span>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 22, fontWeight: 800, color: COLORS.purple, marginBottom: 16 }}>
            ${modal.features.price}
            <span style={{ fontSize: 13, fontWeight: 600, color: COLORS.gray }}>/branch /month</span>
          </div>
          <button style={primaryBtn} onClick={() => setModal("demo")} className="blink-btn-anim">
            Book a Demo for this plan
          </button>
        </Modal>
      )}
    </div>
  );
}
