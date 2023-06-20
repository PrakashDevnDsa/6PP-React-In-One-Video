import React, { useState } from 'react'

const Contact = () => {

 const [name,setName] = useState('')

  return (
    <>
      <form>
          <input 
          type="text"  placeholder='Name'
          onChange={(e)=>setName(e.target.value)}
          value={name}
          />
          <input
           type="email"
           placeholder='Email'
            />
      
      <button
      onClick={()=> console.log(name)}
      >Press</button>
  <p>{name}</p>
          
      </form>
    </>
  )
}

export default Contact