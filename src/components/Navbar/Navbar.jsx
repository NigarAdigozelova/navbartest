import React, { useState } from 'react'
import "./navbar.scss"

const Navbar = () => {
    const [menu, setMenu] = useState(false)


    return (
        <div className='nav'>
            <div className='top-nav'>
                <div className='phone'>+1122 334 45  67</div>
                <div className='info'>
                    <ul>
                        <li><a href="">loremipson@gmail.com</a></li>
                        <li><a href="">Şəxsi kabinet</a></li>
                        <li><a href="">AZ</a></li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className='bottom-nav container'>
                <div className='logo'>Logo</div>
                <div className='right-nav'>
                    <ul className='burger-menu-items'>
                        <li><a href="">Xidmətlər</a></li>
                        <li><a href="">Həkimlər</a></li>
                        <li><a href="">Diaqnostika</a></li>
                        <li><a href="">Estetika</a></li>
                        <li><a href="">Sağlamlıq bloqları</a></li>
                    </ul>
                </div>
                <button className='bars' onClick={() => {
                    menu ? setMenu(false) : setMenu(true);
                }}><img src="./img/menu.svg" alt="" /></button>

                <div className='burger-menu' style={
                    menu ? { transform: "translateX(0px)" }
                        : { transform: "translateX(-250px)" }
                }>
                    
                    <div  style={{ marginRight: "15px", display:"flex",justifyContent:"flex-end" }} ><button className='delete' style={{width:"40px",height:"40px",borderRadius:"5px", marginBottom:"40px",top:"0"}} onClick={() => {
                        menu ? setMenu(false) : setMenu(true);
                    }}>X</button></div>
                    
                    <ul className='burger-menu-items'>
                        <li><a href="">Xidmətlər</a></li>
                        <li><a href="">Həkimlər</a></li>
                        <li><a href="">Diaqnostika</a></li>
                        <li><a href="">Estetika</a></li>
                        <li><a href="">Sağlamlıq bloqları</a></li>
                    </ul>
                    
                    

                </div>
            </div>

        </div>
    )
}

export default Navbar
