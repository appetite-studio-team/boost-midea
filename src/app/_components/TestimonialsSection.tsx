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
    name: 'Karla Lynn',
    username: '@karlalynn98',
    avatar: 'https://via.placeholder.com/50',
    text: "I've been using @pagedone for a year now and it's made managing my finances so much easier. 🙌",
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 2,
    name: 'Annette Black',
    username: '@annetteblack35',
    avatar: 'https://via.placeholder.com/50',
    text: "@pagedone has helped me save money, reduce my debt, and invest in my future - it's the complete financial package.",
  },
  {
    id: 3,
    name: 'Ronald Richards',
    username: '@ronaldrichards47',
    avatar: 'https://via.placeholder.com/50',
    text: '@pagedone I love this. It is very easy to use.',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 4,
    name: 'Arlene McCoy',
    username: '@arlenemccoy65',
    avatar: 'https://via.placeholder.com/50',
    text: '@pagedone I love this product! It has completely changed how I handle my finances.',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 5,
    name: 'Jenny Wilson',
    username: '@jennywilson968',
    avatar: 'https://via.placeholder.com/50',
    text: '@pagedone has transformed the way I manage my investments, making it easier to keep track and maximize my returns. 😊',
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
              alt={testimonial.username + ' avatar'}
              className="rounded-full"
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
          <span className="mr-2 inline-block font-medium">{testimonial.username}</span>
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
