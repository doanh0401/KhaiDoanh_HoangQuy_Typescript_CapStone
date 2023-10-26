import { Container } from '@mui/material'
import React from 'react'
import Logo from './components/Logo/Logo'

export default function Header() {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
        <div className='py-4 border-b-[1px]'>
            <Container>
                <Logo />
            </Container>
        </div>
    </div>
  )
}
