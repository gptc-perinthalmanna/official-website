import { filesDB, FileType } from "./db";

export async function getFile(key: string) {
  const res = await filesDB.get(key);
  return res as unknown as FileType | null;
}
