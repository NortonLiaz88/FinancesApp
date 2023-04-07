import { format } from "date-fns";

export const months = Array.from({length: 12}, (e, i) => {
    return format(new Date(null, i + 1, null), 'LLL');
})
