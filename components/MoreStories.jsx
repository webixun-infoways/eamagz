import Link from 'next/link';
import React, { Component } from 'react';

export class MoreStories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popular_post: [],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
    this.fetch_post();
  }

  fetch_post = () => {
    fetch(global.api_link + 'fetch_popular_post', {
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
          this.setState({ popular_post: json.data });
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
      <div className="axil-more-stories-area axil-section-gap bg-color-grey">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2 className="title">More Stories</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {this.state.popular_post.map((item, index) => {
              if (index < 4) {
                return (
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="post-stories content-block mt--30">
                      <div className="post-thumbnail">
                        <Link href={'/blog/' + item.path}>
                          <img
                            src={
                              global.img_link + 'images/' + item.upload_image
                            }
                          />
                        </Link>
                      </div>
                      <div className="post-content">
                        <div className="post-cat">
                          <div className="post-cat-list">
                            <Link href={'/blog/' + item.path}>
                              {item.page_name}
                            </Link>
                          </div>
                        </div>
                        <h5 className="title">
                          <Link href={'/blog/' + item.path}>
                            {item.page_title}
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default MoreStories;
