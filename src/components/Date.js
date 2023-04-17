import React from 'react'

function Date() {
    const Hello= (name)=> {
        alert('LOVE'+ name);
    }
  return (
    <div className='sun'>
      <button onClick={()=>Hello(' SUNFLOWER')} >افتح يا سمسم</button>
    </div>
  )
}

export default Date;
