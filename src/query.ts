import { parse, ParsedUrlQuery } from "querystring";
import { DokokaraBuilder } from "./builder";
import { Dokokara, CampaignObject } from "./dokokara.types";

function cuqob(puq: ParsedUrlQuery): CampaignObject | null {
  if (puq.utm_medium && puq.utm_source && puq.utm_campaign) {
    return {
      medium: puq.utm_medium as string,
      source: puq.utm_source as string,
      campaignName: puq.utm_campaign as string,
      term: (puq.utm_term ? puq.utm_term : "") as string,
      content: (puq.utm_content ? puq.utm_content : "") as string,
    };
  }

  if (puq.smp_medium && puq.smp_source && puq.smp_campaign) {
    return {
      medium: puq.smp_medium as string,
      source: puq.smp_source as string,
      campaignName: puq.smp_campaign as string,
      term: (puq.smp_term ? puq.smp_term : "") as string,
      content: (puq.smp_content ? puq.smp_content : "") as string,
    };
  }

  return null;
}

export function query(qs: string): Dokokara | null {
  const parsed = parse(qs.trim().replace(/^[?#&]/, ""));
  const cuqo = cuqob(parsed);
  if (!cuqo) return null;

  return Object.assign(DokokaraBuilder(cuqo), { query: qs });
}
