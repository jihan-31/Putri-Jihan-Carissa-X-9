// src/components/About.jsx

import { useEffect, useRef, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { PiBookOpenTextBold } from "react-icons/pi";
import { TbMedal, TbPencil, TbRocket } from "react-icons/tb";

const stats = [
  {
    icon: <PiBookOpenTextBold size={28} />,
    value: "100+",
    label: "Tugas Selesai",
  },
  { icon: <TbMedal size={28} />, value: "5+", label: "Juara Kelas" },
  { icon: <TbPencil size={28} />, value: "50+", label: "Tinta Pulpen" },
  { icon: <TbRocket size={28} />, value: "9+", label: "Pengalaman Belajar" },
];

export default function About() {
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const fadeUp = (delay = 0) => ({
    opacity: animate ? 1 : 0,
    transform: animate ? "translateY(0)" : "translateY(30px)",
    transition: `opacity 0.7s ease-out ${delay}ms, transform 0.7s ease-out ${delay}ms`,
  });

  const fadeLeft = (delay = 0) => ({
    opacity: animate ? 1 : 0,
    transform: animate ? "translateX(0)" : "translateX(-50px)",
    transition: `opacity 0.8s ease-out ${delay}ms, transform 0.8s ease-out ${delay}ms`,
  });

  const fadeRight = (delay = 0) => ({
    opacity: animate ? 1 : 0,
    transform: animate ? "translateX(0)" : "translateX(50px)",
    transition: `opacity 0.8s ease-out ${delay}ms, transform 0.8s ease-out ${delay}ms`,
  });

  return (
    <section
      id="tentang"
      ref={sectionRef}
      className="
        py-24 px-6
        bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100/40
        dark:from-amber-950 dark:via-amber-900 dark:to-orange-950/20
      "
    >
      <div className="max-w-6xl mx-auto">
        {/* ── Header ── */}
        <div className="text-center mb-14" style={fadeUp(100)}>
          <p className="text-sm font-semibold text-amber-600 dark:text-amber-400 tracking-widest uppercase mb-2">
            Tentang Saya
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-amber-900 dark:text-amber-100 mb-4">
            Mengenal Lebih Dekat
          </h2>
          <div className="w-16 h-1 bg-amber-600 dark:bg-amber-400 rounded-full mx-auto" />
        </div>

        {/* ── Konten Utama ── */}
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* ════════════════════════
               KIRI — Ilustrasi Card
          ════════════════════════ */}
          <div
            className="w-full md:w-[45%] flex-shrink-0"
            style={fadeLeft(250)}
          >
            <div
              className="
              relative rounded-2xl overflow-visible
              bg-amber-100 dark:bg-amber-900/30
              min-h-[420px] flex items-center justify-center
            "
            >
              <img
                src="/images/woman-waving-her-webcam-concept.png"
                alt="Ilustrasi"
                className="w-52 sm:w-64 object-contain drop-shadow-lg"
                onError={(e) => {
                  e.target.src =
                    "https://placehold.co/300x300/fef3c7/b45309?text=Ilustrasi";
                }}
              />

              {/* Badge pojok kanan bawah */}
              <div
                className="
                  absolute -bottom-4 right-6
                  bg-white dark:bg-amber-900
                  border border-amber-200 dark:border-amber-700
                  rounded-xl px-5 py-3 shadow-lg
                "
                style={fadeUp(600)}
              >
                <p className="text-xl font-bold text-amber-900 dark:text-amber-100 leading-tight">
                  9+ Tahun
                </p>
                <p className="text-xs text-amber-600 dark:text-amber-400">
                  Pengalaman Belajar
                </p>
              </div>
            </div>
          </div>

          {/* ════════════════════════
               KANAN — Deskripsi + Stats
          ════════════════════════ */}
          <div
            className="w-full md:flex-1 flex flex-col gap-4 md:mt-0 mt-8"
            style={fadeRight(300)}
          >
            {/* Accordion Deskripsi */}
            <div
              className="
              bg-white dark:bg-amber-900
              border border-amber-200 dark:border-amber-700
              rounded-2xl shadow-sm overflow-hidden
            "
            >
              <button
                onClick={() => setOpen(!open)}
                className="
                  w-full flex items-center justify-between
                  px-6 py-5 text-left
                  hover:bg-amber-50 dark:hover:bg-amber-800/50
                  transition-colors duration-200
                "
              >
                <span className="text-xl font-bold text-amber-900 dark:text-amber-100">
                  Deskripsi
                </span>
                <span className="text-amber-600 dark:text-amber-400">
                  {open ? (
                    <FiChevronUp size={22} />
                  ) : (
                    <FiChevronDown size={22} />
                  )}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="px-6 pb-6 flex flex-col gap-3">
                  <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">
                    Perkenalkan nama saya Putri Jihan Carissa, saya lahir di
                    Aceh Besar pada tanggal 31 juli 2010, saya sedang menempuh
                    jenjang pendidikan kelas 10 di Man 1 Banda Aceh, sekarang
                    ini saya tinggal di daerah blang bintang tepatnya di Kota
                    Aceh Besar.
                  </p>
                  <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">
                    saya adalah anak yang rajin belajar dan displin. saya selalu mengerjakan tugas 
                    sekolah tepat waktu dan tidak pernah menunda pekerjaan. Selain itu saya juga gemar 
                    membaca buku untuk menambah pengetahuan dan selalu berusaha meraih prestasi terbaik disekolah.
                  </p>
                </div>
              </div>
            </div>

            {/* Grid Stats 2x2 */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="
                    bg-white dark:bg-amber-900
                    border border-amber-200 dark:border-amber-700
                    rounded-2xl shadow-sm p-6
                    flex flex-col items-center justify-center gap-2
                    hover:shadow-md transition-shadow duration-200
                  "
                  style={{
                    opacity: animate ? 1 : 0,
                    transform: animate ? "translateY(0)" : "translateY(30px)",
                    transition: `opacity 0.6s ease-out ${450 + i * 100}ms, transform 0.6s ease-out ${450 + i * 100}ms`,
                  }}
                >
                  <span className="text-amber-600 dark:text-amber-400">
                    {stat.icon}
                  </span>
                  <p className="text-2xl font-bold text-amber-900 dark:text-amber-100">
                    {stat.value}
                  </p>
                  <p className="text-xs text-amber-600 dark:text-amber-400 text-center">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}