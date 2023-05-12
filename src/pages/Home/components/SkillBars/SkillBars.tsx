import { fadeIn, textVariant } from '@/utilities'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import styles from './SkillBars.module.css'
import { WordCloud } from '../../../../components/WordCloud'

interface Skill {
  type: string
  level: number
}

interface SkillBarsProps {
  hue: string
  saturation: string
  skills: Skill[]
}

const SkillBars: React.FC<SkillBarsProps> = ({ hue, saturation, skills }) => {
  const [collapsed, setCollapsed] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setCollapsed(false)
    }, 1000)
  }, [])

  return (
    <div className={`${styles.container} ${collapsed ? styles.collapsed : ''}`}>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>My development abilities</p>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>
      <motion.div variants={fadeIn('up', 'spring', 0.5, 0.75)} className={styles.listWrapper}>
        <ul className={styles.skills} style={{ flex: 1 }}>
          {skills.map((skill, index) => (
            <li
              key={skill.type}
              style={{
                width: `${skill.level}%`,
                backgroundColor: `hsl(${hue}, ${saturation}%, ${100 / (index + 3.5)}%)`,
                borderRadius: '15px',
              }}
              className={`${styles.customLi} ${styles.skillItem}`}
            >
              <p className={styles.paragraph}>
                {skill.type}
                <span className={styles.customSpan}>{skill.level}</span>
              </p>
            </li>
          ))}
        </ul>
        <div style={{ flex: 1 }}>
          <WordCloud />
        </div>
      </motion.div>
    </div>
  )
}

export default SkillBars
