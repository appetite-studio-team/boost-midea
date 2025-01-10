import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  videoLink?: string | null | undefined;
  externalLink?: string | null | undefined;
  image?: string;
  title: string;
  description?: string;
  category: string;
  alt?: string;
}

export default function ProjectCard({
  videoLink,
  externalLink,
  image,
  title,
  category,
  alt = title,
}: ProjectCardProps) {
  return (
    <div className="card w-full max-w-96 bg-base-100 shadow-xl">
      <div className="relative w-full">
        {videoLink ? (
          <div className="relative aspect-[9/16] w-full max-w-96">
            <iframe
              className="inset-0 h-full w-full rounded-t-3xl"
              src={
                videoLink +
                '?autoplay=0&mute=0&rel=0&showinfo=0&modestbranding=1&controls=1&disablekb=1&loop=0&fs=1'
              }
              allow="clipboard-write; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              loading="lazy"
            />
          </div>
        ) : (
          image &&
          image !== '' && (
            <Link target="_blank" href={externalLink || ''}>
              <Image
                src={image}
                alt={alt}
                className="inset-0 max-h-full w-full rounded-t-3xl"
                width={400}
                height={400}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </Link>
          )
        )}
      </div>
      <div className="card-body w-full p-4">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{category}</div>
        </div>
      </div>
    </div>
  );
}
