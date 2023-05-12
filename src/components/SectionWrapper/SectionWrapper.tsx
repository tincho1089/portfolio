import { motion } from 'framer-motion'
import React from 'react'
import { staggerContainer } from '@/utilities'
import './SectionWrapper.scss'

interface SectionWrapperProps {
  Component: React.ReactNode
  idName: string
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ Component, idName }) => {
  return (
    <motion.section
      variants={staggerContainer(5)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={'padding wrapper relative z-0'}
    >
      <span className={'hashSpan'} id={idName}>
        &nbsp;
      </span>
      {Component}
    </motion.section>
  )
}

export default SectionWrapper
