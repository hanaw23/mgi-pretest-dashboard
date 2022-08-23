import { useState } from "react";

import SkybuildIcon from "./svg/menubarIcons/SkybuildIcon";
import HeaderIcon from "./svg/menubarIcons/HeaderIcon";
import { firstMenuIcon, secondMenuIcon } from "../utilities/IconList";

export default function MenuBar() {
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(true);
  };

  return (
    <div className="bg-white flex flex-col">
      <div className="mt-8 mx-2">
        {/* <img src="assets/logo.png" height={70} width={70} /> */}
        <h1 className="">Logo</h1>
      </div>

      <div className="mt-16 mx-auto">
        {firstMenuIcon.map((item, i) => {
          return <div key={i}>{item.icon}</div>;
        })}
        <div className={`cursor-pointer ${isClick ? "bg-[#abdda7]" : "bg-transparent"}  z-30 h-[30px] hover:bg-[#abdda7]`} onClick={handleClick}>
          <a href="/company">
            <SkybuildIcon height={20} width={20} />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-16">
        {secondMenuIcon.map((item, i) => {
          return <div key={i}>{item.icon}</div>;
        })}
      </div>
      <div className="mx-auto mt-12">
        <HeaderIcon height={20} width={20} fill="#767676" className="mb-8" />
      </div>
    </div>
  );
}
