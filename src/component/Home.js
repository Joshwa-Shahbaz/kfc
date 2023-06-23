import React from "react";
import { Menu } from "./Menu";
import { Slider } from "./Slider";
import { Categories } from "./Categories";
import { Cards } from "./Cards";

export const Home = () => {
  return (
    <>
      <Menu />
      <Slider />
      <Categories />
      <Cards />
    </>
  );
};
