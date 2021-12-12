import { otherDB, OtherType } from "./db";

export async function getOther(key: string) {
  const res = await otherDB.get(key) as unknown as  OtherType | null;
  if (!res) {
    return null;
  }
  return res.value;
}
