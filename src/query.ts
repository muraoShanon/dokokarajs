import { parse, ParsedUrlQuery } from "querystring";
import { Dokokara } from "./dokokara.types";

type CampaignURLQueryObject = {
  medium: string;
  source: string;
  campaignName: string;
  term?: string;
  content?: string;
};

function cuqob(puq: ParsedUrlQuery): CampaignURLQueryObject | null {
  if (!puq.utm_medium || !puq.utm_source || !puq.utm_campaign) return null;
  return {
    medium: puq.utm_medium as string,
    source: puq.utm_source as string,
    campaignName: puq.utm_campaign as string,
    term: puq.utm_term as string,
    content: puq.utm_content as string,
  };
}

function DokokaraBuilder(cuqo: CampaignURLQueryObject): Dokokara {
  if (cuqo.medium === "email") {
    return Object.assign({}, cuqo, { channel: "Email" }) as Dokokara;
  }

  if (cuqo.medium === "cpm" || cuqo.medium === "cpc") {
    return Object.assign({}, cuqo, { channel: "Display" }) as Dokokara;
  }
}

export function query(qs: string): Dokokara | null {
  const parsed = parse(qs.trim().replace(/^[?#&]/, ""));
  const cuqo = cuqob(parsed);
  if (!cuqo) return null;

  return DokokaraBuilder(cuqo);
}
