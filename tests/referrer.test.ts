import { referrer } from "../src/referrer";

describe("referrer", () => {
  test("null", () => {
    const refstr = "";
    expect(referrer(refstr)).toBe(null);
  });

  test("https://example.com/", () => {
    const refstr = "https://example.com/path/";
    expect(referrer(refstr).channel).toBe("Referral");
    expect(referrer(refstr).medium).toBe("referral");
    expect(referrer(refstr).source).toBe("example.com");
    expect(referrer(refstr).rawreferrer).toBe(refstr);
  });

  describe("OrganicSearch", () => {
    test("https://www.google.com/", () => {
      const refstr = "https://www.google.com/";
      expect(referrer(refstr).channel).toBe("OrganicSearch");
      expect(referrer(refstr).medium).toBe("organic");
      expect(referrer(refstr).source).toBe("google.com");
      expect(referrer(refstr).rawreferrer).toBe(refstr);
    });

    test("https://google.com/", () => {
      const refstr = "https://www.google.com/";
      expect(referrer(refstr).channel).toBe("OrganicSearch");
      expect(referrer(refstr).medium).toBe("organic");
      expect(referrer(refstr).source).toBe("google.com");
      expect(referrer(refstr).rawreferrer).toBe(refstr);
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
  });

  describe("Social", () => {
    test("https://www.youtube.com/", () => {
      const refstr = "https://www.youtube.com/";
      expect(referrer(refstr).channel).toBe("Social");
      expect(referrer(refstr).medium).toBe("social");
      expect(referrer(refstr).source).toBe("youtube.com");
      expect(referrer(refstr).rawreferrer).toBe(refstr);
    });

    test("https://t.co/0mYfqKJEwQ?amp=1", () => {
      const refstr = "https://t.co/0mYfqKJEwQ?amp=1";
      expect(referrer(refstr).channel).toBe("Social");
    });

    test("https://m.facebook.com/", () => {
      const refstr = "https://m.facebook.com/";
      expect(referrer(refstr).channel).toBe("Social");
    });

    test("https://l.facebook.com/", () => {
      const refstr = "https://l.facebook.com/";
      expect(referrer(refstr).channel).toBe("Social");
    });

    test("https://www.facebook.com/", () => {
      const refstr = "https://www.facebook.com/";
      expect(referrer(refstr).channel).toBe("Social");
    });

    test("https://pinterest.jp/", () => {
      const refstr = "https://pinterest.jp/";
      expect(referrer(refstr).channel).toBe("Social");
    });

    test("https://pinterest.com/", () => {
      const refstr = "https://pinterest.com/";
      expect(referrer(refstr).channel).toBe("Social");
    });
  });
});
