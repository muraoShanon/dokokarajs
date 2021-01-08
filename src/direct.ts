import { Dokokara } from "./dokokara.types";
import { DokokaraBuilder } from "./builder";

export function direct(): Dokokara {
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
