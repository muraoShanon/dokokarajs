import { Dokokara, CampaignObject } from "./dokokara.types";

function assign(co: CampaignObject, channelName: string): Dokokara {
  return Object.assign(co, { channel: channelName }) as Dokokara;
}

export function DokokaraBuilder(co: CampaignObject): Dokokara {
  switch (co.medium) {
    case "organic":
      return assign(co, "OrganicSearch");

    case "email":
      return assign(co, "Email");

    case "cpm":
    case "cpc":
      return assign(co, "Display");

    case "referral":
      return assign(co, "Referral");

    default:
      return assign(co, "Other");
  }
}
