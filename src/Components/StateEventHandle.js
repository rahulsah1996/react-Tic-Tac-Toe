import React, { useState } from "react"
import { Button } from "react-bootstrap"
// import  {useState} from 'react'

export default function StateEventHandle() {
    //ler con
    const [initial, setInitial] = useState(1 +3)
    console.log(initial)
    // console.log(setInitial)
  return (
    <div>
        <h1>State Hook and Event Handle</h1>
        <Button onClick={() => setInitial(initial + 1)}>Hello Click Me</Button>
        <h5>{initial}</h5>
    </div>
  )
}
