// page.tsx
import PortfolioClient from './_components/PortfolioClient';
import ContactSection from '../_components/ContactSection';

export default async function Portfolio() {
  return (
    <>
      <section className="noise-bg-red">
        <div className="m-auto max-w-7xl px-4 py-16 pt-32">
          <h1 className="animate__animated animate__fadeInUp py-8 text-center">Our Portfolio</h1>

          <PortfolioClient initialProjects={[]} />

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
