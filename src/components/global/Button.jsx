import mergeClasses from "@/lib/utils";

function Button({
  btnType = "primary",
  children = null,
  background = "#FFA654",
  lg = false,
}) {
  const commonClassNames = mergeClasses(
    "rounded-[4px] px-6 text-lg font-semibold",
    lg ? "pb-4 pt-3" : "pb-3 pt-2",
  );
  switch (btnType) {
    case "primary":
      return (
        <button
          type="button"
          className={mergeClasses(commonClassNames, "text-white")}
          style={{ backgroundColor: background }}
        >
          {children}
        </button>
      );
    case "dark":
      return (
        <button
          type="button"
          className={mergeClasses(commonClassNames, "text-white")}
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
            commonClassNames,
            "flex items-center gap-3 font-semibold transition-all hover:bg-grayLight hover:text-white",
          )}
        >
          {children}
        </button>
      );
    case "pink":
      return (
        <button
          type="button"
          className={mergeClasses(
            commonClassNames,
            "text-lightPurple flex items-center pb-4 pt-3 text-sm font-medium transition-all",
          )}
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
