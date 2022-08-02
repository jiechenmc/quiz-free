import { Component } from "solid-js";
import Sidebar from "./Sidebar";
import Content from "./Content";

const AppScreen: Component = () => {
  return (
    <div class="grid grid-cols-10">
      <div class="col-span-2">
        <Sidebar />
      </div>
      <div class="col-span-8">
        <Content />
      </div>
    </div>
  );
};

export default AppScreen;
