import React from "react";

import { NotFoundBlock } from "../components/NotFoundBlock";

export const NotFound = () => {
  return (
    <>
      <h1 className="content__title_404_error">Ошибка</h1>
      <NotFoundBlock />
      <h3 className="content__describe_404_error">
        Запрашиваемая страница не найдена :-(
      </h3>
    </>
  );
};
