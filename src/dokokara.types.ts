export type CampaignObject = {
  medium: string;
  source: string;
  campaignName: string;
  term: string;
  content: string;
  rawquery: string;
  rawreferrer: string;
  gclid: string;
};

export type CampaignObjectOptinal = {
  medium?: string;
  source?: string;
  campaignName?: string;
  term?: string;
  content?: string;
  rawquery?: string;
  rawreferrer?: string;
  gclid?: string;
};

export type Dokokara = CampaignObject & {
  channel:
    | "Direct"
    | "OrganicSearch"
    | "Social"
    | "Email"
    | "Affiliate"
    | "Referral"
    | "PaidSearch"
    | "OtherAdvertising"
    | "Display"
    | "Other";
};
