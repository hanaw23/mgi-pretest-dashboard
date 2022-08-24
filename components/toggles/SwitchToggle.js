import { useState } from "react";

import Styles from "./Switch.module.css";

export default function SwitchToggle() {
  const [isToggled, setIsToggled] = useState(true);

  const onToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="flex justify-between mt-2">
      <span className="text-m font-bold text-[#175e12] ">{isToggled ? "Aktif" : "Tidak Aktif"}</span>
      <label className={`${Styles.toggleSwitch}`}>
        <input type="checkbox" checked={isToggled} onChange={() => onToggle()} />
        <span className={`${Styles.switch}`} />
      </label>
    </div>
  );
}
