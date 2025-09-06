"use client";

import Description from "@/components/features/Description";
import { cn } from "@/lib/utils";
import { useAnimeDetails } from "@/stores/anime/useAnimeDetails";
import Image from "next/image";
import { use } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const AnimeDetails = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const { data: anime, loading } = useAnimeDetails(Number(id));

  if (loading) {
    return (
      <div className="font-nunito lg:py-10 px-4 lg:px-14">
        <div className="relative w-full h-full  flex justify-center items-center">
          <Skeleton className="w-full bg-neutral-700 h-[250px] md:h-[400px] block rounded-2xl" />
        </div>
        <div className="relative my-14 lg:my-18 space-y-6">
          <div className="py-4 px-6 space-y-5 rounded-2xl border-zinc-300 border-2">
            <Skeleton className="h-12 w-80 bg-neutral-700 rounded-2xl -mt-10" />
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Skeleton className="h-8 w-16 bg-neutral-700 rounded-md" />
                <Skeleton className="h-8 w-20 bg-neutral-700 rounded-md" />
                <Skeleton className="h-8 w-14 bg-neutral-700 rounded-md" />
                <Skeleton className="h-8 w-18 bg-neutral-700 rounded-md" />
              </div>
              <Skeleton className="h-32 w-full bg-neutral-700 rounded-md" />
            </div>
            <div className="mt-8 flex gap-4 flex-col lg:flex-row">
              <div className="max-w-xl p-4 w-full">
                <div className="grid grid-rows-5 grid-cols-2 sm:gap-4">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className="flex flex-col gap-2">
                      <Skeleton className="h-4 w-20 bg-neutral-700 rounded-md" />
                      <Skeleton className="h-4 w-16 bg-neutral-700 rounded-md" />
                    </div>
                  ))}
                </div>
              </div>
              <Skeleton className="min-h-fit aspect-video w-full h-full rounded-2xl border-zinc-300 border-2" />
            </div>
          </div>
          <div className="space-y-4">
            <Skeleton className="h-8 w-32 bg-neutral-700 rounded-md" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton
                  key={i}
                  className="h-24 w-full bg-neutral-700 rounded-2xl"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!anime) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white">Anime not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="font-nunito lg:py-10 px-4 lg:px-14">
      <div className="relative w-full h-full flex justify-center items-center">
        <div className="absolute -inset-0.5 hidden lg:block bg-[radial-gradient(circle,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.59)_45%,rgba(0,0,0,1)_100%)] z-0" />
        <Image
          src={anime?.bannerImage || "/placeholder.jpg"}
          alt="bannerImage"
          width={1920}
          height={400}
          className="w-full h-[250px] md:h-[400px] hidden lg:block object-cover rounded-2xl"
        />
        <Image
          src={anime.coverImage?.extraLarge || ""}
          alt="cover"
          width={350}
          height={500}
          className="w-full  rounded-2xl max-w-fit border-zinc-300 right-24 border-2 z-30 lg:absolute object-cover"
        />
      </div>
      <Description data={anime} />
    </div>
  );
};

export default AnimeDetails;
