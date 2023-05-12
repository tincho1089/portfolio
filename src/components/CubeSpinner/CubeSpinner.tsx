/* eslint-disable no-unused-vars */
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './CubeSpinner.scss'
import { nodejs } from '@/assets'

export const CubeSpinner = () => {
  // <img src={typescript} alt="nodejs" className='image' />
  return (
    <div className='stage-cube-cont'>
      <div className='cubespinner'>
        <div className='face1'>
          <img src={nodejs} alt='nodejs' className='image' />
        </div>
        <div className='face2'>
          <FontAwesomeIcon icon={faHtml5} color='#F06529' />
        </div>
        <div className='face3'>
          <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
        </div>
        <div className='face4'>
          <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
        </div>
        <div className='face5'>
          <FontAwesomeIcon icon={faJsSquare} color='#416CEA' />
        </div>
        <div className='face6'>
          <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
        </div>
      </div>
    </div>
  )
}
