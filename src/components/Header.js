import React from 'react';
import './Header.css'

class Header extends React.Component {
    render() {
        return (
            <div className="title">
                <a href="#">
                    <div className="nav-icon">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </a>
                <h1>WeatherGoGo</h1>
            </div>
        )
    }
}

export default Header;