import redactLogo from "@/assets/Svg/redactFooterLogo.svg";
import Container from "@/layout/Container";
import { FOOTER_NAVS } from "@/lib/data";

function Footer() {
  return (
    <footer className="bg-darkPurple text-white">
      <Container className="grid grid-cols-[370px_1fr] gap-10">
        <div>
          <img src={redactLogo} alt="redact logo" width="103" height="44" />
          <p className="text-gray mt-5">
            The best video editors in town. The epitome of video editing, best
            effects and cuts Videos for a better life For a better watching
            experience.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-8">
          {FOOTER_NAVS.map((details) => (
            <div key={details.id}>
              <h1 className="text-xl font-bold">{details.title}</h1>
              <div className="mt-6 grid gap-y-4">
                {details.navs.map((nav) => (
                  <a
                    key={nav}
                    href="#id"
                    className="text-gray whitespace-nowrap text-[15px]"
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
