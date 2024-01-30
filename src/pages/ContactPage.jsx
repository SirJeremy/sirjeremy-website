import { useState } from 'react'

function ContactPage() {
  return (
    <div className='page-root'>
      <div className='page-container text-center'>
        <h1 className='text-primary text-4xl font-extrabold'>
            Contact Infomation
        </h1>
        <p className='text-lg my-8'>
            Contact me using the following infomation:
        </p>
        <p className='text-2xl my-1'>
            Jeremy Cortez
        </p>
        <p className='text-2xl my-1'>
            SirJeremyCortez@gmail.com
        </p>
      </div>
    </div>
  )
}

export default ContactPage;
