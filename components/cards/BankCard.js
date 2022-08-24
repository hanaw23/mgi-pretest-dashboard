import HeaderCard from "../statics/HeaderCard";
import VisaIcon from "../svg/VisaIcon";
import { accounts } from "../../utilities/AccountBankList";

export default function BankCard() {
  return (
    <div className="mx-6 mt-3">
      <HeaderCard button title="Akun Bank" actionBtn="Tambah Akun Bank" classNameBtn="cursor-pointer bg-[#35942e] text-xs font-semibold text-white px-2 py-1 rounded desktop:w-[200px] tab:w-[200px] w-[90px]" />

      <div className="flex flex-col gap-6 mt-8">
        {accounts.map((acc, i) => {
          return (
            <div key={i}>
              <div></div>

              <div className="flex gap-6">
                <div>
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-400 desktop:h-[95px] tab:h-[95px] h-[95px] desktop:w-[150px] tab:w-[150px] w-[95px] rounded-[10px] flex justify-end">
                    <VisaIcon className="fill-white mx-3 mt-12" height={40} width={40} />
                  </div>
                </div>

                <div className="mt-1">
                  <div className="flex justify-between  desktop:w-[300px] tab:w-[300px] w-[150px] desktop:flex-row tab:flex-row flex-col">
                    <p className="text-sm font-bold">{acc.bank}</p>
                    {acc.icons?.map((icon, i) => {
                      return (
                        <div className="flex gap-3 cursor-pointer mt-2" key={i}>
                          {icon.edit}
                          {icon.delete}
                        </div>
                      );
                    })}
                  </div>

                  <div className=" text-gray-400 text-xs mt-6">
                    <span>{acc.number}</span>
                    <span className="ml-1 mr-1">-</span>
                    <span>{acc.name}</span>
                    <p className="mt-2">{acc.currency}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
