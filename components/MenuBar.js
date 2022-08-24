import HeaderIcon from "./svg/menubarIcons/HeaderIcon";
import { firstMenuIcon, secondMenuIcon } from "../utilities/IconList";

export default function MenuBar() {
  return (
    <div className="bg-white flex flex-col fixed h-screen">
      <div className="mt-8 mx-2">
        <h1 className="ml-1 font-semibold">Logo</h1>
      </div>

      <div className="mt-16 desktop:-mr-[20px]">
        {firstMenuIcon.map((item, i) => {
          return (
            <div
              key={i}
              className={`cursor-pointer pl-6 hover:bg-[#e2efe1] hover:border-l-[5px] hover:border-[#69aa64] py-1 ${item.id === 5 ? "bg-[#e2efe1] " : "bg-transparent"} ${item.id === 5 ? " border-l-[5px] " : "border-0"} ${
                item.id === 5 ? " border-[#69aa64]" : "border-transparent"
              }`}
            >
              {!item.link ? (
                item.icon
              ) : (
                <div className="py-3">
                  <a href={item.link}>{item.icon}</a>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-16 -mr-[20px]">
        {secondMenuIcon.map((item, i) => {
          return (
            <div key={i} className="cursor-pointer pl-6 py-1 hover:bg-[#e2efe1] hover:border-l-[5px] hover:border-[#69aa64]">
              {item.icon}
            </div>
          );
        })}
      </div>
      <div className="mt-12 cursor-pointer -mr-[20px] pl-6 py-1 hover:bg-[#e2efe1] hover:border-l-[5px] hover:border-[#69aa64]">
        <HeaderIcon height={20} width={20} fill="#767676" className="mb-4 mt-2" />
      </div>
    </div>
  );
}
