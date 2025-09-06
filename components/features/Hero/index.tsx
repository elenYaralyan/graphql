import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative bg-[url('/frame.png')] font-nunito lg:bg-top bg-fixed bg-center bg-cover min-h-screen h-full w-full">
      <div className="absolute -inset-0.5 bg-[radial-gradient(circle,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.59)_30%,rgba(0,0,0,1)_100%)] z-0" />
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center text-white pt-[11.25rem] p-5 lg:pr-5 lg:pl-20 lg:pb-44">
        <div className="flex flex-col max-w-[41.25rem]">
          <h2 className="text-4xl font-nunito font-semibold mt-2">
            Welcome to{" "}
            <span className="text-green-500 font-limelight">EpicAnime</span>
          </h2>
          <p className="text-2xl font-normal">
            Embark on a Journey of Endless Stories and Epic Adventures.
          </p>
          <div className="flex pt-6 pb-20 gap-10 ">
            <Button
              variant="secondary"
              className="rounded-md p-0.5 bg-gradient-to-tr h-fit from-neutral-900 via-zinc-900 to-neutral-600"
            >
              <span className="w-full bg-transparent rounded-full px-6 py-2 text-white">
                Explore Now
              </span>
            </Button>
            <Button
              variant="secondary"
              className="rounded-md p-0.5 bg-gradient-to-tr h-fit from-orange-700 via-orange-700 to-orange-700"
            >
              <span className="w-full bg-transparent rounded-full px-6 py-2 text-white">
                Start Watching
              </span>
            </Button>
          </div>
          <div className="rounded-tr-[3.75rem] border border-zinc-400/20 rounded-bl-[3.75rem]  p-5 backdrop-blur-none bg-gradient-to-r from-neutral-900/70 via-zinc-900/60 to-neutral-600/50 space-y-3">
            <h4 className="text-green-500 text-xl font-normal font-limelight mb-2">
              <span className="underline  ">Epic</span> Feed
            </h4>
            <p>Major &apos;One Piece&apos; Revelation Unveiled!&quot;</p>
            <p>
              Creator Eiichiro Oda reveals a game-changing event in &apos;One
              Piece&apos;! What&apos;s next for Luffy and the crew? Dive into
              the latest scoop on the beloved series.
            </p>
          </div>
        </div>
        <div>
          <Image src="/luffy.png" width={626} height={736} alt="luffy" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
