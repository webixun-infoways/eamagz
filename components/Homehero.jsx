import Link from 'next/link';
import React, { Component } from 'react';

export class Homehero extends Component {
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
    fetch(global.api_link + 'fetch_latest_update', {
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
        <div className="slider-area bg-color-grey ptb--30">
          <div className="axil-slide slider-style-2 plr--135 plr_lg--30 plr_md--30 plr_sm--30">
            <div className="row pb-10">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2 className="title m-4">Our Latest Updates</h2>
                </div>
              </div>
            </div>
            <div className="row row--10">
              <div className="col-lg-12 col-xl-6 col-md-12 col-12">
                {/* Start Post Grid  */}
                <div className="content-block post-grid post-grid-transparent post-overlay-bottom">
                  <div className="post-thumbnail">
                    {this.state.category.length > 0 && (
                      <Link href={'/blog/' + this.state.category[0].path}>
                        {this.state.category.length > 0 && (
                          <img
                            src={
                              global.img_link +
                              'images/' +
                              this.state.category[0].upload_image
                            }
                            alt="Post Images"
                            className="hero_main_image"
                          />
                        )}
                      </Link>
                    )}
                  </div>
                  <div className="post-grid-content">
                    <div className="post-content">
                      {this.state.category.length > 0 && (
                        <div className="post-cat">
                          <div className="post-cat-list">
                            <Link
                              href={`${
                                /category/ +
                                this.state.category[0].category.path
                              }`}
                              className="hover-flip-item-wrapper"
                            >
                              <span className="hover-flip-item">
                                <span
                                  data-text={
                                    this.state.category[0].category.name
                                  }
                                >
                                  {this.state.category[0].category.name}
                                </span>
                              </span>
                            </Link>
                          </div>
                        </div>
                      )}
                      <h3 className="title cut_text">
                        {this.state.category.length > 0 ? (
                          <Link href={'/blog/' + this.state.category[0].path}>
                            {this.state.category[0].page_title}
                          </Link>
                        ) : null}
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Start Post Grid  */}
              </div>
              <div className="col-lg-12 col-xl-6 col-md-12 col-12 mt_lg--20 mt_md--20 mt_sm--20">
                <div className="row row--10">
                  {this.state.category.length > 0
                    ? this.state.category.map((item, index) => {
                        if (index > 0)
                          return (
                            <div className="col-lg-6 col-md-6 col-sm-6 mt--4 mt_mobile--20 col-12">
                              {/* Start Post Grid  */}
                              <div className="content-block post-grid post-grid-transparent post-grid-small post-overlay-bottom">
                                <div className="post-thumbnail">
                                  <Link href={'/blog/' + item.path}>
                                    <img
                                      src={
                                        global.img_link +
                                        'images/' +
                                        item.upload_image
                                      }
                                      alt="Post Images"
                                    />
                                  </Link>
                                </div>
                                <div className="post-grid-content">
                                  <div className="post-content">
                                    <div className="post-cat">
                                      <div className="post-cat-list">
                                        <Link
                                          href={`${
                                            /category/ + item.category.path
                                          }`}
                                          className="hover-flip-item-wrapper"
                                        >
                                          <span className="hover-flip-item">
                                            <span
                                              data-text={item.category.name}
                                            >
                                              {item.category.name}
                                            </span>
                                          </span>
                                        </Link>
                                      </div>
                                    </div>
                                    <h5 className="title cut_text">
                                      <Link href={'/blog/' + item.path}>
                                        {item.page_title}
                                      </Link>
                                    </h5>
                                  </div>
                                </div>
                              </div>
                              {/* Start Post Grid  */}
                            </div>
                          );
                      })
                    : ''}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homehero;
