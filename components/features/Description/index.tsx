import { Badge } from "@/components/ui/badge";
import { Media } from "@/graphql/generated/graphql";
import AnimeDetailsInfo from "@/components/shared/AnimeDetailsInfo";
import AnimeTrailer from "@/components/shared/AnimeTrailer";
import { infoItems } from "@/const/infoItems";
import { getReadableTextColor } from "@/utils/getReadableTextColor";
import Characters from "../Characters";
import { cn } from "@/lib/utils";

const Description = ({ data }: { data: Media }) => (
  <section className="relative  my-14 lg:my-18 space-y-6 ">
    <div className="py-4 px-6 text-white space-y-5 rounded-2xl border-zinc-300 border-2 ">
      <h2 className="text-4xl border-zinc-300 border-2 rounded-2xl -mt-10 bg-black  px-2 pt-2 text-ellipsis line-clamp-2 font-limelight text-green-500 max-w-md">
        {data.title?.english || data.title?.romaji || "No Title Available"}
      </h2>
      <div className="block h-full ">
        <div className="flex flex-wrap gap-2">
          {data.genres?.map((genre) => (
            <Badge
              key={genre}
              className="h-8 min-w-8 text-base "
              style={{
                backgroundColor: data?.coverImage?.color || "#22C55E",
                color: getReadableTextColor(
                  data?.coverImage?.color || "#22C55E"
                ),
              }}
            >
              {genre}
            </Badge>
          ))}
          <p
            className="font-nunito text-xl pt-2 leading-relaxed text-white"
            dangerouslySetInnerHTML={{ __html: data.description || "" }}
          />
        </div>
        <div className="mt-8 flex gap-4  flex-col lg:flex-row">
          <AnimeDetailsInfo
            className={cn(
              "max-w-xl p-4 w-full",
              data.trailer && "lg:border-r-1"
            )}
            items={infoItems(data)}
          />
          <AnimeTrailer trailer={data.trailer} />
        </div>
      </div>
    </div>
    <Characters data={data.characters} />
  </section>
);

export default Description;
