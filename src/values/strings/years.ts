import {addYears, subYears} from 'date-fns';
import {PeriodDate} from './months';

export const formatYears = (
  endYear: Date,
  startYear = subYears(new Date(), 5),
) => {
  const endDate = endYear || new Date();
  let currentYear = startYear.getFullYear();
  let years: string[] = [];

  for (let i = currentYear; i <= endDate.getFullYear(); i++) {
    years.push(currentYear.toString());
    console.log(currentYear);
    currentYear++;
  }
  return years;
};

export const yearsDate = (
  endYear: Date,
  startYear = subYears(new Date(), 5),
) => {
  const endDate = endYear || new Date();
  let currentYear = startYear;
  let years: Date[] = [];

  for (let i = startYear.getFullYear(); i <= endDate.getFullYear(); i++) {
    if (i === startYear.getFullYear()) {
      years.push(currentYear);
    } else {
      currentYear = addYears(currentYear, 1);
      years.push(currentYear);

      console.log(currentYear);
    }
  }
  return years;
};

export const yearsData: PeriodDate = {
  format: formatYears(new Date()),
  date: yearsDate(new Date()),
};
