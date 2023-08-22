import Link from 'next/link';
import React, { Component } from 'react';

export class Magazine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    this.fetch_category();
  }

  fetch_category = () => {
    fetch(global.api_link + 'fetch_magzine', {
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
          this.setState({ posts: json.data });
        }
        return json;
      })
      .catch((error) => console.error(error))
      .finally(() => {});
  };

  render() {
    return (
      <div>
        {/* Start Categories List  */}
        <div className="axil-categories-list axil-section-gap bg-color-grey">
          <div className="container">
            <div className="row align-items-center mb--30">
              <div className="col-lg-6 col-md-8 col-sm-8 col-12">
                <div className="section-title">
                  <h2 className="title">Trending Magazine</h2>
                </div>
              </div>
            </div>
            <div className="row" style={{ width: '100%' }}>
              {this.state.posts.map((item, index) => {
                return (
                  <div className="single-cat col-md-define-magazine">
                    <div className="inner">
                      <Link
                        href={{
                          pathname: '/singlemagazine/' + item.public_url,
                          state: { id: item.id },
                        }}
                      >
                        <div className="thumbnail">
                          <img
                            className="magazine-image"
                            src={global.img_link + 'images/' + item.cover_image}
                            alt="post categories images"
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Start Categories List  */}
      </div>
    );
  }
}

export default Magazine;
