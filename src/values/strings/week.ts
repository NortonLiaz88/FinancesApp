import { eachDayOfInterval, format, sub } from "date-fns";
import { PeriodDate } from "./months";

export const week = eachDayOfInterval({
    start: sub(new Date(), {days: 7}),
    end: new Date()
}).map(date => format(date, 'dd'))

export const weekDate =   eachDayOfInterval({
    start: sub(new Date(), {days: 7}),
    end: new Date()
})


export const weekData: PeriodDate = {
    format: week,
    date: weekDate,
}