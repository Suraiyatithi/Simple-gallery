import React from 'react';
import img1 from '../assets/images/image-1.webp'
import img2 from '../assets/images/image-2.webp'
import img3 from '../assets/images/image-3.webp'
import img4 from '../assets/images/image-4.webp'
import img5 from '../assets/images/image-5.webp'
import img6 from '../assets/images/image-6.webp'
import img7 from '../assets/images/image-7.webp'
import img8 from '../assets/images/image-8.webp'
import img9 from '../assets/images/image-9.webp'
import img10 from '../assets/images/image-10.jpeg'
import img11 from '../assets/images/image-11.jpeg'
import img12 from '../assets/images/icons8-image-30.png'
const Homegallary = () => {
    return (
        <div  className=''>
            <div className=" divide-y lg:pl-36 lg:pr-36 lg:pt-12 pb-12">
                <div className="pb-12">
                    <h1 className='text-4xl font-bold'>Gallery</h1>
                </div>
                <div className="grid grid-cols-5 gap-6 pt-12">
                    <div className="col-span-2 border-2 rounded-lg ">
                        <img src={img1} alt="" />

                    </div>
        
 <div className="">
<div className="border-2 rounded-lg mb-6">
<img src={img2} alt="" />

</div>
<div className="border-2 rounded-lg">
<img src={img3} alt="" />
</div>
</div>
<div className="">
<div className="border-2 rounded-lg mb-6">
<img src={img4} alt="" /> 
</div>
<div className="border-2 rounded-lg">
<img src={img5} alt="" />
</div>
</div> <div className="">
<div className="border-2 rounded-lg mb-6">
<img src={img6} alt="" /> 
</div>
<div className="border-2 rounded-lg">
<img src={img7} alt="" />
</div>
</div> 

                
              
         
<div className="border-2 rounded-lg">
                    <img src={img8} alt="" />
</div>              <div className="border-2 rounded-lg">
                    <img src={img9} alt="" />
</div>              <div className="border-2 rounded-lg">
                    <img src={img10} alt="" />
</div>              <div className="border-2 rounded-lg">
                    <img src={img11} alt="" />
</div>              <div className=" border-dashed border-2 rounded-lg text-center">
  <div className="flex mt-24 items-center">
  <p></p>
  <img className='mx-auto' src={img12} alt="" />
 
  </div>
    <p className='text-lg'>Add Images</p>
                  
</div>
</div>

            </div>
        </div>
    );
};

export default Homegallary;