import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div>
        <section className='colorlib-about' data-section='about'>
          <div className='colorlib-narrow-content'>
            <div className='row'>
              <div className='col-md-12'>
                <div
                  className='row row-bottom-padded-sm animate-box'
                  data-animate-effect='fadeInLeft'
                >
                  <div className='col-md-12'>
                    <div className='about-desc'>
                      <span className='heading-meta'>About Us</span>
                      <h2 className='colorlib-heading'>Who Am I?</h2>
                      <p>
                        I am a Front End Developer from Bor, Serbia.I love
                        exploring new technologies and learning new things.
                      </p>
                      <p>
                        I have been working as a Developer since 2017 and as a
                        young Developer i got a lot of experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='colorlib-about'>
          <div className='colorlib-narrow-content'>
            <div className='row'>
              <div
                className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box'
                data-animate-effect='fadeInLeft'
              >
                <span className='heading-meta'>What I do?</span>
                <h2 className='colorlib-heading'>
                  Here are some of my EXPERTISE
                </h2>
              </div>
            </div>
            <div className='levels'>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='stars'>
                    <i className='icon-star3'></i>
                    <i className='icon-star3'></i>
                    <i className='icon-star3'></i>
                    <i className='icon-star3'></i>
                    <i className='icon-star3'></i>
                  </div>
                </div>
                <div className='col-lg-6'>Expert Level</div>

                <div className='col-lg-6'>
                  <div className='stars'>
                    <i className='icon-star3'></i>
                    <i className='icon-star3'></i>
                    <i className='icon-star3'></i>
                    <i className='icon-star3'></i>
                    <i className='icon-star'></i>
                  </div>
                </div>
                <div className='col-lg-6'>Excellent Level</div>

                <div className='col-lg-6'>
                  <div className='stars'>
                    <i className='icon-star3'></i>
                    <i className='icon-star3'></i>
                    <i className='icon-star3'></i>
                    <i className='icon-star'></i>
                    <i className='icon-star'></i>
                  </div>
                </div>
                <div className='col-lg-6'>Proficient Level</div>

                <div className='col-lg-6'>
                  <div className='stars'>
                    <i className='icon-star3'></i>
                    <i className='icon-star3'></i>
                    <i className='icon-star'></i>
                    <i className='icon-star'></i>
                    <i className='icon-star'></i>
                  </div>
                </div>
                <div className='col-lg-6'>Familiar Level</div>

                <div className='col-lg-6'>
                  <div className='stars'>
                    <i className='icon-star3'></i>
                    <i className='icon-star'></i>
                    <i className='icon-star'></i>
                    <i className='icon-star'></i>
                    <i className='icon-star'></i>
                  </div>
                </div>
                <div className='col-lg-6'>Beginner Level</div>
              </div>
            </div>
            <div className='row row-pt-md'>
              <div className='col-md-4 text-center animate-box'>
                <div className='services color-1'>
                  <span className='icon'>
                    <img
                      className='img-icon'
                      src='images/angular.png'
                      alt='Angular'
                    />
                  </span>
                  <div className='desc'>
                    <h3>Angular</h3>
                    <div className='stars'>
                      <i className='icon-star3'></i>
                      <i className='icon-star3'></i>
                      <i className='icon-star3'></i>
                      <i className='icon-star3'></i>
                      <i className='icon-star'></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 text-center animate-box'>
                <div className='services color-10'>
                  <span className='icon'>
                    <img
                      className='img-icon'
                      src='images/ionic.png'
                      alt='Angular'
                    />
                  </span>
                  <div className='desc'>
                    <h3>Ionic</h3>
                    <div className='stars'>
                      <i className='icon-star3'></i>
                      <i className='icon-star3'></i>
                      <i className='icon-star3'></i>
                      <i className='icon-star3'></i>
                      <i className='icon-star'></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 text-center animate-box'>
                <div className='services color-11'>
                  <span className='icon'>
                    <img
                      className='img-icon'
                      src='images/ngrx.png'
                      alt='Angular'
                    />
                  </span>
                  <div className='desc'>
                    <h3>NgRx</h3>
                    <div className='stars'>
                      <i className='icon-star3'></i>
                      <i className='icon-star3'></i>
                      <i className='icon-star3'></i>
                      <i className='icon-star'></i>
                      <i className='icon-star'></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 text-center animate-box'>
                <div className='services color-3'>
                  <span className='icon'>
                    <img
                      className='img-icon'
                      src='images/express.png'
                      alt='ExpressJS'
                    />
                  </span>
                  <div className='desc'>
                    <h3>ExpressJS</h3>
                    <div className='stars'>
                      <i className='icon-star3'></i>
                      <i className='icon-star3'></i>
                      <i className='icon-star3'></i>
                      <i className='icon-star'></i>
                      <i className='icon-star'></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 text-center animate-box'>
                <div className='services color-2'>
                  <span className='icon'>
                    <img
                      className='img-icon'
                      src='images/react.png'
                      alt='React'
                    />
                  </span>
                  <div className='desc'>
                    <h3>React</h3>
                    <div className='stars'>
                      <i className='icon-star3'></i>
                      <i className='icon-star3'></i>
                      <i className='icon-star3'></i>
                      <i className='icon-star'></i>
                      <i className='icon-star'></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-md-4 text-center animate-box'>
                <div className='services color-5'>
                  <span className='icon'>
                    <img
                      className='img-icon'
                      src='images/node.png'
                      alt='NodeJS'
                    />
                  </span>
                  <div className='desc'>
                    <h3>NodeJS</h3>
                    <div className='stars'>
                      <i className='icon-star3'></i>
                      <i className='icon-star3'></i>
                      <i className='icon-star'></i>
                      <i className='icon-star'></i>
                      <i className='icon-star'></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-md-4 text-center animate-box'>
                <div className='services color-4'>
                  <span className='icon'>
                    <img
                      className='img-icon'
                      src='images/mongodb.png'
                      alt='MongoDB'
                    />
                  </span>
                  <div className='desc'>
                    <h3>MongoDB</h3>
                    <div className='stars'>
                      <i className='icon-star3'></i>
                      <i className='icon-star3'></i>
                      <i className='icon-star'></i>
                      <i className='icon-star'></i>
                      <i className='icon-star'></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-md-4 text-center animate-box'>
                <div className='services color-6'>
                  <span className='icon'>
                    <img
                      className='img-icon'
                      src='images/firebase.png'
                      alt='firebase'
                    />
                  </span>
                  <div className='desc'>
                    <h3>Firebase</h3>
                    <div className='stars'>
                      <i className='icon-star3'></i>
                      <i className='icon-star3'></i>
                      <i className='icon-star'></i>
                      <i className='icon-star'></i>
                      <i className='icon-star'></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
