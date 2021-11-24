const { Deta } = require("deta"); // import Deta

// Initialize with a Project Key
const deta = Deta(process.env.DETA_PROJECT_ID);

// This how to connect to or create a database.
const usersDb = deta.Base("users");

const facilitiesDb = deta.Base("page_facilities");
const campusDB = deta.Base("page_campus");
const departmentsDB = deta.Base("page_departments");

const pressAndMedia = deta.Base("post_press_and_media");
const eventsDB = deta.Base("post_events");

const filesDB = deta.Base("files");

const notificationsDB = deta.Base("notifications");

const imagesDB = deta.Base("images");

export const Db = {
  db: {
    users: usersDb,
    facilities: facilitiesDb,
    campus: campusDB,
    departments: departmentsDB,
    pressAndMedia: pressAndMedia,
    events: eventsDB,
    files: filesDB,
    notifications: notificationsDB,
    images: imagesDB,
  },
};
