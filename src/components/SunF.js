import React from 'react'

function SunF(props) {

const date ='SUNFLOWER';
const introduction='The sunflower (Helianthus annuus) is an annual plant with a large daisy-like flower face. Its scientific name comes from the Greek words helios (“sun”) and anthos (“flower”). The flowers come in many colors (yellow, red, orange, maroon, brown), but they are commonly bright yellow with brown centers that ripen into heavy heads filled with seeds. '
const link='https://www.almanac.com/plant/sunflowers'



const mystyle = {backgroundColor: 'yellow' , padding: '10px' ,fontSize: '20px', color: 'black' , fontWeight: 'bold'};



  return (
    <div style={mystyle}>
      <div>{date}</div>
      <div>{introduction}</div>
      <div>{props.num}</div>
      <a href={link}>www.almanac.com/plant/sunflowers</a>
    </div>
  )
}

export default SunF;
