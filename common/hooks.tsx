export const _color: {
  [key: string]: string;
} = {
  gray: "from-gray-800 to-gray-500",
  red: "from-red-800 to-red-500",
  blue: "from-blue-800 to-blue-500",
  yellow: "from-yellow-800 to-yellow-500",
  green: "from-green-800 to-green-500",
  pink: "from-pink-800 to-pink-500",
  purple: "from-purple-800 to-purple-500",
  orange: "from-orange-800 to-orange-500",
  lime: "from-lime-800 to-lime-500",
  teal: "from-teal-800 to-teal-500",
  indigo: "from-indigo-800 to-indigo-500",
  violet: "from-violet-800 to-violet-500",
  fuchsia: "from-fuchsia-800 to-fuchsia-500",
  rose: "from-rose-800 to-rose-500",
};

export function useColor(color?: string, cn?: string) {
  cn = cn ? cn : "";
  cn = color ? `${cn} ${_color[color]}` : cn;
  return cn;
}
