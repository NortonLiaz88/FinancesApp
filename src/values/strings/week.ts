import { eachDayOfInterval, format, sub } from "date-fns";

export const week = eachDayOfInterval({
    start: sub(new Date(), {days: 7}),
    end: new Date()
}).map(date => format(date, 'dd'))