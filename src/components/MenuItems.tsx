import { Component, createSignal } from "solid-js";

const MenuItems: Component = () => {
  const [query, setQuery] = createSignal("");

  const handleKeyPress = (kb: KeyboardEvent) => {
    if (kb.key === "Enter") {
      const input = kb.target as HTMLInputElement;
      setQuery(input.value);
    }
  };

  return (
    <div>
      <ul class="menu-horizontal bg-inherit gap-1">
        <li>
          <a
            href="/"
            class="btn bg-inherit border-0 hover:bg-accent-content hover:bg-opacity-[0.1]"
          >
            Home
          </a>
        </li>
        <li>
          <button class="btn bg-inherit border-0 hover:bg-accent-content hover:bg-opacity-[0.1]">
            Flash Cards
          </button>
        </li>
        <li>
          <input
            id="search"
            type="text"
            placeholder="Search ..."
            class="input input-bordered input-accent-content w-full max-w-xs"
            onKeyDown={handleKeyPress}
          />
        </li>
      </ul>
    </div>
  );
};

export default MenuItems;
