import { useState } from "react";

import ArrowIcon from "../svg/ArrowIcon";
import SearchIcon from "../svg/SearchIcon";
import BellIcon from "../svg/BellIcon";

export default function HeaderSection() {
  const [showSearch, setShowSearch] = useState(false);

  const handleShowSearch = () => {
    setShowSearch(true);

    if (showSearch) {
      setShowSearch(!showSearch);
    }
  };

  return (
    <div className="w-screen bg-transparent pt-5 px-10 mb-2">
      <div className="flex justify-between">
        <div className="flex gap-3">
          <p className="text-sm text-gray-400">Perusahaan</p>
          <ArrowIcon className="fill-gray-400 mt-[6px]" height={12} width={12} />
          <p className="text-sm text-gray-900 font-semibold"> Mitramas Infosys Global</p>
        </div>

        <div className="flex gap-12 mr-5">
          <div className="flex gap-6 mt-1">
            <div className="flex gap-3">
              <SearchIcon className="fill-gray-800 cursor-pointer" height={14} width={14} onClick={handleShowSearch} />
              {showSearch && <input placeholder="Search" className="border border-b-[#b8d8be] border-transparent -mt-2 placeholder:text-sm  outline-none bg-transparent" />}
            </div>
            <BellIcon className="fill-gray-800" height={14} width={14} />
          </div>

          <div className="flex gap-2">
            <div className="">
              <img src="/assets/images.jfif" height={30} width={30} className="border border-transparent rounded-2xl -mt-1" />
            </div>
            <p className="text-gray-800 text-sm font-semibold">John Doe</p>
          </div>
        </div>
      </div>
    </div>
  );
}
