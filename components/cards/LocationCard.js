import { locationCompany } from "../../utilities/LocationList";
import HeaderCard from "../statics/HeaderCard";

export default function LocationCard() {
  return (
    <div className="mx-6 mt-3">
      <HeaderCard title="Lokasi" action="Lihat semua" />

      <div className="mt-3 desktop:mb-2 tab:mb-2 mb-6">
        <div className="grid   desktop:grid-cols-3 tab:grid-cols-3 grid-row gap-4 text-white">
          {locationCompany.map((item, i) => {
            return (
              <div className={`${item.id === 1 ? "bg-[#175e12] " : item.id === 2 ? "bg-[#35942e]" : " bg-[#4bb943]"} h-[80px] desktop:w-[300px] rounded flex justify-between `} key={i}>
                <div className="mx-5 mt-5">{item.icon}</div>
                <div className="mx-5 mt-2">
                  <p className="text-[25px] font-semibold text-end">{item.amout}</p>
                  <p className="text-[10px] text-center text-gray-300">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
