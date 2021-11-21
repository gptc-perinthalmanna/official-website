import React from "react";
import Image from "next/image";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import avatarPlaceholder from "../../public/avatar-placeholder.png";
function UserProfileCard({
  fullName,
  designation,
  image,
  socialLinks,
}: {
  fullName: string;
  designation: string;
  image?: string;
  socialLinks?: { [key: string]: string };
}) {
  return (
    <div className="w-full border-2 shadow-md bg-gray-50 rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
      <div className="w-full md:w-2/5 relative h-60 md:h-40">
        <Image
          className="object-center object-cover w-full h-full"
          src={image || avatarPlaceholder}
          alt="photo"
          sizes="100%"
          layout="fill"
        />
      </div>
      <div className="w-full md:w-3/5 text-left p-6 md:p-4 ">
        <p className="lg:text-xl md:text-lg text-md text-gray-700 font-bold">{fullName}</p>
        <p className="text-gray-400 lg:text-lg md:text-md text-sm font-normal">{designation}</p>
        <div className="flex mt-2 justify-start space-x-2">
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
        </div>
      </div>
    </div>
  );
}

export default UserProfileCard;
