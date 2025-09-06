import { Media } from "@/graphql/generated/graphql";

export const getTrailerLink = (trailer?: Media["trailer"]): string | null => {
    if (!trailer || !trailer.id || !trailer.site) return null;

    if (trailer.site.toLowerCase() === "youtube") {
        return `https://www.youtube.com/embed/${trailer.id}`;
    }

    return `https://${trailer.site}.com/watch?v=${trailer.id}`;
}
