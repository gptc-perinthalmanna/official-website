import { NextPage } from "next";
import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import Image from "next/image";
import { ImageType } from "../../server/db";

const PrivatePage: NextPage = (props) => {
  const [image, setImage] = useState<File | null>(null);
  const [createObjectURL, setCreateObjectURL] = useState<string | null>(null);
  const [response, setResponse] = useState<ImageType>();
  const uploadToClient: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const uploadToServer = async () => {
    const body = new FormData();
    if (!image) return;
    body.append("file", image);
    const response = await fetch(process.env.WEB_ADMIN_URL + "/media/upload", {
      method: "POST",
      body,
    });
    setResponse(await response.json());
  };

  return (
    <div>
      <div className="flex flex-col justify-center min-h-screen py-6 bg-gray-100 sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 transform -skew-y-6 shadow-lg bg-gradient-to-r from-cyan-400 to-sky-500 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  {createObjectURL && (
                    <Image
                      src={createObjectURL}
                      width={250}
                      height={250}
                      alt="sample"
                    />
                  )}
                  <h4>Select Image</h4>
                  <input type="file" name="myImage" onChange={uploadToClient} />
                  <button
                    className="p-2 my-3 font-bold text-white bg-blue-600 border-2 rounded-lg"
                    type="submit"
                    onClick={uploadToServer}
                  >
                    Send to server
                  </button>
                  <div>
                    {response && response.key && (
                      <>
                      <div>
                      <label>Key: </label>
                      <input
                        className="h-10 font-bold rounded-lg"
                        value={response.key}
                        type="text"
                        readOnly
                      />
                      </div><div className="my-2">
                      <label>Url: </label>
                      <input
                        className="h-10 font-bold rounded-lg"
                        value={response.url}
                        type="text"
                        readOnly
                      /></div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivatePage;
