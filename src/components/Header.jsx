import React from 'react'
import logo from '../assets/logo.png'
import "../style/HeaderStyle.css"

export default function Header() {

    let navBar = [{
        name: "Home",
        link: "/home"
    },

    {
        name: "About",
        link: "/about"
    },

    {
        name: "Featured",
        link: "/featured"
    },

    {
        name: "Cart",
        link: "/cart"
    },

    {
        name: "Login",
        link: "/login"
    }
    ]

    return (
        <div className='flex bg-amber-300 m-0 p-0 h-10'>
           
            <ul className='flex gap-2 top-0 left-1' >
                 <img src={logo} style={{width:'100%', height:"100%", border:"2px solid black", marginLeft:0}}/>
                {navBar.map((item) => <li>{item.name}</li>)}
            </ul>

        





        </div>
    )
}
