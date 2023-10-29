import { useContext } from "react";

import SkeletonMapping from "@/components/common/SkeletonMapping";
import { ImagesContext } from "@/contexts/ImagesContext";
import useFetchImages from "@/hooks/useFetchImages";

function TemplateImages() {
  const { images, isLoading } = useFetchImages();
  const { isElementVisible } = useContext(ImagesContext);

  if (!isElementVisible) {
    return <SkeletonMapping />;
  }

  if (isLoading) {
    return <SkeletonMapping />;
  }
  return (
    <div className="slides mt-16  items-center gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid lg:grid-cols-4">
      {images.map((image) => (
        <div key={image?.id}>
          <img
            src={image?.urls?.regular}
            srcSet={`${image?.urls?.small} 400w, ${image?.urls?.regular} 800w, ${image?.urls?.regular} 1200w`}
            sizes="(max-width: 480px) 100vw, (max-width: 1440px) 49vw,"
            alt={image?.alt_description}
            width="100%"
            className="h-80 w-72"
          />
        </div>
      ))}
    </div>
  );
}

export default TemplateImages;
