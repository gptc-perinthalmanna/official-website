import React, { useState, useEffect } from "react";

const _news = [
  {
    title: "TOP RANKS FOR ‘LET’ B.TECH FROM GPC PERINTHALMANNA.",
    date: "23 Oct 2021",
  },
  {
    title: "പെരിന്തൽമണ്ണ പോളിടെക്നിക് കോളേജിലെ കോഴ്സ് വിവരങ്ങൾ",
    date: "3 Oct 2021",
  },
  {
    title:
      " CIVIL DEPARTMENT- LET – Rank 14. Fathima Musliha Rank 26. Pranav P, Rank 29. Thafseera, Rank 41. Nileena",
    date: "31 Oct 2021",
  },
  {
    title:
      "ELECTRICAL DEPARTMENT- LET – Rank 3. Jishnu v, Rank 36. NANDULAL U , Rank 42. SRAVAN V V, Rank 59. MOHAMMED SHAFI.",
    date: "08 Oct 2021",
  },
  {
    title:
      "FACULTY DEVELOPMENT PROGRAMME ON ‘ART OF JOYFUL TEACHING’ 2 0 2 1 NOVEMBER- 2 3 – 2 5.",
    date: "23 Oct 2021",
  },
];

function NewsTicker() {
  const [news,] = useState(_news);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % news.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [news]);



  return (
    <div className=" mt-3 flex lg:container mx-auto bg-gray-200 items-center">
      <div className="bg-blue-800 text-gray-50 px-3 uppercase font-bold text-sm h-full py-3">
        LATEST NEWS
      </div>
      <p className="bg-gray-200 h-full text-xs px-3">{news[index].title}</p>
      <div className="text-gray-500 mx-1 flex-shrink-0 text-xs font-bold">
        {news[index].date}
      </div>
      <div className="text-red-600 text-xs mr-2 font-semibold">New!</div>
    </div>
  );
}

export default NewsTicker;
