import { format } from "date-fns";

export const months = Array.from({length: 12}, (e, i) => {
    return format(new Date(new Date().getFullYear(), i + 1), 'LLL');
})

export const monthsDate = Array.from({length: 12}, (e, i) => {
    return new Date(new Date().getFullYear(), i + 1);
})

export const monthsData = {
    format: months,
    date: monthsDate
}

export interface PeriodDate {
    format: string[];
    date: Date[];
}