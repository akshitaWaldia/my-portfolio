import React from 'react'
import Title from '../Components/Title.js'
import ImageSection from '../Components/imageSection.js'
import SkillsSection from '../Components/SkillsSection.js'
import ServicesSection from '../Components/ServicesSection.js'
import design from '../img/design.svg'
function AboutPage() {
    return (
        <div className="AboutPage">
            <Title title={'About Me'} span={'About Me'}/>
            <ImageSection/>
            <Title title={'Skills'} span={'Skills'}/>
            <div className="skills-container">
            <SkillsSection skill={'JavaScript'} progress={'50%'} width={'50%'}/>
            <SkillsSection skill={'ReactJS'} progress={'30%'} width={'30%'}/>
            <SkillsSection skill={'GraphQL'} progress={'90%'} width={'90%'}/>
            <SkillsSection skill={'MongoDB'} progress={'70%'} width={'70%'}/>
            <SkillsSection skill={'C++'} progress={'40%'} width={'80%'}/>
            <SkillsSection skill={'Java'} progress={'40%'} width={'40%'}/>
            <SkillsSection skill={'NodeJS'} progress={'100%'} width={'100%'}/>
            </div>
            <Title title={'My Services'} span={'My Services'}/>
            <div className="services-container">
               
            <ServicesSection image={design} title={'Web Design'} text={' Lorem ipsum dolor sit amet, consectetur adipisicing elit.  '}/>
            <ServicesSection image={design} title={'Web Design'} text={' Lorem ipsum dolor sit amet, consectetur adipisicing elit.  '}/>
            <ServicesSection image={design} title={'Web Design'} text={' Lorem ipsum dolor sit amet, consectetur adipisicing elit.  '}/>
       
            </div>
        </div>
    )
}

export default AboutPage;
