import vid1 from "@/assets/Png/templates/vid1.png";
import vid2 from "@/assets/Png/templates/vid2.png";
import vid3 from "@/assets/Png/templates/vid3.png";
import vid4 from "@/assets/Png/templates/vid4.png";
import vid5 from "@/assets/Png/templates/vid5.png";
import vid6 from "@/assets/Png/templates/vid6.png";
import Button from "@/components/global/Button";
import Container from "@/layout/Container";

const TEMPLATES = [
  {
    title: "Recommended",
  },
  {
    title: "Corporate",
  },
  {
    title: "Promo",
  },
  {
    title: "Intro/Outro",
  },
  {
    title: "Education",
  },
  {
    title: "Sport",
  },
  {
    title: "Real Estate",
  },
  {
    title: "Birthday",
  },
  {
    title: "Slideshow",
  },
];

function Template() {
  return (
    <section>
      <Container>
        <h1 className="font-primary text-1xl font-bold md:text-center md:text-4xl">
          Thousands of templates
        </h1>

        <div className="mt-5 grid grid-cols-3 place-items-center md:grid-cols-5 lg:grid-cols-9">
          {TEMPLATES.map(({ title }) => (
            <button type="button" key={title}>
              {title}
            </button>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 items-center gap-3 md:grid-cols-4">
          <div className="">
            <img src={vid4} alt="" />
          </div>
          <div className="col-2">
            <img src={vid6} alt="" className="pb-5" />
            <img src={vid2} alt="" />
          </div>
          <img src={vid1} alt="" />
          <div>
            <img src={vid3} alt="" className="pb-5" />
            <img src={vid5} alt="" />
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <Button btnType="primary">Create a video</Button>
        </div>
      </Container>
    </section>
  );
}

export default Template;
