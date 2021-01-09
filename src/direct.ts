import { Dokokara } from "./dokokara.types";
import { DokokaraBuilder, campaignObjectBuilder } from "./builder";

export function direct(): Dokokara {
  return DokokaraBuilder(
    campaignObjectBuilder({
      medium: "direct",
    })
  );
}
