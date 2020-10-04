import { useState } from "react";

export const useExample = () => {
  const [isOK, setIsOK] = useState<boolean>(false);
  return { isOK, setIsOK };
};
