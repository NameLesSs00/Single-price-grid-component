import React from 'react'
import cremeBrulee from '@/app/images/image-creme-brulee-tablet.jpg'
import Image from 'next/image'

export default function Memepage (){
  
  return (
    <div>
      <h1> Enjory your stay!!!</h1>
      <Image src={cremeBrulee} alt="you got a Creme Brulle"></Image>
    </div>
  )
}

