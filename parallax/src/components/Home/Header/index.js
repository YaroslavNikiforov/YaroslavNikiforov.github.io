import React, {Component} from 'react';
import '../../../styles/css/App.css'

class Header extends Component {
    render() {
        return (
            <header className='header'>
                <div className="header__container">
                    <h2 className="header__logo">Company<span>NAME</span></h2>
                    <nav className="header__menu">
                        <a href="" className="header__link">WHAT</a>
                        <a href="" className="header__link">COMPANIES</a>
                        <a href="" className="header__link">MEET</a>
                        <a href="" className="header__link">TESTIMONIALS</a>
                        <a href="" className="header__link">WHY</a>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;