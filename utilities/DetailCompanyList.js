import EmailIcon from "../components/svg/EmailIcon";
import PhoneIcon from "../components/svg/PhoneIcon";
import WebsiteIcon from "../components/svg/WebsiteIcon";

export const DetailProfileCompany = [
  {
    companyName: "Mitramas Infosys Global",
    provides: "Layanan IT",
    status: [{ label: "Status Perusahaan", value: "Aktif" }],
    detail: [
      { label: "Singkatan", value: "MIG" },
      { label: "Alamat Perusahaan", value: "Jl. Tebet Raya No.42, Jakarta Selatan" },
      { label: "Penanggung Jawab (PIC)", value: "John Doe" },
      { label: "Tanggal PKP", value: "03 Maret 2021" },
    ],
    contact: [
      { label: "E-mail", icon: <EmailIcon height={15} width={15} className="fill-[#175e12] mt-[2px]" />, value: "mig@mitrasolusi.group" },
      { label: "No. Telp", icon: <PhoneIcon height={15} width={15} className="fill-[#175e12] mt-[2px]" />, value: "021-5678-1234" },
      {
        label: "Situs Web",
        icon: <WebsiteIcon height={15} width={15} className="fill-[#175e12] mt-[2px]" />,
        value: (
          <a href="http://mitramas.com/" target="_blank" className="no-underline">
            mitramas.com
          </a>
        ),
      },
    ],
  },
];
