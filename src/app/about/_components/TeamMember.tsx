import Image from "next/image";
import { StaticImageData } from "next/image";

interface TeamMemberProps {
  name: string;
  title: string;
  image: string;
  className?: string;
}

export default function TeamMember({ 
  name, 
  title, 
  image, 
  className = ""
}: TeamMemberProps) {
  return (
    <div className={`text-center space-y-4 ${className}`}>
      <div className="avatar">
        <div className="mask mask-squircle w-24">
          <Image 
            src={image} 
            alt={name} 
            height={96} 
            width={96} 
            className="object-cover"
          />
        </div>
      </div>
      <div className="max-w-32">
        <h4>{name}</h4>
        <p className="text-xs font-light">{title}</p>
      </div>
    </div>
  );
}