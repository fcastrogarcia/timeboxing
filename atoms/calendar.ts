import { atom } from "jotai";
import { Interval, eachDayOfInterval } from "date-fns";
import { getCurrentWeekInterval, incrementWeek, decrementWeek } from "../utils";

export const currentWeekIntervalAtom = atom<Interval>(getCurrentWeekInterval());

export const setNextWeekAtom = atom(null, (get, set) => {
  set(currentWeekIntervalAtom, incrementWeek(get(currentWeekIntervalAtom)));
});

export const setPreviousWeekAtom = atom(null, (get, set) => {
  set(currentWeekIntervalAtom, decrementWeek(get(currentWeekIntervalAtom)));
});

export const currentWeekAtom = atom<Date[]>((get) => {
  return eachDayOfInterval(get(currentWeekIntervalAtom));
});
