import mergeClasses from "../../lib/utils";

function Button({
  btnType = "primary",
  children = null,
  background = "#FFA654",
  lg = false,
}) {
  switch (btnType) {
    case "primary":
      return (
        <button
          type="button"
          className={`rounded-[4px] px-6 text-lg font-semibold text-white ${
            lg ? "pb-4 pt-3" : "pb-3 pt-2"
          }`}
          style={{ backgroundColor: background }}
        >
          {children}
        </button>
      );
    case "dark":
      return (
        <button
          type="button"
          className={`rounded-[4px] px-6 text-lg font-semibold text-white ${
            lg ? "pb-4 pt-3" : "pb-3 pt-2"
          }`}
          style={{ backgroundColor: background }}
        >
          {children}
        </button>
      );
    case "outline":
      return (
        <button
          type="button"
          className={mergeClasses(
            "flex items-center gap-3 rounded-[4px] px-6 pb-3 pt-2 text-lg font-semibold transition-all hover:bg-grayLight hover:text-white",
            lg ? "pb-4 pt-3" : "pb-3 pt-2",
          )}
        >
          {children}
        </button>
      );
    case "pink":
      return (
        <button
          type="button"
          className="flex items-center gap-3 rounded-[4px] px-6 pb-3 pt-2 text-lg font-semibold transition-all hover:bg-grayLight hover:text-white"
          style={{ backgroundColor: background }}
        >
          {children}
        </button>
      );
    default:
      return null;
  }
}

export default Button;
