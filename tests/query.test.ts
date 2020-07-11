import { query } from "../src/query";

describe("query", () => {
  test("null", () => {
    expect(query("")).toBe(null);
  });

  test("email", () => {
    const qs = "?utm_source=newsletter&utm_medium=email&utm_campaign=spring_sale";
    expect(query(qs).channel).toBe("Email");
    expect(query(qs).medium).toBe("email");
    expect(query(qs).source).toBe("newsletter");
    expect(query(qs).campaignName).toBe("spring_sale");
    expect(query(qs).query).toBe(qs);
  });

  test("facebook ad", () => {
    const qs = "?utm_source=facebook&utm_medium=cpm&utm_campaign=campaign.id&utm_content=ad.id&fbclid=ididid";
    expect(query(qs).channel).toBe("Display");
    expect(query(qs).medium).toBe("cpm");
    expect(query(qs).source).toBe("facebook");
    expect(query(qs).campaignName).toBe("campaign.id");
    expect(query(qs).content).toBe("ad.id");
  });

  test("google ad", () => {
    const qs = "?utm_source=google&utm_medium=cpc&utm_campaign=campaign.id&utm_content=ad.id&fbclid=ididid";
    expect(query(qs).channel).toBe("Display");
    expect(query(qs).medium).toBe("cpc");
    expect(query(qs).source).toBe("google");
    expect(query(qs).campaignName).toBe("campaign.id");
    expect(query(qs).content).toBe("ad.id");
  });
});
