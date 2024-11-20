import Image from 'next/image';
import Link from 'next/link';

interface ServiceProps {
  title: string;
  linkText: string;
  image: string;
  align?: 'start' | 'end';
  children: React.ReactNode;
}

export default function Service({
  title,
  linkText,
  image,
  align = 'start',
  children,
}: ServiceProps) {
  return (
    <div className="card grid grid-cols-1 gap-4 rounded border bg-base-100 px-4 py-8 md:grid-cols-2 lg:px-8">
      <figure className={align === 'start' ? 'md:order-last' : ''}>
        <div className="relative h-96 w-full">
          <Image src={image} alt="" fill />
        </div>
      </figure>
      <div className="m-auto my-auto max-w-md space-y-4">
        <h3>{title}</h3>
        <div>{children}</div>
        <div className="pt-8">
          <Link href="/contact" className="text-sm font-bold hover:text-blue-950">
            {linkText}
            <svg
              className="inline h-4 w-4 fill-blue-950"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
            >
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
