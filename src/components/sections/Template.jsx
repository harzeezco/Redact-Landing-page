/* eslint-disable operator-linebreak */
import { useContext } from "react";

import TemplateImages from "@/components/common/TemplateImages";
import Button from "@/components/global/Button";
import { ImagesContext } from "@/contexts/ImagesContext";
import Container from "@/layout/Container";
import { CATEGORIES } from "@/lib/data";
import mergeClasses from "@/lib/utils";

function Template() {
  const { setImageCategories, imageCategories, observe } =
    useContext(ImagesContext);

  return (
    <section ref={observe} id="template">
      <Container>
        <h1 className="text-1xl font-bold md:text-center md:text-4xl">
          Thousands of templates
        </h1>

        <div className="slides mx-auto mt-4  gap-4 lg:flex">
          {CATEGORIES.map((category) => (
            <div key={category.id} className="relative">
              <button
                type="button"
                className={mergeClasses(
                  category.label === imageCategories
                    ? "activeLink relative inline-block bg-transparent text-lg"
                    : "",
                  "underlineLink whitespace-nowrap",
                )}
                onClick={() => setImageCategories(category.label)}
              >
                {category.label}
              </button>
            </div>
          ))}
        </div>

        <TemplateImages />

        <div className="mt-14 flex justify-center">
          <Button btnType="primary">Create a video</Button>
        </div>
      </Container>
    </section>
  );
}

export default Template;
