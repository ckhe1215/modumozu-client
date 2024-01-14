"use client";

import { FC } from "react";
import UpcomingStockSection from "@/components/home/UpcomingStockSection";
import EndedStockSection from "@/components/home/EndedStockSection";
import getDateAfter20BusinessDays from "@/util/getDateAfter20BusinessDays";

const HomePage: FC = () => {
  const after20BusiDate = getDateAfter20BusinessDays();

  return (
    <>
      <p>{after20BusiDate.toLocaleString()}</p>
      {/* <UpcomingStockSection /> */}
      {/* <EndedStockSection /> */}
    </>
  );
};

export default HomePage;
