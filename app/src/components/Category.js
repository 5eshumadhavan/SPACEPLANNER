import React from 'react'
import '../css/Category.css';
import Card from './Card';

function Category() {
  return (
<div class="container">
    <h2 className="text-center h2size my-5">Category</h2>
    <div class="row">
    <div class="col-lg-6">
    <Card title="Modular Kitchen" imageUri={require('../image/Modularkitchen-2.jpeg')}/>
    </div>
    <div  class="col-lg-6">
    <Card title="Modular wardrobes" imageUri={require('../image/Modular-wardrobes.jpeg')}/>
    </div>
    <div class="col-lg-6">
    <Card title="False ceiling" imageUri={require('../image/Modularkitchen-2.jpeg')}/>
    </div>
    <div  class="col-lg-6">
    <Card title="&nbsp;&nbsp;&nbsp;  Flooring" imageUri={require('../image/Modular-wardrobes.jpeg')}/>
    </div>
  </div>
  <p className="h2size mx-5 linkdesign"><b>Show me more Designs</b></p>
  
</div>

)
}

export default Category


