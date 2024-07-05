export const modifyDarkness = (currentDarkness: number, maxDarkness: number, actionPoints: number): {q: number, r: number} => {
    const q = Math.floor((currentDarkness + actionPoints) / maxDarkness)
    const r = (currentDarkness + actionPoints) % maxDarkness;

    return {q, r};
};
