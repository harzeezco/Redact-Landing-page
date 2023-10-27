import arrow from "@/assets/Png/roundBgArrowIcon.png";
import video from "@/assets/Png/video.png";
import videoSidNav from "@/assets/Png/videoSideNav.png";
import edit from "@/assets/Svg/edit.svg";
import menu from "@/assets/Svg/menu.svg";
import pizza from "@/assets/Svg/pizza.svg";
import playIcon from "@/assets/Svg/playIcon.svg";
import videoWebp from "@/assets/Webp/video.webp";
import videoSidNavWebp from "@/assets/Webp/videoSideNav.webp";
import ProgressBar from "@/components//global/ProgressBar";
import Button from "@/components/global/Button";
import Image from "@/components/global/Image";
import Container from "@/layout/Container";

const PROGRESS_VALUES = [
  {
    id: 0,
    title: "Exposure",
    value: 24,
  },
  {
    id: 1,
    title: "Brightness",
    value: 29,
  },
  {
    id: 2,
    title: "Contrast",
    value: 27,
  },
];

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
          <div className="box-shadow absolute left-20 top-[42%] z-10 h-[197px] w-[244px] rounded-lg bg-white md:left-[-10%] md:top-2/4">
            <div className="bg-deemGray mx-auto mt-5 flex h-[60px] max-w-[208px] items-center justify-around gap-3 rounded-md">
              <button type="button">
                <img src={pizza} alt="pizza" height="20" width="20" />
              </button>
              <button type="button">
                <img src={menu} alt="menu" height="20" width="20" />
              </button>
              <button type="button">
                <img src={edit} alt="edit" height="20" width="20" />
              </button>
            </div>

            <div className="mx-auto mt-4 grid max-w-[208px] gap-y-3">
              {PROGRESS_VALUES.map((details) => (
                <ProgressBar
                  key={details.id}
                  initialValue={details.value}
                  title={details.title}
                />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-[54px_1fr] gap-x-4">
            <Image
              defaultSrc={videoSidNavWebp}
              alternateSrc={videoSidNav}
              alt="video bars"
              height="340"
              width="54"
            />
            <div className="video-container common relative">
              <Image
                defaultSrc={videoWebp}
                alternateSrc={video}
                alt="video"
                height="364"
                width="100%"
              />
            </div>
          </div>
          <div className="mr-8 mt-10 text-right md:mt-3">
            <div className="mr-16 flex justify-end">
              <Button background="#FED1D4" btnType="pink">
                + Add music
              </Button>
            </div>
            <button type="button" className="-mt-8">
              <img src={arrow} alt="arrow" height="48" width="48" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
