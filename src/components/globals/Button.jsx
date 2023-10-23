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
          className="text-lg rounded-[4px] px-6 pb-3 pt-2 font-semibold text-white"
          style={{ backgroundColor: background }}
        >
          {children}
        </button>
      );
    case "outline":
      return (
        <button
          type="button"
          className="text-lg hover:bg-grayLight rounded-[4px] px-6 pb-3 pt-2 transition-all hover:text-white"
        >
          {children}
        </button>
      );
    default:
      break;
  }
}

export default Button;
