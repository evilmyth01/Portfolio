import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section className='hero-container'>
        <div className='hero-content'>
            <h2>Building Digital Experience that inspire</h2>
            <p>
            Elevating Ideas, Crafting Solutions: Empowering the Web with Innovative Software Development. Within every line of code lies a commitment to transforming visions into seamless digital experiences. Ready to redefine the boundaries of online excellence, weaving intricate solutions that transcend expectations. One transformative project at a time.
            </p>
        </div>

        <div className='hero-img'>
            <div>
                <div className="tech-icon">
                    <img src="/icons8-node-js.svg" alt="react" />
                </div>
                <img src="/ai-generated-hero.webp" alt="hero-img" />
            </div>

            <div>
            <div className="tech-icon">
                    <img src="/icons8-react-native-96.svg" alt="react" />
                </div>
                <div className="tech-icon">
                    <img src="/icons8-c.svg" alt="react" />
                </div>
                <div className="tech-icon">
                    <img src="/icons8-html-5.svg" alt="react" />
                </div>
            </div>

        </div>
    </section>
  )
}

export default Hero