import { CubeSpinner } from '@/components'
import TextWritter from '@/components/TextWritter/TextWritter'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faArrowCircleDown, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <React.Fragment>
      <header id='Home' className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.bannerTextWrap}>
            <h2 className={styles.title}>
              <TextWritter strings={['I am Martin Salinas.', 'FullStack Developer']} />
            </h2>
            <h3 className={styles.detail}>
              I am a FullStack Developer. I like dabbling in various parts of frontend and backend development and love to learn about new
              technologies, play basketball or simply spend time with friends and family.
            </h3>
            <hr className={styles.line} />
            <ul className={styles.social}>
              <li key='linkedin'>
                <a href='https://www.linkedin.com/in/martin-emanuel-salinas-ba922717b/' target='_blank' rel='noreferrer'>
                  <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
                </a>
              </li>
              <li key='github'>
                <a href='http://github.com/tincho1089' target='_blank' rel='noreferrer'>
                  <FontAwesomeIcon icon={faGithub} className={styles.icon} />
                </a>
              </li>
              <li key='gmail'>
                <a href='mailto:martin10897@gmail.com' target='_blank' rel='noreferrer'>
                  <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.bannerImage}>
            <CubeSpinner />
          </div>
        </div>
        <p className={styles.scrolldown}>
          <a href='#Experience'>
            <FontAwesomeIcon icon={faArrowCircleDown} className={styles.icon} />
          </a>
        </p>
      </header>
    </React.Fragment>
  )
}
