// app/portfolio/[collection]/[slug]/page.tsx
import { notFound } from 'next/navigation';
// import Image from 'next/image';
// import Link from 'next/link';
// import ContactSection from '@/app/(frontend)/_components/ContactSection';

interface ProjectParams {
  collection: string;
  slug: string;
}

async function getData(params: ProjectParams) {
  console.log(params);
  return null;
}

export default async function ProjectPage(props: { params: Promise<ProjectParams> }) {
  const params = await props.params;
  const project = await getData(params);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/*
      <section className="noise-bg-red">
        <div className="m-auto max-w-4xl px-4 py-16 pt-32">
          <h1 className="py-8 text-center">{project.title}</h1>

          {project.coverImage && project.coverImage !== '' && (
            <div className="relative my-4 aspect-square w-full overflow-hidden rounded-lg">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover shadow-lg"
                priority
              />
            </div>
          )}

          <article
            className="prose prose-lg max-w-none rounded-lg bg-white px-4 py-8 shadow-lg prose-img:rounded-lg"
            dangerouslySetInnerHTML={{ __html: project.content }}
          />

          <div className="mt-12">
            <div className="flex items-center justify-between">
              <p className="opacity-70">
                Published on{' '}
                {new Date(project.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <Link href="/portfolio" className="btn btn-primary">
                View More Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
      */}
    </>
  );
}
