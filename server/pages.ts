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
  let unresolvedpromises: any
  let photos : PhotoType[] = Array();
  let staffs : StaffType[] = Array();

  unresolvedpromises = facility?.photos_id?.map(async (element) => {
    const image = (await imagesDB.get(element)) as unknown as ImageType | null;
    if (image) {
      photos.push({
        src: image.data.url,
        alt: image.data.title,
        thumbnail: image.data.thumb.url,
      });
    }
    return image
  });
  unresolvedpromises = facility?.staffs_ids?.map(async (element) => {
    const staff = (await usersDb.get(element)) as unknown as UserType | null;
    if (staff) {
      staffs.push(staff);
    }
    return staff
  });
  if (unresolvedpromises) await Promise.all(unresolvedpromises)

  return {...facility, photos, staffs};
}

export async function getCampus(key: string) {
  const campus = (await campusDB.get(key)) as unknown as CampusPageType | null;
  if (!campus || campus == null) {
    return null;
  }

  let unresolvedpromises: any
  let staffs : UserType[] = [];
  let events : EventType[] | null = [];

  unresolvedpromises = campus.staffs_ids?.map(async (element) => {
    const staff = (await usersDb.get(element)) as unknown as UserType | null;
    if (staff) {
      staffs.push(staff);
    }
    return staff
  })

  const _events = await getEvents(key)
  if (_events) events = _events
  

  if (unresolvedpromises) await Promise.all(unresolvedpromises)
  return {...campus, staffs, events};
}


export async function getNssPage() {
}

export async function getEvents(page_id: string) {
  const events = (await eventsDB.fetch({page_id})).items as unknown as EventType[] | null;
  return events;
}

export async function createPage(type = 'facility', data: any) {
  if (type === 'facility') {
    const facility = (await facilitiesDb.put(data)) as unknown as FacilityPageType | null;
    return facility;
  } else if (type === 'campus') {
    const campus = (await campusDB.put(data)) as unknown as CampusPageType | null;
    return campus;
  }
}