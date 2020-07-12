export type CampaignObject = {
  medium: string;
  source: string;
  campaignName: string;
  term?: string;
  content?: string;
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
  query?: string;
  referrer?: string;
};
