import React from 'react'
import Homeimg from '../assets/images/1601871259.png'
import img from '../assets/images/322486780_1858715504462553_2611097384986958492_n.jpg'
import imgg from '../assets/images/setting.jpg'
 const Homepage = () => {
  return (
    <div>
        <div className='user'>
       <a href=''><i class="fa-solid fa-user"></i></a>
      </div>
      <div className='setting'>
        <a href=''> <img src={imgg} width="40px" /></a>
      <h1></h1>
      
      </div>
      <div className='cd-logo'>
        <img src={Homeimg} width="200px"></img>
      </div>
      <div className='Nav'>
        <div className='tools'>
          <img src={img} width="100px"></img>
        </div>
        <h1 className='a'>Lê Văn Ánh</h1>
        <h4>Quản lý</h4>
        <div className='Naver'>
          <ul className='gg'>
            <li> <button type="button"><a href=' '>Home</a></button></li>
            <h1></h1>
            <li> <button type="button"><a href=' '>Nhân viên</a></button></li>
          </ul>
        </div>
      </div>
      <div className='Container'>
        <div className='cd-Container'> 
        <h3>Lịch làm việc</h3>
        </div>
        <div>
          <ul className='ds-menu'>
            <li> <button type="button"><a href=' '>Thứ Hai</a></button></li>
            <h1></h1>
            <li> <button type="button"><a href=' '>Thứ Ba</a></button></li>
            <h1></h1>
            <li> <button type="button"><a href=' '>Thứ Tư</a></button></li>
            <h1></h1>
            <li> <button type="button"><a href=' '>Thứ Năm</a></button></li>
            <h1></h1>
            <li> <button type="button"><a href=' '>Thứ Sáu</a></button></li>
          </ul>
        </div>
      </div>

      <div className='EX'>
        <div className='cd-EX'>
        <a href=''>Chưa vào ca làm</a>
        </div>
      </div>
      <div className='RX'>
        <div className='cd-RX'> 
        <a href=''>Đến sớm và đi muộn</a>
        </div>
      </div>
      <div className='TX'>
        <div className='cd-TX'> 
        <a href=''>Số ca làm trong tháng</a>
        </div>
      </div>
      <div className='YX'>
        <div className='cd-YX'> 
        <a href=''>Nghỉ phép</a>
        </div>
      </div>
      <div className='Footer'>
        <div className='cd-Footer'>
          <h2>NHÀ PHÁT TRIỂN</h2>
          <h5>SSKPI is an online payroll software in Vietnam that can work on smartphones.<br /> This application is highly appreciated by many small and medium enterprises for its outstanding features,<br /> as an optimal solution in human resource management in the 4.0 technology era.</h5>
         

        </div>
      </div>

    </div>

  )
}

export default Homepage
