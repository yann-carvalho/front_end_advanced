import React from 'react'
import { useState } from 'react'

const HookContador = () => {

    const [contador, setContador] = useState(1)

    function incrementarContador() {
        setContador(contador+1)
    }

  return (
    <div>
        <h1>Contador Com useState</h1>
        <button onClick={incrementarContador}>Incrementar Contador</button>
        <h1>O contador está em {contador}</h1>
    </div>
  )
}

export default HookContador