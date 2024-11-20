import Image from 'next/image';
import ContactSection from '../_components/ContactSection';
import ContactCard from './_components/ContactCard';

const IconPhone = () => (
  <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const IconEmail = () => (
  <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const IconWhatsApp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700" viewBox="0 0 448 512">
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
);

export default function Contact(): JSX.Element {
  const phone = '+971 547 878 677';
  const email = 'info@boostmidea.com';

  return (
    <>
      <section className="noise-bg-red">
        <div className="m-auto max-w-7xl px-4 py-10 pt-32">
          <h1 className="animate__animated animate__fadeInUp m-auto max-w-[400px] py-8 text-center">
            Contact us
          </h1>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex items-center justify-center">
              <Image
                src="/assets/business-card.svg"
                alt="business card illustration"
                className="h-full w-full object-cover"
                height={500}
                width={500}
                priority
              />
            </div>
            <div className="mx-auto flex w-full max-w-[400px] flex-col justify-center space-y-4">
              <ContactCard
                icon={<IconWhatsApp />}
                title="WhatsApp"
                value={phone}
                href={`https://wa.me/${phone}`}
                action="Contact Us"
                buttonColor="bg-green-700"
              />
              <ContactCard
                icon={<IconPhone />}
                title="Call us directly"
                value={phone}
                href={`tel:${phone}`}
                action="Contact Us"
              />
              <ContactCard
                icon={<IconEmail />}
                title="or Email us"
                value={email}
                href={`mailto:${email}`}
                action="Contact Us"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-neutral-900">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold text-white sm:text-3xl">Keep in touch!</h1>
          </div>

          <form name="contact" data-netlify="true" className="mx-auto mb-0 mt-8 max-w-xs space-y-4">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-white">Your name</span>
              </div>
              <input
                required
                type="text"
                name="name"
                placeholder="Your name"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-white">Your phone number</span>
              </div>
              <input
                required
                type="tel"
                name="phone"
                placeholder="Your phone number"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <div className="py-4">
              <button type="submit" className="btn btn-primary w-full">
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
