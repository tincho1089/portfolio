import React from 'react'
import './Footer.scss'

export const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-copy'>
          <p>
            © Copyright 2023 - Designed & Built by <strong>Martin Salinas</strong>
          </p>
        </div>
      </div>
    </footer>
  )
}
