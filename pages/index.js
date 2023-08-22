import React, { Component } from 'react';
import Homehero from '../components/Homehero';
import Inovationandtech from '../components/Inovationandtech';
import Featurevideo from '../components/Featurevideo';
import Mostpopular from '../components/Mostpopular';
import Techreview from '../components/Techreview';
import Instagram from '../components/Instagram';
import Magazine from '../components/Magazine';
import Loader from '../components/Loader';
import NewHomeSection from '../components/NewHomeSection';
import Head from 'next/head';
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetch_post();
  }

  fetch_post = () => {
    fetch(global.api_link + 'fetch_category_post', {
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
          this.setState({ post: json.data });
        }
        return json;
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    return (
      <>
        <Head>
          <title>Exclusive Affairs</title>
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
            content="https://eamagz.com"
            data-react-helmet="true"
          />
          <meta property="og:type" content="article" />
        </Head>
        {this.state.loading ? (
          <Loader />
        ) : (
          <>
            <Homehero />
            {this.state.post.length > 0 ? (
              this.state.post?.map((item, index) => {
                {
                  if (index == 0) {
                    return <Inovationandtech post={item} />;
                  } else if (index == 1) {
                    return <Featurevideo post={item} />;
                  } else if (index == 2) {
                    return <Mostpopular post={item} />;
                  } else if (index == 3) {
                    return <Inovationandtech post={item} />;
                  } else if (index == 4) {
                    return <NewHomeSection post={item} />;
                  } else if (index == 5) {
                    return <Mostpopular post={item} />;
                  } else if (index == 6) {
                    return <NewHomeSection post={item} />;
                  } else {
                    <Mostpopular post={item} />;
                  }
                }
              })
            ) : (
              <></>
            )}
            <Magazine />
            <Instagram />
          </>
        )}
      </>
    );
  }
}

export default Home;
