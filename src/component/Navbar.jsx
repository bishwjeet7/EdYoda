import React from 'react'
import Logo from '../image/LOGO.png'

const Navbar = () => {
  return (
    <>
        <div className='navbar'>
            <div className='left_content'>
                <div>
                  <img className='logo' src={Logo} alt='logo'/>
                </div>
                <div className='menu'>
                  <p>Courses</p>
                  <i class="fa-solid fa-angle-down"></i>
                </div>
                <div className='menu'>
                  <p>Courses</p>
                  <i class="fa-solid fa-angle-down"></i>
                </div>
            </div>
            <div className='right_content'>
              <div><i class="fa-solid fa-magnifying-glass"></i></div>
              <div>Login</div>
              <div className='joinnow'>JOIN NOW</div>
            </div>
        </div>
    </>
  )
}

export default Navbar