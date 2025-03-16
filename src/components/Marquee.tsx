/** @format */

import React from "react";
import MarqueeItem from "./MarqueeItem";

const Marquee = () => {
  const upperMarquee = [
    "/svg/01.svg",
    "/svg/02.svg",
    "/svg/03.svg",
    "/svg/04.svg",
    "/svg/05.svg",
    "/svg/06.svg",
    "/svg/07.svg",
    "/svg/08.svg",
    "/svg/09.svg",
    "/svg/10.svg",
    "/svg/11.svg",
  ];

  const lowerMarquee = [
    "/svg/12.svg",
    "/svg/13.svg",
    "/svg/14.svg",
    "/svg/15.svg",
    "/svg/16.svg",
    "/svg/17.svg",
    "/svg/18.svg",
    "/svg/19.svg",
    "/svg/20.svg",
    "/svg/21.svg",
    "/svg/22.svg",
  ];

  return (
    <div className="container mx-auto">
      <MarqueeItem images={upperMarquee} from={0} to={"-100%"} />
      <MarqueeItem images={lowerMarquee} from={"-100%"} to={0} />
    </div>
  );
};

export default Marquee;
