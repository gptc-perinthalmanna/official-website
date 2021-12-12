import { facilitiesDb, campusDB, imagesDB, usersDb, eventsDB, CampusPageType, UserType, FacilityPageType, ImageType, EventType } from "./db";


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

  unresolvedpromises = facility?.photos_id?.map(async (element) => {
    const image = (await imagesDB.get(element)) as unknown as ImageType | null;
    if (image) {
      photos.push({
        src: image.url,
        alt: image.title,
        thumbnail: image.thumb.url,
      });
    }
    return image
  });
  if (unresolvedpromises) await Promise.all(unresolvedpromises)

  const staffs = await addStaffs(facility)

  return {...facility, photos, staffs};
}


export async function getCampus(key: string) {
  const campus = (await campusDB.get(key)) as unknown as CampusPageType | null;
  if (!campus || campus == null) {
    return null;
  }
  const staffs = await addStaffs(campus)
  return {...campus, staffs};
}


async function addStaffs(e:any) {
  let unresolvedpromises: any
  let staffs : UserType[] = [];
  unresolvedpromises = e.staffs_ids?.map(async (element: string) => {
    const staff = (await usersDb.get(element)) as unknown as UserType | null;
    if (staff) {
      staffs.push(staff);
    }
    return staff
  })
  if (unresolvedpromises) await Promise.all(unresolvedpromises)
  return staffs
}

export async function getEvents(page_id: string) {
  return (await eventsDB.fetch({"tags?contains" : page_id})).items as unknown as EventType[] | null;
}

export async function getEvent(key: string) {
  const event = (await eventsDB.get(key)) as unknown as EventType | null;
  return event;
}

export async function getAllEvents() {
  return (await eventsDB.fetch({}, {limit: 10})).items as unknown as EventType[] | null;
}
