import Image from 'next/image';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
  alt?: string;
}

export default function ProjectCard({
  image,
  title,
  description,
  category,
  alt = title,
}: ProjectCardProps) {
  return (
    <div className="card max-w-96 bg-base-100 shadow-xl">
      <figure className="relative aspect-square w-full">
        <Image src={image} alt={alt} className="object-cover" width={400} height={400} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{category}</div>
        </div>
      </div>
    </div>
  );
}
