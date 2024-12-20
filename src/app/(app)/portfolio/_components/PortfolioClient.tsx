'use client';
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import Link from 'next/link';

interface Project {
  id: string;
  image: string | undefined;
  title: string;
  description: string | undefined;
  category: string;
  collection: string;
}

type Category = 'all' | 'Apps' | 'Posters' | 'VFX Videos' | 'Videos' | 'Websites';

interface PortfolioClientProps {
  initialProjects: Project[];
}

const PROJECTS_PER_PAGE = 9;

export default function PortfolioClient({ initialProjects }: PortfolioClientProps) {
  const [activeCategory, setActiveCategory] = useState<Category>('Videos');
  const [visibleProjects, setVisibleProjects] = useState(PROJECTS_PER_PAGE);

  const categories: Category[] = ['Videos', 'Posters', 'VFX Videos', 'Websites', 'Apps'];

  const filteredProjects =
    activeCategory === 'all'
      ? initialProjects
      : initialProjects.filter((project) => project.category === activeCategory);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);
  const hasMoreProjects = visibleProjects < filteredProjects.length;

  const handleLoadMore = () => {
    setVisibleProjects((prev) => prev + PROJECTS_PER_PAGE);
  };

  // Reset visible projects when category changes
  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    setVisibleProjects(PROJECTS_PER_PAGE);
  };

  return (
    <>
      {/* Category Tabs */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            className={`btn ${activeCategory === category ? 'btn-primary' : 'btn-neutral'}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category === 'all' ? 'All' : category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="mt-16 grid min-h-[400px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {displayedProjects.length > 0 ? (
          displayedProjects.map((project) => (
            <Link key={project.id} href={`/portfolio/${project.collection}/${project.id}`}>
              <div className="m-auto">
                <ProjectCard
                  image={project.image || ''}
                  title={project.title}
                  description={project.description || ''}
                  category={project.category}
                />
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center font-bold opacity-60">
            <svg
              className="mx-auto mb-2 h-12 w-12 opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
            </svg>
            No projects in this category
          </div>
        )}
      </div>

      {/* Load More Button */}
      {hasMoreProjects && (
        <div className="mt-12 flex justify-center">
          <button className="btn btn-ghost" onClick={handleLoadMore}>
            Show More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
