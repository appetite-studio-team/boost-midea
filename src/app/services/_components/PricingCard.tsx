import Link from 'next/link';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  description?: string;
  buttonText?: string;
  className?: string;
}

export default function PricingCard({
  title,
  price,
  features,
  description,
  buttonText = 'Get Started',
  className = '',
}: PricingCardProps) {
  return (
    <div
      className={`divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white shadow-sm ${className}`}
    >
      <div className="p-6 sm:px-8">
        <h2 className="text-lg font-medium text-gray-900">
          {title}
          <span className="sr-only">Plan</span>
        </h2>

        <p className="mt-2">
          <strong className="text-3xl font-bold sm:text-4xl">{price}</strong>
          {/* <span className="text-sm font-medium text-gray-700">/month</span> */}
        </p>

        <Link className="btn btn-primary mt-6 w-full" href="/contact">
          {buttonText}
        </Link>
      </div>

      <div className="p-6 sm:px-8">
        <p className="text-lg font-medium text-gray-900">Pure organic content creation:</p>

        <ul className="mt-2 space-y-2 sm:mt-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 text-green-700"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        {description && <p className="mt-8 text-gray-700">{description}</p>}
      </div>
    </div>
  );
}
