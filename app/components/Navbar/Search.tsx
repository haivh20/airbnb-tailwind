import React from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="border-[1px]  md:w-auto w-full transition shadow-sm py-2 hover:shadow-md cursor-pointer rounded-full">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold px-6">AnyWhere</div>
        <div className="hidden sm:block border-x-[1px] flex-1 text-center text-sm font-semibold px-6">
          AnyWeek
        </div>
        <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
          <div className="hidden sm:block">Add Guest</div>
          <div className="p-2 bg-red-500 rounded-full text-white">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
