import { experiences } from '@/constants'
import { textVariant } from '@/utilities'
import { motion } from 'framer-motion'
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import styles from './Experience.module.css'
import 'react-vertical-timeline-component/style.min.css'

interface Experience {
  title: string
  companyName: string
  date: string
  icon: string
  iconBg: string
  points: string[]
}

interface ExperienceCardProps {
  experience: Experience
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        backgroundColor: 'white',
        borderRadius: '15px',
        boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px,rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px',
      }}
      contentArrowStyle={{ borderRight: '7px solid  #fff' }}
      date={experience.date}
      dateClassName='text-white'
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className={styles.iconWrapper}>
          <img className={styles.icon} src={experience.icon} alt={experience.companyName} />
        </div>
      }
    >
      <div>
        <h3 className={styles.title}>{experience.title}</h3>
        <p className={styles.company}>{experience.companyName}</p>
      </div>

      <ul className={styles.experienceList}>
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className={styles.experienceItem}>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

export const Experience: React.FC = () => {
  return (
    <>
      <>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </>

      <div className={styles.experienceCardWrapper}>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}
