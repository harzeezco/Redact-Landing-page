import profile from "@/assets/Png/profile.png";
import profile1 from "@/assets/Png/profile2.png";
import quote from "@/assets/Svg/quote.svg";
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

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl bg-deepPurple px-5 py-7 leading-7 text-white">
            <img src={quote} alt="" />
            <p className="my-3 font-medium">
              Very impressive video editing tool I have ever seen. It has so
              many awesome features to edit a video like pro. I have enjoyed a
              lot while making my youtube channel video. Really impressive video
              editing tool for me.
            </p>
            <div>
              <h2 className="font-semibold">Lokesh Rahul</h2>
              <p className="text-xs">Video editor</p>
            </div>
          </div>
          <div className="box-shadow rounded-xl bg-white">
            <img src={profile} alt="profile pic" />
            <h3 className="p-4 text-xl font-semibold leading-8">
              Very impressive video editing tool I have ever seen...
            </h3>
          </div>
          <div className="box-shadow rounded-xl bg-white">
            <img src={profile1} alt="profile pic" />
            <p className="p-4 text-xl font-semibold leading-8">
              Very impressive video editing tool I have ever seen...
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;
