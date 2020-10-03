import React, { ComponentProps } from "react";
import CheckBox from "components/atoms/Checkbox";

export type Props = ComponentProps<typeof CheckBox>;

export default ({ isOk, setIsOK }: Props) => {
  return <CheckBox isOk={isOk} setIsOK={setIsOK} />;
};
