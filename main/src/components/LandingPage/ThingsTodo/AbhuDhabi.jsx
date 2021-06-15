import React from "react";
import "react-multi-carousel/lib/styles.css";
import { PopularThings } from "./PopularThings";
import { WaysToTourDhubai } from "./waystotour";
import { Cultural } from "./culturalandtheme";

function AbhuDhabi() {
  return (
    <div>
      <PopularThings />
      <WaysToTourDhubai />
      <Cultural />
    </div>
  );
}
export { AbhuDhabi };
