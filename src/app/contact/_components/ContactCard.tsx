import { ReactNode } from 'react';

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  value: string;
  href: string;
  action: string;
  target?: string;
  buttonColor?: string;
}

export default function ContactCard({
  icon,
  title,
  value,
  href,
  action,
  target,
  buttonColor,
}: ContactCardProps) {
  return (
    <div className="w-full space-y-8 rounded-xl bg-white px-8 py-4 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-center space-x-4">
        {icon}
        <div className="flex-1">
          <p className="text-gray-600">{title}</p>
          <h3 className="text-lg font-medium text-gray-900">{value}</h3>
        </div>
      </div>
      <a
        href={href}
        target={target}
        className={`btn btn-neutral w-full border-none ${buttonColor || ''}`}
      >
        {action}
      </a>
    </div>
  );
}
