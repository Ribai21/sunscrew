import React from 'react'
import Contact from '../component/Contact'
import TopImage from '../component/TopImage'
import contact from '../assets/contact.png'
const ContactPage = () => {
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto ">
        <TopImage   
          imageUrl={contact}
          title="Contact Us"
          subtext="Get in touch with us for any inquiries or feedback."
          overlayOpacity={0.6} height="h-[400px] "
        />
        <Contact />
      </div>
    </div>
  )
}

export default ContactPage