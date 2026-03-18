// src/components/Hero.jsx

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/username",
    icon: <FaGithub size={18} />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/username",
    icon: <FaLinkedin size={18} />,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@username",
    icon: <FaYoutube size={18} />,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/username",
    icon: <FaInstagram size={18} />,
  },
];

export default function Hero() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const fadeUp = (delay = 0) => ({
    opacity: animate ? 1 : 0,
    transform: animate ? "translateY(0)" : "translateY(30px)",
    transition: `opacity 0.7s ease-out ${delay}ms, transform 0.7s ease-out ${delay}ms`,
  });

  const fadeLeft = (delay = 0) => ({
    opacity: animate ? 1 : 0,
    transform: animate ? "translateX(0)" : "translateX(-40px)",
    transition: `opacity 0.8s ease-out ${delay}ms, transform 0.8s ease-out ${delay}ms`,
  });

  const fadeRight = (delay = 0) => ({
    opacity: animate ? 1 : 0,
    transform: animate ? "translateX(0)" : "translateX(40px)",
    transition: `opacity 0.8s ease-out ${delay}ms, transform 0.8s ease-out ${delay}ms`,
  });

  return (
    <section
      id="beranda"
      className="
        relative min-h-screen flex items-center
        px-6 pt-24 pb-16 overflow-hidden
        bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100
        dark:from-amber-950 dark:via-orange-950 dark:to-amber-950
      "
    >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-amber-200/60 dark:bg-amber-900/20 blur-3xl -z-0 translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-orange-200/40 dark:bg-orange-900/10 blur-3xl -z-0 -translate-x-1/3 translate-y-1/4" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <div style={fadeUp(100)}>
              <span
                className="
                inline-flex items-center
                text-xs font-medium tracking-widest text-amber-600
                dark:text-amber-400 border border-amber-300
                dark:border-amber-700 rounded-full px-4 py-1.5 mb-6
              "
              >
                Selamat Datang
              </span>
            </div>

            <div style={fadeLeft(200)}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-amber-900 dark:text-amber-100">Hai 👋</span>
              </h1>
            </div>

            <div style={fadeLeft(350)}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                <span className="text-amber-600 dark:text-amber-400">
                  Salam Kenal
                </span>
              </h1>
            </div>

            <div style={fadeUp(500)}>
              <p
                className="
                text-amber-700 dark:text-amber-300 text-base
                leading-relaxed max-w-sm mx-auto md:mx-0 mb-8
              "
              >
                Saya membangun aplikasi web yang menarik dan saya memilki
                minat besar dalam pengembangan frontend dan selalu berusaha menciptakan 
                pengalaman pengguna yang nyaman dan modern.
              </p>
            </div>

            {/* FIX CTA */}
            <div
              className="flex flex-wrap gap-3 justify-center md:justify-start mb-10"
              style={fadeUp(650)}
            >
              <a
                href="#proyek"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#proyek")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="
                  px-6 py-2.5 bg-amber-600 hover:bg-amber-500
                  text-white text-sm font-medium rounded-full
                  transition-colors duration-200
                "
              >
                Lihat Projects
              </a>

              <a
                href="#kontak"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#kontak")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="
                  px-6 py-2.5 border border-amber-300 dark:border-amber-700
                  text-amber-700 dark:text-amber-300 text-sm font-medium
                  rounded-full hover:border-amber-500 hover:text-amber-600
                  dark:hover:border-amber-400 dark:hover:text-amber-400
                  transition-colors duration-200 bg-white/60 dark:bg-amber-900/40
                "
              >
                Hubungi Saya
              </a>
            </div>

            {/* FIX SOCIAL */}
            <div
              className="flex items-center gap-3 justify-center md:justify-start"
              style={fadeUp(800)}
            >
              {socialLinks.map((s, i) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    opacity: animate ? 1 : 0,
                    transform: animate ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 0.5s ease-out ${850 + i * 80}ms, transform 0.5s ease-out ${850 + i * 80}ms`,
                  }}
                  className="
                    w-10 h-10 flex items-center justify-center
                    rounded-full border border-amber-200 dark:border-amber-700
                    text-amber-600 dark:text-amber-400
                    hover:border-amber-500 hover:text-amber-600
                    dark:hover:border-amber-400 dark:hover:text-amber-400
                    bg-white/60 dark:bg-amber-900/40
                    transition-colors duration-200
                  "
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div
            className="flex-shrink-0 flex justify-center"
            style={fadeRight(300)}
          >
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              <div
                className="
                absolute inset-0 rounded-full
                border-4 border-amber-300 dark:border-amber-700
                scale-110
              "
              />

              <div
                className="
                absolute inset-0 rounded-full
                bg-amber-200 dark:bg-amber-900/40
              "
              />

              <img
                src="/images/foto-profil.jpg"
                alt="Foto Profil"
                className="
                  relative w-full h-full object-cover
                  rounded-full border-4
                  border-white dark:border-amber-950
                  shadow-xl
                "
                onError={(e) => {
                  e.target.src =
                    "https://placehold.co/400x400/fef3c7/b45309?text=Foto";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}