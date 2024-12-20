import Image from 'next/image';
import Link from 'next/link';

const reels = [
  {
    id: 1,
    avatar: '/assets/portfolio/mr-realty.jpeg',
    username: 'Mr Reality',
    text: '@mr.reality.dubai the man make people rich in dubai',
    video: '/assets/portfolio/videos/mr-realty.mp4',
    likes: '215K',
    comments: '591',
  },
  {
    id: 2,
    avatar: '/assets/testimonials/maria.jpeg',
    username: 'Maria',
    text: '@investwithmaria.dxb A place where investment is a win',
    video: '/assets/portfolio/videos/maria.mp4',
    likes: '120K',
    comments: '45',
  },
  {
    id: 3,
    avatar: '/assets/portfolio/pendulum-decor.jpg',
    username: 'Decor',
    text: '@pendulum_decor first ever bollywood themed restaurant in UAE',
    video: '/assets/portfolio/videos/pendulum-decor.mp4',
    likes: '300K',
    comments: '50',
  },
  {
    id: 4,
    avatar: '/assets/portfolio/pendulum-relocations.png',
    username: 'Relocation',
    text: '@pendulum_relocation How insurance can help you while relocation',
    video: '/assets/portfolio/videos/pendulum-relocations.mp4',
    likes: '300K',
    comments: '50',
  },
  {
    id: 5,
    avatar: '/assets/portfolio/pendulum-logistics.jpg',
    username: 'Logistics',
    text: '@pendulum_logistics smart logistics for small load',
    video: '/assets/portfolio/videos/pendulum-logistics.mp4',
    likes: '300K',
    comments: '50',
  },
  {
    id: 6,
    avatar: '/assets/portfolio/zaina.jpeg',
    username: 'Zaina',
    text: '@spicedelidubai BEST BIRYANI IN JLT',
    video: '/assets/portfolio/videos/zaina.mp4',
    likes: '300K',
    comments: '50',
  },
];

interface ReelProps {
  reel: {
    id: number;
    avatar: string;
    username: string;
    text: string;
    video: string;
    likes: string;
    comments: string;
  };
}

const Reel: React.FC<ReelProps> = ({ reel }) => {
  return (
    <div className="carousel-item relative h-full">
      <video className="h-full w-full object-cover" src={reel.video} autoPlay loop muted></video>

      {/* Gradient Background for Readability */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/70 to-transparent"></div>

      {/* Avatar, Username, and Text on Bottom Left */}
      <div className="absolute bottom-4 left-5 z-10 text-white">
        <div className="flex w-full items-center gap-2">
          <Image
            src={reel.avatar}
            alt={reel.username + ' avatar'}
            className="h-6 w-6 rounded-full bg-white object-cover"
            width={24}
            height={24}
          />
          <p className="font-medium">{reel.username}</p>
        </div>
        <p className="mt-2 max-w-56 text-left text-xs">{reel.text}</p>
      </div>

      {/* Bottom Right Icons */}
      <div className="absolute bottom-10 right-2 z-10 flex flex-col items-center space-y-4 text-white">
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-7 w-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.172 4.928a4.5 4.5 0 016.364 0L12 7.393l2.464-2.465a4.5 4.5 0 116.364 6.364L12 20.121l-8.828-8.829a4.5 4.5 0 010-6.364z"
            />
          </svg>
          <p className="text-sm">{reel.likes}</p>
        </div>
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-7 w-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 12h.008v.008H7.5V12zm4.5 0h.008v.008H12V12zm4.5 0h.008v.008H16.5V12zm1.5 8.25V19.5a2.25 2.25 0 002.25-2.25v-9A2.25 2.25 0 0018 6H6a2.25 2.25 0 00-2.25 2.25v9A2.25 2.25 0 006 19.5v.75L9.75 18h4.5l4.5 3.75z"
            />
          </svg>
          <p className="text-sm">{reel.comments}</p>
        </div>
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-7 w-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.75L5 8.75l7 4 7-4-7-4zm0 10.5L5 13.25l7 4 7-4-7 4z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

const PortfolioSection: React.FC = () => {
  return (
    <section className="bg-black px-4 py-20">
      <div className="mx-auto max-w-[700px] text-center">
        <div className="flex flex-wrap justify-center gap-8">
          <div className="mockup-phone">
            <div className="camera"></div>
            <div className="display">
              <div className="carousel carousel-vertical h-[600px] w-[300px] rounded-box">
                {reels.map((reel) => (
                  <Reel key={reel.id} reel={reel} />
                ))}
              </div>
            </div>
          </div>
          <div className="m-auto">
            <div className="stats stats-vertical bg-black text-left text-white shadow">
              <div className="stat">
                <div className="stat-figure text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-8 w-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title text-secondary">Total Likes</div>
                <div className="stat-value text-primary">1M+</div>
                <div className="stat-desc text-secondary">for our posts</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-8 w-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title text-secondary">Views</div>
                <div className="stat-value text-secondary">2M+</div>
                <div className="stat-desc text-secondary">for our videos</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <div className="avatar online">
                    <div className="w-16 rounded-full">
                      <Image src="/assets/ajmal.jpg" alt="Stat avatar" width={64} height={64} />
                    </div>
                  </div>
                </div>
                <div className="stat-value">125k</div>
                <div className="stat-title text-secondary">Shares</div>
                <div className="stat-desc text-secondary">done by followers</div>
              </div>
              <Link href="/portfolio" className="btn btn-primary my-4">
                See Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
