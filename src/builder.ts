import { Dokokara, CampaignObject } from "./dokokara.types";

function assign(co: CampaignObject, channelName: string): Dokokara {
  return Object.assign(co, { channel: channelName }) as Dokokara;
}

function isOrganic(co: CampaignObject): boolean {
  return co.medium === "organic";
}

function isEmail(co: CampaignObject): boolean {
  return co.medium === "email";
}

function isReferral(co: CampaignObject): boolean {
  return co.medium === "referral";
}

function isSocial(co: CampaignObject): boolean {
  return !!co.medium.match(/^(social|social-network|social-media|sm|social network|social media)$/);
}

function isAffiliate(co: CampaignObject): boolean {
  return co.medium === "affiliate";
}

function isDisplay(co: CampaignObject): boolean {
  if (co.medium.match(/^(display|cpm|banner)$/)) return true;
  if (co.content?.match(/^(displayads)$/)) return true;

  return false;
}

function isPaidSearch(co: CampaignObject): boolean {
  return !!co.medium.match(/^(cpc|ppc|paidsearch)$/);
}

function isOtherAdvertising(co: CampaignObject): boolean {
  return !!co.medium.match(/^(cpv|cpa|cpp|content-text)$/);
}

function isDirect(co: CampaignObject): boolean {
  return co.medium === "direct";
}

function dokokaraTypeOf(co: CampaignObject): Dokokara["channel"] {
  if (isOrganic(co)) return "OrganicSearch";
  if (isEmail(co)) return "Email";
  if (isDisplay(co)) return "Display";
  if (isPaidSearch(co)) return "PaidSearch";
  if (isOtherAdvertising(co)) return "OtherAdvertising";
  if (isSocial(co)) return "Social";
  if (isAffiliate(co)) return "Affiliate";
  if (isReferral(co)) return "Referral";
  if (isDirect(co)) return "Direct";
  return null;
}

export function DokokaraBuilder(co: CampaignObject): Dokokara {
  const type = dokokaraTypeOf(co);

  if (type) return assign(co, type);

  return assign(co, "Other");
}
