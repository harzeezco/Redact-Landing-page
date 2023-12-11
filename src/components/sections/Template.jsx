import { useContext } from "react";

import ErrorFallback from "../common/ErrorFallback";
import TemplateImages from "@/components/common/TemplateImages";
import Button from "@/components/global/Button";
import { ImagesContext } from "@/contexts/ImagesContext";
import Container from "@/layout/Container";
import { CATEGORIES } from "@/lib/data";
import mergeClasses from "@/lib/utils";
import { ErrorBoundary } from "react-error-boundary";

function Template() {
  const { setCategory, category, observe } = useContext(ImagesContext);

  function handleErrorReset() {
    setCategory("Recommended");
  }

  return (
    <section ref={observe} id="template">
      <Container>
        <h1 className="text-1xl font-bold md:text-center md:text-4xl">
          Thousands of templates
        </h1>

        <div className="slides mx-auto mt-4  gap-4 lg:flex">
          {CATEGORIES.map((details) => (
            <div key={details.id} className="relative">
              <button
                type="button"
                className={mergeClasses(
                  details.label === category
                    ? "activeLink relative inline-block bg-transparent text-lg"
                    : "",
                  "underlineLink whitespace-nowrap",
                )}
                onClick={() => setCategory(details.label)}
              >
                {details.label}
              </button>
            </div>
          ))}
        </div>

        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={handleErrorReset}
        >
          <TemplateImages />
        </ErrorBoundary>

        <div className="mt-14 flex justify-center">
          <Button btnType="primary">Create a video</Button>
        </div>
      </Container>
    </section>
  );
}

export default Template;
