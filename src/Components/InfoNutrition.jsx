import React from "react";

const InfoNutrition = ({ nomKeyData, unité }) => {
  const unitéLabel =
    nomKeyData === "calorieCount" ? `${unité} cal` : `${unité} g`;

  return (
    <div>
      <p>{unitéLabel}</p>
    </div>
  );
};

export default InfoNutrition;
