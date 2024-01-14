"use client";

import { FC, useEffect, useState } from "react";
import UpcomingStockSection from "@/components/home/UpcomingStockSection";
import EndedStockSection from "@/components/home/EndedStockSection";
import getDateAfter20BusinessDays from "@/util/getDateAfter20BusinessDays";

const HomePage: FC = () => {
  const [after20BusiDate, setAfter20BusiDate] = useState<Date>();
  useEffect(() => {
    setAfter20BusiDate(getDateAfter20BusinessDays());
  }, []);

  return (
    <>
      {after20BusiDate ? <p>{after20BusiDate.toLocaleString()}</p> : <p>hello</p>}
      {/* <UpcomingStockSection /> */}
      {/* <EndedStockSection /> */}
    </>
  );
};

export default HomePage;
