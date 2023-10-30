// import { useState } from "react";
// import React from "react";
import { Star } from "./Star";
import { StarsPr } from "./models/films.model";
import { FC } from "react";

export const Stars: FC<StarsPr> = ({ count }) => {
  if (typeof count === "string" || count > 5 || count < 1) {
    return <ul className="card-body-stars u-clearfix"></ul>;
  } else {
    return (
      <ul className="card-body-stars u-clearfix">
        {Array(count)
          .fill("")
          .map((_, i) => {
            return <Star key={i} />;
          })}
      </ul>
    );
  }
};
