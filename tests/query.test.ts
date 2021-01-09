import { query, getCampaignObject } from "../src/query";

describe("getCampaignObject", () => {
  test("null", () => {
    expect(getCampaignObject("")).toBe(null);
  });
});

describe("query", () => {
  test("null", () => {
    expect(query("")).toBe(null);
  });

  test("email", () => {
    const qs = "?utm_source=newsletter&utm_medium=email&utm_campaign=spring_sale";
    expect(query(qs)?.channel).toBe("Email");
    expect(query(qs)?.medium).toBe("email");
    expect(query(qs)?.source).toBe("newsletter");
    expect(query(qs)?.campaignName).toBe("spring_sale");
    expect(query(qs)?.rawquery).toBe(qs);
  });

  describe("Display", () => {
    test("facebook ad", () => {
      const qs = "?utm_source=facebook&utm_medium=cpm&utm_campaign=campaign.id&utm_content=ad.id&fbclid=ididid";
      expect(query(qs)?.channel).toBe("Display");
      expect(query(qs)?.medium).toBe("cpm");
      expect(query(qs)?.source).toBe("facebook");
      expect(query(qs)?.campaignName).toBe("campaign.id");
      expect(query(qs)?.content).toBe("ad.id");
    });

    test("google ad", () => {
      const qs = "?gclid=1234&smp_source=google&smp_medium=cpc&smp_campaign=campaign.id&smp_content=displayads";
      expect(query(qs)?.channel).toBe("Display");
      expect(query(qs)?.medium).toBe("cpc");
      expect(query(qs)?.source).toBe("google");
      expect(query(qs)?.campaignName).toBe("campaign.id");
      expect(query(qs)?.content).toBe("displayads");
      expect(query(qs)?.gclid).toBe("1234");
    });
  });

  describe("PaidSearch", () => {
    test("cpc", () => {
      const qs = "?utm_source=other&utm_medium=cpc&utm_campaign=campaign.id&utm_content=ad.id";
      expect(query(qs)?.channel).toBe("PaidSearch");
      expect(query(qs)?.medium).toBe("cpc");
      expect(query(qs)?.source).toBe("other");
      expect(query(qs)?.campaignName).toBe("campaign.id");
      expect(query(qs)?.content).toBe("ad.id");
    });

    test("google paidsearch", () => {
      const qs = "?gclid=1234&smp_source=google&smp_medium=cpc&smp_campaign=campaign.id";
      expect(query(qs)?.channel).toBe("PaidSearch");
      expect(query(qs)?.medium).toBe("cpc");
      expect(query(qs)?.source).toBe("google");
      expect(query(qs)?.campaignName).toBe("campaign.id");
      expect(query(qs)?.content).toBe("");
      expect(query(qs)?.gclid).toBe("1234");
    });
  });

  describe("OtherAdvertising", () => {
    test("cpv", () => {
      const qs = "?utm_source=other&utm_medium=cpv&utm_campaign=campaign.id&utm_content=ad.id";
      expect(query(qs)?.channel).toBe("OtherAdvertising");
      expect(query(qs)?.medium).toBe("cpv");
      expect(query(qs)?.source).toBe("other");
      expect(query(qs)?.campaignName).toBe("campaign.id");
      expect(query(qs)?.content).toBe("ad.id");
    });
  });

  describe("Social", () => {
    test("social", () => {
      const qs = "?utm_source=otherSource&utm_medium=social&utm_campaign=otherCampaign";
      expect(query(qs)?.channel).toBe("Social");
      expect(query(qs)?.medium).toBe("social");
      expect(query(qs)?.source).toBe("otherSource");
      expect(query(qs)?.campaignName).toBe("otherCampaign");
    });

    test("sm", () => {
      const qs = "?utm_source=otherSource&utm_medium=sm&utm_campaign=otherCampaign";
      expect(query(qs)?.channel).toBe("Social");
    });
  });

  test("Other", () => {
    const qs = "?utm_source=otherSource&utm_medium=otherMedium&utm_campaign=otherCampaign";
    expect(query(qs)?.channel).toBe("Other");
    expect(query(qs)?.medium).toBe("otherMedium");
    expect(query(qs)?.source).toBe("otherSource");
    expect(query(qs)?.campaignName).toBe("otherCampaign");
  });

  test("Affiliate", () => {
    const qs = "?utm_source=otherSource&utm_medium=affiliate&utm_campaign=otherCampaign";
    expect(query(qs)?.channel).toBe("Affiliate");
    expect(query(qs)?.medium).toBe("affiliate");
    expect(query(qs)?.source).toBe("otherSource");
    expect(query(qs)?.campaignName).toBe("otherCampaign");
  });
});
