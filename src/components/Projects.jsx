// src/components/Projects.jsx

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    emoji: "⭐",
    thumbnailColor:
      "from-amber-100 via-orange-100 to-yellow-100 dark:from-amber-900/40 dark:via-orange-900/40 dark:to-yellow-900/40",
    title: "Motivation",
    description:
      "Platform yang berisi kumpulan motivasi dan inspirasi untuk pelajar dengan berbagai kategori.",
    tags: ["Pengembangan Diri", "Kesehatan Mental", "Inspirasi"],
    link: "https://youtube.com/@username",
  },
  {
    emoji: "🤓",
    thumbnailColor:
      "from-orange-100 via-amber-100 to-orange-100 dark:from-orange-900/40 dark:via-amber-900/40 dark:to-orange-900/40",
    title: "Tips",
    description:
      "Platform yang berisi kumpulan tips seputar dunia pendidikan, belajar, dan pengembangan diri.",
    tags: ["Trik Belajar", "Produktivitas", "Literasi Digital"],
    link: "https://youtube.com/@username",
  },
  {
    emoji: "🤔",
    thumbnailColor:
      "from-yellow-100 via-amber-100 to-orange-100 dark:from-yellow-900/40 dark:via-amber-900/40 dark:to-orange-900/40",
    title: "Tricks",
    description:
      "Platform yang berisi kumpulan trik untuk mempermudah proses belajar dan meningkatkan produktivitas.",
    tags: ["Sains Data", "Monitoring", "Statistik"],
    link: "https://youtube.com/@username",
  },
];

function ProjectCard({ project, animate, delay }) {
  return (
    <div
      className="
        bg-white dark:bg-amber-900
        border border-amber-200 dark:border-amber-700
        rounded-2xl shadow-sm overflow-hidden
        hover:shadow-lg transition-all duration-300
        flex flex-col
      "
      style={{
        opacity: animate ? 1 : 0,
        transform: animate ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease-out ${delay}ms, transform 0.7s ease-out ${delay}ms, box-shadow 0.3s ease`,
      }}
    >
      {/* Thumbnail */}
      <div
        className={`
          relative w-full h-48 flex items-center justify-center
          bg-gradient-to-br ${project.thumbnailColor}
          rounded-t-2xl
        `}
      >
        <span className="text-6xl drop-shadow-md select-none">
          {project.emoji}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        <h3 className="text-lg font-bold text-amber-900 dark:text-amber-100">
          {project.title}
        </h3>

        <p className="text-sm text-amber-700 dark:text-amber-300 leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="
                text-xs px-3 py-1 rounded-full
                border border-amber-200 dark:border-amber-600
                text-amber-600 dark:text-amber-300
                bg-amber-50 dark:bg-amber-800/50
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* FIX DI SINI */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-1 inline-flex items-center gap-2 self-start
            px-5 py-2.5 bg-amber-600 hover:bg-amber-500
            dark:bg-amber-600 dark:hover:bg-amber-500
            text-white text-sm font-medium rounded-full
            transition-colors duration-200
          "
        >
          <span className="text-xs">▶</span>
          Tonton
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
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

  return (
    <section
      id="proyek"
      ref={sectionRef}
      className="
        py-24 px-6
        bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100/40
        dark:from-amber-950 dark:via-amber-900 dark:to-orange-950/20
      "
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-amber-600 dark:text-amber-400 tracking-widest uppercase mb-2">
            Literasi
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-amber-900 dark:text-amber-100 mb-4">
            Proyek & Karya
          </h2>
          <div className="w-16 h-1 bg-amber-600 dark:bg-amber-400 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              animate={animate}
              delay={i * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
}