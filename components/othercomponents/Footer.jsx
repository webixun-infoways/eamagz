import React, { Component } from 'react';
import moment from 'moment';
import Link from 'next/link';

export class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
    };
  }

  componentDidMount() {
    this.fetch_category();
  }

  fetch_category = () => {
    fetch(global.api_link + 'category', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (!json.status) {
        } else {
          this.setState({ category: json.data });
        }
        return json;
      })
      .catch((error) => console.error(error))
      .finally(() => {});
  };

  render() {
    return (
      <div>
        {/* Start Footer Area  */}
        <div className="axil-footer-area axil-footer-style-1 footer-variation-2">
          <div className="footer-mainmenu">
            <div className="container">
              <div className="row" style={{ width: '100%' }}>
                {this.state.category.length > 0 ? (
                  this.state.category.slice(0, 6).map((item, index) => {
                    return (
                      <div className="col-md-defined">
                        <div className="footer-widget">
                          <h2 className="title"> {item.name} </h2>
                          <div className="inner">
                            {
                              item.children.length > 0 ? (
                                <ul className="ft-menu-list">
                                  {item.children.map((sub_item, sub_index) => {
                                    return (
                                      <li>
                                        <Link
                                          href={'/category/' + sub_item.path}
                                        >
                                          {sub_item.name}
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              ) : null
                              //  <li><a href="#">U.N.</a></li>
                            }
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <li className="menu-item-has-children">
                    <Link href="/">Loading...</Link>
                  </li>
                )}
              </div>
            </div>
          </div>
          {/* Start Footer Top Area  */}
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-4">
                  <div className="logo">
                    <Link href="/">
                      <img
                        src="/images/logos/main_logo.png"
                        alt="Logo Images"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-8 col-md-8">
                  {/* Start Post List  */}
                  <div className="d-flex justify-content-start mt_sm--15 justify-content-md-end align-items-center flex-wrap">
                    <h5 className="follow-title mb--0 mr--20">Follow Us</h5>
                    <ul className="social-icon color-tertiary md-size justify-content-start">
                      <li>
                        <a
                          href="https://www.facebook.com/eamagz"
                          target="_blank"
                        >
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://instagram.com/eamagz?igshid=OGQ2MjdiOTE="
                          target="_blank"
                        >
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.twitter.com/eamagzofficial"
                          target="_blank"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/company/eamagz"
                          target="_blank"
                        >
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/@eamagz"
                          target="_blank"
                        >
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* End Post List  */}
                </div>
              </div>
            </div>
          </div>
          {/* End Footer Top Area  */}
          {/* Start Copyright Area  */}
          <div className="copyright-area">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-9 col-md-8">
                  <div className="copyright-left">
                    <ul className="mainmenu justify-content-start">
                      <li>
                        <div className="hover-flip-item-wrapper">
                          <span className="hover-flip-item">
                            <Link href="/contact">
                              {' '}
                              <span data-text="Contact Us">Contact Us</span>
                            </Link>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="hover-flip-item-wrapper">
                          <span className="hover-flip-item">
                            <Link href="/termsandcondtion">
                              <span data-text="Terms and Conditions">
                                Terms and Conditions
                              </span>
                            </Link>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="hover-flip-item-wrapper">
                          <span className="hover-flip-item">
                            <Link href="/privacy">
                              {' '}
                              <span data-text="Privacy Policy">
                                Privacy Policy
                              </span>
                            </Link>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="hover-flip-item-wrapper">
                          <span className="hover-flip-item">
                            <Link href="/influencerform">
                              {' '}
                              <span data-text="Influencer Form">
                                Influencer Form
                              </span>
                            </Link>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="hover-flip-item-wrapper">
                          <span className="hover-flip-item">
                            <Link href="/creatorvilla">
                              {' '}
                              <span data-text="Creators' Villa">
                                Creators' Villa
                              </span>
                            </Link>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="copyright-right text-start text-md-end mt_sm--20">
                    <p className="b3">
                      All Rights Reserved ©{' '}
                      <span>{moment().format('YYYY')}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Copyright Area  */}
        </div>
        {/* End Footer Area  */}
      </div>
    );
  }
}

export default Footer;
