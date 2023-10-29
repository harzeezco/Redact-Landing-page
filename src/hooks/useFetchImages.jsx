import { useContext, useEffect, useState } from "react";

import { ImagesContext } from "@/contexts/ImagesContext";

const accessKey = import.meta.env.VITE_UNSPLASH_API_ACCESS_KEY;

function useFetchImages() {
  const { imageCategories, isElementVisible } = useContext(ImagesContext);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const perPage = 12;

    if (accessKey && isElementVisible) {
      const fetchImages = async () => {
        try {
          setError("");
          setIsLoading(true);
          const apiUrl = `https://api.unsplash.com/search/photos?query=${imageCategories}&per_page=${perPage}`;

          const res = await fetch(apiUrl, {
            headers: {
              Authorization: `Client-ID ${accessKey}`,
            },
          });

          if (!res.ok) {
            throw new Error("token not found");
          }
          const data = await res.json();
          setImages(data.results);
          setIsLoading(false);
          setError("");
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      };

      fetchImages();
    }
  }, [imageCategories, isElementVisible]);

  return { images, error, isLoading };
}

export default useFetchImages;
