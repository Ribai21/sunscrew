import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!formData.mobile || !formData.name|| !formData.email || !formData.message){
      // alert("Please Fill All The Fields");
      setIsSubmitted("All Fields Are Required");
      setTimeout(() => {
        setIsSubmitted(false)
      }, 4000);
      return;
    }
    
    console.log('Form submitted:', formData);
    // setIsSubmitted("Thank you! Your message has been sent.");
    setIsSubmitted("There is a Error!  Please Try With Phone Number")
    setTimeout(() => {
      setIsSubmitted(false)
    }, 2000);
    setFormData({
      name: '',
      mobile: '',
      email: '',
      message: ''
    });
  };
  return (
    <div id='contact' className="min-h-screen px-4 py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-lg p-6 md:p-10">
        <h2 className="text-4xl fadeup font-bold text-center  mb-10">Contact <span className='text-yellow-500'>Us</span><hr className="bg-yellow-500 h-1 w-[10%] rounded mt-3 mx-auto" /></h2>

        <div className="grid ani  md:grid-cols-2 gap-10">
          {/* Left Column: Contact Info + Map */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-yellow-500 text-xl" />
                <a href='tel:+919600228013' className="text-gray-700 text-lg">+91 96002 28013</a>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-yellow-500 text-xl" />
                <a href='mailto:mohamedjamal@gmail.com' className="text-gray-700 text-lg">mohamedjamal@gmail.com</a>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-yellow-500 text-xl" />
                <span className="text-gray-700 text-lg">KC Road, Shencottai, India</span>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15763.89943357969!2d77.23608072425634!3d8.97446030253184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06810e54a796f5%3A0x7daa844824a5d448!2sShenkottai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1748429836435!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
             
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
            <form  onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Your mobile number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"  
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  rows="4"
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Queries"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                ></textarea>
              </div>
              <button
              onClick={()=> setIsSubmitted(true)}
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
              >
                Send Message
              </button>
              {/* Optional: Add a success message or reset form after submission */}  
              {isSubmitted && (
                <div className="mt-4 ">
                  {/* <p>Thank you! Your message has been sent.</p> */}
                  <p className='text-red-600'>{isSubmitted}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
