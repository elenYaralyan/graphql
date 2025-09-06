"use client";
import Image from "next/image";
import { Play } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import { useAnime } from "@/stores/anime/useAnime";
import Link from "next/link";

const PopularShows = () => {
  const { data: anime, loading } = useAnime();

  return (
    <section className="space-y-11 pb-10 w-full">
      <div className="pt-14 xl:px-20 px-6 font-nunito flex justify-between">
        <h3 className="text-2xl font-medium text-white">
          <Play className="fill-green-500 text-green-500 inline mr-3" />
          Popular Shows
        </h3>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
          slidesToScroll: 6,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: true,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {loading
            ? Array.from({ length: 6 }).map((_, idx) => (
                <CarouselItem
                  key={idx}
                  className="basis-[260px] pl-10 font-nunito "
                >
                  <Skeleton className="w-[224px] bg-neutral-700 h-[320px] rounded-xl mb-4" />
                  <Skeleton className="w-40 h-5 bg-neutral-700" />
                </CarouselItem>
              ))
            : anime.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="basis-[260px] pl-10 font-nunito"
                >
                  <Link
                    href={`/anime/${item?.id}`}
                    className="relative cursor-pointer group w-[224px] h-[320px]"
                  >
                    <Image
                      src={item?.coverImage?.large || ""}
                      width={224}
                      height={320}
                      alt={
                        item?.title?.english || item?.title?.native || "anime"
                      }
                      className="object-cover w-full h-full rounded-xl"
                    />
                    <div className="absolute inset-0 flex items-end bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                      <span className="p-3 font-medium text-white text-lg">
                        {item?.title?.english || item?.title?.native}
                      </span>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default PopularShows;
