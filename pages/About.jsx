import Head from 'next/head';
import React, { Component } from 'react';

export class About extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Exclusive Affairs | About</title>
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
            content="https://eamagz.com/about"
            data-react-helmet="true"
          />
          <meta property="og:type" content="article" />
        </Head>
        {/* Start Banner Area  */}
        <div className="axil-banner banner-style-1 bg_image bg_image--1">
          <div className="container">
            <div className="row">
              <img
                className="shape shape-1"
                src="/images/bg/aboutus.jpg"
                alt="Shape Images"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center center',
                }}
              />
              <div className="col-lg-12">
                <div className="inner">
                  <h1 className="title">About Us</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Banner Area  */}
        {/* Start Post List Wrapper  */}
        <div className="axil-post-list-area axil-section-gap bg-color-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h5 className="title mb-4 pb-4">
                  'Exclusive Affairs' is a creative and media unit of
                  'EduFlux360 Multi Ventures Private Limited' based in Dehradun,
                  Uttarakhand. It's managed by Ms.Neha Sharma, CBO of Exclusive
                  Affairs.
                </h5>
              </div>
              <div className="col-lg-12 col-xl-12">
                {/* Start About Area  */}
                <div className="axil-about-us">
                  <div className="row">
                    <div className="col-md-6 inner aboutustext">
                      <h3>The Professional Publishing Platform</h3>
                      <p>
                        Welcome to Exclusive Affairs, the premier magazine for
                        trendsetters, youth and the nation. We are dedicated to
                        bringing you the latest in news, trends, culture,
                        entertainment and more. Whether you’re a fashionista, a
                        tech enthusiast or a political enthusiast, Exclusive
                        Affairs has something for you. Our content spans the
                        gamut of lifestyle, entertainment, and news. From the
                        latest celebrity news to trends in music, fashion, and
                        technology, we’ve got it covered. We feature in-depth
                        interviews with inspiring individuals making a positive
                        impact in the world today. And what’s more, we offer a
                        unique perspective that’s unlike anyone else.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <img
                        src="/images/aboutusimages/Professionalpublishing.png"
                        alt="About Us"
                      />
                    </div>
                    <div className="col-md-6">
                      <img
                        src="/images/aboutusimages/TrendsetterStories.png"
                        alt="About Us"
                      />
                    </div>
                    <div className="col-md-6 inner aboutustext">
                      <h3>Trendsetter Stories</h3>
                      <p>
                        At Exclusive Affairs, we believe that everyone has a
                        story to tell. We provide our readers with a platform to
                        hear those stories and be inspired by the greatness
                        within our trendsetters. Each issue of our magazine
                        brings you stories from various trendsetters who are
                        making a positive impact on the youth and the nation. We
                        seek to discover their personal stories, their
                        challenges, and successes, and to celebrate their
                        passion and drive. We believe it’s important to
                        recognise the unsung heroes of our society who are
                        helping to spark a brighter future.
                      </p>
                    </div>
                    <div className="col-md-6 inner aboutustext">
                      <h3>Fashion Features</h3>
                      <p>
                        Keeping up with the latest fashion trends is a must,
                        especially if you want to make a statement. With
                        Exclusive Affairs, we bring you runway trends from all
                        over the world. Through fashion features, we’ll provide
                        you with must-know information about the hottest
                        designer looks and must-have accessories for the season.
                        Whether you’re in the mood for something classic or
                        something a bit more edgy, we’ve got you covered. You’ll
                        be the most fashionable trendsetter wherever you go!
                      </p>
                    </div>
                    <div className="col-md-6">
                      <img
                        src="/images/aboutusimages/FashionFeatures.png"
                        alt="About Us"
                      />
                    </div>
                    <div className="col-md-6">
                      <img
                        src="/images/aboutusimages/TechReviews.png"
                        alt="About Us"
                      />
                    </div>
                    <div className="col-md-6 inner aboutustext">
                      <h3>Tech Reviews</h3>
                      <p>
                        The tech world is constantly evolving and as
                        trendsetters, we need to evolve with it. That’s why we
                        bring you the latest in electronics, gaming, and more.
                        We review the newest and best in technology, offering
                        our readers an insight into the industry and the future
                        of tech. Whether you’re a tech enthusiast, a gamer, or
                        just looking to stay up to date, you’ll find the latest
                        reviews right here.
                      </p>
                    </div>
                    <div className="col-md-6 inner aboutustext">
                      <h3>Politics and Current Affairs</h3>
                      <p>
                        Trendsetters of the nation need to stay informed of the
                        latest developments in politics and current affairs.
                        That’s why we bring you the scoop on new laws,
                        international events, and more. We’re here to give you
                        the behind-the-scenes look at the politics and
                        information you need to know. We hope to provide you
                        with the information to make educated decisions about
                        the future.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <img
                        src="/images/aboutusimages/PoliticsandCurrentAffairs.png"
                        alt="About Us"
                      />
                    </div>
                    <div className="col-md-6">
                      <img
                        src="/images/aboutusimages/CultureandEntertainment.png"
                        alt="About Us"
                      />
                    </div>
                    <div className="col-md-6 inner aboutustext">
                      <h3>Culture and Entertainment</h3>
                      <p>
                        At Exclusive Affairs, we believe that culture and
                        entertainment are an important part of being a
                        trendsetter. We bring you news and reviews on the
                        hottest cultural events, films, television, books and
                        more. You’ll always be ahead of the trend when it comes
                        to the latest news and entertainment. We strive to bring
                        you unique and inspiring stories from around the world,
                        so you don’t miss a beat.
                      </p>
                    </div>
                    <div className="col-md-6 inner aboutustext">
                      <h3>Exclusive Events</h3>
                      <p>
                        We host exclusive events to celebrate the trendsetters
                        in our community. From red carpet galas to one-of-a-kind
                        concerts, there’s something for everyone to enjoy. Our
                        events bring together the best in fashion, music, tech,
                        and more — all under one roof. You’ll be sure to get an
                        experience like no other as you rub shoulders with
                        royalty and celebrities
                      </p>
                    </div>
                    <div className="col-md-6">
                      <img
                        src="/images/aboutusimages/ExclusiveEvents.png"
                        alt="About Us"
                      />
                    </div>
                    <div className="col-md-6">
                      <img
                        src="/images/aboutusimages/supportcause.png"
                        alt="About Us"
                      />
                    </div>
                    <div className="col-md-6 inner aboutustext">
                      <h3>Support Our Cause</h3>
                      <p>
                        We’re committed to helping our trendsetters make a
                        positive impact on the world. That’s why we make our
                        content available free of charge, and to help support
                        our mission, we’ve launched a variety of merchandise for
                        sale. From apparel to mugs, our store will keep you
                        looking stylish and support our cause. We invite you to
                        be part of what we do and proudly wear the Exclusive
                        Affairs brand.
                      </p>
                    </div>
                    {/* <div className="col-md-6 inner aboutustext">
                      <h3>Subscribe</h3>
                      <p>
                        Subscribe now and get access to Exclusive Affairs
                        magazine available monthly. With our subscription,
                        you’ll get every issue of our magazine delivered
                        straight to your door. Plus, you’ll get special offers
                        and discounts to our store and events. Now that you know
                        about us, we invite you to start your journey and
                        explore the world of Exclusive Affairs. We have a
                        passion for inspiring greatness and cannot wait to share
                        it with you. Let us join forces and help create a
                        brighter tomorrow.
                      </p>
                    </div>
                    <div className="col-md-6">
                     
                    </div>
                    <div className="col-md-6">


                    </div>
                    <div className="col-md-6 inner aboutustext">
                      <h3>Our Mission And Vision</h3>
                      <p>
                        Our core mission is to celebrate the unique talents and
                        aspirations of trendsetters. We invite everyone to join
                        in on our mission and explore the newest and most
                        inspiring trends. So, take a look around and let us know
                        what interests you.
                      </p>
                    </div> */}
                  </div>
                  <div className="inner"></div>
                </div>
                {/* End About Area  */}
              </div>
            </div>
          </div>
        </div>
        {/* End Post List Wrapper  */}
      </>
    );
  }
}
export default About;
