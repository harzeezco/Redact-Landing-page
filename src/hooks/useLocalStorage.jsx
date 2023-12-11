import { useEffect, useState } from "react";

function useLocalStorage(key = "", initialValue = []) {
  const [storage, setStorage] = useState(
    () => JSON.parse(localStorage.getItem(key)) ?? initialValue,
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storage));
  }, [key, storage]);

  return [storage, setStorage];
}

export default useLocalStorage;
