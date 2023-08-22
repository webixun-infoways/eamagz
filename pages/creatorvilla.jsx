import moment from 'moment';
import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import Link from 'next/link';
import Head from 'next/head';

export class Creatervilla extends Component {
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
            content="https://eamagz.com/creatorvilla"
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
                          </div>
                          {/* End Post Content  */}
                        </div>
                        {/* End Single Slide  */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  {/* Start Single Post  */}
                  <div className=" col-md-12 col-12 mt--30">
                    <div className="content-block content-direction-column axil-control is-active post-horizontal thumb-border-rounded">
                      {/* Start Post Thumbnail  */}
                      <div className=" col-md-4">
                        <a>
                          <img
                            src="/images/second_img.jpg"
                            alt=""
                            className="creater-villa-images"
                            srcset=""
                          />
                        </a>
                      </div>
                      <div className="post-content col-md-8">
                        <div className="post-cat">
                          <div className="post-cat-list">
                            <a className="hover-flip-item-wrapper">
                              <span className="hover-flip-item">
                                <span data-text="Creatervilla 1">
                                  Creatervilla 1
                                </span>
                              </span>
                            </a>{' '}
                          </div>
                        </div>
                        <h4 className="title">
                          <Link href="/creatorvilla1">
                            {' '}
                            <p>
                              24 hours staycation packed with unlimited
                              laughter, games and fun with our amazing creators
                              in properties with amazing view and sound
                              environment
                              <br />
                            </p>
                            <span className="readmore">Read More..</span>{' '}
                          </Link>
                        </h4>
                        <div className="post-meta mt-4 align-items-start justify-content-start">
                          <div className="content">
                            <ul className="post-meta-list">
                              <li className="post-meta-date">
                                {' '}
                                {moment('20230225').format('dddd, LL')}
                              </li>
                              {/* <Link href="/creatorvilla1">
                              <li className="post-meta-reading-time readmore">
                                Read More..
                              </li>
                            </Link> */}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* End Post Thumbnail  */}
                    </div>
                  </div>

                  {/* End Single Post  */}
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

export default Creatervilla;
