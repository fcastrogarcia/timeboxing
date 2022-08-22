import { endOfWeek, startOfWeek, Day, Interval, getDay as getDayNumber, addWeeks } from "date-fns";
import { Days } from "../types";

export const getCurrentWeekInterval = (
  date: Date = new Date(),
  weekStartsOn: Day = 1
): Interval => {
  return {
    start: startOfWeek(date, { weekStartsOn }),
    end: endOfWeek(date, { weekStartsOn }),
  };
};

export const getDay = (date: Date): Days => {
  return Object.values(Days)[getDayNumber(date)];
};

const calculateWeekInterval = (amount: number) => (interval: Interval) => ({
  start: addWeeks(interval.start, amount),
  end: addWeeks(interval.end, amount),
});

export const incrementWeek = calculateWeekInterval(1);

export const decrementWeek = calculateWeekInterval(-1);
