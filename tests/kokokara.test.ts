import { kokokara } from "../src/kokokara";

describe("kokokara", () => {
  test("samesite", () => {
    const referrer = "https://www.example.com/";
    const sameSiteList = ["www.example.com"];
    expect(kokokara(referrer, sameSiteList)).toBe(true);
  });

  test("subdomain1", () => {
    const referrer = "https://sub.example.com/";
    const sameSiteList = ["www.example.com"];
    expect(kokokara(referrer, sameSiteList)).toBe(false);
  });

  test("subdomain2", () => {
    const referrer = "https://sub.example.com/";
    const sameSiteList = ["sub.example.com", "www.example.com"];
    expect(kokokara(referrer, sameSiteList)).toBe(true);
  });
});
