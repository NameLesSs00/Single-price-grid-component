'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export const Grid = () => {
const router = useRouter();
  return (
    <div className="container">
      <div className="area1">
        <h1>Join our community</h1>
        <h3>30-day, hassle-free money back guarantee</h3>
        <p>Gain access to our full library of tutorials along with expert code reviews.</p>
        <p>Perfect for any developers who are serious about honing their skills.</p>
      </div>
      <div className="area2">
        <h2>Monthly Subscripton</h2>
        <p ><span className='amount'>$29</span> <span className='perMonth'>per month </span></p>
        <p>Full access for less than $1 a day</p>
        <button onClick={()=>{
          router.push("/sign-up");
        }
        }>Sign Up</button>
      </div>
      <div className="area3">
        <h2>Why Us</h2>
        <ul>
          <li>Tutorials by industry experts</li>
          <li>Peer & expert code review</li>
          <li>Coding exercises</li>
          <li>Access to our GitHub repos</li>
          <li>Community forum</li>
          <li>Flashcard decks</li>
          <li>New videos every week</li>
        </ul>
      </div>
    </div>
  )
}
