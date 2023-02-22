import React from 'react'
import '../css/Header.css';

function Header() {
  return (
    <div className="position-relative overflow-hidden">
    <div className=" p-lg-5 page-header mx-auto" style={{height:'145vh'}}>
      <div className="">
        <div className=''></div>
          <h1 className="display-4 fw-normal title">Designing
                           spaces
                           that tell
                           your story</h1>
    <div className="button my-4 mx-3">
            <button type="button" className="btn btn-primary">Call Us</button>
            <button type="button" className="btn btn-primary mx-2">Whatsapp</button>
    </div>
      </div>
    </div>
   <div className='img-fluid background'>
     
   </div>
  </div>
  )
}

export default Header