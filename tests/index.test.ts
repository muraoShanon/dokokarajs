import { dokokara, pushSameSiteList, resetSameSiteList } from "../src/index";

function setLocation(hostname: string, query: string) {
  Object.defineProperty(window, "location", {
    get: jest.fn().mockReturnValue({ hostname: hostname, search: query }),
  });
}

describe("dokokara", () => {
  beforeEach(() => {
    resetSameSiteList();
  });

  afterEach(() => {
    jest.spyOn(global.document, "referrer", "get").mockRestore();
  });

  test("dokokara samesite simple", () => {
    setLocation("www.example.com", "");
    jest.spyOn(global.document, "referrer", "get").mockReturnValue("https://www.example.com/");
    expect(dokokara()).toBe(null);
  });

  test("dokokara samesite pushSameSiteList", () => {
    setLocation("www.example.com", "");
    jest.spyOn(global.document, "referrer", "get").mockReturnValue("https://other.example.com/");
    pushSameSiteList("other.example.com");
    expect(dokokara()).toBe(null);
  });

  test("dokokara Direct", () => {
    setLocation("www.example.com", "");
    jest.spyOn(global.document, "referrer", "get").mockReturnValue("");
    expect(dokokara()?.channel).toBe("Direct");
  });

  test("dokokara email", () => {
    setLocation("www.example.com", "?utm_source=newsletter&utm_medium=email&utm_campaign=spring_sale");
    expect(dokokara()?.channel).toBe("Email");
  });

  test("dokokara organic", () => {
    setLocation("www.example.com", "");
    jest.spyOn(global.document, "referrer", "get").mockReturnValue("https://www.google.com/");
    expect(dokokara()?.channel).toBe("OrganicSearch");
  });
});
