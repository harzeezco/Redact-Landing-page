import { useState } from "react";

function ProgressBar({
  accentBackground = "#FFA654",
  initialValue = 0,
  title = "Exposure",
}) {
  const [value, setValue] = useState(initialValue);

  return (
    <div className="flex items-center gap-3">
      <p className="text-sm font-medium text-grayLight">{title}</p>
      <input
        onChange={(e) => setValue(e.target.value)}
        type="range"
        min="0"
        max="100"
        value={value}
        className="PB-range-slider h-1 w-20 cursor-pointer"
        style={{ accentColor: accentBackground }}
        id="myRange"
      />
      <p className="justify-self-end text-xs font-semibold text-grayLight">{`${value}%`}</p>
    </div>
  );
}

export default ProgressBar;
