import { HOLIDAYS_2023 } from "./2023";
import { HOLIDAYS_2024 } from "./2024";
import { IYearHolidays } from "./types";

// 토, 일요일 정보는 포함하지 않음
export const KOREAN_HOLIDAYS: Record<number, IYearHolidays | undefined> = {
  2023: HOLIDAYS_2023,
  2024: HOLIDAYS_2024,
};

export { HOLIDAYS_FALLBACK } from "./fallback";
