import HeaderSection from "../../components/statics/HeaderSection";
import DetailCompanyForm from "../../components/forms/DetailCompanyForm";
import LocationCards from "../../components/cards/LocationCard";
import ActivityCard from "../../components/cards/ActivityCard";
import RelationCard from "../../components/cards/RelationCard";
import BankCard from "../../components/cards/BankCard";

export default function index() {
  return (
    <div className="bg-[#d9eada] h-screen w-screen overflow-x-hidden text-gray-900">
      <div>
        <HeaderSection />
      </div>

      <main className="mt-6 h-fit px-10">
        <div className="flex gap-6 mt-2 mb-10">
          <div className=" w-[450px] border border-transparent bg-white rounded-[5px]">
            <DetailCompanyForm />
          </div>

          <div className="h-screen w-[1000px] ">
            <div className="h-[150px]  border border-transparent bg-white rounded-[5px]">
              <LocationCards />
            </div>

            <div className="flex gap-8  h-screen mt-5 ">
              <div className="h-screen  w-[500px]">
                <div className="grid grid-rows-2 gap-6 ">
                  <div className="h-[380px] bg-white rounded-[5px]">
                    <BankCard />
                  </div>
                  <div className=" h-[380px] bg-white rounded-[5px]">
                    <RelationCard />
                  </div>
                </div>
              </div>
              <div className="py-5 px-5 h-screen border border-transparent w-[500px]  bg-white rounded-[5px]">
                <ActivityCard />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
