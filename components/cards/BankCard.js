import HeaderCard from "../statics/HeaderCard";
import { accounts } from "../../utilities/AccountBankList";
import VisaIcon from "../svg/VisaIcon";

export default function BankCard() {
  return (
    <div className="mx-6 mt-3">
      <HeaderCard button title="Akun Bank" actionBtn="Tambah Akun Bank" classNameBtn="cursor-pointer bg-[#35942e] text-sm text-white px-2 py-1 rounded w-[200px]" />

      <div className="flex flex-col gap-6 mt-8">
        {accounts.map((acc, i) => {
          return (
            <div key={i}>
              <div></div>

              <div className="flex gap-6">
                <div>{acc.card}</div>

                <div className="mt-1">
                  <div className="flex justify-between  w-[300px]">
                    <p className="text-sm font-bold">{acc.bank}</p>
                    {acc.icons?.map((icon, i) => {
                      return (
                        <div className="flex gap-3 cursor-pointer" key={i}>
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
