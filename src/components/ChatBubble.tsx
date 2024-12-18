import Image from 'next/image';

export const ChatBubble = ({
  name = 'Boost Midea',
  time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  align = 'start',
  children = '',
}: {
  name?: string;
  time?: string;
  align?: 'start' | 'end';
  children?: React.ReactNode;
}) => {
  return (
    <div className={`chat ${align === 'start' ? 'chat-start' : 'chat-end'}`}>
      <div className="avatar chat-image">
        <div className="w-10 rounded-full">
          <Image
            alt="Chat avatar"
            src={
              align === 'start'
                ? '/assets/boost-media-avatar.png'
                : 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
            }
            width={40}
            height={40}
            className="h-10 w-10 rounded-full"
          />
        </div>
      </div>
      <div className="chat-header">
        <span className={`mx-2 ${name === 'Boost Midea' && 'text-info'}`}>{name}</span>
        <time className="text-xs opacity-50">{time}</time>
      </div>
      <div className="chat-bubble">{children}</div>
      <div className="chat-footer opacity-50">delivered</div>
    </div>
  );
};
