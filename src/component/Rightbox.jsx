import React from 'react'
import './Rightbox.css'
import Razorpay from '../image/Razorpay.png'

function Rightbox() {
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
          <div className='offer_expired marginbottom'>
            <span className="material-symbols-outlined">radio_button_checked</span>
            <div className='offer_expired_heading'>
                Offer expired
            </div>
            <div className='subescription'>
                <p>12 Months Subscription</p>
                <div className='pricingTotal'>
                    <div>
                        <p>Total <span style={{fontSize:'16px'}}>₹99</span></p>
                    </div>
                    <div className='monthprice'>
                        <p style={{marginTop: '-10px'}}>₹8 /mo</p>
                    </div>
                </div>
            </div>
          </div>
          <div className='recommended marginbottom'>
          <i class="fa-sharp fa-solid fa-circle-check" style={{color: '#22ec26', fontSize:'21px'}}></i>
            <div className='recommended_heading'>
            Recommended
            </div>
            <div className='recommende_subescription'>
                <p>12 Months Subscription</p>
                <div className='pricingTotal'>
                    <div>
                        <p><span className='graytext'>Total</span> <span style={{fontSize:'16px'}}>₹179</span></p>
                    </div>
                    <div className='monthprice'>
                        <p style={{marginTop: '-10px'}}>₹15 <span style={{color:'#BEBEBE'}}>/mo</span></p>
                    </div>
                </div>
            </div>
          </div>
          <div className='month_subs marginbottom'>
          <i class="fa-regular fa-circle" style={{color:'#BEBEBE',fontSize:'21px'}}></i>
            <div className='month_subs_subescription'>
                <p>6 Months Subscription</p>
                <div className='pricingTotal'>
                    <div>
                        <p><span className='graytext'>Total </span><span style={{fontSize:'16px'}}>₹149</span></p>
                    </div>
                    <div className='monthprice'>
                        <p style={{marginTop: '-10px'}}>₹25 <span style={{color:'#BEBEBE'}}>/mo</span></p>
                    </div>
                </div>
            </div>
          </div>
          <div className='month_subs marginbottom'>
          <i class="fa-regular fa-circle" style={{color:'#BEBEBE',fontSize:'21px'}}></i>
            <div className='month_subs_subescription'>
                <p>3 Months Subscription</p>
                <div className='pricingTotal'>
                    <div>
                        <p><span className='graytext'>Total</span> <span style={{fontSize:'16px'}}>₹99</span></p>
                    </div>
                    <div className='monthprice'>
                        <p style={{marginTop: '-10px'}}>₹33 <span style={{color:'#BEBEBE'}}>/mo</span></p>
                    </div>
                </div>
            </div>
          </div>
          <div className='subscriptionfee'>
            <div className='fees spaceBetween'>
                <div>Subscription Fee</div>
                <div>₹18,500</div>
            </div>
            <div className='limited_time_offer'>
                <div className='offer_box spaceBetween'>
                    <div>Limited time offer</div>
                    <div>- ₹18,401</div>
                </div>
                <div className='limited_time_offer_alert'>
                    <div className='icon'></div>&nbsp; Offer valid till 25th March 2023
                </div>
            </div>
            <div className='totalGST spaceBetween'>
                <div><span>Total</span> (Incl. of 18% GST)</div>
                <div>₹149</div>
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
  )
}

export default Rightbox