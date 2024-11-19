import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  username: string;
  avatar: string;
  text: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Maria',
    username: 'Tiger Properties',
    avatar: '/assets/testimonials/maria.jpeg',
    text: 'I want to thank you about the video they all liked it and as well i won the first place 💪🏻 You are amazing and thank you for the efforts you put with me🤍',
    image: '/assets/testimonials/maria.jpeg',
  },
  {
    id: 2,
    name: 'Hayot',
    username: 'Wealtcraft Dubai',
    avatar: '/assets/testimonials/hayot.jpeg',
    text: 'Ajmal Bhai, working with you has been an absolute pleasure! 🎨🔥 Your creativity and dedication are truly on another level. You always manage to take my vision and turn it into something amazing, whether it’s through your captivating videos 📹 or those impactful messages 💬. The quality you bring is outstanding, and it’s clear your work connects with the audience every time 🌟. Honestly, you’re not just great at what you do but also a fantastic person to collaborate with 🤝. Keep up the awesome work, bro – anyone looking to elevate their content is lucky to have you on board! 🚀',
  },
  {
    id: 3,
    name: 'Sajith kumar',
    username: 'Beyond View business services',
    avatar: '/assets/testimonials/sajith.jpeg',
    text: "Hi Ajmal, I hope you're doing well. The last video you made was absolutely fantastic. I truly appreciate your support!",
  },
  {
    id: 4,
    name: 'Land department operations manager',
    username: 'Pendulum logistics',
    avatar: '/assets/testimonials/pendulum.jpeg',
    text: "Ajmal is a true master of his craft. His content creation and videography skills are second to none. He has a unique ability to turn ideas into captivating visuals. I've been extremely impressed with his attention to detail and his dedication to producing high-quality work. I'm grateful for the opportunity to work with him",
  },
  {
    id: 5,
    name: 'Abbas',
    username: 'Wealthcraft Dubai',
    avatar: '/assets/testimonials/abbas.jpeg',
    text: 'I am highly satisfied with the services provided by Boost Media. They delivered quality results in a timely manner and were extremely professional throughout the process. Their expertise and attention to detail have exceeded my expectations.',
  },
  {
    id: 6,
    name: 'Sherene James',
    username: 'Beyond View business services',
    avatar: 'https://via.placeholder.com/50',
    text: 'Hello Ajmal!! I just wanted to take a moment to thank you sincerely for your patience and support during my video shoot. Your interactive nature and the way you connected with everyone made us feel more enjoyable.I truly believe that with your positive attitude and hard work, you’re destined for great success. Wishing you all the best in your journey ahead, and I’m confident that you’ll reach amazing heights!',
  },
  {
    id: 7,
    name: 'Priya',
    username: 'Beyond View business services',
    avatar: '/assets/testimonials/priya.jpeg',
    text: "Your way of editing video has given me a positive vibe and because of that everybody has incredibly loved my videos. So I just need to say 'thank you' and all the best for the upcoming events.",
    image: '/assets/testimonials/priya.jpeg',
  },
];

const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-6 w-6 text-red-500 hover:fill-red-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.172 4.928a4.5 4.5 0 016.364 0L12 7.393l2.464-2.465a4.5 4.5 0 116.364 6.364L12 20.121l-8.828-8.829a4.5 4.5 0 010-6.364z"
    />
  </svg>
);

const CommentIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-6 w-6 text-gray-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.5 12h.008v.008H7.5V12zm4.5 0h.008v.008H12V12zm4.5 0h.008v.008H16.5V12zm1.5 8.25V19.5a2.25 2.25 0 002.25-2.25v-9A2.25 2.25 0 0018 6H6a2.25 2.25 0 00-2.25 2.25v9A2.25 2.25 0 006 19.5v.75L9.75 18h4.5l4.5 3.75z"
    />
  </svg>
);

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="mb-4 break-inside-avoid rounded-xl border bg-white p-3 shadow-md">
      <div className="mb-2.5 flex items-center justify-between">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-neutral-200">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name + ' avatar'}
              className="h-10 w-10 rounded-full object-cover"
              width={40}
              height={40}
            />
          </div>
          <div className="ml-2.5">
            <p className="text-sm font-medium">{testimonial.name}</p>
            <p className="text-xs text-gray-500">{testimonial.username}</p>
          </div>
        </div>
        <div className="cursor-pointer text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 12a.75.75 0 100 1.5.75.75 0 000-1.5zm5.25 0a.75.75 0 100 1.5.75.75 0 000-1.5zm5.25 0a.75.75 0 100 1.5.75.75 0 000-1.5z"
            />
          </svg>
        </div>
      </div>
      {testimonial.image && (
        <div className="mb-2.5 w-full">
          <Image
            src={testimonial.image}
            alt="testimonial"
            className="h-auto w-full"
            width={300}
            height={300}
          />
        </div>
      )}
      <div className={`flex gap-2 ${testimonial.image ? 'flex-col' : 'flex-col-reverse'}`}>
        <div className="flex items-center space-x-4">
          <HeartIcon />
          <CommentIcon />
        </div>
        <div className="text-sm">
          <span>{testimonial.text}</span>
        </div>
      </div>
    </div>
  );
};

const TestimonialSection: React.FC = () => {
  return (
    <section className="bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-center text-3xl font-bold">Our clients love us</h2>
        <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
