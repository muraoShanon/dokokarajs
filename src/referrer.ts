import { DokokaraBuilder } from "./builder";
import { Dokokara, CampaignObject } from "./dokokara.types";

const organicList = ["www.google.com", "www.google.co.jp", "www.yahoo.co.jp", "www.bing.com"];

function dokokaraReferrerBuilder(dokokara: Dokokara, refstr: string): Dokokara {
  return Object.assign(dokokara, { referrer: refstr });
}

function organic(hostName: string): CampaignObject | null {
  const isOrganic = organicList.includes(hostName);
  if (!isOrganic) return null;

  return {
    medium: "organic",
    source: hostName,
    campaignName: "",
    content: "",
    term: "",
  };
}

export function referrer(refstr: string): Dokokara | null {
  if (!refstr) return null;

  const hostName = refstr.split("/")[2];
  const ogn = organic(hostName);

  if (ogn) {
    return dokokaraReferrerBuilder(DokokaraBuilder(ogn), refstr);
  }

  return dokokaraReferrerBuilder(
    DokokaraBuilder({
      medium: "referral",
      source: hostName,
      campaignName: "",
    }),
    refstr
  );
}
