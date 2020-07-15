import React, { Component } from 'react';

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className='colorlib-experience' data-section='timeline'>
          <div className='colorlib-narrow-content'>
            <div className='row'>
              <div
                className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box'
                data-animate-effect='fadeInLeft'
              >
                <span className='heading-meta'>highlights</span>
                <h2 className='colorlib-heading animate-box'>Timeline</h2>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <div className='timeline-centered'>
                  <article
                    className='timeline-entry animate-box'
                    data-animate-effect='fadeInLeft'
                  >
                    <div className='timeline-entry-inner'>
                      <div className='timeline-icon color-2'>
                        <i className='icon-pen2' />
                      </div>
                      <div className='timeline-label'>
                        <h2>
                          Front End Developer at Arena Music{' '}
                          <span>October 2019 - July 2020</span>
                        </h2>
                        <p>
                          My job was to create and design multiple arena
                          projects. I have worked on Admin Panel, multiple
                          merchandising websites. Apart from that i also worked
                          on integrating API, and working closely with backend
                          developer.
                        </p>
                      </div>
                    </div>
                  </article>{' '}
                  <article
                    className='timeline-entry animate-box'
                    data-animate-effect='fadeInLeft'
                  >
                    <div className='timeline-entry-inner'>
                      <div className='timeline-icon color-3'>
                        <i className='icon-pen2' />
                      </div>
                      <div className='timeline-label'>
                        <h2>
                          Front End Developer at Evelt, Web Solutions{' '}
                          <span>January 2019 - February 2020</span>
                        </h2>
                        <p>
                          Since start of the 2019. i have been working as Front
                          End Developer, using Angular. In my time with Evelt
                          programers we worked and still working on some amazing
                          projects. My job is to use Angular to interact with
                          API's and add already finished templates.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className='timeline-entry animate-box'
                    data-animate-effect='fadeInTop'
                  >
                    <div className='timeline-entry-inner'>
                      <div className='timeline-icon color-4'>
                        <i className='icon-pen2' />
                      </div>
                      <div className='timeline-label'>
                        <h2>
                          Front End Developer at SimLead{' '}
                          <span>January 2018 - December 2018</span>
                        </h2>
                        <p>
                          I was part of a 3 man team(2 Front End Developers and
                          1 Back End, Blockchain Developer), we worked on two
                          projects, i used Angular for Front End, i also used
                          Express and MongoDB on our second project.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className='timeline-entry animate-box'
                    data-animate-effect='fadeInLeft'
                  >
                    <div className='timeline-entry-inner'>
                      <div className='timeline-icon color-5'>
                        <i className='icon-pen2' />
                      </div>
                      <div className='timeline-label'>
                        <h2>
                          Web Developer at OKC Bor{' '}
                          <span>June 2017 - December 2017</span>
                        </h2>
                        <p>
                          I was developer in company that created presentations
                          to help educate people in Serbia. My task was to
                          create Quiz that will detriment what type of studying
                          person you are, and also design it.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className='timeline-entry animate-box'
                    data-animate-effect='fadeInLeft'
                  >
                    <div className='timeline-entry-inner'>
                      <div className='timeline-icon color-1'>
                        <i className='icon-pen2' />
                      </div>
                      <div className='timeline-label'>
                        <h2>
                          Attended Basic Backend Course at OKC Bor{' '}
                          <span>February 2017 - March 2017</span>
                        </h2>
                        <p>
                          I attended 32 hours basic back end course, where
                          senior programers teach us about basics of JavaScript
                          programing and how to use it.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className='timeline-entry animate-box'
                    data-animate-effect='fadeInLeft'
                  >
                    <div className='timeline-entry-inner'>
                      <div className='timeline-icon color-1'>
                        <i className='icon-pen2' />
                      </div>
                      <div className='timeline-label'>
                        <h2>
                          Attended IT Academy <span>2016 - 2017</span>
                        </h2>
                        <p>
                          I attended and successfully completed one year courses
                          where i acquired the competence of a "Certified
                          Developer for Microsoft Technologies". This is where i
                          fell in love with programming and learned HTML, CSS,
                          OOP, and basics of JavaScript and C# languages.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className='timeline-entry begin animate-box'
                    data-animate-effect='fadeInBottom'
                  >
                    <div className='timeline-entry-inner'>
                      <div className='timeline-icon color-none'></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
