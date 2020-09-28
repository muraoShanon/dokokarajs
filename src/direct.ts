import { Dokokara } from "./dokokara.types";
import { DokokaraBuilder } from "./builder";

export function direct(): Dokokara {
  // if (referrer) return null;
  // if (co) return null;

  return DokokaraBuilder({
    medium: "direct",
    source: "",
    campaignName: "",
    content: "",
    term: "",
    rawreferrer: "",
    rawquery: "",
  });
}
