import React from "react";
import { BsFacebook, BsLinkedin, BsTelegram } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io5";
import Link from "next/link";

function SocialIcon({
  type,
  url,
  className = "mr-2",
  size,
  ...props
}: {
  type: string;
  url?: string;
  className?: string;
  size?: number;
}) {
  switch (type) {
    case "facebook":
      return (
        <Linked url={url}>
          {" "}
          <BsFacebook
            size={size}
            color={"#1778F2"}
            className={className}
            {...props}
          />{" "}
        </Linked>
      );
    case "linkedin":
      return (
        <Linked url={url}>
          {" "}
          <BsLinkedin
            size={size}
            color={"#006192"}
            className={className}
            {...props}
          />{" "}
        </Linked>
      );
    case "telegram":
      return (
        <Linked url={url}>
          {" "}
          <BsTelegram
            size={size}
            color={"#0088CC"}
            className={className}
            {...props}
          />{" "}
        </Linked>
      );
    case "whatsapp":
      return (
        <Linked url={url}>
          {" "}
          <IoLogoWhatsapp
            size={size}
            color={"#4FCE5D"}
            className={className}
            {...props}
          />{" "}
        </Linked>
      );
    default:
      return null;
  }
}

export default SocialIcon;

function Linked({
  url,
  children,
}: {
  url?: string;
  children: React.ReactNode;
}) {
  if (!url) {
    return <>{children}</>;
  }
  return (
    <Link href={url}>
      {children}
    </Link>
  );
}
