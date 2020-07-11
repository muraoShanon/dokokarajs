import { parse, ParsedUrlQuery } from "querystring";
import { DokokaraBuilder } from "./builder";
import { Dokokara, CampaignURLQueryObject } from "./dokokara.types";

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

export function query(qs: string): Dokokara | null {
  const parsed = parse(qs.trim().replace(/^[?#&]/, ""));
  const cuqo = cuqob(parsed);
  if (!cuqo) return null;

  return Object.assign(DokokaraBuilder(cuqo), { query: qs });
}
