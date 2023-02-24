import React from 'react'

function Card(props) {
  return (
    <div className='card-background m-5' style={{backgroundImage: 'url(' + props.imageUri + ')'}}>
      {props.title && 
      <div className='fading'>
       <h1 className="display-4 fw-normal cat">
        {props.title}

       </h1>
      </div>}
    </div>
  )
}

export default Card