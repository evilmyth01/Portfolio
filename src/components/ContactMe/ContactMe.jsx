import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

function ContactMe() {
  return (
    <section className="contact-container">
        <h5>Contact Me</h5>
        <div className="contact-content">
            <div style={{flex:1}}>
                <ContactInfoCard iconUrl="/icons8-email-96.png" text="vishalgoswami02018@gmail.com" />
                <ContactInfoCard iconUrl="/github.svg" text="https://github.com/evilmyth01" />
            </div>
            <div style={{flex:1}}>
                <ContactForm />
            </div>
        </div>
    </section>
  )
}

export default ContactMe