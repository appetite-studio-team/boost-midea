import Image from 'next/image';

export default function HeroSection() {
  return (
    <section>
      <div className="noise-bg-red px-4 py-10 pt-32 lg:flex lg:pt-16">
        <h1 className="animate__animated animate__fadeInUp m-auto max-w-[400px] py-8">
          Sky-Rocket your <span className="font-light">Digital*</span> Presence
        </h1>
        <div className="flex justify-center">
          <div className="relative -mb-24 w-[800px] lg:-mb-32">
            <Image
              style={{ objectFit: 'contain' }}
              height={800}
              width={800}
              src="/assets/hero-image.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
