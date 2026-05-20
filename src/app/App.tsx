import { useState } from "react";
import { ArrowRight, Menu, X, Calendar, ChevronRight, ChevronLeft } from "lucide-react";
import logoFlamp from "@/imports/logo_FLAMP.JPG";
import nosotrosImg from "@/imports/fotos_evento_40_a_os_flamp.jfif";
import contactoImg from "@/imports/ChatGPT_Image_14_may_2026__05_56_37_p.m..png";
import congresosImg from "@/imports/home_flamp_2.JPG";
import innovacionImg from "@/imports/home_flamp_3.JPG";
import investigacionImg from "@/imports/home_flamp_5.JPG";
import maternoFetalImg from "@/imports/home_flamp_4.JPG";
import heroImg from "@/imports/ChatGPT_Image_14_may_2026__02_20_44_p.m..png";
import flampLogo from "@/imports/FLAMP_text_logo_in_turquoise_cyan_color__clean_sans-serif_font__modern_minimalist_design.jpg";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio", page: "home" },
  { label: "Nosotros", href: "#nosotros", page: "nosotros" },
  { label: "Áreas de Especialidad", href: "#areas", page: "home" },
  { label: "Investigación", href: "#investigacion", page: "investigacion" },
  { label: "Eventos", href: "#eventos", page: "eventos" },
  { label: "Noticias", href: "#noticias", page: "home" },
  { label: "Contacto", href: "#contacto", page: "contacto" },
];

const CARDS = [
  {
    title: "Congresos y Eventos",
    desc: "Organizamos y apoyamos congresos y simposios de alto nivel académico en toda Latinoamérica.",
    img: congresosImg,
    href: "#eventos",
    brightness: 1.5,
  },
  {
    title: "Innovación y Tecnología",
    desc: "Impulsamos el uso de IA y nuevas tecnologías aplicadas a la medicina materno fetal.",
    img: innovacionImg,
    brightness: 1.4,
    href: "#areas",
  },
  {
    title: "Salud Materno Fetal",
    desc: "Trabajamos por la prevención, diagnóstico temprano y tratamiento especializado para un embarazo saludable.",
    img: maternoFetalImg,
    brightness: 1.4,
    href: "#areas",
  },
  {
    title: "Investigación",
    desc: "Fomentamos la investigación científica y la colaboración entre instituciones y especialistas.",
    img: investigacionImg,
    brightness: 1.5,
    href: "#investigacion",
  },
];

const SPECIALTIES = [
  { label: "Gineco\nObstetricia", icon: <SpecialtyIcon type="gyneco" /> },
  { label: "Neonatología", icon: <SpecialtyIcon type="neo" /> },
  { label: "Medicina\nMaterno Fetal", icon: <SpecialtyIcon type="materno" /> },
  { label: "Cirugía\nFetal", icon: <SpecialtyIcon type="fetal" /> },
  { label: "Investigación", icon: <SpecialtyIcon type="research" /> },
  { label: "Nutrición", icon: <SpecialtyIcon type="nutrition" /> },
  { label: "IA y Nuevas\nTecnologías", icon: <SpecialtyIcon type="ai" /> },
  { label: "Epigenética", icon: <SpecialtyIcon type="epi" /> },
];

function SpecialtyIcon({ type }: { type: string }) {
  const cls = "w-10 h-10 text-[#0ea5c8]";
  switch (type) {
    case "gyneco":
      return (
        <svg className={cls} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="20" cy="14" r="7" />
          <path d="M20 21v12M16 28h8" />
        </svg>
      );
    case "neo":
      return (
        <svg className={cls} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
          <ellipse cx="20" cy="22" rx="8" ry="10" />
          <circle cx="20" cy="12" r="4" />
          <path d="M14 20c-3-1-5 1-4 4M26 20c3-1 5 1 4 4" />
        </svg>
      );
    case "materno":
      return (
        <svg className={cls} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
          <ellipse cx="20" cy="24" rx="9" ry="11" />
          <circle cx="20" cy="12" r="4" />
          <circle cx="20" cy="24" r="4" strokeDasharray="2 2" />
        </svg>
      );
    case "fetal":
      return (
        <svg className={cls} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 8c-6 0-10 4-10 10 0 8 10 16 10 16s10-8 10-16c0-6-4-10-10-10z" />
          <path d="M16 20l3 3 6-6" />
        </svg>
      );
    case "research":
      return (
        <svg className={cls} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="18" cy="18" r="9" />
          <path d="M25 25l7 7" />
          <path d="M18 13v5h5" />
        </svg>
      );
    case "nutrition":
      return (
        <svg className={cls} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 10c0 6 2 10 6 12s6 6 6 10" />
          <path d="M20 10v24" />
          <path d="M26 14c0 4-2 7-6 8" />
        </svg>
      );
    case "ai":
      return (
        <svg className={cls} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="10" y="12" width="20" height="16" rx="3" />
          <circle cx="16" cy="20" r="2" />
          <circle cx="24" cy="20" r="2" />
          <path d="M16 12V9M24 12V9M14 28v3M26 28v3" />
        </svg>
      );
    case "epi":
      return (
        <svg className={cls} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 8c-4 3-8 8-8 14h16c0-6-4-11-8-14z" />
          <path d="M14 28h12M16 32h8" />
          <path d="M17 16c1-2 3-3 3-3s2 1 3 3" />
        </svg>
      );
    default:
      return null;
  }
}

function MedicalTeamIllustration() {
  return (
    <svg viewBox="0 0 560 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" style={{ maxHeight: 420 }}>
      {/* Background room */}
      <rect width="560" height="420" fill="url(#roomGrad)" />
      {/* Back wall */}
      <rect x="0" y="0" width="560" height="240" fill="url(#wallGrad)" />
      {/* Floor */}
      <rect x="0" y="240" width="560" height="180" fill="#e8f4f8" />
      {/* Window */}
      <rect x="60" y="30" width="120" height="90" rx="6" fill="#b8dff0" opacity="0.6" />
      <rect x="60" y="30" width="120" height="90" rx="6" stroke="#a0cfe0" strokeWidth="2" />
      <line x1="120" y1="30" x2="120" y2="120" stroke="#a0cfe0" strokeWidth="1.5" />
      <line x1="60" y1="75" x2="180" y2="75" stroke="#a0cfe0" strokeWidth="1.5" />
      {/* Sunlight rays through window */}
      <polygon points="60,30 180,30 200,0 40,0" fill="#fffbe6" opacity="0.25" />
      {/* Screen on wall */}
      <rect x="330" y="20" width="200" height="130" rx="8" fill="#1a2f50" />
      <rect x="338" y="28" width="184" height="114" rx="4" fill="#0a1a35" />
      {/* Ultrasound on screen */}
      <ellipse cx="430" cy="85" rx="55" ry="42" fill="#0d3060" />
      <ellipse cx="430" cy="85" rx="38" ry="28" fill="#0a4a80" opacity="0.7" />
      <ellipse cx="422" cy="82" rx="16" ry="20" fill="#1a6aaa" opacity="0.5" />
      <path d="M415 70 Q422 60 430 68 Q438 60 445 70 Q450 82 430 96 Q410 82 415 70Z" fill="#2a9fd4" opacity="0.6" />
      <circle cx="430" cy="80" r="6" fill="#4fc3e8" opacity="0.8" />
      <text x="395" y="118" fill="#4fc3e8" fontSize="9" fontFamily="Inter,sans-serif" opacity="0.9">Eco fetal 32 sem</text>
      {/* Screen stand */}
      <rect x="418" y="150" width="24" height="14" rx="2" fill="#2a3f5f" />
      <rect x="408" y="162" width="44" height="6" rx="3" fill="#2a3f5f" />
      {/* Conference table */}
      <ellipse cx="280" cy="310" rx="220" ry="55" fill="#c8dce6" />
      <ellipse cx="280" cy="305" rx="220" ry="55" fill="#d8eaf2" />
      <ellipse cx="280" cy="303" rx="218" ry="53" fill="#e4f1f8" stroke="#b0ccda" strokeWidth="1.5" />
      {/* Table reflection */}
      <ellipse cx="280" cy="303" rx="180" ry="30" fill="white" opacity="0.15" />
      {/* Laptop on table */}
      <rect x="240" y="272" width="80" height="52" rx="4" fill="#c5d8e2" />
      <rect x="244" y="275" width="72" height="44" rx="3" fill="#1a3a5c" />
      <rect x="246" y="277" width="68" height="40" rx="2" fill="#0d2a45" />
      {/* Laptop screen content */}
      <rect x="250" y="281" width="40" height="5" rx="1" fill="#2a8fb5" opacity="0.7" />
      <rect x="250" y="289" width="55" height="3" rx="1" fill="#4ab0d0" opacity="0.5" />
      <rect x="250" y="295" width="48" height="3" rx="1" fill="#4ab0d0" opacity="0.4" />
      <rect x="250" y="301" width="52" height="3" rx="1" fill="#4ab0d0" opacity="0.3" />
      {/* Papers on table */}
      <rect x="160" y="285" width="55" height="38" rx="3" fill="white" transform="rotate(-8 160 285)" opacity="0.9" />
      <rect x="163" y="291" width="42" height="3" rx="1" fill="#b0c8d8" transform="rotate(-8 163 291)" />
      <rect x="163" y="297" width="35" height="3" rx="1" fill="#b0c8d8" transform="rotate(-8 163 297)" />
      <rect x="163" y="303" width="38" height="3" rx="1" fill="#b0c8d8" transform="rotate(-8 163 303)" />
      <rect x="365" y="280" width="48" height="34" rx="3" fill="white" transform="rotate(6 365 280)" opacity="0.85" />
      <rect x="368" y="286" width="36" height="3" rx="1" fill="#b0c8d8" transform="rotate(6 368 286)" />
      <rect x="368" y="292" width="30" height="3" rx="1" fill="#b0c8d8" transform="rotate(6 368 292)" />
      {/* Coffee cups */}
      <rect x="430" y="292" width="16" height="18" rx="3" fill="white" stroke="#c0d8e8" strokeWidth="1" />
      <path d="M446 298 Q454 298 454 304 Q454 310 446 310" stroke="#c0d8e8" strokeWidth="1.5" fill="none" />
      <ellipse cx="438" cy="293" rx="8" ry="3" fill="#e8c89a" />

      {/* ── PERSON 1 – left, female, dark hair ── */}
      {/* Body / white coat */}
      <path d="M52 420 L52 310 Q52 295 68 290 L108 280 Q124 276 124 290 L124 420Z" fill="white" />
      <path d="M68 290 L88 310 L108 290" stroke="#d0e4ec" strokeWidth="1.5" fill="none" />
      {/* Scrubs under coat */}
      <rect x="68" y="310" width="40" height="110" fill="#5ba8c4" />
      {/* Neck */}
      <rect x="80" y="268" width="16" height="22" rx="4" fill="#f0c8a0" />
      {/* Head */}
      <ellipse cx="88" cy="255" rx="22" ry="24" fill="#f0c8a0" />
      {/* Hair – dark bun */}
      <ellipse cx="88" cy="236" rx="22" ry="12" fill="#2a1a0a" />
      <ellipse cx="88" cy="232" rx="14" ry="9" fill="#3a2510" />
      <circle cx="104" cy="240" r="8" fill="#2a1a0a" />
      {/* Eyes */}
      <ellipse cx="80" cy="253" rx="3.5" ry="4" fill="white" />
      <ellipse cx="96" cy="253" rx="3.5" ry="4" fill="white" />
      <circle cx="80" cy="254" r="2.2" fill="#3a2010" />
      <circle cx="96" cy="254" r="2.2" fill="#3a2010" />
      <circle cx="81" cy="253" r="0.8" fill="white" />
      <circle cx="97" cy="253" r="0.8" fill="white" />
      {/* Smile */}
      <path d="M81 263 Q88 269 95 263" stroke="#c07050" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Cheeks */}
      <ellipse cx="76" cy="262" rx="5" ry="3" fill="#f4a0a0" opacity="0.4" />
      <ellipse cx="100" cy="262" rx="5" ry="3" fill="#f4a0a0" opacity="0.4" />
      {/* Stethoscope */}
      <path d="M80 288 Q72 300 70 312 Q68 320 76 322 Q84 324 84 316" stroke="#2a6a8a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="84" cy="316" r="5" fill="#2a6a8a" />
      {/* Coat lapels */}
      <path d="M68 290 Q76 295 88 310" stroke="#d0e0e8" strokeWidth="1" fill="none" />
      <path d="M108 290 Q100 295 88 310" stroke="#d0e0e8" strokeWidth="1" fill="none" />
      {/* Name badge */}
      <rect x="95" y="298" width="22" height="14" rx="2" fill="#e8f4fb" stroke="#aaccd8" strokeWidth="0.8" />
      <rect x="97" y="301" width="14" height="2" rx="1" fill="#5a9ab5" />
      <rect x="97" y="305" width="10" height="2" rx="1" fill="#8abccc" />

      {/* ── PERSON 2 – center-left, male, lighter skin ── */}
      <path d="M160 420 L160 305 Q160 288 178 283 L222 272 Q240 268 240 283 L240 420Z" fill="white" />
      <path d="M178 283 L200 305 L222 283" stroke="#d0e4ec" strokeWidth="1.5" fill="none" />
      <rect x="178" y="305" width="44" height="115" fill="#4a8fa8" />
      <rect x="190" y="262" width="18" height="24" rx="5" fill="#f8d8b8" />
      <ellipse cx="200" cy="248" rx="24" ry="26" fill="#f8d8b8" />
      {/* Hair – short brown */}
      <ellipse cx="200" cy="228" rx="24" ry="11" fill="#6a3a1a" />
      <ellipse cx="200" cy="226" rx="20" ry="8" fill="#7a4a28" />
      {/* Eyes */}
      <ellipse cx="191" cy="246" rx="4" ry="4.5" fill="white" />
      <ellipse cx="209" cy="246" rx="4" ry="4.5" fill="white" />
      <circle cx="191" cy="247" r="2.5" fill="#4a2808" />
      <circle cx="209" cy="247" r="2.5" fill="#4a2808" />
      <circle cx="192" cy="246" r="1" fill="white" />
      <circle cx="210" cy="246" r="1" fill="white" />
      {/* Big smile */}
      <path d="M190 258 Q200 267 210 258" stroke="#c07050" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M191 259 Q200 266 209 259" stroke="#e8a898" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      {/* Cheeks */}
      <ellipse cx="185" cy="257" rx="6" ry="3.5" fill="#f4a0a0" opacity="0.35" />
      <ellipse cx="215" cy="257" rx="6" ry="3.5" fill="#f4a0a0" opacity="0.35" />
      {/* Stethoscope */}
      <path d="M190 280 Q180 295 178 308 Q176 318 185 320 Q194 322 194 313" stroke="#2a6a8a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="194" cy="313" r="5.5" fill="#2a6a8a" />
      {/* Badge */}
      <rect x="208" y="292" width="24" height="15" rx="2" fill="#e8f4fb" stroke="#aaccd8" strokeWidth="0.8" />
      <rect x="210" y="295" width="16" height="2" rx="1" fill="#5a9ab5" />
      <rect x="210" y="299" width="12" height="2" rx="1" fill="#8abccc" />

      {/* ── PERSON 3 – center, female, curly hair, warm skin ── */}
      <path d="M260 420 L260 300 Q260 282 280 277 L326 265 Q346 260 346 277 L346 420Z" fill="white" />
      <path d="M280 277 L303 300 L326 277" stroke="#d0e4ec" strokeWidth="1.5" fill="none" />
      <rect x="280" y="300" width="46" height="120" fill="#3a7a96" />
      <rect x="292" y="255" width="20" height="26" rx="5" fill="#e8a870" />
      <ellipse cx="303" cy="241" rx="25" ry="27" fill="#e8a870" />
      {/* Curly hair */}
      <ellipse cx="303" cy="220" rx="28" ry="14" fill="#1a0a00" />
      <circle cx="282" cy="226" r="10" fill="#1a0a00" />
      <circle cx="324" cy="226" r="10" fill="#1a0a00" />
      <circle cx="290" cy="218" r="8" fill="#220e02" />
      <circle cx="316" cy="218" r="8" fill="#220e02" />
      <circle cx="303" cy="216" r="9" fill="#1a0a00" />
      {/* Eyes */}
      <ellipse cx="293" cy="239" rx="4" ry="4.5" fill="white" />
      <ellipse cx="313" cy="239" rx="4" ry="4.5" fill="white" />
      <circle cx="293" cy="240" r="2.5" fill="#2a1000" />
      <circle cx="313" cy="240" r="2.5" fill="#2a1000" />
      <circle cx="294" cy="239" r="1" fill="white" />
      <circle cx="314" cy="239" r="1" fill="white" />
      {/* Smile – wide grin */}
      <path d="M292 252 Q303 263 314 252" stroke="#b86040" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M293 253 Q303 262 313 253" stroke="#f0a898" strokeWidth="0.8" fill="none" />
      <ellipse cx="303" cy="256" rx="7" ry="3" fill="#f8c8b0" opacity="0.3" />
      {/* Cheeks */}
      <ellipse cx="285" cy="251" rx="6" ry="3.5" fill="#f09080" opacity="0.35" />
      <ellipse cx="321" cy="251" rx="6" ry="3.5" fill="#f09080" opacity="0.35" />
      {/* Stethoscope */}
      <path d="M292 274 Q282 288 280 302 Q278 312 288 315 Q298 318 298 308" stroke="#1a5a7a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="298" cy="308" r="6" fill="#1a5a7a" />
      {/* Badge */}
      <rect x="313" y="285" width="24" height="15" rx="2" fill="#e8f4fb" stroke="#aaccd8" strokeWidth="0.8" />
      <rect x="315" y="288" width="16" height="2" rx="1" fill="#5a9ab5" />
      <rect x="315" y="292" width="11" height="2" rx="1" fill="#8abccc" />

      {/* ── PERSON 4 – center-right, male, glasses ── */}
      <path d="M362 420 L362 308 Q362 290 382 285 L422 274 Q442 269 442 285 L442 420Z" fill="white" />
      <path d="M382 285 L402 308 L422 285" stroke="#d0e4ec" strokeWidth="1.5" fill="none" />
      <rect x="382" y="308" width="42" height="112" fill="#5b9ab0" />
      <rect x="392" y="264" width="18" height="24" rx="5" fill="#f0c8a0" />
      <ellipse cx="402" cy="250" rx="22" ry="24" fill="#f0c8a0" />
      {/* Hair – salt & pepper */}
      <ellipse cx="402" cy="232" rx="22" ry="10" fill="#5a5a5a" />
      <ellipse cx="402" cy="230" rx="17" ry="7" fill="#6a6a6a" />
      {/* Glasses */}
      <rect x="388" y="245" width="13" height="10" rx="3" fill="none" stroke="#3a3a3a" strokeWidth="1.5" />
      <rect x="405" y="245" width="13" height="10" rx="3" fill="none" stroke="#3a3a3a" strokeWidth="1.5" />
      <line x1="401" y1="249" x2="405" y2="249" stroke="#3a3a3a" strokeWidth="1.5" />
      <line x1="381" y1="249" x2="388" y2="249" stroke="#3a3a3a" strokeWidth="1.2" />
      <line x1="418" y1="249" x2="425" y2="249" stroke="#3a3a3a" strokeWidth="1.2" />
      {/* Eyes behind glasses */}
      <circle cx="394" cy="249" r="2" fill="#4a3010" />
      <circle cx="411" cy="249" r="2" fill="#4a3010" />
      <circle cx="395" cy="248" r="0.8" fill="white" />
      <circle cx="412" cy="248" r="0.8" fill="white" />
      {/* Smile */}
      <path d="M393 261 Q402 269 411 261" stroke="#c07050" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Cheeks */}
      <ellipse cx="387" cy="260" rx="5" ry="3" fill="#f4a080" opacity="0.3" />
      <ellipse cx="417" cy="260" rx="5" ry="3" fill="#f4a080" opacity="0.3" />
      {/* Stethoscope */}
      <path d="M391 282 Q382 296 380 310 Q378 320 388 322 Q398 324 398 314" stroke="#1a5a7a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="398" cy="314" r="5" fill="#1a5a7a" />
      {/* Badge */}
      <rect x="410" y="294" width="22" height="14" rx="2" fill="#e8f4fb" stroke="#aaccd8" strokeWidth="0.8" />
      <rect x="412" y="297" width="14" height="2" rx="1" fill="#5a9ab5" />
      <rect x="412" y="301" width="10" height="2" rx="1" fill="#8abccc" />

      {/* ── PERSON 5 – right, male, dark skin ── */}
      <path d="M458 420 L458 315 Q458 298 476 293 L510 284 Q528 279 528 294 L528 420Z" fill="white" />
      <path d="M476 293 L493 315 L510 293" stroke="#d0e4ec" strokeWidth="1.5" fill="none" />
      <rect x="476" y="315" width="36" height="105" fill="#4888a0" />
      <rect x="483" y="272" width="16" height="22" rx="4" fill="#7a4820" />
      <ellipse cx="492" cy="258" rx="20" ry="22" fill="#7a4820" />
      {/* Hair – short dark */}
      <ellipse cx="492" cy="241" rx="20" ry="9" fill="#180800" />
      <ellipse cx="492" cy="240" rx="16" ry="6" fill="#200e04" />
      {/* Eyes */}
      <ellipse cx="484" cy="256" rx="3.5" ry="4" fill="white" />
      <ellipse cx="500" cy="256" rx="3.5" ry="4" fill="white" />
      <circle cx="484" cy="257" r="2.2" fill="#1a0800" />
      <circle cx="500" cy="257" r="2.2" fill="#1a0800" />
      <circle cx="485" cy="256" r="0.8" fill="white" />
      <circle cx="501" cy="256" r="0.8" fill="white" />
      {/* Smile */}
      <path d="M483 267 Q492 275 501 267" stroke="#a05030" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Cheeks */}
      <ellipse cx="478" cy="266" rx="5" ry="3" fill="#c07858" opacity="0.3" />
      <ellipse cx="506" cy="266" rx="5" ry="3" fill="#c07858" opacity="0.3" />
      {/* Stethoscope */}
      <path d="M483 290 Q476 302 475 314 Q474 322 481 323 Q489 324 489 316" stroke="#1a5a7a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="489" cy="316" r="5" fill="#1a5a7a" />
      {/* Badge */}
      <rect x="498" y="302" width="22" height="13" rx="2" fill="#e8f4fb" stroke="#aaccd8" strokeWidth="0.8" />
      <rect x="500" y="305" width="14" height="2" rx="1" fill="#5a9ab5" />
      <rect x="500" y="309" width="10" height="2" rx="1" fill="#8abccc" />

      {/* Gradients */}
      <defs>
        <linearGradient id="roomGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d8eef6" />
          <stop offset="100%" stopColor="#eaf5fa" />
        </linearGradient>
        <linearGradient id="wallGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c8e4f0" />
          <stop offset="100%" stopColor="#daeef8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function NosotrosPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Top bar with back button */}
      <div className="bg-[#eaf6fb] border-b border-[#c8e8f4] py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#0ea5c8] font-semibold hover:text-[#0284a0] transition-colors text-sm"
          >
            <ChevronLeft size={16} />
            Volver al inicio
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Label */}
        <p className="text-sm font-bold text-[#0ea5c8] uppercase tracking-widest mb-3">Nosotros</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0f1f3d] leading-tight mb-10">
          Federación Latinoamericana de Asociaciones de Medicina Perinatal
        </h1>

        {/* Divider */}
        <div className="w-16 h-1 bg-[#0ea5c8] rounded mb-10" />

        {/* Paragraphs */}
        <div className="space-y-7 text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
          <p>
            La Federación Latinoamericana de Asociaciones de Medicina Perinatal (FLAMP) es una organización académica y científica fundada el <strong className="text-[#0f1f3d]">22 de agosto de 1982</strong>, con más de cuatro décadas de trayectoria promoviendo la excelencia médica, la investigación y la educación continua en Latinoamérica. Actualmente integra sociedades científicas, especialistas, investigadores, docentes y profesionales de múltiples países de la región, consolidándose como una de las redes académicas más importantes en medicina materno fetal y neonatal de América Latina.
          </p>
          <p>
            FLAMP desarrolla congresos internacionales, cursos, simposios, workshops, programas de actualización médica y proyectos de investigación enfocados en gineco obstetricia, neonatología, medicina materno fetal, cirugía fetal, nutrición, epigenética, inteligencia artificial y nuevas tecnologías aplicadas a la salud. Además, impulsa la colaboración científica entre universidades, hospitales, sociedades médicas y especialistas de toda la región.
          </p>
          <p>
            A lo largo de su historia, FLAMP ha promovido espacios académicos de alto nivel para fortalecer la formación de nuevas generaciones de profesionales de la salud, fomentando la innovación médica, el intercambio científico internacional y el desarrollo de iniciativas que contribuyan al bienestar materno, fetal y neonatal en América Latina.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-14">
          {[
            { value: "+40", label: "años de trayectoria" },
            { value: "1982", label: "año de fundación" },
            { value: "LATAM", label: "presencia regional" },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#eaf6fb] rounded-2xl p-6 text-center">
              <p className="text-3xl font-bold text-[#0ea5c8] mb-1">{stat.value}</p>
              <p className="text-sm text-[#0f1f3d] font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex gap-4">
          <button
            onClick={onBack}
            className="px-6 py-3 bg-[#0f1f3d] text-white font-semibold rounded-md hover:bg-[#1a3460] transition-colors text-sm"
          >
            Volver al inicio
          </button>
          <a href="mailto:flampcursos@gmail.com" className="px-6 py-3 border-2 border-[#0ea5c8] text-[#0ea5c8] font-semibold rounded-md hover:bg-[#eaf6fb] transition-colors text-sm">
            Únete a FLAMP
          </a>
        </div>
      </div>
    </div>
  );
}

const EVENTOS_LISTA = [
  {
    num: 1,
    titulo: "Simposium Tecnologías de Células Madre e IA Aplicada a Medicina Regenerativa",
    lugar: "Bogotá, Colombia",
    fecha: "Agosto 2026",
    desc: "Seminario internacional orientado a medicina regenerativa, terapias celulares, biotecnología e inteligencia artificial aplicada a investigación clínica y medicina materno fetal. Este encuentro reunirá expertos internacionales en innovación biomédica, nuevas terapias y tecnologías avanzadas para la salud.",
  },
  {
    num: 2,
    titulo: "Simposium Latinoamericano de Investigación Científica FLAMP",
    lugar: "Lima, Perú",
    fecha: "Octubre 2026",
    desc: "Evento académico especializado en investigación médica, bioestadística, publicaciones indexadas, metodología científica e inteligencia artificial aplicada al desarrollo de artículos científicos y proyectos multicéntricos latinoamericanos.",
  },
  {
    num: 3,
    titulo: "Congreso Internacional de IA y Medicina Materno Fetal",
    lugar: "Ciudad de Panamá, Panamá",
    fecha: "Enero 2027",
    desc: "Congreso internacional enfocado en inteligencia artificial aplicada al diagnóstico prenatal, ecografía avanzada, monitoreo fetal, análisis predictivo y tecnologías emergentes en obstetricia moderna y medicina fetal.",
  },
  {
    num: 4,
    titulo: "Lanzamiento Internacional del Libro \"IA y el Futuro de la Medicina Prenatal\"",
    lugar: "Guadalajara, México",
    fecha: "Marzo 2027",
    desc: "Presentación oficial de publicación científica internacional sobre inteligencia artificial aplicada a salud materno fetal, acompañada de networking académico, paneles médicos y espacios de innovación tecnológica.",
  },
  {
    num: 5,
    titulo: "Workshop Latinoamericano de Investigación Clínica y Publicaciones Médicas",
    lugar: "Santiago de Chile, Chile",
    fecha: "Abril 2027",
    desc: "Workshop intensivo dirigido a médicos, investigadores y docentes interesados en journals internacionales, metodología científica, análisis de datos clínicos y herramientas de IA aplicadas a investigación médica.",
  },
  {
    num: 6,
    titulo: "Simposium Internacional de Epigenética, IA y Cambio Climático en Salud",
    lugar: "São Paulo, Brasil",
    fecha: "Mayo 2027",
    desc: "Encuentro multidisciplinario enfocado en epigenética, bioinformática, medicina perinatal y análisis del impacto ambiental y climático sobre la salud fetal y neonatal desde una perspectiva científica global.",
  },
  {
    num: 7,
    titulo: "FLAMP Innovation Summit: Nuevas Tecnologías Médicas y Salud Digital",
    lugar: "Miami, Estados Unidos",
    fecha: "Julio 2027",
    desc: "Convención internacional orientada a salud digital, automatización hospitalaria, telemedicina, dispositivos médicos inteligentes y networking entre empresas tecnológicas, hospitales y líderes académicos.",
  },
  {
    num: 8,
    titulo: "Congreso Latinoamericano de Neonatología y Cuidados Intensivos",
    lugar: "Buenos Aires, Argentina",
    fecha: "Agosto 2027",
    desc: "Congreso regional sobre neonatología avanzada, innovación tecnológica, protocolos clínicos modernos y cuidados intensivos neonatales, con participación de especialistas internacionales y sociedades médicas de referencia.",
  },
  {
    num: 9,
    titulo: "Simposium de Cirugía Fetal y Robótica Médica",
    lugar: "Madrid, España",
    fecha: "Octubre 2027",
    desc: "Evento especializado en cirugía fetal mínimamente invasiva, simulación clínica, robótica médica e inteligencia artificial aplicada a procedimientos quirúrgicos avanzados en medicina fetal.",
  },
  {
    num: 10,
    titulo: "Foro Internacional FLAMP de Turismo Médico y Educación Científica",
    lugar: "Punta Cana, República Dominicana",
    fecha: "Noviembre 2027",
    desc: "Foro internacional orientado a fortalecer alianzas estratégicas entre hospitales, universidades, organizadores de congresos y empresas del sector turismo médico y académico, promoviendo cooperación científica y networking internacional.",
  },
];

const EVENTOS = [
  {
    num: 1,
    titulo: "Simposium Tecnologías de Células Madre e IA Aplicada a Medicina Regenerativa",
    tipo: "Seminario / Simposium Internacional",
    fecha: "20 de agosto de 2026",
    ciudad: "Bogotá, Colombia",
    sede: "Por definir",
    participantes: 450,
    descripcion: "Evento enfocado en innovación biomédica, medicina regenerativa, inteligencia artificial aplicada a investigación clínica y nuevas terapias celulares en medicina materno fetal y neonatal.",
    categoria: "proximo",
  },
  {
    num: 2,
    titulo: "Simposium Latinoamericano de Investigación Científica FLAMP",
    tipo: "Seminario Internacional",
    fecha: "22 de octubre de 2026",
    ciudad: "Lima, Perú",
    sede: "Por definir",
    participantes: 350,
    descripcion: "Encuentro académico orientado a investigación médica, redacción científica, publicaciones indexadas, bioestadística e inteligencia artificial aplicada al desarrollo de artículos científicos.",
    categoria: "proximo",
  },
  {
    num: 3,
    titulo: "Congreso Internacional de IA y Medicina Materno Fetal",
    tipo: "Congreso Internacional",
    fecha: "Enero 2027",
    ciudad: "Ciudad de Panamá, Panamá",
    sede: "",
    participantes: 700,
    descripcion: "Congreso enfocado en inteligencia artificial aplicada a diagnóstico prenatal, ecografía avanzada, monitoreo fetal y análisis predictivo en obstetricia moderna.",
    categoria: "propuesto",
  },
  {
    num: 4,
    titulo: "Lanzamiento Internacional del Libro \"IA y el Futuro de la Medicina Prenatal\"",
    tipo: "Lanzamiento de Producto / Libro Científico",
    fecha: "Marzo 2027",
    ciudad: "Guadalajara, México",
    sede: "",
    participantes: 280,
    descripcion: "Presentación oficial de publicación científica sobre aplicaciones de IA en salud materno fetal, incluyendo networking médico y paneles académicos.",
    categoria: "propuesto",
  },
  {
    num: 5,
    titulo: "Workshop Latinoamericano de Investigación Clínica y Publicaciones Médicas",
    tipo: "Workshop / Seminario",
    fecha: "Abril 2027",
    ciudad: "Santiago de Chile, Chile",
    sede: "",
    participantes: 320,
    descripcion: "Capacitación intensiva para médicos e investigadores sobre metodología científica, journals internacionales, herramientas IA y análisis de datos clínicos.",
    categoria: "propuesto",
  },
  {
    num: 6,
    titulo: "Simposium Internacional de Epigenética, IA y Cambio Climático en Salud",
    tipo: "Simposium Internacional",
    fecha: "Mayo 2027",
    ciudad: "São Paulo, Brasil",
    sede: "",
    participantes: 500,
    descripcion: "Evento multidisciplinario sobre epigenética, medicina perinatal, bioinformática e impacto ambiental y climático en la salud fetal y neonatal.",
    categoria: "propuesto",
  },
  {
    num: 7,
    titulo: "FLAMP Innovation Summit: Nuevas Tecnologías Médicas y Salud Digital",
    tipo: "Convención / Summit",
    fecha: "Julio 2027",
    ciudad: "Miami, Estados Unidos",
    sede: "",
    participantes: 650,
    descripcion: "Summit internacional sobre salud digital, telemedicina, automatización hospitalaria, dispositivos médicos inteligentes y networking con empresas tecnológicas.",
    categoria: "propuesto",
  },
  {
    num: 8,
    titulo: "Congreso Latinoamericano de Neonatología y Cuidados Intensivos",
    tipo: "Congreso Internacional",
    fecha: "Agosto 2027",
    ciudad: "Buenos Aires, Argentina",
    sede: "",
    participantes: 750,
    descripcion: "Congreso regional sobre neonatología avanzada, cuidados intensivos neonatales, innovación tecnológica y protocolos clínicos modernos.",
    categoria: "propuesto",
  },
  {
    num: 9,
    titulo: "Simposium de Cirugía Fetal y Robótica Médica",
    tipo: "Simposium Especializado",
    fecha: "Octubre 2027",
    ciudad: "Madrid, España",
    sede: "",
    participantes: 400,
    descripcion: "Evento académico sobre cirugía fetal mínimamente invasiva, robótica médica, simulación clínica y aplicaciones de IA en procedimientos quirúrgicos.",
    categoria: "propuesto",
  },
  {
    num: 10,
    titulo: "Foro Internacional FLAMP de Turismo Médico y Educación Científica",
    tipo: "Foro / Convención",
    fecha: "Noviembre 2027",
    ciudad: "Punta Cana, República Dominicana",
    sede: "",
    participantes: 500,
    descripcion: "Encuentro orientado a alianzas internacionales entre hospitales, universidades, organizadores de congresos y empresas del sector turismo médico y académico.",
    categoria: "propuesto",
  },
];

function ContactoPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Top bar */}
      <div className="bg-[#eaf6fb] border-b border-[#c8e8f4] py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#0ea5c8] font-semibold hover:text-[#0284a0] transition-colors text-sm"
          >
            <ChevronLeft size={16} />
            Volver al inicio
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Header */}
        <p className="text-sm font-bold text-[#0ea5c8] uppercase tracking-widest mb-3">Contacto</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0f1f3d] leading-tight mb-4">
          Contáctanos
        </h1>
        <div className="w-16 h-1 bg-[#0ea5c8] rounded mb-12" />

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left – contact info */}
          <div>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify mb-10">
              Si deseas obtener más información sobre nuestros eventos, programas académicos, membresías o proyectos de investigación, puedes ponerte en contacto con la Federación Latinoamericana de Asociaciones de Medicina Perinatal (FLAMP) a través de los siguientes medios. Nuestro equipo estará encantado de atender tu consulta y orientarte sobre cómo formar parte de nuestra red de especialistas en medicina materno fetal y neonatal en Latinoamérica.
            </p>

            {/* Contact card */}
            <div className="bg-[#f8fbfd] border border-[#d0eaf5] rounded-2xl p-8 space-y-7">

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#eaf6fb] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#0ea5c8]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0ea5c8] uppercase tracking-wider mb-1">Correo de contacto</p>
                  <a
                    href="mailto:flampcursos@gmail.com"
                    className="text-lg font-semibold text-[#0f1f3d] hover:text-[#0ea5c8] transition-colors"
                  >
                    flampcursos@gmail.com
                  </a>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-[#d0eaf5]" />

              {/* Contact person */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0f1f3d] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0ea5c8] uppercase tracking-wider mb-1">Contacto directo</p>
                  <p className="text-lg font-bold text-[#0f1f3d]">Dr. Fernando Avila</p>
                  <p className="text-sm text-gray-500 font-medium">Director de Proyectos Internacionales</p>
                  <p className="text-sm text-gray-500 mt-0.5" translate="no">.FLAMP.</p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-[#d0eaf5]" />

              {/* CTA button */}
              <a
                href="mailto:flampcursos@gmail.com"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#0ea5c8] text-white font-semibold rounded-xl hover:bg-[#0284a0] transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Enviar correo
              </a>
            </div>
          </div>

          {/* Right – doctor image */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl self-start">
            <img
              src={contactoImg}
              alt="Doctora atendiendo llamada"
              className="w-full h-auto object-cover block"
              style={{ objectPosition: "center 10%", filter: "brightness(1.05) contrast(1.04) saturate(1.05)" }}
            />
            {/* Subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f3d]/30 via-transparent to-transparent" />
          </div>
        </div>

        {/* Back button bottom */}
        <div className="mt-14">
          <button
            onClick={onBack}
            className="px-6 py-3 bg-[#0f1f3d] text-white font-semibold rounded-md hover:bg-[#1a3460] transition-colors text-sm"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    </div>
  );
}

function EventosPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Top bar */}
      <div className="bg-[#eaf6fb] border-b border-[#c8e8f4] py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <button onClick={onBack} className="flex items-center gap-2 text-[#0ea5c8] font-semibold hover:text-[#0284a0] transition-colors text-sm">
            <ChevronLeft size={16} /> Volver al inicio
          </button>
        </div>
      </div>

      {/* Hero image */}
      <div className="w-full overflow-hidden" style={{ maxHeight: 420 }}>
        <img
          src="https://images.unsplash.com/photo-1773828755374-0ee802d9f44b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzcGVha2VyJTIwc3RhZ2UlMjBhdWRpdG9yaXVtJTIwY29uZmVyZW5jZSUyMGZ1bGwlMjBjcm93ZCUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3Nzg3OTkzNTZ8MA&ixlib=rb-4.1.0&q=80&w=1920"
          alt="Speaker en congreso internacional"
          className="w-full object-cover object-center"
          style={{ maxHeight: 420, filter: "brightness(1.08) contrast(1.05)" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Header */}
        <p className="text-sm font-bold text-[#0ea5c8] uppercase tracking-widest mb-3">Agenda Internacional</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0f1f3d] leading-tight mb-6">
          Eventos Próximos FLAMP 2026–2027
        </h1>
        <div className="w-16 h-1 bg-[#0ea5c8] rounded mb-8" />

        {/* Intro paragraph */}
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify mb-14">
          La Federación Latinoamericana de Asociaciones de Medicina Perinatal (FLAMP) continúa fortaleciendo su liderazgo académico internacional mediante congresos, simposios, workshops y summits orientados a la innovación médica, investigación científica, inteligencia artificial y nuevas tecnologías aplicadas a la salud materno fetal y neonatal. Durante 2026 y 2027, FLAMP desarrollará una agenda internacional de eventos en Latinoamérica, Norteamérica y Europa, reuniendo especialistas, investigadores, universidades, hospitales, sociedades científicas y empresas tecnológicas de alto nivel.
        </p>

        {/* Events list */}
        <div className="space-y-0 divide-y divide-gray-100">
          {EVENTOS_LISTA.map((evento) => (
            <div key={evento.num} className="py-8 grid sm:grid-cols-[48px_1fr] gap-4 sm:gap-8">
              {/* Number bubble */}
              <div className="flex-shrink-0">
                <span className="w-10 h-10 rounded-full bg-[#0f1f3d] text-white font-bold text-sm flex items-center justify-center">
                  {evento.num}
                </span>
              </div>
              {/* Content */}
              <div>
                <h3 className="text-lg font-bold text-[#0f1f3d] leading-snug mb-2">{evento.titulo}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#0ea5c8]">📍</span>
                  <span className="text-sm font-semibold text-[#0ea5c8]">{evento.lugar} — {evento.fecha}</span>
                </div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify">{evento.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex gap-4">
          <button onClick={onBack} className="px-6 py-3 bg-[#0f1f3d] text-white font-semibold rounded-md hover:bg-[#1a3460] transition-colors text-sm">
            Volver al inicio
          </button>
          <a href="mailto:flampcursos@gmail.com" className="px-6 py-3 border-2 border-[#0ea5c8] text-[#0ea5c8] font-semibold rounded-md hover:bg-[#eaf6fb] transition-colors text-sm">
            Únete a FLAMP
          </a>
        </div>
      </div>
    </div>
  );
}

function InvestigacionPage({ onBack }: { onBack: () => void }) {
  const paragraphs = [
    "La investigación científica ha sido uno de los pilares fundamentales de la Federación Latinoamericana de Asociaciones de Medicina Perinatal (FLAMP) desde su fundación en 1982. A lo largo de más de cuatro décadas, FLAMP ha consolidado una extensa red de cooperación académica y científica con universidades, hospitales, centros de investigación y sociedades médicas de América Latina, Europa y Estados Unidos, promoviendo proyectos multicéntricos orientados a mejorar la salud materna, fetal y neonatal en la región.",
    "Entre las alianzas estratégicas internacionales de FLAMP destacan colaboraciones con instituciones como la Universidad Nacional Autónoma de México (UNAM), Florida International University (Estados Unidos), la Universidad de Granada (España), la Universidad de Sao Paulo (Brasil), la Universidad Central de Venezuela, el Instituto Nacional de Perinatología de México (INPer), la Pontificia Universidad Católica Madre y Maestra y la Universidad Autónoma de Santo Domingo en República Dominicana, además de múltiples hospitales universitarios y centros de medicina materno fetal en Latinoamérica y Europa.",
    "FLAMP también ha impulsado investigaciones multicéntricas y publicaciones científicas regionales en temas de perinatología, obstetricia, neonatología, genética, inmunología perinatal, epigenética, nutrición, medicina fetal e inteligencia artificial aplicada a la medicina. Sus estudios han involucrado especialistas de países como México, República Dominicana, Ecuador, Venezuela, Costa Rica, Panamá, Uruguay, Brasil, Argentina, Cuba, Guatemala, Chile, Perú, España, Estados Unidos y Reino Unido.",
    "A través de la Revista Latinoamericana de Perinatología —órgano oficial de FLAMP y de la World Association of Perinatal Medicine (WAPM)— la federación ha publicado numerosos artículos científicos, protocolos de investigación y guías clínicas internacionales indexadas en bases de datos académicas reconocidas. Además, FLAMP ha participado en la elaboración de guías latinoamericanas de referencia para el manejo obstétrico y perinatal en situaciones de alto impacto regional, incluyendo investigaciones colaborativas y documentos científicos desarrollados junto a FLASOG y otras entidades internacionales.",
    "Entre las publicaciones académicas destacadas promovidas por FLAMP se encuentra el libro \"Origen Fetal de las Enfermedades del Adulto\", una obra multidisciplinaria que reúne investigadores y especialistas de diversos países y universidades del mundo, consolidando el compromiso de la federación con la innovación científica, la formación médica y el avance de la medicina materno fetal en América Latina.",
  ];

  const instituciones = [
    "UNAM (México)", "Florida International University (EE.UU.)", "Universidad de Granada (España)",
    "Universidad de Sao Paulo (Brasil)", "Universidad Central de Venezuela", "INPer (México)",
    "PUCMM (Rep. Dominicana)", "UASD (Rep. Dominicana)",
  ];

  const paises = [
    "México", "Rep. Dominicana", "Ecuador", "Venezuela", "Costa Rica", "Panamá",
    "Uruguay", "Brasil", "Argentina", "Cuba", "Guatemala", "Chile", "Perú",
    "España", "Estados Unidos", "Reino Unido",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top bar */}
      <div className="bg-[#eaf6fb] border-b border-[#c8e8f4] py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#0ea5c8] font-semibold hover:text-[#0284a0] transition-colors text-sm"
          >
            <ChevronLeft size={16} />
            Volver al inicio
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Header */}
        <p className="text-sm font-bold text-[#0ea5c8] uppercase tracking-widest mb-3">Investigación</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0f1f3d] leading-tight mb-6">
          Red Científica y Proyectos de Investigación
        </h1>
        <div className="w-16 h-1 bg-[#0ea5c8] rounded mb-10" />

        {/* Main text */}
        <div className="space-y-7 text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
          {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>

        {/* Instituciones */}
        <div className="mt-14">
          <h2 className="text-xl font-bold text-[#0f1f3d] mb-6">Alianzas Institucionales</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {instituciones.map((inst) => (
              <div key={inst} className="flex items-start gap-3 bg-[#eaf6fb] rounded-xl px-4 py-3">
                <div className="w-2 h-2 rounded-full bg-[#0ea5c8] mt-2 flex-shrink-0" />
                <span className="text-sm text-[#0f1f3d] font-medium">{inst}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Países */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-[#0f1f3d] mb-6">Presencia Internacional</h2>
          <div className="flex flex-wrap gap-2">
            {paises.map((p) => (
              <span key={p} className="px-3 py-1.5 bg-[#0f1f3d] text-white text-xs font-semibold rounded-full">
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Publicación destacada */}
        <div className="mt-12 bg-gradient-to-r from-[#0f1f3d] to-[#1a3a6a] rounded-2xl p-8 text-white">
          <p className="text-xs font-bold uppercase tracking-widest text-[#4fc3e8] mb-2">Publicación Destacada</p>
          <h3 className="text-xl font-bold mb-3">"Origen Fetal de las Enfermedades del Adulto"</h3>
          <p className="text-white/80 text-sm leading-relaxed text-justify">
            Obra multidisciplinaria que reúne investigadores y especialistas de diversos países y universidades del mundo, consolidando el compromiso de FLAMP con la innovación científica y el avance de la medicina materno fetal en América Latina.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 flex gap-4">
          <button
            onClick={onBack}
            className="px-6 py-3 bg-[#0f1f3d] text-white font-semibold rounded-md hover:bg-[#1a3460] transition-colors text-sm"
          >
            Volver al inicio
          </button>
          <a href="mailto:flampcursos@gmail.com" className="px-6 py-3 border-2 border-[#0ea5c8] text-[#0ea5c8] font-semibold rounded-md hover:bg-[#eaf6fb] transition-colors text-sm">
            Únete a FLAMP
          </a>
        </div>
      </div>
    </div>
  );
}

function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [page, setPage] = useState<"home" | "nosotros" | "investigacion" | "eventos" | "contacto">("home");

  const navigate = (p: string) => {
    if (p !== "home") {
      setPage(p as "nosotros" | "investigacion" | "eventos" | "contacto");
      window.scrollTo(0, 0);
    }
  };

  if (page === "contacto") {
    return (
      <div className="min-h-screen font-['Inter',sans-serif] text-[#0f1f3d] bg-white">
        <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-3 cursor-pointer" onClick={() => setPage("home")}>
                <img src={logoFlamp} alt="FLAMP Logo" className="h-12 w-auto object-contain" />
                <div className="leading-tight">
                  <div className="text-[10px] font-semibold text-[#0f1f3d] uppercase tracking-wide">Federación</div>
                  <div className="text-[10px] font-semibold text-[#0f1f3d] uppercase tracking-wide">Latinoamericana de</div>
                  <div className="text-[10px] font-semibold text-[#0f1f3d] uppercase tracking-wide">Medicina Materno Fetal</div>
                </div>
              </div>
              <button onClick={() => setPage("home")} className="flex items-center gap-1 text-sm text-[#0f1f3d] font-medium hover:text-[#0ea5c8] transition-colors">
                <ChevronLeft size={16} /> Inicio
              </button>
            </div>
          </div>
        </header>
        <ContactoPage onBack={() => setPage("home")} />
      </div>
    );
  }

  if (page === "eventos") {
    return (
      <div className="min-h-screen font-['Inter',sans-serif] text-[#0f1f3d] bg-white">
        <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-3 cursor-pointer" onClick={() => setPage("home")}>
                <img src={logoFlamp} alt="FLAMP Logo" className="h-12 w-auto object-contain" />
                <div className="leading-tight">
                  <div className="text-[10px] font-semibold text-[#0f1f3d] uppercase tracking-wide">Federación</div>
                  <div className="text-[10px] font-semibold text-[#0f1f3d] uppercase tracking-wide">Latinoamericana de</div>
                  <div className="text-[10px] font-semibold text-[#0f1f3d] uppercase tracking-wide">Medicina Materno Fetal</div>
                </div>
              </div>
              <button onClick={() => setPage("home")} className="flex items-center gap-1 text-sm text-[#0f1f3d] font-medium hover:text-[#0ea5c8] transition-colors">
                <ChevronLeft size={16} /> Inicio
              </button>
            </div>
          </div>
        </header>
        <EventosPage onBack={() => setPage("home")} />
      </div>
    );
  }

  if (page === "investigacion") {
    return (
      <div className="min-h-screen font-['Inter',sans-serif] text-[#0f1f3d] bg-white">
        <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-3 cursor-pointer" onClick={() => setPage("home")}>
                <img src={logoFlamp} alt="FLAMP Logo" className="h-12 w-auto object-contain" />
                <div className="leading-tight">
                  <div className="text-[10px] font-semibold text-[#0f1f3d] uppercase tracking-wide">Federación</div>
                  <div className="text-[10px] font-semibold text-[#0f1f3d] uppercase tracking-wide">Latinoamericana de</div>
                  <div className="text-[10px] font-semibold text-[#0f1f3d] uppercase tracking-wide">Medicina Materno Fetal</div>
                </div>
              </div>
              <button onClick={() => setPage("home")} className="flex items-center gap-1 text-sm text-[#0f1f3d] font-medium hover:text-[#0ea5c8] transition-colors">
                <ChevronLeft size={16} /> Inicio
              </button>
            </div>
          </div>
        </header>
        <InvestigacionPage onBack={() => setPage("home")} />
      </div>
    );
  }

  if (page === "nosotros") {
    return (
      <div className="min-h-screen font-['Inter',sans-serif] text-[#0f1f3d] bg-white">
        <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-3 cursor-pointer" onClick={() => setPage("home")}>
                <img src={logoFlamp} alt="FLAMP Logo" className="h-12 w-auto object-contain" />
                <div className="leading-tight">
                  <div className="text-[10px] font-semibold text-[#0f1f3d] uppercase tracking-wide">Federación</div>
                  <div className="text-[10px] font-semibold text-[#0f1f3d] uppercase tracking-wide">Latinoamericana de</div>
                  <div className="text-[10px] font-semibold text-[#0f1f3d] uppercase tracking-wide">Medicina Materno Fetal</div>
                </div>
              </div>
              <button onClick={() => setPage("home")} className="flex items-center gap-1 text-sm text-[#0f1f3d] font-medium hover:text-[#0ea5c8] transition-colors">
                <ChevronLeft size={16} /> Inicio
              </button>
            </div>
          </div>
        </header>
        <NosotrosPage onBack={() => setPage("home")} />
      </div>
    );
  }

  return (
    <div className="min-h-screen font-['Inter',sans-serif] text-[#0f1f3d] bg-white">
      {/* ── NAVBAR ── */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("#inicio")}>
              <img
                src={logoFlamp}
                alt="FLAMP Logo"
                className="h-12 w-auto object-contain"
              />
              <div className="leading-tight">
                <div className="text-[10px] font-semibold text-[#0f1f3d] uppercase tracking-wide">Federación</div>
                <div className="text-[10px] font-semibold text-[#0f1f3d] uppercase tracking-wide">Latinoamericana de</div>
                <div className="text-[10px] font-semibold text-[#0f1f3d] uppercase tracking-wide">Medicina Materno Fetal</div>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    if (link.page !== "home") navigate(link.page);
                    else scrollTo(link.href);
                  }}
                  className="px-3 py-2 text-sm text-[#0f1f3d] hover:text-[#0ea5c8] transition-colors whitespace-nowrap font-medium"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="mailto:flampcursos@gmail.com"
                className="ml-2 px-5 py-2 bg-[#0f1f3d] text-white text-sm font-semibold rounded-md hover:bg-[#1a3460] transition-colors"
              >
                Afíliate
              </a>
            </nav>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 text-[#0f1f3d]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-3 px-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => {
                  if (link.page !== "home") navigate(link.page);
                  else scrollTo(link.href);
                  setMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-sm text-[#0f1f3d] hover:text-[#0ea5c8] font-medium"
              >
                {link.label}
              </button>
            ))}
            <a
              href="mailto:flampcursos@gmail.com"
              className="mt-2 block text-center w-full px-5 py-2 bg-[#0f1f3d] text-white text-sm font-semibold rounded-md"
            >
              Afíliate
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section id="inicio" className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch">
            {/* Left */}
            <div className="py-16 lg:py-20 pr-0 lg:pr-12">
              {/* FLAMP wordmark — image asset, non-translatable */}
              <img
                src={flampLogo}
                alt="FLAMP"
                className="mb-4 h-14 sm:h-16 w-auto object-contain"
                style={{ imageRendering: "auto" }}
              />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f1f3d] leading-tight mb-6">
                Unidos por la salud materno fetal
                <br />
                <span className="text-[#0f1f3d]">en Latinoamérica</span>
              </h1>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8 max-w-md text-justify">
                La Federación Latinoamericana de Medicina Materno Fetal promueve la excelencia médica, la investigación y la educación continua para mejorar la salud de madres y recién nacidos.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => scrollTo("#nosotros")}
                  className="flex items-center gap-2 px-6 py-3 bg-[#0f1f3d] text-white font-semibold rounded-md hover:bg-[#1a3460] transition-colors text-sm"
                >
                  Conoce más
                </button>
                <button
                  onClick={() => scrollTo("#eventos")}
                  className="flex items-center gap-2 px-6 py-3 border-2 border-[#0f1f3d] text-[#0f1f3d] font-semibold rounded-md hover:bg-gray-50 transition-colors text-sm"
                >
                  <Calendar size={16} />
                  Próximos eventos
                </button>
              </div>
            </div>

            {/* Right – photo */}
            <div className="hidden lg:block relative overflow-hidden" style={{ minHeight: 420 }}>
              <img
                src={heroImg}
                alt="Equipo médico en sala de juntas"
                className="absolute inset-0 w-full h-full object-cover object-center"
                style={{
                  filter: "brightness(1.08) contrast(1.05) saturate(1.02)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CARDS SECTION ── */}
      <section id="nosotros" className="bg-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CARDS.map((card) => (
              <div
                key={card.title}
                className="relative overflow-hidden rounded-xl group"
                style={{ minHeight: 260 }}
              >
                {/* Background image */}
                <img
                  src={card.img}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={card.brightness ? { filter: `brightness(${card.brightness})` } : undefined}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-5" style={{ minHeight: 260 }}>
                  <h3 className="text-white font-bold text-lg leading-snug mb-2">{card.title}</h3>
                  <p className="text-white/80 text-xs leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ESPECIALIDADES ── */}
      <section id="areas" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#0f1f3d] text-center mb-12">
            Nuestras Áreas de Especialidad
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
            {SPECIALTIES.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center gap-3 cursor-pointer group"
                onClick={() => scrollTo("#areas")}
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#e8f7fb] group-hover:bg-[#cdeef6] transition-colors">
                  {s.icon}
                </div>
                <span className="text-xs text-center text-[#0f1f3d] font-medium leading-snug whitespace-pre-line">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INVESTIGACION placeholder ── */}
      <section id="investigacion" className="py-1" />

      {/* ── EVENTOS placeholder ── */}
      <section id="eventos" className="py-1" />

      {/* ── NOTICIAS placeholder ── */}
      <section id="noticias" className="py-1" />

      {/* ── CONTACTO / FOOTER BANNER ── */}
      <section id="contacto" className="bg-[#0f1f3d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/90 text-sm text-center sm:text-left">
              Una red de profesionales comprometidos con la vida y la salud de las futuras generaciones.
            </p>
            <a href="mailto:flampcursos@gmail.com" className="flex items-center gap-2 px-6 py-2.5 border-2 border-[#0ea5c8] text-[#0ea5c8] font-semibold rounded-md hover:bg-[#0ea5c8] hover:text-white transition-colors text-sm whitespace-nowrap flex-shrink-0">
              Únete a FLAMP
              <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
