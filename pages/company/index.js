import HeaderSection from "../../components/statics/HeaderSection";
import DetailCompanyForm from "../../components/forms/DetailCompanyForm";
import LocationCards from "../../components/cards/LocationCard";

export default function index() {
  return (
    <div className="bg-[#94B49F] h-screen w-screen overflow-x-hidden text-gray-900">
      <div>
        <HeaderSection />
      </div>

      <main className="mt-6 h-fit px-10">
        <div className="flex gap-6 mt-2 mb-10">
          <div className=" w-[450px] border border-transparent bg-white rounded-[5px]">
            <DetailCompanyForm />
          </div>
          <div className="h-screen w-[1000px]  ">
            <div className="h-[150px]  border border-transparent bg-white rounded-[5px]">
              <LocationCards />
            </div>
            <div className="py-5 px-5 border border-gray-800"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
