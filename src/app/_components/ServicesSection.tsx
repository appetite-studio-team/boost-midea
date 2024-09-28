import { ChatBubble } from '@/components/ChatBubble';
import Image from 'next/image';

export default function ServicesSection() {
  return (
    <section className="">
      <div className="m-auto max-w-[800px] px-4 pb-8 pt-16">
        <ChatBubble>👋 Hey there! Welcome to Boost Midea.</ChatBubble>
        <ChatBubble name="Awesome Client" align="end">
          Hey, my social media isn&apos;t performing well and I&apos;m struggling to get my website
          noticed. I need to reach a bigger audience and increase interactions.
        </ChatBubble>
        <ChatBubble>No problem! We have the best strategies to help you grow 🚀!</ChatBubble>
      </div>
      <div className="m-auto flex max-w-[1000px] flex-wrap justify-center gap-8 px-4 pb-16 pt-8">
        <div className="card w-96 rounded border bg-base-100">
          <figure>
            <div className="relative mt-4 h-64 w-full">
              <Image
                src="/assets/creative-content-creation.svg"
                alt="Creative content creation"
                fill
              />
            </div>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Creative content creation</h2>
            <p>Scripting, shooting, editing, posting SMMA...</p>
            <div className="card-actions justify-end">
              <button className="btn btn-ghost">Learn more</button>
            </div>
          </div>
        </div>

        <div className="card w-96 rounded border bg-base-100">
          <figure>
            <div className="relative mt-4 h-64 w-full">
              <Image src="/assets/graphic-design.svg" alt="" fill />
            </div>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Poster and graphic design</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-ghost">Learn more</button>
            </div>
          </div>
        </div>

        <div className="card w-96 rounded border bg-base-100">
          <figure>
            <div className="relative mt-4 h-64 w-full">
              <Image src="/assets/website-and-app-development.svg" alt="" fill />
            </div>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Website and app development</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-ghost">Learn more</button>
            </div>
          </div>
        </div>

        <div className="card w-96 rounded border bg-base-100">
          <figure>
            <div className="relative mt-4 h-64 w-full">
              <Image src="/assets/branding.svg" alt="" fill />
            </div>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Branding</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-ghost">Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
