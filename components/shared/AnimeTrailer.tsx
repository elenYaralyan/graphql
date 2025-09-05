import { useState } from "react";
import { Media } from "@/graphql/generated/graphql";
import { getTrailerLink } from "@/utils/getLink";
import Image from "next/image";
import { Play } from "lucide-react";

interface Props {
  trailer?: Media["trailer"];
}

const AnimeTrailer: React.FC<Props> = ({ trailer }) => {
  const [showTrailer, setShowTrailer] = useState(false);
  const trailerId = trailer?.site === "youtube" ? trailer?.id : null;
  const trailerThumbnail = trailer?.thumbnail || "";

  if (!trailerId) return null;

  return !showTrailer ? (
    <div
      className="min-h-fit aspect-video w-full h-full   cursor-pointer relative overflow-hidden"
      role="button"
      tabIndex={0}
      aria-label="Play Trailer"
      onClick={() => setShowTrailer(true)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          setShowTrailer(true);
        }
      }}
    >
      <Image
        fill
        src={trailerThumbnail}
        alt="Trailer Thumbnail"
        className="object-cover rounded-md"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="bg-black/60 rounded-full p-4">
          <Play />
        </span>
      </div>
    </div>
  ) : (
    <div className="min-h-fit aspect-video w-full h-full  rounded-2xl border-zinc-300 border-2  overflow-hidden">
      <iframe
        src={getTrailerLink(trailer) || ""}
        title="Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full rounded-md"
      />
    </div>
  );
};

export default AnimeTrailer;
