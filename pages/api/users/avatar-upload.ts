// Backend
import formidable from 'formidable';
import { NextApiRequest, NextApiResponse } from 'next';

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };


export default async function handler (req:NextApiRequest, res:NextApiResponse)  {
  const form = formidable.formidable({keepExtensions: true, uploadDir: './'});
  form.parse(req, (err, fields, files) => {
    console.log(err, fields, files);
  });
  return res.status(200).json({
    message: "success",
  });
};