import React from "react";

import { Categories } from "../components/Categories";
import { PizzaBlock } from "../components/PizzaBlock";
import { Skeleton } from "../components/PizzaBlock/Skeleton";
import { Sort } from "../components/Sort";

export const Home: React.FC = () => {
  const [itemsList, setItemsList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://62a09ad3202ceef70871ea61.mockapi.io/items")
      .then((response) => response.json())
      .then((items) => {
        setItemsList(items);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">
        {isLoading ? "Загрузка..." : "Все пиццы"}
      </h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, idx) => {
              return <Skeleton key={idx} />;
            })
          : itemsList.map((item, idx) => {
              return <PizzaBlock key={idx} {...item} />;
            })}
      </div>
    </>
  );
};
