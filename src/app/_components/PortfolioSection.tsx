import Image from 'next/image';
import Link from 'next/link';

const reels = [
  {
    id: 1,
    avatar: '/assets/portfolio/beyond-view-avatar.png',
    username: 'beyondviewbusiness',
    text: '@beyondviewbusiness ✨ Dreaming of launching your business in the dynamic UAE? Let’s make it a reality! 🌍 ',
    video: '/assets/launching-your-business.mp4',
    likes: '215K',
    comments: '591',
  },
  {
    id: 2,
    avatar: '/assets/portfolio/musbahul-huda-avatar.jpg',
    username: 'musbahul__huda',
    text: '@musbahul__huda follow for more info',
    video: '/assets/musbahul-huda.mp4',
    likes: '120K',
    comments: '45',
  },
  {
    id: 3,
    avatar: '/assets/portfolio/digi-busi-card-avatar.png',
    username: 'digi_busi_card',
    text: '@digi_busi_card 💼🇦🇪 Digital Business Card 🇦🇪💼📱',
    video: '/assets/business-card.mp4',
    likes: '300K',
    comments: '50',
  },
  {
    id: 4,
    avatar: '/assets/ajmal.jpg',
    username: 'ajmal_ahsan_k_dubai',
    text: '@ajmal_ahsan_k_dubai Why I Love Content Creation ♥️',
    video: '/assets/why-i-love-content.mp4',
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
                <div className="stat-value text-primary">25.6K</div>
                <div className="stat-desc text-secondary">21% more than last month</div>
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
                <div className="stat-title text-secondary">Page Views</div>
                <div className="stat-value text-secondary">2.6M</div>
                <div className="stat-desc text-secondary">21% more than last month</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <div className="avatar online">
                    <div className="w-16 rounded-full">
                      <Image
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        alt="Stat avatar"
                        width={64}
                        height={64}
                      />
                    </div>
                  </div>
                </div>
                <div className="stat-value">86%</div>
                <div className="stat-title text-secondary">Tasks done</div>
                <div className="stat-desc text-secondary">31 tasks remaining</div>
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
