import React, { useState } from 'react'
import Sile from '../assets/images/Sile.jpg'
import Homepage from '../component/Home';
import Home from '../component/Home'
import { render } from 'react-dom';
import axios from 'axios';

const Loginpage = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");


    function handlelogin() {

        // alert(`username: ${userName} Password : ${password}`);

        axios.get('http://localhost:3000/Login', {

            username: 'minhtv',
            password: '9999'
        })

            .then(res => {
                if (res.data.axios == true) {
                    console.log(res);
                    alert(res.data);
                } else {
                    console.log(res)
                    window.location.href = "/Home";
                }
            })
            .catch(error =>
                console.log(error));
    };

    return (
        <div className='contenner'>
            <div className='host'>
                <img src={Sile} width='750px' height='750px' />
            </div>
            <div className='lest'>
                <div className='cover'>
                    <div className='cd-h2'>
                        <h2> LOGIN</h2>
                    </div>
                    <input value={userName} onChange={(a) => { setUserName(a.target.value) }} type="text" placeholder="nhập username" />
                    <h1></h1>
                    <input value={password} onChange={(a) => { setPassword(a.target.value) }} type="text" placeholder="nhập password" />
                    <h1></h1>
                    <div className='hh'>
                        <button type="button" onClick={handlelogin}>Đăng nhập</button>
                    </div>
                    <div>
                        <h1></h1>
                        <a href="">Quên mật khẩu...?</a>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Loginpage











