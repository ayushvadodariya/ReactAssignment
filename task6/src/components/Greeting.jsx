import React from 'react'

export default function Greeting() {
    const name = "ayush"
    return (
    <>
      <h1> Hello {name}, How are you </h1>
      <p> Date: {new Date.now()}</p>
    </>
  )
}