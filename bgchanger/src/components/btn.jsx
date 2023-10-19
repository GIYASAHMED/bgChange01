import React from 'react'

function Btn(props) {
    
    return (
      
        <button style={{backgroundColor:props.bc, color:props.text}} className='rounded-md py-2 px-4 text-white' onClick={props.fn}>{props.name }</button>
  )
}

export default Btn