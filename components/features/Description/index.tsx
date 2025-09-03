import { Badge } from "@/components/ui/badge";
import { Media } from "@/graphql/generated/graphql";
import AnimeDetailsInfo from "@/components/shared/AnimeDetailsInfo";
import AnimeTrailer from "@/components/shared/AnimeTrailer";

const Description = ({ data }: { data: Media }) => (
  <section className="relative my-14 lg:my-18 py-4 px-6 text-white space-y-5 rounded-2xl border-zinc-300 border-2  ">
    <h2 className="text-4xl border-zinc-300 border-2 rounded-2xl -mt-10 bg-black  px-2 pt-2 text-ellipsis line-clamp-2 font-limelight text-green-500 max-w-md">
      {data.title?.english || data.title?.romaji || "No Title Available"}
    </h2>
    <div className="flex justify-between flex-wrap lg:flex-nowrap">
      <div>
        <div className="flex flex-wrap gap-2">
          {data.genres?.map((genre) => (
            <Badge
              key={genre}
              className="h-8 min-w-8 text-base "
              style={{
                backgroundColor: data?.coverImage?.color || "#22C55E",
              }}
            >
              {genre}
            </Badge>
          ))}
        </div>
        <p
          className="font-nunito text-xl pt-2 leading-relaxed text-white"
          dangerouslySetInnerHTML={{ __html: data.description || "" }}
        />
      </div>
      <AnimeDetailsInfo
        data={data}
        className="max-w-xl mx-4 p-4 w-full border-zinc-300 border-2 rounded-2xl h-fit"
      />
    </div>
    <div className="mt-8">
      <AnimeTrailer trailer={data.trailer} />
    </div>
  </section>
);

export default Description;
