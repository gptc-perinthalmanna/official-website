import { Deta } from "deta"; // import Deta

// Initialize with a Project Key
const deta = Deta(process.env.DETA_PROJECT_ID);

// This how to connect to or create a database.
export const usersDb = deta.Base("users");

export const facilitiesDb = deta.Base("page_facilities");
export const campusDB = deta.Base("page_campus");
export const departmentsDB = deta.Base("page_departments");

export const pressAndMedia = deta.Base("post_press_and_media");
export const eventsDB = deta.Base("post_events");

export const filesDB = deta.Base("files");
export const notificationsDB = deta.Base("notifications");

export const imagesDB = deta.Base("images");

