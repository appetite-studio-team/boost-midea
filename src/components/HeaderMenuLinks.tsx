import { usePathname } from 'next/navigation';
import { menuLinks } from './MenuLinks';
import Link from 'next/link';

interface HeaderMenuLinksProps {
  onClick?: () => void;
}

export const HeaderMenuLinks: React.FC<HeaderMenuLinksProps> = ({ onClick }) => {
  const pathname = usePathname();

  return (
    <>
      {menuLinks.map(({ label, href }) => {
        const isActive = pathname === href;
        return (
          <li key={href}>
            <Link
              href={href}
              passHref
              className={`p-4 text-3xl lg:py-2 lg:text-sm ${isActive ? '' : 'opacity-70'}`}
              onClick={onClick}
            >
              <span>{label}</span>
            </Link>
          </li>
        );
      })}
    </>
  );
};
