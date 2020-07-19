import { dokokara, pushSameSiteList, resetSameSiteList, getSameSiteList } from "../src/index";

function setHostname(url: string) {
  global.window = Object.create(window);
  Object.defineProperty(window, "location", {
    value: {
      hostname: url,
    },
    writable: true,
  });
}

function setSearch(query: string) {
  global.window = Object.create(window);
  Object.defineProperty(window, "location", {
    value: {
      search: query,
    },
    writable: true,
  });
}

describe("dokokara", () => {
  beforeEach(() => {
    setHostname("www.example.com");
    resetSameSiteList();
    jest.spyOn(global.document, "referrer", "get").mockRestore();
  });
  test("kokokara samesite simple", () => {
    jest.spyOn(global.document, "referrer", "get").mockReturnValue("www.example.com");
    expect(dokokara()).toBe(null);
  });

  test("kokokara samesite pushSameSiteList", () => {
    jest.spyOn(global.document, "referrer", "get").mockReturnValue("other.example.com");
    pushSameSiteList("other.example.com");
    expect(dokokara()).toBe(null);
  });

  test("kokokara Direct", () => {
    setSearch("");
    jest.spyOn(global.document, "referrer", "get").mockReturnValue("");
    expect(dokokara().channel).toBe("Direct");
  });

  // test("kokokara Organic", () => {
  //   setSearch("");
  //   jest.spyOn(global.document, "referrer", "get").mockReturnValue("https://www.google.com/");
  //   expect(dokokara().channel).toBe("Direct");
  // });
});
