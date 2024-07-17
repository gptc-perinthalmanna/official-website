import Image from "next/image";
import React from "react";
import SocialIcon from "../ui/SocialIcon";

function LargeUserCardWithDetails({
  avatar,
  name,
  designation,
  subTitle,
  email,
  phone,
  socialLinks,
  address,
  ...props
}: {
  avatar?: string;
  name: string;
  designation: string;
  subTitle: string;
  email: string;
  phone: string;
  address: string;
  socialLinks?: { [key: string]: string };
}) {
  const photo = avatar ? avatar : "/images/avatar-placeholder.png";
  return (
    <div className="flex bg-gray-100 border-2 rounded-lg " {...props}>
      <div className="max-w-full p-3">
        <Image
          className="rounded-lg object-cover"
          src={photo}
          alt={name}
          height={250}
          width={250}
          placeholder="blur"
          blurDataURL={
            process.env.NODE_ENV === "development" ? photo : undefined
          }
        />
      </div>
      <div className="p-3">
        <h2 className="text-3xl font-light">{name}</h2>
        <h3 className="text-lg font-bold text-gray-800 uppercase ">
          {subTitle}
        </h3>
        <p className="mb-3 text-xs text-gray-700">{designation}</p>
        <div className="flex mb-1 text-sm text-gray-500">
          Email:
          <span className="ml-2 text-gray-600">{email}</span>
        </div>

        <div className="flex mb-1 text-sm text-gray-500">
          Address:
          <span className="ml-2 text-gray-600">{address}</span>
        </div>
        {socialLinks && (
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
              <SocialIcon
                type="whatsapp"
                url={`https://wa.me/+91${socialLinks.whatsapp}?text=Hello!%20I%20found%20your%20number%20from%20the%20Official%20Website%20of%20GPTC%20Perinthalmanna`}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default LargeUserCardWithDetails;
