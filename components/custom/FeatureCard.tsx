import React from "react";
import Image from "next/image";
import BoldTitle from "../ui/BoldTitle";
import type { ColorLiteral } from "../../common/hooks";

function FeatureCard({
  color = "violet",
  image,
  title,
  description,
}: {
  image?: string;
  color: ColorLiteral;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-stretch w-full my-2 overflow-hidden border-2 rounded-lg shadow-sm justify-items-stretch lg:flex-row-reverse border-violet-500 ">
      {image && (
        <div className="relative w-full lg:h-auto h-60 lg:w-1/2">
          <Image
            src={image}
            alt={title}
            placeholder="blur"
            layout="fill"
            blurDataURL={
              process.env.NODE_ENV === "development" ? image : undefined
            }
            objectFit="cover"
          />
        </div>
      )}
      <div className="w-full p-5 lg:w-1/2">
        <BoldTitle color={color}>{title}</BoldTitle>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
