import React from 'react';
import '../common.scss';
import IconDoubleArrow from '../img/icon_doublearrow.png';

function Main() {
    return (

        <div className="main-wrap">

            <div className="main-txt">
                <p className="txt1">I AM</p>
                <p className="txt2">FRONT-END</p>
                <p className="txt3">DEVELOPER</p>
            <img src={IconDoubleArrow} alt="image" className="icon-scrolldown"/>
            </div>


        </div>

    );

}

export default Main;