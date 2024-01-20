import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './ContactForm.css'

function ContactForm() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID,import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact-form-content">
        <form ref={form} onSubmit={sendEmail}>
            <div className="name-container">
                <input type="text" name='my_name' placeholder='First Name' />
                <input type="text" name='last_name' placeholder='Last Name' />
            </div>

            <input type="text" name='from_name' placeholder='Email' />
            <textarea type='text' name="message" placeholder='Message' rows={3} ></textarea>

            <button type='submit'>Send</button>
        </form>
    </div>
  )
}

export default ContactForm


{/*YOUR_SERVICE_ID  YOUR_TEMPLATE_ID  public_key */}