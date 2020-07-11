export type CampaignObject = {
  medium: string;
  source: string;
  campaignName: string;
  term?: string;
  content?: string;
};

export type Dokokara = CampaignObject & {
  channel: "OrganicSearch" | "Display" | "Direct" | "Email" | "Referral" | "Social" | "Paid Search" | "Other";
  query?: string;
};
