import { Media } from "@/graphql/generated/graphql";

export const cardInfo = (data: Media) => [
    { title: "Episodes", value: data.episodes ?? "N/A" },
    { title: "Episode duration", value: data.duration ?? "N/A" },
    { title: "Status", value: data.status ?? "N/A" },
];