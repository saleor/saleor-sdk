import { ICheckoutModelLine } from "../../helpers";

export function sortCheckoutLines(
  a: ICheckoutModelLine,
  b: ICheckoutModelLine
) {
  if (a.id && b.id) {
    const aId = a.id?.toUpperCase() || "";
    const bId = b.id?.toUpperCase() || "";
    return aId < bId ? -1 : aId > bId ? 1 : 0;
  }
  const aId = a.variant.id?.toUpperCase() || "";
  const bId = b.variant.id?.toUpperCase() || "";
  return aId < bId ? -1 : aId > bId ? 1 : 0;
}
