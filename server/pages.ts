import { facilitiesDb, campusDB, imagesDB, usersDb, eventsDB } from "./db";

interface StaffType {
  name: string;
  designation: string;
  social?: {
    facebook: string;
    twitter: string;
    instagram: string;
  };
}

export interface FacilityPageType {
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

export interface ImageType {
  key: string;
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

export interface EventType{
    key: string;
    title: string;
    subtitle: string;
    image: string
    date:string;
    type:string;
    page_key: string;
}

export interface CampusPageType {
  title: string;
  about: string;
  cover: string;
  staffs_ids?: string[];
  staffs?: StaffType[];
  events?: EventType[];
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
    const image = (await imagesDB.get(element)) as unknown as ImageType | null;
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
  let campus = (await campusDB.get(key)) as unknown as CampusPageType | null;
  if (!campus || campus == null) {
    return null;
  }
  campus.events = [];
  const events = await (await eventsDB.fetch({page_id: key})).items as unknown as EventType[];
  events.forEach( (element) => {
      campus?.events?.push(element);
  });

  campus.staffs = [];
  campus.staffs_ids?.forEach(async (element) => {
    const staff = (await usersDb.get(element)) as unknown as StaffType | null;
    if (staff) {
      campus?.staffs?.push(staff);
    }
  })


  return campus;
}
