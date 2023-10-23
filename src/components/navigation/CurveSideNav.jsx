import useBtnGsapScrollTrigger from "@/hooks/useBtnGsapScrollTrigger";

function CurveSideNav() {
  const { button } = useBtnGsapScrollTrigger();

  return (
    <div ref={button} className="headerButtonContainer">
      <button type="button" className="toggle-btn">
        <div />
      </button>
    </div>
  );
}

export default CurveSideNav;
