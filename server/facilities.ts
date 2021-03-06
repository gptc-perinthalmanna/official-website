import { DepartmentFacilityType, deptFacilitiesDB } from "./db";

export async function getDeptFacilites(key: string) {
  const deptFacilities = (await deptFacilitiesDB.get(
    key
  )) as unknown as DepartmentFacilityType | null;
  if (!deptFacilities || deptFacilities == null) {
    return null;
  }
  return deptFacilities;
}
