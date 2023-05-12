import { github } from '@/assets'
import { projects } from '@/constants'
import { fadeIn, textVariant } from '@/utilities'
import { motion } from 'framer-motion'
import React from 'react'
import { Tilt } from 'react-tilt'
import styles from './Works.module.css'

interface ProjectTag {
  name: string
  color: string
}

interface Project {
  index: number
  name: string
  description: string
  tags: ProjectTag[]
  image: string
  sourceCodeLink: string
}

const ProjectCard: React.FC<Project> = ({ index, name, description, tags, image, sourceCodeLink }) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)} className={styles.projectCard}>
      <Tilt options={{ max: 45, scale: 1, speed: 450 }} className={styles.tilt}>
        <div className={styles.tiltHeader}>
          <img src={image} alt={name} className={styles.tiltHeaderImage} />
          <div className={styles.tiltHeaderManager}>
            <div onClick={() => window.open(sourceCodeLink, '_blank')} className={styles.clickable}>
              <img src={github} alt='github' className={styles.githubImg} />
            </div>
          </div>
        </div>
        <div className={styles.mt5}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <p key={tag.name} className={styles.text14} style={{ color: tag.color }}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

export const Works: React.FC = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={styles.subTitle}>My work</p>
        <h2 className={styles.title}>Projects.</h2>
      </motion.div>

      <div className={styles.descWrapper}>
        <motion.p variants={fadeIn('', '', 0.1, 1)} className={styles.desc}>
          Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described
          with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different
          technologies, and manage projects effectively.
          <br />
          <br />
          Please feel free to explore more projects in my
          <a className={styles.link} href='https://github.com/tincho1089' target='blank'>
            {' '}
            Github{' '}
          </a>
          account!
        </motion.p>
      </div>

      <div className={styles.projectCardWrapper}>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}
