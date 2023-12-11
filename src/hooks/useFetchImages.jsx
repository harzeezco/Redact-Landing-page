/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable function-paren-newline */
import { useContext, useEffect, useState } from "react";

import useLocalStorage from "./useLocalStorage";
import { ImagesContext } from "@/contexts/ImagesContext";

const accessKey = import.meta.env.VITE_UNSPLASH_API_ACCESS_KEY;

function useFetchImages() {
  const { category, isElementVisible } = useContext(ImagesContext);
  const [imageCategory, setImageCategory] = useLocalStorage("images", []);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const perPage = 12;

    if (accessKey && isElementVisible) {
      const fetchImages = async () => {
        try {
          setIsLoading(true);
          setError(null);
          const apiUrl = `https://api.unsplash.com/search/photos?query=${category}&per_page=${perPage}`;

          const response = await fetch(apiUrl, {
            headers: {
              Authorization: `Client-ID ${accessKey}`,
            },
          });

          if (!response.ok) {
            throw new Error(
              `there was an error with response status:${response.status}`,
            );
          }
          const data = await response.json();
          setImageCategory(data.results);
          if (data.total === 0) {
            throw new Error(
              `The requested Images are not Available: ${response.status}`,
            );
          }

          setIsLoading(false);
          setError(null);
        } catch (Error) {
          setError(Error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchImages();
    }
  }, [category, isElementVisible, setImageCategory]);

  if (error) {
    throw error;
  }

  return { imageCategory, error, isLoading };
}

export default useFetchImages;
