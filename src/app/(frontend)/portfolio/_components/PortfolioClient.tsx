'use client';

import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Category, Media } from '@/payload-types';

const POSTS_PER_PAGE = 12;

interface Project {
  id: string;
  title: string;
  heroImage?: string | Media | null | undefined;
  videoLink?: string | null | undefined;
  externalLink?: string | null | undefined;
  categories: (string | Category)[] | null | undefined;
}

interface PortfolioClientProps {
  allProjects: Project[];
  categories: string[];
}

const hasCategory = (project: Project, categoryToFind: string) => {
  console.log(categoryToFind);
  if (!project.categories) {
    return false;
  }
  return (
    project.categories.find((category) => {
      if (typeof category === 'object') {
        return category.title === categoryToFind;
      }
      return category === categoryToFind;
    }) !== undefined
  );
};

export default function PortfolioClient({ allProjects, categories }: PortfolioClientProps) {
  const [projects, setProjects] = useState(allProjects);
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleProjectsCount, setvisibleProjectsCount] = useState(POSTS_PER_PAGE);

  const handleCategoryChange = async (category: string) => {
    setActiveCategory(category);
    const filteredProjects =
      category === 'All'
        ? allProjects
        : allProjects.filter((project) => hasCategory(project, category));
    setvisibleProjectsCount(POSTS_PER_PAGE);
    setProjects(filteredProjects);
  };

  const handleLoadMore = async () => {
    setvisibleProjectsCount(visibleProjectsCount + POSTS_PER_PAGE);
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
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="mt-16 grid min-h-[400px] grid-cols-2 gap-x-2 gap-y-8 md:grid-cols-3 md:gap-x-8 lg:grid-cols-4">
        {projects.length > 0 ? (
          projects.slice(0, visibleProjectsCount).map((project, i) => (
            <div key={i} className="m-auto">
              <ProjectCard
                videoLink={project.videoLink}
                image={
                  project.heroImage
                    ? typeof project.heroImage === 'object'
                      ? project.heroImage.url || ''
                      : project.heroImage
                    : ''
                }
                title={project.title}
                category={activeCategory}
                externalLink={project.externalLink}
              />
            </div>
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
      {projects.length > visibleProjectsCount && (
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
