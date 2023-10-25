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
        <div className="mt-10 grid grid-cols-2 place-items-center gap-y-4 sm:grid-cols-3 lg:grid-cols-5">
          <img src={nerdwallet} alt="nerdwallet logo" height="38" width="174" />
          <img src={indeed} alt="indeed logo" height="38" width="174" />
          <img src={richhood} alt="richhood logo" height="38" width="174" />
          <img src={netflix} alt="netflix logo" height="38" width="174" />
          <img src={shinelsu} alt="shinelsu logo" height="38" width="174" />
        </div>
      </Container>
    </section>
  );
}

export default Trusted;
