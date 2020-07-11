import { Dokokara, CampaignURLQueryObject } from "./dokokara.types";

export function DokokaraBuilder(cuqo: CampaignURLQueryObject): Dokokara {
  if (cuqo.medium === "email") {
    return Object.assign(cuqo, { channel: "Email" }) as Dokokara;
  }

  if (cuqo.medium === "cpm" || cuqo.medium === "cpc") {
    return Object.assign(cuqo, { channel: "Display" }) as Dokokara;
  }
}
