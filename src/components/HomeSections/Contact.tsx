import React, { FC, useEffect, useState } from 'react'
import Container from '../Container'
import ReCAPTCHA from 'react-google-recaptcha'
import { recaptcha } from '../../config.json'
import { motion } from 'framer-motion'
import Axios from 'axios'
import { toast } from 'react-toastify'
import { primary } from '../../styles/color'

const Contact: FC = () => {
  const [title, setTitle] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [text, setText] = useState<string>('')
  const [captchaValue, setCaptchaValue] = useState<string>('')
  const [sended, setSended] = useState<boolean>(false)

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
      name: 'Patreon',
      value: 'gangjun',
      link: 'https://patreon.com/gangjun'
    },
    {
      name: 'Paypal',
      value: 'gangjun',
      link: 'https://paypal.me/gangjun'
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
    toast.info('Sorry, this form is currently not working. Send Email Instead')
    if (sended) return toast.warning('You already sended')
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
      setSended(true)
    } catch (e) {
      toast.warning('Error While sending content')
    }
  }

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await Axios.get('https://api.gangjun.dev/v1/info/discord')
        const { username, discriminator } = res.data
        setContactMethods(
          contactMethods.concat({
            name: 'Discord',
            value: username + '#' + discriminator
          })
        )
      } catch (e) {
        toast.error('error while loading discord information')
      }
    }
    fetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const inputStyle =
    'appearance-none block w-full color-dark-bg text-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none'

  return (
    <div id='contact' className='color-deepdark-bg'>
      <Container className='md:flex justify-between items-stretch pt-48 pb-24 md:gap-x-24'>
        <div>
          <div className='mt-4 font-semibold text-4xl'>Contact</div>
          <div className='color-gray-text'>Contact to Gangjun Lee</div>
          <div className='mt-8'>
            {contactMethods.map((item, i) => (
              <div className='flex mb-2' key={i}>
                <div>{item.name}:</div>
                <motion.a
                  className='ml-4'
                  href={item.link}
                  whileHover={{
                    x: 15,
                    color: primary
                  }}>
                  {item.value}
                </motion.a>
              </div>
            ))}
          </div>
        </div>
        <div className='w-full max-w-lg mt-8 md:mt-0'>
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
                className='color-primary-bg text-black font-bold py-2 px-4 rounded'
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
      </Container>
    </div>
  )
}

export default Contact
