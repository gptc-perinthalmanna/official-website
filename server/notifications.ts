import { notificationsDB, NotificationType } from "./db";

export async function getAllNotifications() {
  const res = await notificationsDB.fetch(
    { expired: false, deleted: false },
    { limit: 10 }
  );
  return res.items as unknown as NotificationType[] | null;
}
