import React from "react";

function TopBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-purple-700 text-white text-sm py-1">
      <div className="flex flex-col md:flex-row items-center md:justify-between">
        <div className="flex flex-wrap justify-center">
          <div className="mx-2">+91 4933 227253</div>
          <div className="mx-2">info@gptcperinthalmanna.in</div>
        </div>
        <div className="flex flex-wrap justify-center">
          <a className="mx-2">Moodle LMS</a>
          <a className="mx-2">Downloads</a>
          <a className="mx-2">Privacy Policy</a>
          <a className="mx-2">Tenders</a>
        </div>
      </div>
    </div>
  );
}

export default TopBanner;
