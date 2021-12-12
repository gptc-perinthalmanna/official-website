import { NextPage } from "next";
import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import Image from 'next/image'

const PrivatePage: NextPage = (props) => {
  const [image, setImage] = useState<File | null>(null);
  const [createObjectURL, setCreateObjectURL] = useState<string | null>(null);

  const uploadToClient:ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const uploadToServer = async () => {
    const body = new FormData();
    if(!image) return;
    body.append("file", image);
    const response = await fetch(process.env.NEXT_PUBLIC_WEB_ADMIN_URL + "/media/images", {
      method: "POST",
      body
    });
  };

  return (
    <div>
      <div>
         {/* eslint-disable-next-line @next/next/no-img-element */}
        {createObjectURL && <Image src={createObjectURL} width={250} height={250} alt="sample" />}
        <h4>Select Image</h4>
        <input type="file" name="myImage" onChange={uploadToClient} />
        <button
          className="btn btn-primary"
          type="submit"
          onClick={uploadToServer}
        >
          Send to server
        </button>
      </div>
    </div>
  );
}

export default PrivatePage;