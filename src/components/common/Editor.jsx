import { useState } from "react";

import edit from "@/assets/Svg/edit.svg";
import menu from "@/assets/Svg/menu.svg";
import ProgressBar from "@/components//common/ProgressBar";
import EditorFeature from "@/components/common/EditorFeature";
import mergeClasses from "@/lib/utils";

const PROGRESS_VALUES = [
  {
    id: 0,
    title: "Exposure",
    value: 24,
  },
  {
    id: 1,
    title: "Brightness",
    value: 29,
  },
  {
    id: 2,
    title: "Contrast",
    value: 27,
  },
];

const HEADER = [
  {
    id: 0,
    img: edit,
    alt: "menu",
  },
  {
    id: 1,
    img: menu,
    alt: "edit",
  },
];

function Editor() {
  const [active, setActive] = useState(0);

  return (
    <div className="box-shadow absolute top-[42%] z-10 h-[197px] w-[244px] rounded-lg bg-white text-grayLight md:left-[-20%] md:top-2/4 lg:left-[-10%]">
      <div className="mx-auto mt-5 flex h-[60px] max-w-[208px] items-center justify-around gap-3 bg-deemGray">
        {HEADER.map((details) => (
          <button
            key={details.id}
            type="button"
            onClick={() => setActive(details.id)}
            className={mergeClasses(
              details.id === active ? "bg-white" : "bg-deemGray",
              "mx-4 flex h-[50px] w-full items-center justify-center rounded-md transition-all hover:bg-white",
            )}
          >
            <img src={details.img} alt={details.alt} height="20" width="20" />
          </button>
        ))}
      </div>

      <div className="mx-auto mt-4 grid max-w-[208px] gap-y-3">
        {active === 0 ? (
          PROGRESS_VALUES.map((details) => (
            <ProgressBar
              key={details.id}
              initialValue={details.value}
              title={details.title}
            />
          ))
        ) : (
          <EditorFeature />
        )}
      </div>
    </div>
  );
}

export default Editor;
