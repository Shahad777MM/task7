import React from 'react'
import Navbar from '../components/Navbar'
import MainlLayout from '../layout/MainlLayout'

const link='https://www.chatgpt.com'


function ContactPage() {
  return (
    <MainlLayout>
    <Navbar></Navbar>
    <a className='email' target='blank' href='mailto:'>www.chatgpt.com</a>
    <br></br>
    <a className='phone' target='-blank' href='tel:' >07701111111</a>

   
    </MainlLayout>
  )
}

export default ContactPage
