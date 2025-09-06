import { Media } from "@/graphql/generated/graphql";

export const infoItems = (data: Media) => [
    { title: "Episodes", value: data.episodes ?? "N/A" },
    { title: "Episode duration", value: data.duration ?? "N/A" },
    {
        title: "Studios",
        value:
            data?.studios?.nodes && data.studios.nodes.length > 0
                ? data.studios.nodes[0]?.name
                : "N/A",
    },
    { title: "Start Year", value: data.startDate?.year ?? "N/A" },
    { title: "Status", value: data.status ?? "N/A" },
    { title: "Format", value: data.format ?? "N/A" },
    { title: "Score", value: data.averageScore ?? "N/A" },
    { title: "Popularity", value: data.popularity },
    { title: "Favorites", value: data.favourites },
    { title: "Source", value: data.source }
];