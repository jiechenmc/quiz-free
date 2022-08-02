import type { Component } from "solid-js";
import MenuItems from "./MenuItems";

const Sidebar: Component = () => {
  return (
    <div class="bg-accent h-screen py-4">
      <div class="flex flex-col">
        <div class="avatar offline placeholder ml-auto mr-auto">
          <div class="bg-neutral-focus text-neutral-content rounded-full w-8 md:w-16 lg:w-24">
            <span class="text-lg sm:text-2xl md:text-3xl">U</span>
          </div>
        </div>
        <div>
          <MenuItems />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
