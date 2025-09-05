"use client";
import { useAnimeFilters } from "@/stores/anime/useFilterAnime";
import { getAllYears } from "@/utils/getAllYears";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { SelectGroup } from "@radix-ui/react-select";
import { Label } from "../ui/label";
import { ListFilterPlus, X } from "lucide-react";
import Image from "next/image";

type SideBarProps = {
  selected: {
    genre: string;
    year: string;
  };
  setSelected: React.Dispatch<
    React.SetStateAction<{ genre: string; year: string }>
  >;
};

const SideBar = ({ selected, setSelected }: SideBarProps) => {
  const { data: animeFilter } = useAnimeFilters();

  return (
    <div className="flex flex-col items-center sticky top-0  justify-between">
      <Image
        src="/itachi.png"
        alt="itachi"
        width={200}
        height={250}
        className="-mb-14"
      />
      <div className="text-white font-nunito border-zinc-600 border relative space-y-5 bg-neutral-900 rounded-3xl w-fit px-8 py-6">
        <h3 className="text-2xl font-medium text-white">
          Filters
          <ListFilterPlus className="text-green-500 inline ml-3" />
        </h3>
        <Select
          value={selected.genre}
          onValueChange={(value) =>
            setSelected((prev) => ({ ...prev, genre: value }))
          }
        >
          <Label className="text-xl">Genres</Label>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a genres" />
          </SelectTrigger>
          <SelectContent className=" text-white bg-neutral-900">
            <SelectGroup>
              {animeFilter?.map((genre) => (
                <SelectItem key={genre} value={genre}>
                  {genre}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select
          value={selected.year}
          onValueChange={(value) =>
            setSelected((prev) => ({ ...prev, year: value }))
          }
        >
          <Label className="text-xl">Years</Label>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a year" />
          </SelectTrigger>
          <SelectContent className="text-white bg-neutral-900">
            <SelectGroup>
              {getAllYears()?.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SideBar;
