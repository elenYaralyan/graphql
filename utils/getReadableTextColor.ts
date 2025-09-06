export const getReadableTextColor = (hex: string): string => {
    if (!hex) return "#000000";

    const cleanedHex = hex.replace("#", "");
    const bigint = parseInt(cleanedHex, 16);

    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    const brightness = Math.sqrt(
        0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b)
    );

    return Math.floor(brightness) >= 160 ? "#000000" : "#ffffff";
}
