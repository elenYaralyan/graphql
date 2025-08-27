"use client";
import { useAnime } from "@/stores/anime/useAnime";
import { useEffect } from "react";

const Anime = () => {
  const { data: animeState, loading, refetch } = useAnime();
  console.log(animeState, loading, "animeState");
  useEffect(() => {
    refetch();
  }, []);

  return <div></div>;
};

export default Anime;
