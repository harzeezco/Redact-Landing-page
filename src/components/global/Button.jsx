function Button({
  btnType = "secondary",
  children = null,
  background = "#FFA654",
}) {
  switch (btnType) {
    case "primary":
      return (
        <button type="button" className="text-purple-950">
          {children}
        </button>
      );
    case "secondary":
      return (
        <button
          type="button"
          className="rounded-[4px] px-6 pb-3 pt-2 text-lg font-semibold text-white"
          style={{ backgroundColor: background }}
        >
          {children}
        </button>
      );
    case "outline":
      return (
        <button
          type="button"
          className="rounded-[4px] px-6 pb-3 pt-2 text-lg transition-all hover:bg-grayLight hover:text-white"
        >
          {children}
        </button>
      );
    default:
      break;
  }
}

export default Button;
