import Link from "next/link";
import React from "react";

function TopBanner() {
  return (
    <div className="py-1 text-sm text-white bg-gradient-to-r from-blue-700 to-purple-700">
      <div className="flex flex-col items-center md:flex-row md:justify-between">
        <div className="flex flex-wrap justify-center">
          <div className="mx-2">+91 4933 227253</div>
          <div className="mx-2">info@gptcperinthalmanna.in</div>
        </div>
        <div className="flex flex-wrap justify-center">
          <a href="https://gpcperinthalmanna.infrastruct.in/" rel="noreferrer" target="_blank" className="mx-2">Moodle LMS</a>
          <Link href="/archives/downloads"><a className="mx-2">Downloads</a></Link>
          <a className="mx-2">Privacy Policy</a>
          <Link href="/custom/photo-uploader">
          <a className="mx-2">Photo Uploader</a></Link>
        </div>
      </div>
    </div>
  );
}

export default TopBanner;
