import useGsapScrollTrigger from "@/hooks/useGsapScrollTrigger";

function NavToggler() {
  const { button, isActive, setIsActive } = useGsapScrollTrigger();

  return (
    <div ref={button} className="fixed right-0 z-20 scale-0 transform">
      <button
        type="button"
        className="relative m-5 flex h-16 w-16 cursor-pointer items-center rounded-full"
        onClick={() => setIsActive(!isActive)}
      >
        <div
          className={`relative z-20 w-full ${
            isActive ? "burgerActive" : ""
          } burger`}
        />
      </button>
    </div>
  );
}

export default NavToggler;
