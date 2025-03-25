import type React from "react";
import { type ColorLiteral, useColor } from "../../common/hooks";

function RibbonCard({ children, color = 'pink', ...props }: { children: React.ReactNode, color?: ColorLiteral, }) {
  const className = useColor(color);
  return (
    <div className={`flex h-full border-2 border-t-0 border-b-0 border-l-8 border-r-0 border-pink-600 rounded-lg bg-gradient-to-r ${className}`} {...props}>
      <div className="p-3">{children}</div>
    </div>
  );
}

export default RibbonCard;
