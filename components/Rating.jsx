import { Group } from "@mantine/core";
import React from "react";
import { Star } from "tabler-icons-react";

const Rating = ({ _rate }) => {
  const rate = Math.round(_rate);
  const _rating = () => {
    const starRating = [];
    for (let i = 0; i < rate; i++) {
      starRating.push(
        <Star size={25} strokeWidth={2} color="#bf405b" fill="red" key={i} />
      );
    }
    for (let i = 5; i > rate; i--) {
      starRating.push(
        <Star size={25} strokeWidth={2} color="#bf405b" key={i} />
      );
    }
    return starRating;
  };

  return (
    <>
      <Group position="apart" spacing={1}>
        {_rating()}
      </Group>
    </>
  );
};

export default Rating;
