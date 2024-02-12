import React from 'react';
import { Link } from 'react-router-dom';
import '../common.scss';

function Header() {
    return (

        <div className="header">

            <div className="header-wrap">

                <div className="header-left">
                    <Link to="/">YOUNGH</Link>
                </div>

                <div className="header-right">
                    <Link to="/">INFO</Link>
                    <Link to="/">PORTFOLIO</Link>
                    <Link to="/">CONTACT</Link>
                </div>

                {/* button onclick으로 변경, 어떻게하면 화면 위치를 옮길 수 있는가? */}

            </div>

        </div>

    );

}

export default Header;