import { DokokaraBuilder, campaignObjectBuilder } from "./builder";
import { Dokokara, CampaignObject } from "./dokokara.types";

const organicList = ["google", "yahoo", "bing"];
const socialList = ["youtube", "t.co", "facebook", "pinterest"];

function organic(hostName: string, refstr: string): CampaignObject | null {
  const list = organicList.filter((s) => hostName.match(s));
  if (!list.length) return null;

  return campaignObjectBuilder({
    medium: "organic",
    source: hostName,
    rawreferrer: refstr,
  });
}

function social(hostName: string, refstr: string): CampaignObject | null {
  const list = socialList.filter((s) => hostName.match(s));
  if (!list.length) return null;

  return campaignObjectBuilder({
    medium: "social",
    source: hostName,
    content: "social",
    rawreferrer: refstr,
  });
}

export function referrer(refstr: string): Dokokara | null {
  if (!refstr) return null;

  const hostName = refstr.split("/")[2].replace(/^www\./, "");
  const ogn = organic(hostName, refstr);
  const scl = social(hostName, refstr);

  if (ogn) {
    return DokokaraBuilder(ogn);
  }

  if (scl) {
    return DokokaraBuilder(scl);
  }

  return DokokaraBuilder(
    campaignObjectBuilder({
      medium: "referral",
      source: hostName,
      rawreferrer: refstr,
    })
  );
}
