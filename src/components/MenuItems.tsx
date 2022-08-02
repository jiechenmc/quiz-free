import type { Component } from "solid-js";

const MenuItems: Component = () => {
  return (
    <div>
      <ul class="menu bg-inherit justify-center w-full">
        <li>
          <button class="btn bg-inherit border-0 hover:bg-accent-content hover:bg-opacity-[0.1]">
            Home
          </button>
        </li>
        <li>
          <button class="btn bg-inherit border-0 hover:bg-accent-content hover:bg-opacity-[0.1]">
            Flash Cards
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MenuItems;
