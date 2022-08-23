import { activities } from "../../utilities/ActivityList";

export default function ActivityCard() {
  return (
    <div>
      <div>
        <h1 className="text-[20px] font-bold">Aktivitas</h1>
      </div>

      <div className="mt-12">
        {activities.map((act, i) => {
          return (
            <div className="text-gray-700 mb-6" key={i}>
              <p className="mb-2 w-[400px] text-sm">{act.desc}</p>
              <p className="text-xs text-gray-400">{act.time}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
