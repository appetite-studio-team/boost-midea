'use client';

import Image from 'next/image';
import { Socials } from './Socials';

export const Footer = () => {
  return (
    <footer className="bg-neutral py-10 pt-24 text-neutral-content">
      <div className="footer m-auto max-w-[1020px] p-10 lg:justify-center lg:gap-12">
        <aside>
          <Image
            className="invert"
            src="/assets/boost-midea-logo.png"
            height={60}
            width={180}
            objectFit="contain"
            alt="Boost Midea Logo"
          />
          <p className="font-mono">with ♡ from Dubai</p>
        </aside>
        <nav>
          <h6>Follow us</h6>
          <Socials />
        </nav>
      </div>
    </footer>
  );
};
