import React from "react";

export default function Search() {
  return (
    <div className="h-[10%] text-green-400 fixed bg-[#1D2123] w-[100%]">
      <div class="relative text-gray-600 focus-within:text-gray-400 my-auto">
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <button
            type="submit"
            class="p-1 focus:outline-none focus:shadow-outline"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              class="w-6 h-6"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </span>
        <input
          type="search"
          name="q"
          class="py-2 px-5 w-[90%] my-6 mx-auto text-sm text-white bg-[#1D2123] rounded-md pl-10 focus:outline-none"
          placeholder="Search..."
          autocomplete="off"
        />
      </div>
    </div>
  );
}
