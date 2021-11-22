import React from 'react'
import Link from "next/link";
import { IoLinkSharp } from 'react-icons/io5';

function LinkCard({title, url }: {title:string; url:string;}) {
    return (
        <Link key={title} href={url}>
        <a className="flex items-center p-3 m-3 border-2 rounded-lg hover:bg-gray-400 hover:bg-opacity-10 hover:shadow-sm">
          <IoLinkSharp size={30} />
          <h4 className="ml-2 font-bold text-md">{title}</h4>
        </a>
      </Link>
    )
}

export default LinkCard
