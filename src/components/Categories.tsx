import React from "react";

const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

export const Categories: React.FC = () => {
  const [active, setActive] = React.useState(0);
  return (
    <div className="categories">
      <ul>
        {categories.map((item, idx) => {
          return (
            <li
              key={idx}
              onClick={() => setActive(idx)}
              className={active === idx ? "active" : ""}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
