import React from 'react'
import '../css/Warrenty.css';
import work from '../image/working.svg';

function Warrenty() {
  return (
    <div className='container customverticalpadding'>
        <div className="container">
  <div className="row align-items-center">
    <div className="col">
    <div className='box mx-auto my-4'>
        <b>10 years Warrenty</b>
        <p  className='para'>We stand behind our high-quality items and are committed to ensuring that they stand the test of time</p>
        </div>
        <div className='box mx-auto my-4'>
        <b>Post-installation service</b>
        <p  className='para'>Our goal is to provide exceptional service and support to our customers long after the installation is complete</p>
        </div>
        <div className='box mx-auto my-4'>
        <b>Best for the Budget</b>
        <p  className='para'>We understand the importance of finding products that fit your budget without compromising on quality or style</p>
        </div>
    </div>
    <div className="col" style={{paddingLeft:"100px"}}>
        <h2 className="hign">How it work?</h2>
    <img src={work} alt="My Happy SVG" style={{width:'90vh'}}/>
    </div>
  </div>
</div>
</div>
  )
}

export default Warrenty


