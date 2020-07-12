import { DokokaraBuilder } from "./builder";
import { Dokokara, CampaignObject } from "./dokokara.types";

const organicList = ["google", "yahoo", "bing"];
const socialList = ["youtube", "t.co", "facebook", "pinterest"];

function dokokaraReferrerBuilder(dokokara: Dokokara, refstr: string): Dokokara {
  return Object.assign(dokokara, { referrer: refstr });
}

function organic(hostName: string): CampaignObject | null {
  const list = organicList.filter((s) => hostName.match(s));
  if (!list.length) return null;

  return {
    medium: "organic",
    source: hostName,
    campaignName: "",
    content: "",
    term: "",
  };
}

function social(hostName: string): CampaignObject | null {
  const list = socialList.filter((s) => hostName.match(s));
  if (!list.length) return null;

  return {
    medium: "social",
    source: hostName,
    campaignName: "",
    content: "social",
    term: "",
  };
}

export function referrer(refstr: string): Dokokara | null {
  if (!refstr) return null;

  const hostName = refstr.split("/")[2].replace(/^www\./, "");
  const ogn = organic(hostName);
  const scl = social(hostName);

  if (ogn) {
    return dokokaraReferrerBuilder(DokokaraBuilder(ogn), refstr);
  }

  if (scl) {
    return dokokaraReferrerBuilder(DokokaraBuilder(scl), refstr);
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
