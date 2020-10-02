import axios from 'axios'
import cheerio from 'cheerio'

export const GetContributions = async (): Promise<number> => {
  try {
    const res = await axios.get(
      'https://proxy.gangjun.dev/github/users/gangjun06/contributions'
    )
    return parseInt(cheerio.load(res.data)('h2').text().trim().split(' ')[0])
  } catch (e) {
    console.log(e)
    return -1
  }
}
