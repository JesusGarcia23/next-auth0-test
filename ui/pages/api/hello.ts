// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from "next-auth/jwt";

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const token = await getToken({req});
    const accessToken =  token?.accessToken;
    const respone = await fetch('http://localhost:5000/health', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}` as string || ''
      }
    }).then(async(res) => {
      if (res.ok) {
        return await res.json();
      }
    }).catch(err => {
      console.log('Err', err);
    })
    res.status(200).json({ name: 'John Doe' })
  } catch (err) {

  }
}
