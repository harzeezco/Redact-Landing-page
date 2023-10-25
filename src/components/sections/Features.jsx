import { FEATURES } from "../../lib/data";
import card from "@/assets/Png/card.png";
import card1 from "@/assets/Png/card2.png";
import Button from "@/components/global/Button";
import Container from "@/layout/Container";

function Features() {
  return (
    <Container className="mt-5 grid place-items-center gap-x-32 gap-y-14 md:grid-cols-2 md:gap-y-32">
      <div>
        <h1 className="text-1xl font-bold md:text-4xl md:leading-[52px]">
          Rich, easy interactive
          <br />
          elements
        </h1>
        <p className="mb-10 mt-4 pr-10 leading-6 text-grayDark md:pr-32">
          Make your video more engaging with diverse dynamic text, overlays,
          widgets, logos, and other animated elements. It’a very much easier.
        </p>
        <Button btnType="primary">Create a video</Button>
      </div>

      <img src={card1} alt="edit" height="457" width="570" />

      <div className="order-last">
        <img src={card} alt="text search" height="457" width="570" />
      </div>
      <div className="md:order-last">
        <h1 className="mb-10 font-primary text-1xl font-bold md:text-4xl md:leading-[52px]">
          Over a million royalty-free stock media
        </h1>

        {FEATURES.map((feature) => (
          <div
            key={feature.id}
            className="mt-5 grid grid-cols-[30px_1fr] gap-x-5"
          >
            <img src={feature.icon} alt={feature.alt} width="32" height="32" />
            <div>
              <h2 className="font-semibold sm:text-lg">{feature.title}</h2>
              <p className="mt-2 pr-10 text-sm leading-6 text-grayDark">
                {feature.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Features;
