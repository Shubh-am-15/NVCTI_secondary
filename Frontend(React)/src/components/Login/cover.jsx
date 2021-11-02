import React from 'react';
import { Fade } from 'react-reveal';

const LoginCover = () => {
    return (
      <div className="bg-div" id="register">
        <div className="head m-5">
          <div className="head-div mx-auto main-div">
            <Fade top cascade>
              <div className="page-heading text-center">
                {/*<p className="font-italic side-line first-text"></p>*/}
                <h1 className="second-text">Welcome Back!</h1>
                <h3 className="side-line third-text">Login to your registered account &  <br/> get Started</h3>
              </div>
            </Fade>
          </div>
        </div>
        <Fade bottom>
          <span className="scroll-btn">
              <span className="mouse">
                <span></span>
              </span>
          </span>
        </Fade>
      </div>
    );
}

export default LoginCover;
