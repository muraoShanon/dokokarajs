import { parse } from "query-string";
import { dokokaraBuilder, campaignObjectBuilder } from "./builder";
import { Dokokara, CampaignObject } from "./dokokara.types";

export function getCampaignObject(queryString: string): CampaignObject | null {
  const puq = parse(queryString);

  if (puq.utm_medium && puq.utm_source && puq.utm_campaign) {
    return campaignObjectBuilder({
      medium: puq.utm_medium as string,
      source: puq.utm_source as string,
      campaignName: puq.utm_campaign as string,
      term: (puq.utm_term ? puq.utm_term : "") as string,
      content: (puq.utm_content ? puq.utm_content : "") as string,
      rawquery: queryString,
    });
  }

  if (puq.smp_medium && puq.smp_source && puq.smp_campaign) {
    return campaignObjectBuilder({
      medium: puq.smp_medium as string,
      source: puq.smp_source as string,
      campaignName: puq.smp_campaign as string,
      term: (puq.smp_term ? puq.smp_term : "") as string,
      content: (puq.smp_content ? puq.smp_content : "") as string,
      gclid: (puq.gclid ? puq.gclid : "") as string,
      rawquery: queryString,
    });
  }

  return null;
}

export function query(qs: string): Dokokara | null {
  const cuqo = getCampaignObject(qs);
  if (!cuqo) return null;

  return dokokaraBuilder(campaignObjectBuilder(cuqo));
}
