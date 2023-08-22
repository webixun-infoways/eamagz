import Head from 'next/head';
import React, { Component } from 'react';

export class Privacy extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }
  render() {
    return (
      <>
        <Head>
          <title>Exclusive Affairs | Privacy Policy</title>
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
            content="https://eamagz.com/privacy"
            data-react-helmet="true"
          />
          <meta property="og:type" content="article" />
        </Head>
        <div className="axil-privacy-area axil-section-gap bg-color-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="content">
                  <div className="inner">
                    <div className="section-title">
                      <h4 className="title">Privacy policy </h4>
                    </div>
                    <p>
                      Exclusive Affairs magazine provides you the following
                      privacy policy to be kept in mind while surfing over the
                      website regarding your personal information collected and
                      cookies accepted
                    </p>
                    <h3>Information Collected</h3>
                    <p className="subtitle-2 mb--40">
                      The information collected by us can be your personal
                      details and also the articles you are interested in by
                      accepting the cookies.
                    </p>
                    <h3>Use of information collected</h3>
                    <p className="subtitle-2">
                      We will use your personal data to provide you the
                      promotional ads, website updates, newsletter and any such
                      data. We can also use your data for the valuable feedback
                      of yours for our website
                    </p>
                    <h3>Type of personal data collected</h3>
                    <p className="subtitle-2 mb--40">
                      In ultrices elit malesuada velit ornare, eget dictum velit
                      hendrerit. Praesent bibendum blandit lectus, eu congue
                      neque mollis in. Pellentesque metus diam, hendrerit in
                      purus fringilla, accumsan bibendum sapien. Nunc non
                      facilisis sem.{' '}
                    </p>
                    <h3>Sharing of information collected</h3>
                    <p className="subtitle-2 mb--40">
                      We can share your data with the people working on our
                      sites until the parties keep it confidential.
                    </p>
                    <h3>Children’s Privacy</h3>
                    <p className="subtitle-2">
                      We don’t allow children below age of 13 to share their
                      details. If they somehow manage to do so we immediately
                      remove the records at the time we are aware of it.
                    </p>
                    <h3>Individual’s Opinion</h3>
                    <p className="subtitle-2">
                      {' '}
                      This is a magazine based on an Individual’s opinion and
                      ideology . If one doesn’t find it suitable can kindly
                      leave the site . Forwarding the articles and spreading
                      hate towards it will be under offensive act and one can be
                      penalized or be reported to strict legal actions and/or
                      both
                    </p>
                    <h3>Contact Us</h3>
                    <p className="subtitle-2 mb--40">
                      If you find any drawback in the website or anything that
                      hurts your sentiment , kindly contact us on the details
                      attached
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Privacy;
