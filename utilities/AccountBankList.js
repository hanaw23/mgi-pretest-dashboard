import EditIcon from "../components/svg/EditIcon";
import DeleteIcon from "../components/svg/DeleteIcon";

export const accounts = [
  {
    id: 1,
    bank: "Bank KB Bukopin",
    number: "****0876",
    name: "Yusron Taufiq",
    currency: "IDR",
    icons: [{ edit: <EditIcon height={12} width={12} fill="#35942e" />, delete: <DeleteIcon height={12} width={12} fill="#b91c1c" /> }],
  },
  {
    id: 2,
    bank: "Citibank, NA",
    number: "****5525",
    name: "Si Tampan",
    currency: "USD",
    icons: [{ edit: <EditIcon height={12} width={12} fill="#35942e" />, delete: <DeleteIcon height={12} width={12} fill="#b91c1c" /> }],
  },
];
