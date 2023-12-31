import desktopPng from "@/assets/Png/desktop.png";
import arrow from "@/assets/Png/roundBgArrowIcon.png";
import videoSidNav from "@/assets/Png/videoSideNav.png";
import playIcon from "@/assets/Svg/playIcon.svg";
import mobile from "@/assets/Webp/400w.webp";
import desktop from "@/assets/Webp/desktop.webp";
import tablet from "@/assets/Webp/tablet.webp";
import videoSidNavWebp from "@/assets/Webp/videoSideNav.webp";
import Editor from "@/components/common/Editor";
import Button from "@/components/global/Button";
import Image from "@/components/global/Image";
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
          <p className="mt-2 pr-10 text-small leading-6 text-grayDark md:pr-20">
            The best video editors in town. The epitome of video editing, best
            effects and cuts Videos for a better life For a better watching
            experience.
          </p>
          <div className="mt-10 flex gap-x-4">
            <Button btnType="primary" lg>
              Try for free
            </Button>
            <Button btnType="outline" lg>
              <img src={playIcon} alt="play" height="22" width="22" />
              Watch video
            </Button>
          </div>
        </div>
        <div className="relative lg:justify-self-end">
          <Editor />
          <div className="grid grid-cols-[54px_1fr] gap-x-4">
            <Image
              defaultSrc={videoSidNavWebp}
              alternateSrc={videoSidNav}
              alt="video bars"
              height="340"
              width="54"
            />
            <div className="video-container common relative">
              <img
                src={desktopPng}
                srcSet={`${mobile} 400w, ${tablet} 800w, ${desktop} 1200w`}
                sizes="(max-width: 480px) 100vw, (max-width: 1440px) 49vw,"
                alt="video poster"
                width="100%"
                className="h-64 lg:h-96"
              />
            </div>
          </div>
          <div className="mr-8 mt-10 text-right md:mt-3">
            <div className="mr-16 flex justify-end">
              <Button background="#FED1D4" btnType="pink">
                + Add music
              </Button>
            </div>
            <a href="#template" className="-mt-8">
              <img src={arrow} alt="arrow" height="48" width="48" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
