import React from 'react';

import './HamburgerMenu.css';

//font awesome


const HamburgerMenu = ()=>{


    return (
        <div className="hamburger__menu">
            <div className="hamburger__menu__inner">
                <button className="hamburger__menu__btn">
                    <div className="hamburger__menu__btn__inner">
                        <svg className="hamburger__menu__btn__icon" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m13 16.745c0-.414-.336-.75-.75-.75h-9.5c-.414 0-.75.336-.75.75s.336.75.75.75h9.5c.414 0 .75-.336.75-.75zm9-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm-4-5c0-.414-.336-.75-.75-.75h-14.5c-.414 0-.75.336-.75.75s.336.75.75.75h14.5c.414 0 .75-.336.75-.75z" fill-rule="nonzero"/></svg>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default HamburgerMenu;
