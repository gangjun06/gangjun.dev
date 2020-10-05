import React, { FC, useEffect, useState } from 'react'
import Container from '../Container'
import ReCAPTCHA from 'react-google-recaptcha'
import { recaptcha } from '../../config.json'
import { motion } from 'framer-motion'
import Axios from 'axios'
import { toast } from 'react-toastify'

const Contact: FC = () => {
  const [title, setTitle] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [text, setText] = useState<string>('')
  const [captchaValue, setCaptchaValue] = useState<string>('')

  const [contactMethods, setContactMethods] = useState<any[]>([
    {
      name: 'Email',
      value: 'me@gangjun.dev',
      link: 'mailto:me@gangjun.dev'
    },
    {
      name: 'Github',
      value: 'gangjun06',
      link: 'https://github.com/gangjun06/'
    },
    {
      name: 'Discord',
      value: 'Loading ....',
      link: '#'
    }
  ])

  const onCaptchaChange = (value: string | null) =>
    value && setCaptchaValue(value)

  const BuildLabel = ({ text }: { text: string }) => (
    <label className='block uppercase tracking-wide font-color-5 text-xs font-bold mb-2'>
      {text}
    </label>
  )

  const submitEmail = async () => {
    const [trimTitle, trimEmail, trimText] = [
      title.trim(),
      email.trim(),
      text.trim()
    ]

    if (!trimTitle || !trimEmail || !trimText)
      return toast.warning('Please fill all section')

    var emailExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
    if (!trimEmail.match(emailExp))
      return toast.warning('Please check your email address')

    try {
      await Axios.post('https://api.gangjun.dev/v1/utils/sendemailtome', {
        captcha: captchaValue,
        title,
        email,
        text
      })

      toast.info('Successful sending')
    } catch (e) {
      toast.warning('Error While sending content')
    }
  }

  useEffect(() => {
    Axios.get('https://api.gangjun.dev/v1/info/discord')
      .then((res) => {
        const { username, discriminator } = res.data
        contactMethods.pop()
        setContactMethods(
          contactMethods.concat({
            name: 'Discord',
            value: username + '#' + discriminator
          })
        )
      })
      .catch((e) => {
        toast.error('error while loading discord information')
      })
  }, [])

  const inputStyle =
    'appearance-none block w-full bg-color-2 text-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none'

  return (
    <div id='contact' className='bg-color-3'>
      <Container className='md:flex justify-between items-stretch pt-48 pb-24 md:gap-x-24'>
        <div>
          <div className='mt-4 font-semibold text-4xl'>Contact</div>
          <div className='font-color-5'>Contact to Gangjun Lee</div>
          <div className='mt-8'>
            {contactMethods.map((item, i) => (
              <div className='flex' key={i}>
                <div>{item.name}:</div>
                <a className='ml-4' href={item.link}>
                  {item.value}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className='w-full max-w-lg'>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                <BuildLabel text='subject' />
                <input
                  className={inputStyle}
                  type='text'
                  placeholder='Foo'
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className='w-full md:w-1/2 px-3'>
                <BuildLabel text='Email to reply' />
                <input
                  className={inputStyle}
                  type='email'
                  placeholder='me@example.com'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full px-3'>
                <BuildLabel text='Main Text' />
                <textarea
                  className={inputStyle}
                  placeholder='Enter Text to send...'
                  rows={6}
                  style={{ resize: 'none' }}
                  onChange={(e) => setText(e.target.value)}
                />
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <ReCAPTCHA
                sitekey={recaptcha}
                theme={'dark'}
                onChange={onCaptchaChange}
              />
              {captchaValue && (
                <motion.button
                  className='bg-color-4 text-black font-bold py-2 px-4 rounded'
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{
                    scale: 1.1
                  }}
                  onClick={submitEmail}>
                  Submit
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Contact
