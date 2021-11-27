import React from "react";
import Image from "next/image";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
// import avatarPlaceholder from "../../images/avatar-placeholder.png";
function UserProfileCard({
  name,
  designation,
  avatar = "/images/avatar-placeholder.png",
  socialLinks,
}: {
  name: string;
  designation: string;
  avatar?: string;
  socialLinks?: { [key: string]: string };
}) {
  return (
    <div className="flex flex-col w-full overflow-hidden border-2 rounded-lg shadow-md bg-gray-50 sahdow-lg md:flex-row">
      <div className="relative w-full md:w-2/5 h-60 md:h-40">
        <Image
          className="object-cover object-center w-full h-full"
          src={avatar}
          alt="photo"
          sizes="100%"
          layout="fill"
        />
      </div>
      <div className="w-full p-6 text-left md:w-3/5 md:p-4 ">
        <p className="font-bold text-gray-700 lg:text-xl md:text-lg text-md">{name}</p>
        <p className="text-sm font-normal text-gray-400 lg:text-lg md:text-md">{designation}</p>
      {socialLinks &&  <div className="flex justify-start mt-2 space-x-2">
          {socialLinks?.facebook && (
            <a
              href={socialLinks.facebook}
              className="text-gray-500 hover:text-gray-600"
            >
              <BsFacebook size={22} />
            </a>
          )}
          {socialLinks?.telegram && (
            <a
              href={socialLinks.telegram}
              className="text-gray-500 hover:text-gray-600"
            >
              <FaTelegram size={22} />
            </a>
          )}
          {socialLinks?.linkedin && (
            <a
              href={socialLinks.linkedin}
              className="text-gray-500 hover:text-gray-600"
            >
              <BsLinkedin size={22} />
            </a>
          )}
          {socialLinks?.instagram && (
            <a
              href={socialLinks.instagram}
              className="text-gray-500 hover:text-gray-600"
            >
              <BsInstagram size={22} />
            </a>
          )}
        </div>}
      </div>
    </div>
  );
}

export default UserProfileCard;
