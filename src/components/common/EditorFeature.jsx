/* eslint-disable jsx-a11y/label-has-associated-control */
function EditorFeature() {
  return (
    <div
      id="checklist"
      className="relative ml-2 grid grid-cols-[25px_auto] items-center gap-2 text-small"
    >
      <input value="1" checked name="r" type="checkbox" id="01" />
      <label htmlFor="01">Take a video shot</label>
      <input value="2" name="r" type="checkbox" id="02" />
      <label htmlFor="02">Record your music</label>
      <input value="3" name="r" type="checkbox" id="03" />
      <label htmlFor="03">Launch a products</label>
    </div>
  );
}

export default EditorFeature;
