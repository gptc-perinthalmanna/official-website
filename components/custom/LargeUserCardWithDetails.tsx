import Image from "next/image";
import React from "react";
import SocialIcon from "../ui/SocialIcon";

function LargeUserCardWithDetails({
  avatar,
  fullName,
  designation,
  subtitle,
  email,
  phone,
  socialLinks,
  address,
  ...props
}: {
  avatar: string;
  fullName: string;
  designation: string;
  subtitle: string;
  email: string;
  phone: string;
  address: string;
  socialLinks: { [key: string]: string };
}) {
  return (
    <div className="flex bg-gray-100 border-2 rounded-lg " {...props}>
      <div className="max-w-full p-3">
        <Image
          className="rounded-lg"
          src={avatar}
          alt={fullName}
          height={250}
          width={250}
        />
      </div>
      <div className="p-3">
        <h2 className="text-3xl font-light">{fullName}</h2>
        <h3 className="text-lg font-bold text-gray-800 uppercase ">
          {designation}
        </h3>
        <p className="mb-3 text-xs text-gray-700">{subtitle}</p>
        <div className="flex mb-1 text-sm text-gray-500">
          Email:
          <span className="ml-2 text-gray-600">{email}</span>
        </div>
        <div className="flex mb-1 text-sm text-gray-500">
          Phone: <span className="ml-2 text-gray-600">{phone}</span>
        </div>
        <div className="flex mb-1 text-sm text-gray-500">
          Address:
          <span className="ml-2 text-gray-600">{address}</span>
        </div>
        <div className="flex mt-3">
          {socialLinks.facebook && (
            <SocialIcon type="facebook" url={socialLinks.facebook} />
          )}
          {socialLinks.telegram && (
            <SocialIcon type="telegram" url={socialLinks.telegram} />
          )}
          {socialLinks.linkedin && (
            <SocialIcon type="linkedin" url={socialLinks.linkedin} />
          )}
          {socialLinks.whatsapp && (
            <SocialIcon type="whatsapp" url={socialLinks.whatsapp} />
          )}
        </div>
      </div>
    </div>
  );
}

export default LargeUserCardWithDetails;
