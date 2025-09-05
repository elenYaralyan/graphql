export const getAllYears = (start: number = 1940): number[] => {
    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    const years: number[] = [];

    for (let year = start; year <= nextYear; year++) {
        years.push(year);
    }

    return years;
}