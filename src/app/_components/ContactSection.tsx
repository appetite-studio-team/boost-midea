import { ChatBubble } from '@/components/ChatBubble';
import Image from 'next/image';

const ContactSection: React.FC = () => {
  return (
    <section>
      <div className="m-auto max-w-[800px] px-4 pb-8 pt-8">
        <ChatBubble>So, ready to work with us?</ChatBubble>
        <ChatBubble name="Awesome Client" align="end">
          Yeah, impressive stuff! How do we get started?
        </ChatBubble>
      </div>
      <div className="flex justify-center lg:mt-12">
        <div className="indicator">
          <span className="badge indicator-item badge-success scale-50"></span>
          <span className="badge indicator-item badge-success opacity-50"></span>
          <button className="btn btn-primary btn-wide z-10">Let&apos;s Talk</button>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative -mb-24 w-[800px] lg:-mb-32 lg:-mt-12">
          <Image
            style={{ objectFit: 'contain' }}
            height={300}
            width={800}
            src="/assets/facetime 1.svg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
