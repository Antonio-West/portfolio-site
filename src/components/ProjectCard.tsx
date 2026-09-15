import React from "react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  slug: string;
  category?: string;
  description?: string;
  metrics?: string;
  tags?: string[];
  liveDemoUrl?: string;
}

const ProjectCard = ({
  title,
  slug,
  category,
  description,
  metrics,
  tags = [],
  liveDemoUrl,
}: ProjectCardProps) => {
  return (
    <div className="bg-gray-900/90 border border-gray-800 rounded-xl p-6 shadow-xl hover:border-gray-700 transition-all flex flex-col justify-between h-full group">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          {category && (
            <span className="text-xs sm:text-sm font-mono font-semibold text-gray-300 whitespace-nowrap">
              {category}
            </span>
          )}
          {metrics && (
            <span className="text-xs sm:text-sm font-mono font-medium text-emerald-400 whitespace-nowrap">
              {metrics}
            </span>
          )}
        </div>

        <Link href={`/projects/${slug}`}>
          <h2 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors mb-2">
            {title}
          </h2>
        </Link>

        {description && (
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
            {description}
          </p>
        )}
      </div>

      <div>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono bg-gray-800/90 border border-gray-700 text-gray-300 px-2.5 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-gray-800/80 text-sm">
          <Link
            href={`/projects/${slug}`}
            className="text-sm font-mono font-medium text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1.5 group/cta"
          >
            <span>View Case Study</span>
            <span className="group-hover/cta:translate-x-1 transition-transform">&rarr;</span>
          </Link>
          {liveDemoUrl && (
            <a
              href={liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-mono text-gray-200 hover:text-white px-3 py-1.5 rounded bg-gray-800 hover:bg-gray-700 border border-gray-700 transition-colors inline-flex items-center gap-1"
            >
              Live Demo &#x2197;
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
  