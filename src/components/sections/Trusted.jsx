import indeed from "@/assets/Png/companies/indeed.png";
import nerdwallet from "@/assets/Png/companies/nerdwallet.png";
import netflix from "@/assets/Png/companies/netflix.png";
import richhood from "@/assets/Png/companies/richhood.png";
import shinelsu from "@/assets/Png/companies/shinelsu.png";
import Container from "@/layout/Container";

function Trusted() {
  return (
    <section>
      <Container>
        <h1 className="text-center text-lg font-bold md:text-2xl">
          Trusted by
        </h1>

        <div className="slider mt-7">
          <div className="slides items-center gap-6 lg:flex">
            <div>
              <img
                src={nerdwallet}
                alt="nerdwallet logo"
                height="38"
                width="174"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src={indeed}
                alt="indeed logo"
                height="38"
                width="174"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src={richhood}
                alt="richhood logo"
                height="38"
                width="174"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src={netflix}
                alt="netflix logo"
                height="38"
                width="174"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src={shinelsu}
                alt="shinelsu logo"
                height="38"
                width="174"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Trusted;
