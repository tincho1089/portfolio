import { personcomputer } from '@/assets'
import TextWritter from '@/components/TextWritter/TextWritter'
import { textVariant } from '@/utilities'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import React from 'react'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <React.Fragment>
      <motion.div variants={textVariant(0)}>
        <div className={styles.contact} id='contact'>
          <div className={styles.contactWrapper}>
            <div className={styles.bannerText}>
              <h2 className={styles.title}>
                <TextWritter strings={['Get In Touch.']} />
              </h2>
              <h3 className={styles.subtitle}>
                I’m currently searching for opportunities for a fullstack or front-end developer role. If there is any vacancy my inbox is
                always open. Whether you have any further questions or just want to say hi, I’ll try my best to get back to you!
              </h3>
              <hr className={styles.line} />
              <ul className={styles.social}>
                <li className={styles.socialLi} key='linkedin'>
                  <a href='https://www.linkedin.com/in/martin-emanuel-salinas-ba922717b/' target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
                  </a>
                </li>
                <li className={styles.socialLi} key='github'>
                  <a href='http://github.com/tincho1089' target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={faGithub} className={styles.icon} />
                  </a>
                </li>
                <li className={styles.socialLi} key='gmail'>
                  <a href='mailto:martin10897@gmail.com' target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.imageWrapper}>
              <img className={styles.navLogoContainer} src={personcomputer} alt='person' />
            </div>
          </div>
        </div>
      </motion.div>
    </React.Fragment>
  )
}

export default Contact
