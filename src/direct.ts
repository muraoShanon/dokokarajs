import { Dokokara } from "./dokokara.types";
import { dokokaraBuilder, campaignObjectBuilder } from "./builder";

export function direct(): Dokokara {
  return dokokaraBuilder(
    campaignObjectBuilder({
      medium: "direct",
    })
  );
}
