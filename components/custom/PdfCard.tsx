import React from "react";
import { AiOutlineFilePdf } from "react-icons/ai";

function PdfCard({
  title,
  url,
  description,
}: {
  title: string;
  url: string;
  description: string;
}) {
  return (
    <a
      key={title}
      href={url}
      className="max-w-sm p-3 m-3 border-2 rounded-lg hover:shadow-md"
    >
      <AiOutlineFilePdf size={70} />
      <h4 className="text-lg font-bold">{title}</h4>
      <p className="text-sm">{description}</p>
    </a>
  );
}

export default PdfCard;
