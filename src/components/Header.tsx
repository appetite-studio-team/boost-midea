'use client';

import { useEffect, useState } from 'react';
import { HeaderMenuLinks } from './HeaderMenuLinks';
import { Socials } from './Socials';
import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div
      className={`navbar fixed left-1/2 top-4 z-50 w-[calc(100%-32px)] max-w-6xl -translate-x-1/2 transform transition-colors duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      } rounded-lg p-2`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={toggleDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={`menu dropdown-content menu-sm z-[1] mt-3 w-64 rounded-lg bg-black p-4 py-10 font-display font-bold text-white shadow lg:font-sans ${
              dropdownOpen ? 'block' : 'hidden'
            }`}
          >
            <HeaderMenuLinks onClick={closeDropdown} />
            <div className="m-4 mt-10 block flex opacity-50">
              <Socials />
            </div>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost">
          <Image
            src="/assets/boost-midea-logo.png"
            height={30}
            width={100}
            objectFit="contain"
            alt="Boost Midea Logo"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <HeaderMenuLinks />
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-neutral">
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
            />
          </svg>
          <span className="hidden lg:inline">Talk with us</span>
        </a>
      </div>
    </div>
  );
};
