import Button from "@/components/global/Button";
import Container from "@/layout/Container";

function StartCreating() {
  return (
    <section className="mt-16 bg-lightPurple text-white">
      <Container className="start-creating-box common relative">
        <div className="start-creating-wrapper common">
          <div className="star relative mx-auto text-center lg:max-w-lg">
            <h1 className="text-1xl font-bold md:text-4xl md:leading-[52px]">
              Start creating and editing video.
            </h1>
            <p className="mb-10 mt-4 leading-6 lg:pr-10">
              Make your video more engaging with diverse dynamic text, overlays,
              widgets, logos, and other animated elements. It’a very much
              easier.
            </p>
            <Button btnType="primary">Create a video</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default StartCreating;
