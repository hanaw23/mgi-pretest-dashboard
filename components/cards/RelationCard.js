import HeaderCard from "../statics/HeaderCard";
import { relation } from "../../utilities/RelationList";

export default function RelationCard() {
  return (
    <div className="mx-6 mt-6 mb-6 desktop:mb-0">
      <HeaderCard title="Relasi" action="Lihat semua" />

      <div className="mt-10">
        {relation.map((rel, i) => {
          return (
            <div key={i} id={rel.id} className="flex">
              <div className="mt-5">{rel.icon}</div>

              <div className="mx-5 mt-2">
                <p className="text-[25px] font-semibold ">{rel.amount}</p>
                <p className="text-[15px] text-gray-500">{rel.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
