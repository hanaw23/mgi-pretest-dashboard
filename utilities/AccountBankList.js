import EditIcon from "../components/svg/EditIcon";
import DeleteIcon from "../components/svg/DeleteIcon";
import VisaIcon from "../components/svg/VisaIcon";

export const accounts = [
  {
    id: 1,
    bank: "Bank KB Bukopin",
    number: "****0876",
    name: "Yusron Taufiq",
    currency: "IDR",
    icons: [{ edit: <EditIcon height={12} width={12} fill="#35942e" />, delete: <DeleteIcon height={12} width={12} fill="#b91c1c" /> }],
    card: (
      <div className="bg-gradient-to-r from-blue-500 to-cyan-400 desktop:h-[95px] tab:h-[95px] h-[50px] desktop:w-[150px] tab:w-[150px] w-[90px] rounded-[10px] flex justify-end">
        <VisaIcon className="fill-white mx-3 mt-12" height={40} width={40} />
      </div>
    ),
  },
  {
    id: 2,
    bank: "Citibank, NA",
    number: "****5525",
    name: "Si Tampan",
    currency: "USD",
    icons: [{ edit: <EditIcon height={12} width={12} fill="#35942e" />, delete: <DeleteIcon height={12} width={12} fill="#b91c1c" /> }],
    card: (
      <div className="bg-gradient-to-r from-blue-500 to-cyan-400 desktop:h-[95px] tab:h-[95px] h-[50px] desktop:w-[150px] tab:w-[150px] w-[90px] rounded-[10px] flex justify-end">
        <VisaIcon className="fill-white mx-3 mt-12" height={40} width={40} />
      </div>
    ),
  },
];
