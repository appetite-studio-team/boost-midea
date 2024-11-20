import Image from 'next/image';
import ContactSection from '../_components/ContactSection';
import TestimonialSection from '../_components/TestimonialsSection';
import TeamMember from './_components/TeamMember';

export default function About() {
  return (
    <>
      <section className="noise-bg-red">
        <div className="m-auto max-w-7xl px-4 py-20 pt-32">
          <h1 className="animate__animated animate__fadeInUp m-auto max-w-[400px] py-8 text-center">
            About us
          </h1>
          <div className="m-auto mt-6 max-w-3xl space-y-8 rounded-2xl bg-white p-8">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center rounded-full bg-blue-700 p-4 hover:bg-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  className="h-6 w-6 fill-white"
                >
                  <path d="M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z" />
                </svg>
              </div>
              <div>
                <h3>boost</h3>
                <p className="text-gray-700">/bu:st/</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="italic text-gray-700">verb</p>
              <ol className="ml-8 list-decimal">
                <li>
                  <p>help or encourage (something) to increase or improve.</p>
                  <p className="text-gray-700">&quot;a range of measures to boost content&quot;</p>
                </li>
              </ol>
              <p className="italic text-gray-700">noun</p>
              <ol className="ml-8 list-decimal">
                <li>
                  <p>a source of help or encouragement leading to increase or improvement.</p>
                  <p className="text-gray-700">
                    &quot;the cut in interest rates will give a further boost to the economy&quot;
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div className="mt-8 text-center">
            <h3 className="text-3xl font-bold">
              That&apos;s we do <br />
              Simple and Precise
            </h3>
          </div>
        </div>
      </section>
      <section className="relative bg-neutral-900 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-20 md:grid-cols-2 lg:gap-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 400"
            className="pointer-events-none absolute inset-0 z-0 w-screen"
          >
            {/* Rocket with colorful gradient */}
            <defs>
              <linearGradient id="rocketGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="50%" stopColor="#4ECDC4" />
                <stop offset="100%" stopColor="#FFA726" />
              </linearGradient>
            </defs>

            {/* Wavy lines in background */}
            <path
              d="M-50 0 Q100 100, 250 75 T550 100"
              fill="none"
              stroke="url(#rocketGradient)"
              strokeWidth="3"
              strokeOpacity="0.3"
            />
            <path
              d="M-50 50 Q100 0, 250 75 T550 0"
              fill="none"
              stroke="url(#rocketGradient)"
              strokeWidth="3"
              strokeOpacity="0.1"
            />
          </svg>
          <div className="relative h-fit w-fit rounded bg-white bg-opacity-10 p-4 shadow-lg backdrop-blur-lg md:ml-auto">
            <Image
              className="relative w-full rounded bg-white object-cover md:p-8"
              src="/assets/boost-midea-logo-full.png"
              alt="Team"
              width={500}
              height={300}
            />
          </div>
          <div className="relative z-10 m-auto max-w-lg space-y-4 py-8 drop-shadow-lg">
            <h3>Breathing life into your ideas</h3>
            <p className="font-light">
              Boostup Media is a leading social media content creation agency based in Dubai,
              specializing in creating impactful and results-driven social media strategies. We help
              businesses grow their online presence, engage with their audience, and drive
              measurable results through creative content and data-driven campaigns.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-neutral-950 py-16 text-white">
        <h3 className="text-center">The team</h3>
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-8 gap-y-12 px-4 pt-12 lg:gap-x-12">
          <TeamMember name="Ajmal Ahsan" title="Founder & CEO" image="/assets/ajmal.jpg" />
          <TeamMember
            name="Matharsha"
            title="Graphic Designer"
            image="/assets/team/matharsha.png"
          />
          <TeamMember name="Hanna" title="Operations Manager" image="/assets/team/hanna.png" />
          <TeamMember name="Samad" title="Website Designer" image="/assets/team/samad.jpg" />
          <TeamMember name="Ameen" title="Developer" image="/assets/team/ameen.jpg" />
          <TeamMember name="Arun" title="Meta ads specialist" image="/assets/team/arun.png" />
        </div>
      </section>
      <TestimonialSection />
      <ContactSection />
    </>
  );
}
