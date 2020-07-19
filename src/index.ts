import { Dokokara } from "./dokokara.types";
import { kokokara } from "./kokokara";
import { DokokaraBuilder } from "./builder";

const sameSiteList = [];

export function pushSameSiteList(site: string): void {
  sameSiteList.push(site);
}

export function getSameSiteList(): string[] {
  return sameSiteList;
}

export function resetSameSiteList(): void {
  sameSiteList.length = 0;
}

export function dokokara(): Dokokara {
  const hostname = location.hostname;
  const referrer = document.referrer;
  const query = location.search;

  pushSameSiteList(hostname);
  // console.log(hostname);
  // console.log(sameSiteList);
  if (kokokara(referrer, sameSiteList)) return null;

  console.log("hostname:  ", hostname);
  console.log("referrer:  ", referrer);
  console.log("query:  ", query);
  if (referrer === "" && query === "") {
    return DokokaraBuilder({ medium: "direct", source: "", campaignName: "" });
  }
}
