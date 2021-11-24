import { facilitiesDb, campusDB, imagesDB, usersDb } from "./db";

interface StaffType {
  name: string;
  designation: string;
  social?: {
    facebook: string;
    twitter: string;
    instagram: string;
  };
}

interface FacilityPageType {
  title: string;
  about: string;
  cover: string;
  staffs?: StaffType[];
  staffs_ids?: string[];
  photos_id?: string[];
  photos?: PhotoType[];
}

interface PhotoType {
  src: string;
  alt: string;
  thumbnail: string;
}

interface Image {
  data: {
    id: string;
    title: string;
    url_viewer: string;
    url: string;
    display_url: string;
    size: string;
    time: string;
    expiration: string;
    image: {
      filename: string;
      name: string;
      mime: string;
      extension: string;
      url: string;
    };
    thumb: {
      filename: string;
      name: string;
      mime: string;
      extension: string;
      url: string;
    };
    delete_url: string;
  };
  success: boolean;
  status: number;
}

interface CampusType {
  title: string;
  about: string;
  cover: string;
  staffs_ids?: string[];
  staffs?: StaffType[];
  events_ids?: string[];
  events?: PhotoType[];
}


export async function getFacilities(key: string) {
  let facility = (await facilitiesDb.get(
    key
  )) as unknown as FacilityPageType | null;
  if (!facility) {
    return null;
  }
  facility.photos = [];
  facility.staffs = [];

  facility?.photos_id?.forEach(async (element) => {
    const image = (await imagesDB.get(element)) as unknown as Image | null;
    if (image) {
      facility?.photos?.push({
        src: image.data.url,
        alt: image.data.title,
        thumbnail: image.data.thumb.url,
      });
    }
  });

  facility?.staffs_ids?.forEach(async (element) => {
    const staff = (await usersDb.get(element)) as unknown as StaffType | null;
    if (staff) {
      facility?.staffs?.push(staff);
    }
  });

  return facility;
}

export async function getCampus(key: string) {
  let campus = (await campusDB.get(key)) as unknown as FacilityPageType | null;
  if (!campus) {
    return null;
  }
  campus.photos = [];

  campus?.photos_id?.forEach(async (element) => {
    const image = (await imagesDB.get(element)) as unknown as Image | null;
    if (image) {
      campus?.photos?.push({
        src: image.data.url,
        alt: image.data.title,
        thumbnail: image.data.thumb.url,
      });
    }
  });

  return campus;
}
