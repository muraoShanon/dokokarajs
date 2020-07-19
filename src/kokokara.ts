export function kokokara(referrer: string, sameSiteList: string[]): boolean {
  return !!sameSiteList.filter((site) => referrer.match(site)).length;
}
