import { direct } from "../src/direct";

describe("direct", () => {
  test("direct", () => {
    expect(direct().channel).toBe("Direct");
  });
});
