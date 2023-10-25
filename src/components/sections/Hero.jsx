import arrow from "@/assets/Png/roundBgArrowIcon.png";
import video from "@/assets/Png/video.png";
import videoSidNav from "@/assets/Png/videoSideNav.png";
import playIcon from "@/assets/Svg/playIcon.svg";
import Button from "@/components/global/Button";
import Container from "@/layout/Container";

function Hero() {
  return (
    <section>
      <Container className="grid place-items-center gap-y-14 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <h1 className="text-5xl font-bold leading-[56px]">
            Edit your
            <br />
            videos with
            <br />
            emotion
          </h1>
          <p className="mt-2 pr-10 text-sm leading-6 text-grayDark md:pr-20">
            The best video editors in town. The epitome of video editing, best
            effects and cuts Videos for a better life For a better watching
            experience.
          </p>
          <div className="mt-10 flex gap-x-4">
            <Button btnType="primary" lg>
              Try for free
            </Button>
            <Button btnType="outline" lg>
              <img src={playIcon} alt="play" />
              Watch video
            </Button>
          </div>
        </div>
        <div className="lg:justify-self-end">
          <div className="grid grid-cols-[54px_1fr] gap-x-4">
            <img src={videoSidNav} alt="video bars" height="340" width="54" />
            <div className="video-container common relative">
              <img src={video} alt="video" height="364" width="100%" />
            </div>
          </div>
          <div className="mr-8 text-right">
            <div className="mr-16 flex justify-end">
              <Button background="#FED1D4" btnType="pink">
                + Add music
              </Button>
            </div>
            <button type="button" className="-mt-8">
              <img src={arrow} alt="arrow" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
