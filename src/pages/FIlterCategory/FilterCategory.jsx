// import { useEffect, useState } from 'react';

import { useLoaderData } from "react-router-dom";
import FilteredCard from "../../shared/FilteredCard/FilteredCard";

const FilterCategory = () => {
  const crafts = useLoaderData();

  const uniqueSubcategory = crafts.find(
    (craft, index, array) =>
      array.findIndex(
        (item) => item.subcategoryName === craft.subcategoryName
      ) === index
  )?.subcategoryName;

  const slicedSubcategory = uniqueSubcategory
    ? [uniqueSubcategory].slice(0, 1)
    : [];

  return (
    <div className="dark:bg-gray-800 dark:text-white">
      <div>
        <h2 className="text-center md:text-5xl text-3xl my-6">
          Crafts in Category : <span className="font-bold">{slicedSubcategory}</span>
        </h2>
      </div>
      <div className="grid lg:grid-cols-5 gap-6 p-6">
        {crafts.map((craft) => (
          <FilteredCard key={craft._id} craft={craft}></FilteredCard>
        ))}
      </div>
    </div>
  );
};

export default FilterCategory;
