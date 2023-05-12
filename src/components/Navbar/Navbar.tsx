import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import fotoperfil from '@/assets/fotoperfil.png'
import './Navbar.scss'

function Navbar() {
  const items = ['Home', 'Experience', 'Works', 'Skills', 'Contact']

  useEffect(() => {
    const AddNavClass = () => {
      const nav = document.querySelector('nav')
      nav?.classList.toggle('nav-color', window.scrollY > 0)
    }
    window.addEventListener('scroll', AddNavClass)

    return () => window.removeEventListener('scroll', AddNavClass)
  }, [])

  return (
    <nav className='navbar'>
      <div className='nav-left'>
        <Link to='/'>
          <img className='nav-logo-img' src={fotoperfil} alt='netflix' />
        </Link>
        <ul className='nav-list'>
          {items.map((item) => (
            <li className='nav-list-item' key={item}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
