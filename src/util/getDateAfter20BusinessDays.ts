import { getNextKoreanBusinessDayYmdByUtcDate } from "@/external";

const getDateAfter20BusinessDays = () => {
  const after20BusiDays = String(getNextKoreanBusinessDayYmdByUtcDate(new Date(), 360));
  return new Date(after20BusiDays.slice(0, 4) + "-" + after20BusiDays.slice(4, 6) + "-" + after20BusiDays.slice(6));
};

export default getDateAfter20BusinessDays;
