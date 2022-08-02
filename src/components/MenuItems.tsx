import type { Component } from "solid-js";

const MenuItems: Component = () => {
  return (
    <div>
      <ul class="menu-horizontal bg-inherit gap-1">
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
        <li>
          <input
            type="text"
            placeholder="Search ..."
            class="input input-bordered input-accent-content w-full max-w-xs"
          />
        </li>
      </ul>
    </div>
  );
};

export default MenuItems;
