// page.tsx
import PortfolioClient from './_components/PortfolioClient';
import ContactSection from '../_components/ContactSection';

interface Project {
  id: string;
  image: string | undefined;
  title: string;
  description: string | undefined;
  category: string;
  collection: string;
}

// Function to capitalize first letter of each word
const formatCategory = (category: string) => {
  return category
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

async function getData(): Promise<Project[]> {
  // Fetch from all collections
  const collections = ['apps', 'posters', 'vfx-videos', 'videos', 'websites'];
  const allProjects = await Promise.all(
    collections.map(async (collection) => {
      const docs = await getDocuments(collection, [
        'title',
        'description',
        'slug',
        'coverImage',
        'status',
      ]);
      return docs
        .filter((doc) => doc.status === 'published')
        .map((doc) => ({
          id: doc.slug,
          image: doc.coverImage,
          title: doc.title,
          description: doc.description,
          category: formatCategory(collection),
          collection: collection,
        }));
    }),
  );
  return allProjects.flat();
}

export default async function Portfolio() {
  const projects = await getData();

  return (
    <>
      <section className="noise-bg-red">
        <div className="m-auto max-w-7xl px-4 py-16 pt-32">
          <h1 className="animate__animated animate__fadeInUp py-8 text-center">Our Portfolio</h1>

          <PortfolioClient initialProjects={projects} />

          {/* Portfolio Stats */}
          <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <h3 className="text-3xl font-bold">100+</h3>
              <p className="text-sm font-light">Projects Completed</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold">20+</h3>
              <p className="text-sm font-light">Happy Clients</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold">1m+</h3>
              <p className="text-sm font-light">Post Likes</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold">2m+</h3>
              <p className="text-sm font-light">Post Views</p>
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
