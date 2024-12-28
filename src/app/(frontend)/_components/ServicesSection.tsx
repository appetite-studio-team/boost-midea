import { ChatBubble } from '@/app/(frontend)/components/ChatBubble';
import Image from 'next/image';

export default function ServicesSection() {
  return (
    <section className="">
      <div className="m-auto max-w-[800px] px-4 pb-8 pt-16">
        <ChatBubble>👋 Hey whtsapp?</ChatBubble>
        <ChatBubble name="Awesome Client" align="end">
          im not getting any results, ive been consistent .. 🙆‍♀️
        </ChatBubble>
        <ChatBubble>
          in todays world it can be frustrating. we have the right team and tools for you...
        </ChatBubble>
      </div>
      <div className="m-auto flex max-w-[1000px] flex-wrap justify-center gap-8 px-4 pb-16 pt-8">
        <div className="card w-96 rounded border bg-base-100">
          <figure>
            <div className="relative mt-4 h-64 w-full">
              <Image
                src="/assets/creative-content-creation.svg"
                alt="Organic Content Creation"
                fill
              />
            </div>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Organic Content Creation</h2>
            <p>With careful preparation and execution, we bring dreams into reality.</p>
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
            <p>Custom posters crafted to tell your unique story.</p>
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
            <p>With careful preparation and execution, we bring dreams into reality.</p>
          </div>
        </div>

        {/*
        <div className="card w-96 rounded border bg-base-100">
          <figure>
            <div className="relative mt-4 h-64 w-full">
              <Image src="/assets/branding.svg" alt="" fill />
            </div>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Branding</h2>
            <p>Personal/Company branding. We bring your story to life </p>
          </div>
        </div>
        */}
      </div>
    </section>
  );
}
