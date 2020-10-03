import React from "react";
import ExamplePage from "components/pages/Example";
import { useSample } from "./hooks/useSample.tsx";

export const ExampleContainer = () => {
  const { isOK, setIsOK } = useSample();

  return <ExamplePage isOk={isOK} setIsOK={setIsOK} />;
};
