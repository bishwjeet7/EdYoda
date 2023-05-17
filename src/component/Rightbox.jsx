import React, { useState } from 'react';
import './Rightbox.css';
import Razorpay from '../image/Razorpay.png';

function Rightbox() {
  const [selectedPlan, setSelectedPlan] = useState('recommended');

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className='main_right_box'>
      <div className='progress_bar'>
        <div>
          <div className='progress'>1</div>
          <p>Sign Up</p>
        </div>
        <div>
          <div className='progress'>2</div>
          <p>Subscribe</p>
        </div>
      </div>
      <div className='formheader'>
        <p>Select your subscription plan</p>
      </div>
      <div className={selectedPlan === 'offer_expired' ? 'offer_expired marginbottom selected' : 'offer_expired marginbottom'} onClick={() => handlePlanSelect('offer_expired')}>
        <span className="material-symbols-outlined">radio_button_checked</span>
        <div className='offer_expired_heading'>
          Offer expired
        </div>
        <div className='subescription'>
          <p>12 Months Subscription</p>
          <div className='pricingTotal'>
            <div>
              <p>Total <span style={{ fontSize: '16px' }}>₹99</span></p>
            </div>
            <div className='monthprice'>
              <p style={{ marginTop: '-10px' }}>₹8 /mo</p>
            </div>
          </div>
        </div>
      </div>
      <div className={selectedPlan === 'recommended' ? 'recommended marginbottom selected' : 'recommended marginbottom'} onClick={() => handlePlanSelect('recommended')}>
        <i className="fa-sharp fa-solid fa-circle-check" style={{ color: '#22ec26', fontSize: '21px' }}></i>
        <div className='recommended_heading'>
          Recommended
        </div>
        <div className='recommende_subescription'>
          <p>12 Months Subscription</p>
          <div className='pricingTotal'>
            <div>
              <p><span className='graytext'>Total</span> <span style={{ fontSize: '16px' }}>₹179</span></p>
            </div>
            <div className='monthprice'>
              <p style={{ marginTop: '-10px' }}>₹15 <span style={{ color: '#BEBEBE' }}>/mo</span></p>
            </div>
          </div>
        </div>
      </div>
      <div className={selectedPlan === '6_months' ? 'month_subs marginbottom selected' : 'month_subs marginbottom'} onClick={() => handlePlanSelect('6_months')}>
        <i className="fa-regular fa-circle" style={{ color: '#BEBEBE', fontSize: '21px' }}></i>
        <div className='month_subs_subescription'>
          <p>6 Months Subscription</p>
          <div className='pricingTotal'>
            <div>
              <p><span className='graytext'>Total </span><span style={{ fontSize: '16px' }}>₹149</span></p>
            </div>
            <div className='monthprice'>
              <p style={{ marginTop: '-10px' }}>₹25 <span style={{ color: '#BEBEBE' }}>/mo</span></p>
            </div>
          </div>
        </div>
      </div>
      <div className={selectedPlan === '3_months' ? 'month_subs marginbottom selected' : 'month_subs marginbottom'} onClick={() => handlePlanSelect('3_months')}>
        <i className="fa-regular fa-circle" style={{ color: '#BEBEBE', fontSize: '21px' }}></i>
        <div className='month_subs_subescription'>
          <p>3 Months Subscription</p>
          <div className='pricingTotal'>
            <div>
              <p><span className='graytext'>Total</span> <span style={{ fontSize: '16px' }}>₹99</span></p>
            </div>
            <div className='monthprice'>
              <p style={{ marginTop: '-10px' }}>₹33 <span style={{ color: '#BEBEBE' }}>/mo</span></p>
            </div>
          </div>
        </div>
      </div>
      <div className='subscriptionfee'>
        <div className='fees spaceBetween'>
          <div>Subscription Fee</div>
          <div>₹{selectedPlan === 'offer_expired' ? '99' : selectedPlan === 'recommended' ? '179' : selectedPlan === '6_months' ? '149' : '99'}</div>
        </div>
        <div className={selectedPlan === 'recommended' ? 'limited_time_offer' : 'limited_time_offer hide'}>
          <div className='offer_box spaceBetween'>
            <div>Limited time offer</div>
            <div>- ₹{(selectedPlan === 'recommended' ? 179 : 0) - 1}</div>
          </div>
          <div className='limited_time_offer_alert'>
            <div className='icon'></div>&nbsp; Offer valid till 25th March 2023
          </div>
        </div>
        <div className='totalGST spaceBetween'>
          <div><span>Total</span> (Incl. of 18% GST)</div>
          <div>₹{selectedPlan === 'offer_expired' ? '99' : selectedPlan === 'recommended' ? '198' : selectedPlan === '6_months' ? '176' : '117'}</div>
        </div>
      </div>
      <div className='btn'>
            <div className='canclebtn'>CANCEL</div>
            <button className='paybtn'>PROCEED TO PAY</button>
          </div>
          <div className='RazorpayIcon'>
            <img src={Razorpay} alt="razorpay"/>
          </div>      
    </div>
  );
}

export default Rightbox;
