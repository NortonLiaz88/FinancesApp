export const months = Array.from({length: 12}, (e, i) => {
    return new Date(null, i + 1, null).toLocaleDateString("en", {month: "short"});
})