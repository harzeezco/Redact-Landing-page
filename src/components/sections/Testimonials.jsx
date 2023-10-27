import profile from "@/assets/Png/profile.png";
import profile1 from "@/assets/Png/profile2.png";
import quote from "@/assets/Svg/quote.svg";
import profileWebp from "@/assets/Webp/profile.webp";
import profile1Webp from "@/assets/Webp/profile2.webp";
import Image from "@/components/global/Image";
import Container from "@/layout/Container";

function Testimonials() {
  return (
    <section>
      <Container>
        <h1 className="text-center text-1xl font-bold md:text-4xl md:leading-[52px]">
          Few words about our
          <br />
          video editor
        </h1>

        <section className="carousel" aria-label="Gallery">
          <ol className="carousel__viewport">
            <li id="carousel__slide1" className="carousel__slide">
              <article className="carousel__snapper rounded-xl bg-deepPurple px-5 py-7 leading-7 text-white">
                <img
                  src={quote}
                  alt="quote"
                  height="20"
                  width="20"
                  loading="lazy"
                />
                <p className="my-3 text-sm font-medium md:text-base">
                  Very impressive video editing tool I have ever seen. It has so
                  many awesome features to edit a video like pro. I have enjoyed
                  a lot while making my youtube channel video. Really impressive
                  video editing tool for me.
                </p>
                <div>
                  <h2 className="font-semibold">Lokesh Rahul</h2>
                  <p className="text-xs">Video editor</p>
                </div>
              </article>
            </li>
            <li id="carousel__slide2" className="carousel__slide">
              <div className="carousel__snapper box-shadow rounded-xl bg-white">
                <Image
                  defaultSrc={profile1Webp}
                  alternateSrc={profile1}
                  alt="profile pic"
                  height="350"
                  width="370"
                  loading="lazy"
                />
                <p className="p-4 pb-6 font-semibold md:text-xl md:leading-8">
                  Very impressive video editing tool I have ever seen...
                </p>
              </div>
            </li>
            <li id="carousel__slide3" className="carousel__slide">
              <div className="carousel__snapper box-shadow rounded-xl bg-white">
                {" "}
                <Image
                  defaultSrc={profileWebp}
                  alternateSrc={profile}
                  alt="profile pic"
                  height="350"
                  width="370"
                  loading="lazy"
                />
                <h3 className="p-4 pb-6 font-semibold md:text-xl md:leading-8">
                  Very impressive video editing tool I have ever seen...
                </h3>
              </div>
            </li>
            <li id="carousel__slide4" className="carousel__slide">
              <article className="carousel__snapper rounded-xl bg-deepPurple px-5 py-7 leading-7 text-white">
                <img
                  src={quote}
                  alt="quote"
                  loading="lazy"
                  height="15"
                  width="15"
                />
                <p className="my-3 text-sm font-medium md:text-base">
                  Very impressive video editing tool I have ever seen. It has so
                  many awesome features to edit a video like pro. I have enjoyed
                  a lot while making my youtube channel video. Really impressive
                  video editing tool for me.
                </p>
                <div>
                  <h2 className="font-semibold">Lokesh Rahul</h2>
                  <p className="text-xs">Video editor</p>
                </div>
              </article>
            </li>
          </ol>
          <aside className="carousel__navigation">
            <ol className="carousel__navigation-list">
              <li className="carousel__navigation-item">
                <a
                  href="#carousel__slide1"
                  className="carousel__navigation-button"
                >
                  Go to slide 1
                </a>
              </li>
              <li className="carousel__navigation-item">
                <a
                  href="#carousel__slide2"
                  className="carousel__navigation-button"
                >
                  Go to slide 2
                </a>
              </li>
              <li className="carousel__navigation-item">
                <a
                  href="#carousel__slide3"
                  className="carousel__navigation-button"
                >
                  Go to slide 3
                </a>
              </li>
              <li className="carousel__navigation-item">
                <a
                  href="#carousel__slide4"
                  className="carousel__navigation-button"
                >
                  Go to slide 4
                </a>
              </li>
            </ol>
          </aside>
        </section>
      </Container>
    </section>
  );
}

export default Testimonials;
