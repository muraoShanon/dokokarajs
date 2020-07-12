export function kokokara(hostName: string, sameSiteList: string[]): boolean {
  return !!sameSiteList.filter((site) => hostName === site).length;
}
