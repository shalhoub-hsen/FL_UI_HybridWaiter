import React from 'react'
import ScreenHeader from 'components/Layout/ScreenHeader/ScreenHeader'
import Contact from './Contact/Contact'
const ContactPage = () => {
  return (
    <>
    <ScreenHeader
        PageName = {'Contact Us'}
        ItemName={'CONTACT'}
        />
         <Contact/>
    </>
  )
}

export default ContactPage
