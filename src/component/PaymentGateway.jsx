import React from 'react'
import Navbar from './Navbar'
import BackGround from '../image/BackGround.png'
import icon from '../image/Icon.png';
import icon1 from '../image/Icon1.png';
import icon2 from '../image/Icon2.png';
import icon3 from '../image/Icon3.png';
import icon4 from '../image/Icon4.png';
import Rightbox from './Rightbox';

const PaymentGateway = () => {
  return (
    <>
       <Navbar/>
       <div className='main_page'>
        <div className='main_left_box'>
          <h1 className='heading'>Access curated courses worth<br/> ₹ <span style={{color:'red',textDecoration:'line-through'}}><span style={{color:'white'}}>18,500</span></span> at just <span className='textBlue'>₹ 99</span> per year!</h1>

          <div className='highlites'>
            <div className='highlites_detail'>
              <img src={icon} alt='img'></img>
              <h2><span className='textBlue'>100+</span> Job relevant courses</h2>
            </div>

            <div className='highlites_detail'>
              <img src={icon1} alt='img'></img>
              <h2><span className='textBlue'>20,000+</span> Hours of content</h2>
            </div>

            <div className='highlites_detail'>
              <img src={icon2} alt='img'></img>
              <h2><span className='textBlue'>Exclusive</span> webinar access</h2>
            </div>

            <div className='highlites_detail'>
              <img src={icon3} alt='img'></img>
              <h2>Scholarship worth<span className='textBlue'> ₹94,500</span></h2>
            </div>

            <div className='highlites_detail'>
              <img src={icon4} alt='img'></img>
              <h2><span className='textBlue'>Ad Free</span> learning experience</h2>
            </div>

          </div>
        </div>
          <Rightbox/>
       </div>
    </>
  )
}

export default PaymentGateway