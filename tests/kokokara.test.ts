import { kokokara } from "../src/kokokara";

describe("kokokara", () => {
  test("samesite", () => {
    const referrer = "www.example.com";
    const sameSiteList = ["www.example.com"];
    expect(kokokara(referrer, sameSiteList)).toBe(true);
  });

  test("subdomain1", () => {
    const referrer = "sub.example.com";
    const sameSiteList = ["www.example.com"];
    expect(kokokara(referrer, sameSiteList)).toBe(false);
  });

  test("subdomain2", () => {
    const referrer = "sub.example.com";
    const sameSiteList = ["sub.example.com", "www.example.com"];
    expect(kokokara(referrer, sameSiteList)).toBe(true);
  });
});
