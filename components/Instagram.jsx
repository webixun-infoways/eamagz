import React, { Component } from 'react';
import Loadable from '@loadable/component';
const OwlCarousel = Loadable(() => import('react-owl-carousel'));

const options1 = {
  responsiveClass: true,
  autoplay: true,
  smartSpeed: 500,
  loop: true,
  margin: 20,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 1,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
};

export class Instagram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instagramData: [],
    };
  }

  componentDidMount() {
    this.fetch_instagram_pic();
  }

  fetch_instagram_pic() {
    fetch(global.api_link + 'fetch_instagram_pic', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        limit: 6,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.status) {
          this.setState({ instagramData: json.data });
        } else {
          this.setState({ instagramData: [] });
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {});
  }

  render() {
    return (
      <>
        {this.state.instagramData.length > 0 && (
          <div
            className="axil-instagram-area axil-section-gapBottom bg-color-grey"
            style={{
              marginTop: '40px',
              paddingTop: '40px',
              paddingBottom: '40px',
            }}
          >
            <div className="container">
              {/* End Social Area  */}
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title">
                    <h2 className="title">Instagram</h2>
                  </div>
                </div>
              </div>
              {this.state.instagramData.length > 6 ? (
                <OwlCarousel className="owl-theme mt-4" {...options1}>
                  <ul className="instagram-post-list">
                    {this.state.instagramData.map((item, index) => {
                      return (
                        <li className="single-post">
                          <a href={item.path} target="_blank">
                            <img
                              src={img_link + '/images/' + item.image}
                              alt="Post Images"
                            />
                            <span className="instagram-button">
                              <i className="fab fa-instagram" />
                            </span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </OwlCarousel>
              ) : (
                <div className="row mt--30">
                  <div className="col-lg-12">
                    <ul className="instagram-post-list">
                      {this.state.instagramData.map((item, index) => {
                        return (
                          <li className="single-post">
                            <a href={item.path} target="_blank">
                              <img
                                src={img_link + '/images/' + item.image}
                                alt="Post Images"
                              />
                              <span className="instagram-button">
                                <i className="fab fa-instagram" />
                              </span>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Instagram;
