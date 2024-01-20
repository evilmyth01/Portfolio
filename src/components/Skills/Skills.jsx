import React from 'react'
import './Skills.css'
import { SKILLS } from '../../utils/data.js'
import SkillCard from './SkillCard/SkillCard.jsx'
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard.jsx'

function Skills() {
  const[selectedSkill, setSelectedSkill] = React.useState(SKILLS[0])
  const handleSelectSkill = (skill) => {  
    setSelectedSkill(skill)
  }

  return (
    <section className='skills-container'>
        <h5>Technical Proficiency</h5>

        <div className="skills-content">
            <div className="skills">
            {SKILLS.map((item)=>( 
              <SkillCard
                key={item.title}
                title={item.title}
                iconUrl={item.icon}
                isActive={selectedSkill.title === item.title}
                onClick={()=>{
                  return handleSelectSkill(item);
                }}
             />
            ))}
            </div>

            <div className="skills-info">
              <SkillsInfoCard 
                heading={selectedSkill.title}
                skills={selectedSkill.skills}
              />
            </div>
        </div>
    </section>
  )
}

export default Skills