// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { DepartmentsType } from "../../../server/db";
import { createDepartmentPage } from "../../../server/departments";
import { validation } from "../../../server/helper/validation";



const userValidationSchema: yup.SchemaOf<{}> = yup.object().shape({
  key: yup.string().required(),
 title: yup.string().min(3).required(),
 about: yup.string().min(40).required(),
 cover: yup.string().url().required(),
 staffs_ids: yup.array().of(yup.string().required()).required(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{} | { error: string }>
) {
  if (req.method === "POST") {
    const { isValid, errors, data } = await validation(
      userValidationSchema,
      req.body
    );
    if (!isValid) {
      return res.status(400).json({ error: errors });
    }

    const page: DepartmentsType = { ...data } as unknown as DepartmentsType;


    await createDepartmentPage(page);

    return res.status(200).json({
      message: "success",
      data,
    });
  }
}
