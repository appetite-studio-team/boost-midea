// app/portfolio/[collection]/[slug]/page.tsx
import { getDocumentBySlug } from 'outstatic/server';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import markdownToHtml from '@/lib/markdownToHtml';
import ContactSection from '@/app/(app)/_components/ContactSection';

interface ProjectParams {
  collection: string;
  slug: string;
}

interface Project {
  title: string;
  publishedAt: string;
  slug: string;
  content: string;
  coverImage: string;
  description: string;
  status: 'published' | 'draft';
}

async function getData(params: ProjectParams) {
  try {
    const project = getDocumentBySlug(params.collection, params.slug, [
      'title',
      'publishedAt',
      'slug',
      'content',
      'coverImage',
      'status',
    ]) as Project;

    // If project doesn't exist or isn't published, return 404
    if (!project || project.status !== 'published') {
      return null;
    }

    const content = await markdownToHtml(project.content || '');

    return {
      ...project,
      content,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default async function ProjectPage(props: { params: Promise<ProjectParams> }) {
  const params = await props.params;
  const project = await getData(params);

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="noise-bg-red">
        <div className="m-auto max-w-4xl px-4 py-16 pt-32">
          {/* Project Header */}
          <h1 className="py-8 text-center">{project.title}</h1>

          {/* Project Image */}
          {project.coverImage && project.coverImage !== "" && <div className="relative my-4 aspect-square w-full overflow-hidden rounded-lg">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover shadow-lg"
              priority
            />
          </div>}

          {/* Project Content */}
          <article
            className="prose prose-lg max-w-none rounded-lg bg-white px-4 py-8 shadow-lg prose-img:rounded-lg"
            dangerouslySetInnerHTML={{ __html: project.content }}
          />

          {/* Project Meta */}
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
    </>
  );
}
