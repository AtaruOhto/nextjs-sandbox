import React from "react";
import { storiesOf } from "@storybook/react";

import Checkbox from ".";
import { useState } from "@storybook/addons";

storiesOf("atoms/Button", module).add("default", () => {
  const [isOK, setIsOK] = useState<boolean>(false);
  return <Checkbox isOk={isOK} setIsOK={setIsOK} />;
});
