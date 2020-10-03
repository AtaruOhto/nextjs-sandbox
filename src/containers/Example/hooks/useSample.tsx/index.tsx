import { useState } from "react";

export const useSample = () => {
  const [isOK, setIsOK] = useState<boolean>(false);
  return { isOK, setIsOK };
};
