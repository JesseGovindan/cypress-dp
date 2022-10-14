import type { NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuidv4 } from 'uuid'

import redis from '../../lib/redis'

export default async function create(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(400).json({
      body: 'bad method',
    })
  }

  try {
    await redis.flushall()
    res.status(200).json({
      body: 'success',
    })
  } catch {
    res.status(500).json({
      body: 'failed',
    })
  }
}
