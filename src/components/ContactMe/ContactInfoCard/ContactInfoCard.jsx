import React from 'react'
import './ContactInfoCard.css'

function ContactInfoCard({iconUrl,text}) {
  const handleOnClick = ()=>{
    if(text.includes('@')){
      window.location.href = `mailto:${text}`
      return;
    }
    window.location.href = "https://github.com/evilmyth01"
  }
  return (
    <div className='contact-details-card'>
        <div className="icon">
            <img src={iconUrl} alt={text} />
        </div>

        <p onClick={handleOnClick}>{text}</p>
    </div>
  )
}

export default ContactInfoCard