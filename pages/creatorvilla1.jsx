import moment from 'moment';
import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import Head from 'next/head';

export class Creatervilla1 extends Component {
  componentDidMount() {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }

  render() {
    return (
      <>
        <Head>
          <title>Exclusive Affairs | Creator Villa</title>
          <meta
            name="title"
            content="Exclusive Affairs"
            data-react-helmet="true"
          />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/images/logos/fav.png"
            data-react-helmet="true"
          />
          <meta
            name="description"
            content="Exclusive Affairs” Media and Magazines is a leading publication that specialises in helping clients with personal and corporate branding, marketing, hype & shoutouts, influencers collaboration, model & artists management, and social media strategy."
            data-react-helmet="true"
          />
          <meta
            property="og:title"
            content="Exclusive Affairs"
            data-react-helmet="true"
          />
          <meta
            property="og:description"
            content="Exclusive Affairs” Media and Magazines is a leading publication that specialises in helping clients with personal and corporate branding, marketing, hype & shoutouts, influencers collaboration, model & artists management, and social media strategy."
            data-react-helmet="true"
          />
          <meta
            property="og:image"
            content="https://eamagz.com/images/logos/fav.png"
            data-react-helmet="true"
          />
          <meta
            property="og:url"
            content="https://eamagz.com/creatorvilla1"
            data-react-helmet="true"
          />
          <meta property="og:type" content="article" />
        </Head>
        <div className="post-single-wrapper axil-section-gap bg-color-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                {/* Start Banner Area */}
                <div className="banner banner-single-post post-formate post-layout axil-section-gapBottom p-0">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        {/* Start Single Slide  */}
                        {/* Start Post Content  */}
                        <div className="post-content">
                          <div className="post-cat">
                            <h1 className="title">Creators' Villa</h1>
                            {/* Post Meta  */}
                            <div className="post-meta-wrapper">
                              <div className="post-meta">
                                <div className="content">
                                  <h6 className="post-author-name">
                                    <a className="hover-flip-item-wrapper">
                                      <span className="hover-flip-item">
                                        <span
                                          data-text="Location: RidgeWood Manor"
                                          style={{
                                            fontSize: '20px',
                                            marginBottom: '5px',
                                          }}
                                        >
                                          Location: RidgeWood Manor
                                        </span>
                                      </span>
                                    </a>
                                  </h6>
                                  <ul className="post-meta-list">
                                    <li>
                                      {moment('20230225').format('dddd, LL')}
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* End Post Content  */}
                        </div>
                        {/* End Single Slide  */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Banner Area */}
                <div className="axil-post-details">
                  <figure className="wp-block-image">
                    <img src="/images/main_image.jpg" alt="Post Images" />
                  </figure>
                  <p>
                    <span
                      style={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                      }}
                    >
                      Creators Villa,
                    </span>{' '}
                    24 hours staycation packed with unlimited laughter, games
                    and fun with our amazing creators in properties with amazing
                    view and sound environment. Our experience is tailored
                    according the needs of the Creators. Creators like you will
                    be given an opportunity to interact with other exceptionally
                    talented Creators leading to a wonderful tie up for
                    collaboration. This is surely going to help you with
                    engaging larger number of target audience and thus gaining
                    an organic reach.
                  </p>
                  <figure className="wp-block-image">
                    <img src="/images/second_img.jpg" alt="Post Images" />
                  </figure>
                  <p>
                    Creators Villa is sponsored by top quality brands which
                    gives you a value to be a part of such events and thus you
                    can grab more out of it. Staying in with other widely known
                    artists gives you an insight of how to work, what techniques
                    to apply and where to look up to, which ultimately sets your
                    target a level up.
                  </p>
                  <div className="row">
                    <div className="col-md-7">
                      <h1>
                        <u>
                          <strong>Mission</strong>
                        </u>
                      </h1>
                      <p>
                        Our mission is to provide you a space that empower you
                        to outshine and enjoy the company of Creators. Not only
                        this, we also help you to connect with people who share
                        the same passion keeping it a like minded event to bring
                        out the best from the event. We also help you to get a
                        break from hectic schedule by providing a luxurious stay
                        with music, dance, games and lot more. This helps you to
                        have a sound mind to process more fruitful outcome. This
                        staycation helps by turning into a bridge between you
                        and the opportunities waiting at your doorstep, a s it
                        will act a s a mediator between the sponsors, Creators,
                        property owner and many more and be a link for
                        collaborations, branding and much more.
                      </p>
                    </div>
                    <div className="col-md-5">
                      <figure className="wp-block-image m-0">
                        <img src="/images/vision.jpg" alt="Post Images" />
                      </figure>
                    </div>
                  </div>
                  <h1>
                    <u>
                      <strong>Vision</strong>
                    </u>
                  </h1>
                  <p>
                    At Creators Villa we try to bring out the best of experience
                    at premier properties with your fellow Creators. This helps
                    you to get into a surrounding filled with positivity and
                    understanding where you'll get solutions to all that you
                    face, cause you aren't alone in it. This will foster your
                    artistic approach and will surely help to come out stronger
                    and more confident about your goals.
                  </p>
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink="https://www.instagram.com/reel/Cp1uq1BMKaA/?utm_source=ig_embed&utm_campaign=loading"
                    data-instgrm-version={14}
                    style={{
                      background: '#FFF',
                      border: 0,
                      borderRadius: 3,
                      boxShadow:
                        '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                      margin: 1,
                      maxWidth: 540,
                      minWidth: 326,
                      padding: 0,
                      width: 'calc(100% - 2px)',
                    }}
                  >
                    <div style={{ padding: 16 }}>
                      {' '}
                      <a
                        href="https://www.instagram.com/reel/Cp1uq1BMKaA/?utm_source=ig_embed&utm_campaign=loading"
                        style={{
                          background: '#FFFFFF',
                          lineHeight: 0,
                          padding: '0 0',
                          textAlign: 'center',
                          textDecoration: 'none',
                          width: '100%',
                        }}
                        target="_blank"
                      >
                        {' '}
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}
                        >
                          {' '}
                          <div
                            style={{
                              backgroundColor: '#F4F4F4',
                              borderRadius: '50%',
                              flexGrow: 0,
                              height: 40,
                              marginRight: 14,
                              width: 40,
                            }}
                          />{' '}
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              flexGrow: 1,
                              justifyContent: 'center',
                            }}
                          >
                            {' '}
                            <div
                              style={{
                                backgroundColor: '#F4F4F4',
                                borderRadius: 4,
                                flexGrow: 0,
                                height: 14,
                                marginBottom: 6,
                                width: 100,
                              }}
                            />{' '}
                            <div
                              style={{
                                backgroundColor: '#F4F4F4',
                                borderRadius: 4,
                                flexGrow: 0,
                                height: 14,
                                width: 60,
                              }}
                            />
                          </div>
                        </div>
                        <div style={{ padding: '19% 0' }} />{' '}
                        <div
                          style={{
                            display: 'block',
                            height: 50,
                            margin: '0 auto 12px',
                            width: 50,
                          }}
                        >
                          <svg
                            width="50px"
                            height="50px"
                            viewBox="0 0 60 60"
                            version="1.1"
                            xmlns="https://www.w3.org/2000/svg"
                            xmlnsXlink="https://www.w3.org/1999/xlink"
                          >
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <g
                                transform="translate(-511.000000, -20.000000)"
                                fill="#000000"
                              >
                                <g>
                                  <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631" />
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                        <div style={{ paddingTop: 8 }}>
                          {' '}
                          <div
                            style={{
                              color: '#3897f0',
                              fontFamily: 'Arial,sans-serif',
                              fontSize: 14,
                              fontStyle: 'normal',
                              fontWeight: 550,
                              lineHeight: 18,
                            }}
                          >
                            View this post on Instagram
                          </div>
                        </div>
                        <div style={{ padding: '12.5% 0' }} />{' '}
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginBottom: 14,
                            alignItems: 'center',
                          }}
                        >
                          <div>
                            {' '}
                            <div
                              style={{
                                backgroundColor: '#F4F4F4',
                                borderRadius: '50%',
                                height: '12.5px',
                                width: '12.5px',
                                transform: 'translateX(0px) translateY(7px)',
                              }}
                            />{' '}
                            <div
                              style={{
                                backgroundColor: '#F4F4F4',
                                height: '12.5px',
                                transform:
                                  'rotate(-45deg) translateX(3px) translateY(1px)',
                                width: '12.5px',
                                flexGrow: 0,
                                marginRight: 14,
                                marginLeft: 2,
                              }}
                            />{' '}
                            <div
                              style={{
                                backgroundColor: '#F4F4F4',
                                borderRadius: '50%',
                                height: '12.5px',
                                width: '12.5px',
                                transform: 'translateX(9px) translateY(-18px)',
                              }}
                            />
                          </div>
                          <div style={{ marginLeft: 8 }}>
                            {' '}
                            <div
                              style={{
                                backgroundColor: '#F4F4F4',
                                borderRadius: '50%',
                                flexGrow: 0,
                                height: 20,
                                width: 20,
                              }}
                            />{' '}
                            <div
                              style={{
                                width: 0,
                                height: 0,
                                borderTop: '2px solid transparent',
                                borderLeft: '6px solid #f4f4f4',
                                borderBottom: '2px solid transparent',
                                transform:
                                  'translateX(16px) translateY(-4px) rotate(30deg)',
                              }}
                            />
                          </div>
                          <div style={{ marginLeft: 'auto' }}>
                            {' '}
                            <div
                              style={{
                                width: 0,
                                borderTop: '8px solid #F4F4F4',
                                borderRight: '8px solid transparent',
                                transform: 'translateY(16px)',
                              }}
                            />{' '}
                            <div
                              style={{
                                backgroundColor: '#F4F4F4',
                                flexGrow: 0,
                                height: 12,
                                width: 16,
                                transform: 'translateY(-4px)',
                              }}
                            />{' '}
                            <div
                              style={{
                                width: 0,
                                height: 0,
                                borderTop: '8px solid #F4F4F4',
                                borderLeft: '8px solid transparent',
                                transform: 'translateY(-4px) translateX(8px)',
                              }}
                            />
                          </div>
                        </div>{' '}
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            flexGrow: 1,
                            justifyContent: 'center',
                            marginBottom: 24,
                          }}
                        >
                          {' '}
                          <div
                            style={{
                              backgroundColor: '#F4F4F4',
                              borderRadius: 4,
                              flexGrow: 0,
                              height: 14,
                              marginBottom: 6,
                              width: 224,
                            }}
                          />{' '}
                          <div
                            style={{
                              backgroundColor: '#F4F4F4',
                              borderRadius: 4,
                              flexGrow: 0,
                              height: 14,
                              width: 144,
                            }}
                          />
                        </div>
                      </a>
                      <p
                        style={{
                          color: '#c9c8cd',
                          fontFamily: 'Arial,sans-serif',
                          fontSize: 14,
                          lineHeight: 17,
                          marginBottom: 0,
                          marginTop: 8,
                          overflow: 'hidden',
                          padding: '8px 0 7px',
                          textAlign: 'center',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <a
                          href="https://www.instagram.com/reel/Cp1uq1BMKaA/?utm_source=ig_embed&utm_campaign=loading"
                          style={{
                            color: '#c9c8cd',
                            fontFamily: 'Arial,sans-serif',
                            fontSize: 14,
                            fontStyle: 'normal',
                            fontWeight: 'normal',
                            lineHeight: 17,
                            textDecoration: 'none',
                          }}
                          target="_blank"
                        >
                          A post shared by eamagz - 'Top Features &amp; Brand
                          Collabs' (@eamagz_featured)
                        </a>
                      </p>
                    </div>
                  </blockquote>
                </div>
              </div>
              <div className="col-lg-4">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Creatervilla1;
