// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import DashKeys from 'dashkeys'

export default async function handler(req, res) {
  console.log('DashKeys', DashKeys)
  let WIF = await DashKeys?.utils?.generateWifNonHd()
  console.log('DashKeys wif', WIF)
  res.status(200).json({ wif: WIF })
}
