import React from "react";

function Paragraph({ children, className, ...props }: { children: React.ReactNode; className?: string }) {
  return <p className={"text-gray-800 mt-3 " + className}>{children}</p>;
}

export default Paragraph;
