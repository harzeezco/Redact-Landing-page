import vid1 from "@/assets/Png/templates/vid1.png";
import vid2 from "@/assets/Png/templates/vid2.png";
import vid3 from "@/assets/Png/templates/vid3.png";
import vid4 from "@/assets/Png/templates/vid4.png";
import vid5 from "@/assets/Png/templates/vid5.png";
import vid6 from "@/assets/Png/templates/vid6.png";
import vid1Webp from "@/assets/Webp/templates/vid1.webp";
import vid2Webp from "@/assets/Webp/templates/vid2.webp";
import vid3Webp from "@/assets/Webp/templates/vid3.webp";
import vid4Webp from "@/assets/Webp/templates/vid4.webp";
import vid5Webp from "@/assets/Webp/templates/vid5.webp";
import vid6Webp from "@/assets/Webp/templates/vid6.webp";
import Button from "@/components/global/Button";
import Image from "@/components/global/Image";
import Container from "@/layout/Container";

function Template() {
  return (
    <section>
      <Container>
        <h1 className="font-primary text-1xl font-bold md:text-center md:text-4xl">
          Thousands of templates
        </h1>

        <div className="slider mt-4">
          <div className="slides gap-4 lg:flex">
            <div>Recommended</div>
            <div>Corporate</div>
            <div>Promo</div>
            <div>Intro/Outro</div>
            <div>Education</div>
            <div>Sport</div>
            <div>Real Estate</div>
            <div>Birthday</div>
            <div>Slideshow</div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 items-center gap-3 md:grid-cols-4">
          <div className="">
            <Image
              defaultSrc={vid4Webp}
              alternateSrc={vid4}
              alt="adventure"
              loading="lazy"
              width="270"
              height="442"
            />
          </div>
          <div className="col-2">
            <Image
              defaultSrc={vid6Webp}
              alternateSrc={vid6}
              alt="adventure"
              className="pb-5"
              loading="lazy"
              width="270"
              height="205"
            />
            <Image
              defaultSrc={vid2Webp}
              alternateSrc={vid2}
              alt="adventure"
              loading="lazy"
              width="270"
              height="205"
            />
          </div>
          <Image
            defaultSrc={vid1Webp}
            alternateSrc={vid1}
            alt="adventure"
            loading="lazy"
            width="270"
            height="442"
          />
          <div>
            <Image
              defaultSrc={vid3Webp}
              alternateSrc={vid3}
              alt="adventure"
              className="pb-5"
              loading="lazy"
              width="270"
              height="205"
            />
            <Image
              defaultSrc={vid5Webp}
              alternateSrc={vid5}
              alt="adventure"
              loading="lazy"
              width="270"
              height="205"
            />
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
