import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="h-[100px] text-center text-white text-xl py-3 bg-fuchsia-900">
        
        <p>&copy;ABELLA5.5 {year}: All rights reserved</p>
    </footer>
  )
}