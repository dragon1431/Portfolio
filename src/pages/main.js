import React from 'react';
import '../common.scss';
import { Link } from 'react-router-dom';
import IconDoubleArrow from '../img/icon_doublearrow.png';

function Main() {
    return (

        <div className="main-wrap">

            <div className="main-txt">
                <p className="txt1">I AM</p>
                <p className="txt2">FRONT-END</p>
                <p className="txt3">DEVELOPER</p>
                <p>
                    <img src={IconDoubleArrow} alt="image" className="icon-scrolldown"/>
                </p>
            </div>

            <div className="iam-wrap">

                <h2>I AM.</h2>
                <p>
                    <img src="" alt="photo" className="pic-myself"/>
                </p>
                <b>최영환 (Choi YoungHwan)</b>
                <b>1993.10.26</b>
                <p>저는 모르는 것을 질문하는 것이 두렵지 않은 사람입니다. 
                    오랜 시간 다양한 유형의 사랃믈을 만나오면서 누구에게나 자신만의 강점과 약점이 있음을 배웠습니다. 
                    앞으로도 소통과 교류를 통해 더 많은 지식을 쌓아나가고자 합니다.</p>
                <b>TRAINED</b>
                <div>box</div>
                <b>BASIC</b>
                <div>box</div>

            </div>

            <div className="imade-wrap">

                <h2>I MADE.</h2>

                <div className="project1">
                    <a href="#">
                        <img src="" alt=""/>
                        <h2>서울시청</h2>
                        <p>HTML5 + CSS(SASS) + JavaScript</p>
                        <p>기존의 메인 페이지에 모든 정보가 집중되어있는 올드한 구성을 벗어나

                            '서울시 홍보'에 중점을 두고 2030 세대에게 어필할 수 있는 디자인과 간결한 구성으로 개편하고자 했습니다.</p>
                        <p>Team Project (Team Hit)</p>
                    </a>
                </div>

{/* project 파트는 json 데이터 넣는 방식으로 */}

            </div>

            <div className="connect-wrap">
                <Link to="/contact">
                    <h2>CONNECT</h2>
                </Link>
            </div>

        </div>

    );

}

export default Main;