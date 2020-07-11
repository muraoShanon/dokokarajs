import { referrer } from "../src/referrer";

describe("referrer", () => {
  test("null", () => {
    const refstr = "";
    expect(referrer(refstr)).toBe(null);
  });

  test("https://www.google.com/", () => {
    const refstr = "https://www.google.com/";
    expect(referrer(refstr).channel).toBe("OrganicSearch");
    expect(referrer(refstr).medium).toBe("organic");
    expect(referrer(refstr).source).toBe("www.google.com");
    expect(referrer(refstr).referrer).toBe(refstr);
  });

  test("https://www.google.co.jp/", () => {
    const refstr = "https://www.google.co.jp/";
    expect(referrer(refstr).channel).toBe("OrganicSearch");
  });

  test("https://www.yahoo.co.jp/", () => {
    const refstr = "https://www.yahoo.co.jp/";
    expect(referrer(refstr).channel).toBe("OrganicSearch");
  });

  test("https://www.bing.com/", () => {
    const refstr = "https://www.bing.com/";
    expect(referrer(refstr).channel).toBe("OrganicSearch");
  });

  test("https://example.com/", () => {
    const refstr = "https://example.com/path/";
    expect(referrer(refstr).channel).toBe("Referral");
    expect(referrer(refstr).medium).toBe("referral");
    expect(referrer(refstr).source).toBe("example.com");
    expect(referrer(refstr).referrer).toBe(refstr);
  });
});
