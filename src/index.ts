import { Dokokara } from "./dokokara.types";
import { kokokara } from "./kokokara";
import { DokokaraBuilder } from "./builder";
import { query } from "./query";
import { referrer } from "./referrer";

const sameSiteList: string[] = [];

export function pushSameSiteList(site: string): void {
  sameSiteList.push(site);
}

export function getSameSiteList(): string[] {
  return sameSiteList;
}

export function resetSameSiteList(): void {
  sameSiteList.length = 0;
}

export function dokokara(): Dokokara | null {
  const lHostname = window.location.hostname;
  const lReferrer = document.referrer;
  const lQuery = location.search;

  pushSameSiteList(lHostname);
  if (kokokara(lReferrer, sameSiteList)) return null;

  if (lQuery === "" && lReferrer === "") {
    return DokokaraBuilder({ medium: "direct", source: "", campaignName: "" });
  }

  if (lQuery !== "") {
    return query(lQuery);
  }

  if (lReferrer !== "") {
    return referrer(lReferrer);
  }

  return null;
}
