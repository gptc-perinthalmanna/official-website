import { facilitiesDb, campusDB, imagesDB, usersDb, eventsDB, CampusPageType, UserType, FacilityPageType, ImageType, EventType } from "./db";

interface StaffType {
  name: string;
  designation: string;
  social?: {
    facebook: string;
    twitter: string;
    instagram: string;
  };
}


interface PhotoType {
  src: string;
  alt: string;
  thumbnail: string;
}


export async function getFacilities(key: string) {
  const facility = (await facilitiesDb.get(
    key
  )) as unknown as FacilityPageType | null;
  if (!facility) {
    return null;
  }

  let photos : PhotoType[] = Array();
  let staffs : StaffType[] = Array();

  facility?.photos_id?.forEach(async (element) => {
    const image = (await imagesDB.get(element)) as unknown as ImageType | null;
    if (image) {
      photos.push({
        src: image.data.url,
        alt: image.data.title,
        thumbnail: image.data.thumb.url,
      });
    }
  });

  facility?.staffs_ids?.forEach(async (element) => {
    const staff = (await usersDb.get(element)) as unknown as UserType | null;
    if (staff) {
      staffs.push(staff);
    }
  });

  return {...facility, photos, staffs};
}

export async function getCampus(key: string) {
  const campus = (await campusDB.get(key)) as unknown as CampusPageType | null;
  if (!campus || campus == null) {
    return null;
  }

  let staffs : UserType[] = [];
  campus.staffs_ids?.forEach(async (element) => {
    const staff = (await usersDb.get(element)) as unknown as UserType | null;
    if (staff) {
      staffs.push(staff);
    }
  })


  return {...campus, staffs};
}


export async function getNssPage() {

}


export async function getEvents(page_id: string) {
  const events = (await eventsDB.fetch({page_id})).items as unknown as EventType[] | null;
  return events;
}