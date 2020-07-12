import { Dokokara, CampaignObject } from "./dokokara.types";
import { DokokaraBuilder } from "./builder";

export function direct(referrer: string, co: CampaignObject): Dokokara {
  if (referrer) return null;
  if (co) return null;

  return DokokaraBuilder({
    medium: "direct",
    source: "",
    campaignName: "",
  });
}
