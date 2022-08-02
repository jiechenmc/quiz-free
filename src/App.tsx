import type { Component } from "solid-js";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

const App: Component = () => {
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

export default App;
