import mergeClasses from "../lib/utils";

function Container({ children, className }) {
  return (
    <div
      className={mergeClasses("mx-auto max-w-[1070px] px-5 py-14", className)}
    >
      {children}
    </div>
  );
}

export default Container;
