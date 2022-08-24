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
    <div className=" bg-transparent pt-5 px-10 mb-2 ">
      <div className="flex justify-between desktop:flex-row tab:flex-row flex-col gap-6">
        <div className="flex gap-3">
          <p className="desktop:text-sm tab:text-sm text-[10px] text-gray-400">Perusahaan</p>
          <ArrowIcon className="fill-gray-400 desktop:mt-[2px] tab:mt-[2px] mt-1 tab:h-[20px] desktop:h-[20px] h-[8px] w-[8px]" height={12} width={12} />
          <p className="desktop:text-sm tab:text-sm text-[10px] text-gray-900 font-semibold"> Mitramas Infosys Global</p>
        </div>

        <div className="flex desktop:gap-12 tab:gap-12 justify-between desktop:mr-5 tab:mr-10 mr-2">
          <div className="flex gap-6 mt-1">
            <div className="flex gap-3">
              <SearchIcon className="fill-gray-800 cursor-pointer" height={14} width={14} onClick={handleShowSearch} />
              {showSearch && <input placeholder="Search" className="border border-b-[#b8d8be] border-transparent -mt-2 placeholder:text-sm  outline-none bg-transparent" />}
            </div>
            <BellIcon className="fill-gray-800 cursor-pointer" height={14} width={14} />
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
