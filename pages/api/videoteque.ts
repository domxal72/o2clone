// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import data from '../../data/videoteque.json'

interface IDataObject {
  title: string
  imgSrc: string
  csfd: number
}

type Data = {
  hits: IDataObject[]
  recomend: IDataObject[]
  best: IDataObject[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(data)
}
