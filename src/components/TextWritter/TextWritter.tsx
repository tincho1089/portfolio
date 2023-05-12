import React from 'react'
import Typewriter, { Options } from 'typewriter-effect'

interface TextWritterProps {
  strings: string[]
  autoStart?: boolean
  loop?: boolean
  deleteSpeed?: number
  delay?: number
}

const TextWritter: React.FC<TextWritterProps> = ({ strings, autoStart = true, loop = true, deleteSpeed = 60, delay = 90 }) => {
  const options: Options = {
    strings,
    autoStart,
    loop,
    deleteSpeed,
    delay,
  }

  return <Typewriter options={options} />
}

export default TextWritter
