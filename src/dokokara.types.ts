export type Dokokara = {
  channel: "OrganicSearch" | "Display" | "Direct" | "Email" | "Referral" | "Social" | "Paid Search" | "Other";
  source: string;
  medium: string;
  campaignName: string;
  term?: string;
  content?: string;
};
