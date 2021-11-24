import { notificationsDB } from "./db";

export interface NotificationType {
  key: number;
  title: string;
  link: string;
  date: string;
  type: string;
  expired: boolean;
  deleted: boolean;
  expiryDate: string;
  category: string;
}

export async function getAllNotifications() {
  const res = await notificationsDB.fetch(
    { expired: false, deleted: false },
    { limit: 10 }
  );
  return res.items as unknown as NotificationType[] | null;
}
