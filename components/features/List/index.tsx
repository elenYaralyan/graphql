"use client";
import SideBar from "@/components/shared/SideBar";
import ListItem from "@/components/shared/ListItem";
import Image from "next/image";
import React, { useState } from "react";
import { useAnimeAll } from "@/stores/anime/useAnimeAll";

const List = () => {
  const [selected, setSelected] = useState<{ genre: string; year: string }>({
    genre: "",
    year: "",
  });

  console.log(selected, "selectedselectedselectedselected");

  const {
    data: animeAll,
    loading,
    error,
  } = useAnimeAll({
    page: 1,
    perPage: 20,
    filters: {
      genres: selected.genre ? selected.genre : "",
      year: selected.year ? Number(selected.year) : undefined,
    },
  });

  console.log(animeAll, "allll");

  return (
    <div className="lg:py-10 px-4 h-full relative lg:px-14">
      <h1 className="font-nunito text-4xl text-white">
        <Image
          src="/chopper.png"
          alt="Chopper"
          width={50}
          height={60}
          className="inline"
        />
        All Anime
      </h1>
      <div className="relative flex justify-between ">
        <section className="w-full grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))]">
          {animeAll.map((anime) => (
            <ListItem
              key={anime.id}
              src={anime?.coverImage?.medium || ""}
              name={anime?.title?.english || anime.title?.native || ""}
            />
          ))}
        </section>
        <SideBar
          selected={{
            genre: selected.genre ?? "",
            year: selected.year ?? "",
          }}
          setSelected={setSelected}
        />
      </div>
    </div>
  );
};

export default List;
