import { kokokara } from "../src/kokokara";

describe("kokokara", () => {
  test("samesite", () => {
    const hostName = "www.example.com";
    const sameSiteList = ["www.example.com"];
    expect(kokokara(hostName, sameSiteList)).toBe(true);
  });

  test("subdomain1", () => {
    const hostName = "www.example.com";
    const sameSiteList = ["sub.example.com"];
    expect(kokokara(hostName, sameSiteList)).toBe(false);
  });

  test("subdomain2", () => {
    const hostName = "www.example.com";
    const sameSiteList = ["sub.example.com", "www.example.com"];
    expect(kokokara(hostName, sameSiteList)).toBe(true);
  });
});
