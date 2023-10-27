import redactLogo from "@/assets/Svg/redactFooterLogo.svg";
import Container from "@/layout/Container";
import { FOOTER_NAVS } from "@/lib/data";

function Footer() {
  return (
    <footer className="bg-darkPurple text-white">
      <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[330px_1fr]">
        <div>
          <img src={redactLogo} alt="redact logo" width="103" height="44" />
          <p className="mt-5 text-gray">
            The best video editors in town. The epitome of video editing, best
            effects and cuts Videos for a better life For a better watching
            experience.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {FOOTER_NAVS.map((details) => (
            <div key={details.id}>
              <h1 className="text-xl font-bold">{details.title}</h1>
              <div className="mt-6 grid gap-y-4">
                {details.navs.map((nav) => (
                  <a
                    key={nav}
                    href="#id"
                    className="whitespace-nowrap text-[15px] text-gray"
                  >
                    {nav}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
