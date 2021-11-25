import formidable from "formidable";
import fs from "fs/promises";
import { NextApiRequest, NextApiResponse } from "next";
import FormDataL from "form-data";
import axios from "axios";

export const config = {
  api: {
    bodyParser: false,
  },
};

const post = async (req: NextApiRequest, res: NextApiResponse) => {
  const form = new formidable.IncomingForm();
  try {
    form.parse(req, async function (err, fields, files) {
      const data = await saveFile(files.file);
      return res.status(201).send(data);
    });
  } catch (e) {
    return res.status(400).send("Seems there is an error");
  }
};

const saveFile = async (file: formidable.File | formidable.File[]) => {
  if (Array.isArray(file)) return;

  const data = await fs.readFile(file.filepath);
  const fileName = file.originalFilename
    ? file.originalFilename
    : "uploaded_image.jpg";

  const formData = new FormDataL();
  formData.append("image", data, {filename: fileName});


    const res =  axios.post(
      `https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    ).then((res) => {
    console.log(res.data);
    fs.unlink(file.filepath);
    return res.data;}).catch((err) => {
      console.log(err);
      return err;
    });
 

  //   fs.writeFileSync(`./public/uploads/${file.originalFilename}`, data);
  //   await fs.unlinkSync(file.filepath);

};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  req.method === "POST"
    ? post(req, res)
    : req.method === "PUT"
    ? console.log("PUT")
    : req.method === "DELETE"
    ? console.log("DELETE")
    : req.method === "GET"
    ? console.log("GET")
    : res.status(404).send("");
}
