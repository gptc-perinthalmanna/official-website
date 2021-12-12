import { filesDB, FileType } from "./db";

export async function getFile(key: string) {
  const res = await filesDB.get(key);
  return res as unknown as FileType | null;
}

export async function getFiles(tag: string) {
    const res = await filesDB.fetch({"tags?contains": tag});
    return res.items as unknown as FileType[] | null;
}
