import React from "react";
import { Maybe, Media } from "@/graphql/generated/graphql";
import { cn } from "@/lib/utils";

interface InfoItem {
  title: string;
  value: string | Maybe<number> | undefined;
}

interface Props {
  className?: string;
  items: InfoItem[];
}

const AnimeDetailsInfo: React.FC<Props> = ({ className, items }) => (
  <div className={cn("grid grid-rows-5 grid-cols-2 sm:gap-4", className)}>
    {items.map(({ title, value }) => (
      <div key={title} className="flex flex-col gap-2">
        <span className="font-semibold">{title}</span>
        <span className="text-zinc-500">{value ?? "N/A"}</span>
      </div>
    ))}
  </div>
);

export default AnimeDetailsInfo;
