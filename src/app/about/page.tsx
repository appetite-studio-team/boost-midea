import Link from 'next/link';

export default function About() {
  return (
    <div className="noise-bg-red h-screen px-4 py-10 pt-32 text-center">
      <h1 className="animate__animated animate__fadeInUp m-auto max-w-[400px] py-8">About us</h1>
      <Link href="/" className="btn btn-ghost">
        Go to Home.
      </Link>
    </div>
  );
}
