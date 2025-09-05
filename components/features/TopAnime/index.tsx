"use client";

import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getReadableTextColor } from "@/utils/getReadableTextColor";
import AnimeDetailsInfo from "@/components/shared/AnimeDetailsInfo";
import { cardInfo } from "@/const/card";
import { useAnimeAll } from "@/stores/anime/useAnimeAll";

const TopAnime = () => {
  const { data: anime } = useAnimeAll();
  const router = useRouter();

  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <div className="pt-14 xl:px-10 font-nunito flex justify-between">
        <h3 className="text-2xl font-medium text-white">
          <Star className="fill-green-500 text-green-500 inline mr-3" />
          Top 100
        </h3>
        <span className="text-green-500 underline text-lg font-medium">
          View all
        </span>
      </div>
      {anime.slice(0, 10).map((anime, index) => (
        <div key={anime.id} className="flex gap-2 items-center">
          <span className="text-white text-xl">#{index + 1}</span>
          <div className="bg-neutral-500/15 justify-between max-h-48 items-center md:max-h-20 gap-2 aspect-video p-2 text-white w-full rounded-lg flex ">
            <div className="flex gap-4 items-center">
              <Image
                src={anime?.coverImage?.large || ""}
                width={48}
                height={60}
                alt="cover"
                onClick={() => router.push(`/anime/${anime.id}`)}
                className="object-contain h-full cursor-pointer"
              />
              <div className="flex gap-2 justify-between flex-col">
                <Link
                  href={`/anime/${anime.id}`}
                  style={
                    {
                      "--hover-color": anime?.coverImage?.color || "#22C55E",
                    } as React.CSSProperties
                  }
                  className="font-semibold text-lg hover:[color:var(--hover-color)]"
                >
                  {anime.title?.english ||
                    anime.title?.romaji ||
                    "No Title Available"}
                </Link>
                <div className="flex flex-wrap gap-4">
                  {anime.genres?.map((genre) => (
                    <Badge
                      key={genre}
                      className="p-0.5 text-sm "
                      style={{
                        backgroundColor: anime?.coverImage?.color || "#22C55E",
                        color: getReadableTextColor(
                          anime?.coverImage?.color || "#22C55E"
                        ),
                      }}
                    >
                      {genre}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            <AnimeDetailsInfo
              items={cardInfo(anime)}
              className="flex-row items-center justify-between hidden lg:flex"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopAnime;
