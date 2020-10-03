import React, { Dispatch, SetStateAction } from "react";

export default ({
  isOk,
  setIsOK,
}: {
  isOk: boolean;
  setIsOK: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <input
      type="checkbox"
      checked={isOk}
      onClick={() => {
        setIsOK(!isOk);
      }}
    />
  );
};
