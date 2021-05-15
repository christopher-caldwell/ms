export const createMsFromSeconds = (numberOfSeconds: number): number => numberOfSeconds * 1000
export const createMsFromMinutes = (numberOfMinutes: number): number => numberOfMinutes * createMsFromSeconds(60)
export const createMsFromHours = (numberOfHours: number): number => numberOfHours * createMsFromMinutes(60)
export const createMsFromDays = (numberOfDays: number): number => numberOfDays * createMsFromHours(24)
export const createMsFromWeeks = (numberOfWeeks: number): number => numberOfWeeks * createMsFromDays(7)
export const createMsFromMonths = (numberOfMonths: number): number => numberOfMonths * createMsFromDays(30)
export const createMsFromYears = (numberOfYears: number): number => numberOfYears * createMsFromDays(365.25)
