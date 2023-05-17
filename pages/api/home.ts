// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import data from '../../data/home.json'

interface IDataObject {
  title: string
  imgSrc: string
  csfd?: number
  description?: string
  channel?: string
}

type Data = {
  live: IDataObject[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(data)
}
