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
        <div className="flex items-center justify-between gap-2 mb-3">
          {category && (
            <span className="text-xs font-mono font-medium text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
              {category}
            </span>
          )}
          {metrics && (
            <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
              {metrics}
            </span>
          )}
        </div>

        <Link href={`/projects/${slug}`}>
          <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
            {title}
          </h2>
        </Link>

        {description && (
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
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
                className="text-xs font-mono bg-gray-800/80 text-gray-300 px-2 py-0.5 rounded border border-gray-700/50"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between pt-3 border-t border-gray-800/60 text-sm">
          <Link
            href={`/projects/${slug}`}
            className="text-blue-400 font-medium hover:text-blue-300 transition-colors inline-flex items-center gap-1"
          >
            View Case Study &rarr;
          </Link>
          {liveDemoUrl && (
            <a
              href={liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-gray-300 hover:text-white px-2.5 py-1 rounded bg-gray-800 hover:bg-gray-700 border border-gray-700 transition-colors"
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
  