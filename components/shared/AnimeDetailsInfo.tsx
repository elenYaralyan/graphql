import React from "react";
import { Media } from "@/graphql/generated/graphql";
import { cn } from "@/lib/utils";

interface Props {
  data: Media;
  className?: string;
}

const AnimeDetailsInfo: React.FC<Props> = ({ data, className }) => (
  <div className={cn("flex flex-col", className)}>
    <span>Episodes</span>
    <span className="text-zinc-500">{data.episodes}</span>
    <span>Episode duration</span>
    <span className="text-zinc-500">{data.duration}</span>
    <span>Studios</span>
    <span className="text-zinc-500">
      {data?.studios?.nodes && data.studios.nodes.length > 0
        ? data.studios.nodes[0]?.name
        : "N/A"}
    </span>
    <span>Start Year</span>
    <span className="text-zinc-500">{data.startDate?.year}</span>
    <span>Status</span>
    <span className="text-zinc-500">{data.status}</span>
  </div>
);

export default AnimeDetailsInfo;
