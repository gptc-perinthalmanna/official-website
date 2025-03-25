
export interface NewsMediaType {
  key: string;
  title: string;
  author: string;
  date: string;
  description: string;
  url?: string;
}

export interface NotificationType {
  key: number;
  title: string;
  link?: string;
  createdAt: number;
  tags: string[];
  expired: boolean;
  deleted: boolean;
  expiryDate: number;
  category: string;
  author?: string;
}

export interface CampusPageType {
  key: string;
  title: string;
  about: string;
  cover: string;
  staffs_ids?: string[];
}

export interface UserType {
  key: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  designation: string;
  role: string[];
  department: string;
  phone: string;
  address: string;
  avatar?: string;
  socialLinks: {
    facebook?: string;
    linkedin?: string;
    instagram?: string;
    whatsapp?: string;
  };
}

export interface FacilityPageType {
  key: string;
  title: string;
  about: string;
  cover: string;
  staffs_ids?: string[];
  photos_id?: string[];
}

export interface ImageType {
  key: string;
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

  success: boolean;
  status: number;
}

export interface OtherType {
  key: string;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  value: { [key: string]: any };
}

export interface DepartmentsType {
  key: string;
  title: string;
  about: string;
  cover: string;
  staffs_ids: string[];
}

export interface PressAndMediaType {
  key: string;
  title: string;
  date: string;
  author_id: string;
  description: string;
}

export interface EventType {
  key: string;
  title: string;
  subtitle: string;
  image: string;
  date: string;
  type: string;
  tags: string[];
}

export interface DepartmentFacilityType {
  key: string;
  title: string;
  description: string;
  image: string;
  color: string;
  tags: string[];
}

export interface FileType {
  key: string;
  url: string;
  title: string;
  description: string;
  tags: string[];
}
