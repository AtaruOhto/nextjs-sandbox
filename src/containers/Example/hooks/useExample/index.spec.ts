import { renderHook } from "@testing-library/react-hooks";

import { useExample } from "./";

describe("useExample", () => {
  it("should be false when init", () => {
    const { result } = renderHook(() => useExample());
    expect(result.current.isOK).toEqual(false);
  });
});
