import React from 'react'
import "../stylesheets/Contador.css"

function Contador({ numeroClics }) {
  return (
    <div 
    className='contador'>{numeroClics}
    </div>
  )
}

export default Contador;