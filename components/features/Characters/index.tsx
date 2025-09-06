import { Media } from "@/graphql/generated/graphql";
import { User } from "lucide-react";
import Image from "next/image";
import React from "react";

const Characters = ({ data }: { data: Media["characters"] }) => {
  console.log(data?.edges, data, "data");

  return (
    <>
      <h3 className="text-2xl font-medium text-white">
        <User className="text-green-500 inline mr-3" />
        Characters
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {data?.edges?.map((edge) => (
          <div
            className="rounded-2xl flex justify-between border-zinc-300 border-1 p-3 w-full text-white font-nunito"
            key={edge?.id}
          >
            <div className="flex gap-2 items-center">
              <Image
                alt={edge?.node?.name?.full || ""}
                src={edge?.node?.image?.medium || ""}
                width={100}
                height={150}
              />
              <div>
                <h5 className="text-xl">{edge?.node?.name?.full}</h5>
                <span className="text-base text-zinc-500">{edge?.role}</span>
              </div>
            </div>
            <div className="gap-2 items-center hidden md:flex">
              <h5 className="text-xl">{edge?.voiceActors?.[0]?.name?.full}</h5>
              <Image
                alt={edge?.voiceActors?.[0]?.name?.full || ""}
                src={edge?.voiceActors?.[0]?.image?.medium || ""}
                width={100}
                height={150}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Characters;
