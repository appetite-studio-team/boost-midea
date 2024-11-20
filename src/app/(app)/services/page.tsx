import TestimonialSection from '../_components/TestimonialsSection';
import ContactSection from '../_components/ContactSection';
import Service from './_components/Service';
import ContentPricingSection from './_components/ContentPricingSection';
import PersonalBrandingPricingSection from './_components/PersonalBrandingPricingSection';

export default function Services() {
  return (
    <>
      <section className="noise-bg-red">
        <div className="m-auto max-w-7xl px-4 py-16 pt-32">
          <h1 className="animate__animated animate__fadeInUp m-auto max-w-[400px] py-8 text-center">
            Our Services
          </h1>
          <div className="space-y-8 pt-8">
            <Service
              title="Creative content creation"
              linkText="Start creating content"
              image="/assets/creative-content-creation.svg"
            >
              <p className="font-medium">Script, shoot, edit, post and go viral</p>
              <p className="mt-2">
                scripting the ideas
                <span className="px-2 text-gray-400">|</span>
                videograpghy
                <span className="px-2 text-gray-400">|</span>
                dedicated editing team
                <span className="px-2 text-gray-400">|</span>
                social media management
                <span className="px-2 text-gray-400">|</span>
                digital marketing
                <span className="px-2 text-gray-400">|</span>
                smma
              </p>
            </Service>
            <Service
              title="Poster and graphic design"
              linkText="Get designed by our experts"
              image="/assets/graphic-design.svg"
              align="end"
            >
              <p className="font-medium">Stand out with stunning visuals</p>
              <p className="mt-2">
                daily posters
                <span className="px-2 text-gray-400">|</span>
                creative posters
                <span className="px-2 text-gray-400">|</span>
                social media posts
                <span className="px-2 text-gray-400">|</span>
                brochures
                <span className="px-2 text-gray-400">|</span>
                business cards
                <span className="px-2 text-gray-400">|</span>
                logos
              </p>
            </Service>
            <Service
              title="Website and app development"
              linkText="Build your digital presence"
              image="/assets/website-and-app-development.svg"
            >
              <p className="font-medium">
                Let&apos;s build up your digital home with the latest tech
              </p>
              <p className="mt-2">
                custom websites
                <span className="px-2 text-gray-400">|</span>
                mobile apps
                <span className="px-2 text-gray-400">|</span>
                e-commerce solutions
                <span className="px-2 text-gray-400">|</span>
                web applications
                <span className="px-2 text-gray-400">|</span>
                UI/UX design
                <span className="px-2 text-gray-400">|</span>
                maintenance
              </p>
            </Service>
            <Service
              title="Branding"
              linkText="Elevate your brand"
              image="/assets/branding.svg"
              align="end"
            >
              <p className="font-medium">Your story, authentically told</p>
              <p className="mt-2">
                company branding
                <span className="px-2 text-gray-400">|</span>
                personal branding
                <span className="px-2 text-gray-400">|</span>
                brand strategy
                <span className="px-2 text-gray-400">|</span>
                visual identity
                <span className="px-2 text-gray-400">|</span>
                brand voice
                <span className="px-2 text-gray-400">|</span>
                positioning
              </p>
            </Service>
          </div>
        </div>
      </section>
      <ContentPricingSection />
      <PersonalBrandingPricingSection />
      <TestimonialSection />
      <ContactSection />
    </>
  );
}
