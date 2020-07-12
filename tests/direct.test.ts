import { direct } from "../src/direct";
import { getCampaignObject } from "../src/query";

describe("direct", () => {
  test("not direct1", () => {
    expect(direct("www.example.com", null)).toBe(null);
  });

  test("not direct2", () => {
    const qs = "?utm_source=newsletter&utm_medium=email&utm_campaign=spring_sale";
    const co = getCampaignObject(qs);
    expect(direct("", co)).toBe(null);
  });

  test("direct", () => {
    expect(direct("", null).channel).toBe("Direct");
  });
});
