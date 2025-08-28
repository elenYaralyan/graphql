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

const PopularShows = () => {
  const { data: anime, loading } = useAnime();

  return (
    <section className="space-y-11 pb-10 w-full">
      <div className="pt-14 px-20 font-nunito flex justify-between">
        <h3 className="text-2xl font-medium text-white">
          <Play className="fill-green-500 text-green-500 inline mr-3" />
          Popular Shows
        </h3>
        <span className="text-green-500 underline text-lg font-medium">
          View all
        </span>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
          slidesToScroll: 6,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
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
                  <Image
                    src={item?.coverImage?.large || ""}
                    width={224}
                    height={320}
                    alt={item?.title?.english || item?.title?.native || "anime"}
                    className="object-cover w-full aspect-[11/16] mb-4 rounded-xl"
                  />
                  <span className="font-medium text-lg text-white">
                    {item?.title?.english || item?.title?.native}
                  </span>
                </CarouselItem>
              ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default PopularShows;
