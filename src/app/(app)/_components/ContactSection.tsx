import { ChatBubble } from '@/components/ChatBubble';
import Image from 'next/image';

const ContactSection: React.FC = () => {
  return (
    <section>
      <div className="m-auto max-w-[800px] px-4 pb-8 pt-8">
        <ChatBubble>you sure you can handle the fame?</ChatBubble>
        <ChatBubble name="Awesome Client" align="end">
          bring it on 😎
        </ChatBubble>
      </div>
      <div className="flex justify-center lg:mt-12">
        <div className="indicator">
          <span className="badge indicator-item badge-success scale-50"></span>
          <span className="badge indicator-item badge-success opacity-50"></span>
          <a href="tel:+971569888786" className="btn btn-primary btn-wide z-10">
            Let&apos;s Talk
          </a>
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
