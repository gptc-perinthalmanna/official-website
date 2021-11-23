import React from "react";
import { useColor } from "../../common/hooks";

function RibbonCard({ children, color, ...props }: { children: React.ReactNode, color?: string, }) {
  const className = useColor(color);
  return (
    <div className={"flex h-full border-2 border-t-0 border-b-0 border-l-8 border-r-0 border-pink-600 rounded-lg bg-gradient-to-r " + className} {...props}>
      <div className="p-3">{children}</div>
    </div>
  );
}

export default RibbonCard;
