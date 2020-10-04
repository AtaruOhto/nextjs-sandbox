import React from "react";
import ExamplePage from "components/pages/Example";
import { useExample } from "./hooks/useExample";

export const ExampleContainer = () => {
  const { isOK, setIsOK } = useExample();

  return <ExamplePage isOk={isOK} setIsOK={setIsOK} />;
};
