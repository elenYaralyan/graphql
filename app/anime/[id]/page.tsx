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
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <Skeleton className="w-full h-[200px] md:h-[300px] lg:h-[400px] rounded-2xl" />
          <div className="flex flex-col lg:flex-row gap-6 mt-6">
            <Skeleton className="w-[250px] h-[350px] rounded-2xl mx-auto lg:mx-0" />
            <div className="flex-1 space-y-4">
              <Skeleton className="h-8 w-1/2 rounded-md" />
              <Skeleton className="h-4 w-3/4 rounded-md" />
              <Skeleton className="h-4 w-2/3 rounded-md" />
              <Skeleton className="h-4 w-1/2 rounded-md" />
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
    <div className={cn("font-nunito mt-5 md:mt-10 lg:py-20 px-4 md:px-20")}>
      <div className="relative w-full h-full flex justify-center items-center">
        <div className="absolute -inset-0.5 hidden lg:block bg-[radial-gradient(circle,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.59)_45%,rgba(0,0,0,1)_100%)] z-0" />
        <Image
          src={anime?.bannerImage || "/placeholder.jpg"}
          alt="bannerImage"
          width={1920}
          height={400}
          className="w-full h-full max-h-[400px] hidden lg:block object-cover rounded-2xl"
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
