import EditIcon from "../svg/EditIcon";
import HeadersCardProfile from "../statics/HeadersCardProfile";
import { DetailProfileCompany } from "../../utilities/DetailCompanyList";
import SwitchToggle from "../toggles/SwitchToggle";

export default function DetailCompanyForm() {
  return (
    <div>
      <HeadersCardProfile
        img1="assets/building.webp"
        desc1="building"
        className1="h-[175px] w-[700px] border border-transparent rounded-[5px]"
        img2="assets/mitramas-logo.jfif"
        desc2="logo"
        className2="border-2 border-[#b8d8be] rounded-[100%] z-10 -mt-[100px] mx-auto"
        height={200}
        width={200}
      />

      {DetailProfileCompany.map((item, i) => {
        return (
          <div key={i} className="mb-8">
            <div className="flex text-center flex-col mt-8 mx-auto">
              <h1 className="font-bold text-[25px] mb-1">{item.companyName}</h1>
              <p className="text-gray-400 text-xs">{item.provides}</p>

              <div className="flex gap-2 justify-center mt-6 cursor-pointer">
                <EditIcon className="fill-[#175e12]" height={15} width={15} />
                <p className="text-xs text-[#175e12] font-semibold">Sunting profil</p>
              </div>
            </div>

            <div className="mt-10 mx-6">
              {item.status?.map((stat, i) => {
                return (
                  <div className="mb-2" key={i}>
                    <p className="text-xs text-gray-400 font-bold">{stat.label}</p>
                    <SwitchToggle />
                  </div>
                );
              })}

              {item.detail?.map((det, i) => {
                return (
                  <div key={i}>
                    <div className="mb-4">
                      <p className="text-xs text-gray-400 font-bold">{det.label}</p>
                      <div className="flex justify-between mt-2">
                        <p className="text-m text-gray-900 font-semibold">{det.value}</p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {item.contact?.map((cont, i) => {
                return (
                  <div className="text-sm" key={i}>
                    <div className="mb-4">
                      <p className="text-xs text-gray-400 font-bold">{cont.label}</p>
                      <div className="flex gap-2 mt-2">
                        <div className="mt-[1px]">{cont.icon}</div>
                        <span className={`font-bold text-[#175e12] ${cont.value === "021-5678-1234" ? "no-underline" : "underline"}`}>{cont.value}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
