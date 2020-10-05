import axios from 'axios'

export const GetContributions = async (): Promise<number> => {
  try {
    const res = await axios.get(
      'https://api.gangjun.dev/v1/info/githubcontributionscount'
    )
    return res.data.value
  } catch (e) {
    console.log(e)
    return -1
  }
}
