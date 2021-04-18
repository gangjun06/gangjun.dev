import axios from 'axios'

export enum StatusMode {
  Work = 'Work',
  Study = 'Study',
  Sleep = 'Sleep',
  Rest = 'Rest',
  Offline = 'Offline'
}

export type Status = {
  mode: StatusMode
  title: string
  text: string
  image: string
}

export const GetStatus = async (): Promise<Status> => {
  try {
    const res = await axios.get('https://api.gangjun.dev/v1/status/me')
    return res.data
  } catch (e) {
    return {
      image: '',
      mode: StatusMode.Offline,
      text: 'Error while Loading data',
      title: 'Network Error'
    }
  }
}
